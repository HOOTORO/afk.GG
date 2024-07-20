import {
  elTag,
  fetchData,
  newEl,
  safeSum as safeSum,
} from "../components/helper.js";

import Inventory from "./inventory.js";
import { Militia } from "./militia.js";
import { AbEx, RelicBase } from "../model/constants.js";
import { Settlement } from "./settlement.js";
import { Essence, Stamina } from "./abex-resource.js";
import { Tier } from "./tier.js";

const townsData: Settlement[] = await fetchData("json/towns.json");

export class Expeditor {
  public essence = new Essence();
  public stamina = new Stamina();
  public captured: Settlement[] = [];
  public inventory = new Inventory();
  // INITIALIZATION, SETTERS/GETTERS
  constructor(public guild: Militia, public star: boolean) {
    townsData.forEach((x) => {
      const s = new Settlement(
        x.id,
        x.icon,
        x.name,
        x.essencePerHour,
        x.yield,
        x.dropTier,
        x.dropTime
      );
      this.captured.push(s);
    });
  }

  // METHODS

  EssenceIncome() {
    return safeSum(this.captured.map((x) => x.EPH()));
  }

  StamRecovery(): number {
    return this.star ? this.guild.StarStamRR() : this.guild.StamRecoverRate();
  }
  SilentStam(): number {
    return this.stamina.value + AbEx.hoursLeft() * this.StamRecovery();
  }
  ReadyToSet() {
    return this.inventory
      .goalRequired()
      .map((x) => {
        const required = () => {
          if (x.reserve > x.amount) {
            x.reserve = x.amount;
          }
          return x.reserve;
        };
        const c = x.html();
        c.className = "table-text";
        // TODO:
        // ? how it work now -> on hover in keep section, show recipe of hover relic.
        // * That's make no sense, it should be higher relics where hovered one uses
        // c.appendChild(
        //   newEl(
        //     elTag.Div,
        //     { class: "relic-tooltip" },
        //     this.inventory.componentsDia(x).outerHTML
        //   )
        // );
        c.appendChild(
          newEl(elTag.Span, { class: "relic-quantity" }, `x${required()}`)
        );
        return c.outerHTML;
      })
      .join(" ");
  }
  TotalCaptured() {
    return this.captured
      .map((x) => x.value)
      .reduce((a, b) => a + b)
      .toString();
  }
  DropTiers() {
    return [...new Set(this.captured.map((f) => f.dropTier))]
      .map((t) => new Tier(t).html().outerHTML)
      .join("<br>");
  }
  DropTime() {
    return this.captured
      .filter((f) => f.value > 0)
      .map((x) => x.htmlInfo().outerHTML)
      .join("<br>");
  }

  ToSell() {
    return this.inventory
      .canBeSold()
      .map((x) => {
        const c = x.html();
        c.className = "table-text";
        c.appendChild(newEl(elTag.Span, {}, `x${x.amount - x.reserve}`));
        return c.outerHTML;
      })
      .join(" ");
  }
  FullPrice() {
    return this.inventory.upgradeCost();
  }

  MissEssence() {
    return (
      this.FullPrice() -
      this.essence.value -
      this.inventory.sellOut() -
      this.inventory.reservedValue()
    );
  }
  futureValue() {
    let convertedDropEssValue = 1;
    this.captured.forEach((x) => {
      if (x.value > 0) {
        const avgPrice =
          this.inventory
            .Relics(x.dropTier)
            .map((v) => this.inventory.price(v))
            .reduce((a, b) => a + b) / RelicBase;
        const wantedQuantity = this.inventory.core
          .wanted()
          .filter((r) => r.Tier() === x.dropTier).length;
        convertedDropEssValue += x.ConvertedDropEssValue(
          avgPrice,
          wantedQuantity
        );
      }
    });
    return convertedDropEssValue;
  }
  public Timeleft() {
    return this.MissEssence() / (this.EssenceIncome() + this.futureValue());
  }
}
