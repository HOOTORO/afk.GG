import { elTag, fetchData, log, newEl, safeSum } from "../components/helper.js";
import Relic from "./relic.js";
import { Core } from "./core.js";
import { DurasVirtue, Virtue } from "./virtue.js";
import { AbExSellModifier, RelicBase } from "../model/constants.js";

export const Tree: Virtue[] = await fetchData("json/duratree.json");
const relicData: Relic[] = await fetchData("json/relic.json");

export default class Inventory {
  core: Core;
  tree: Virtue[] = [];
  bag: Relic[] = [];

  constructor() {
    relicData.forEach((x) => {
      this.bag.push(new Relic(x.icon, x.name, x.id, x.cost, x.recipe));
    });
    Tree.forEach((x) => {
      this.tree.push(new Virtue(x.icon, x.name, x.id, x.class, x.acronym));
    });
    this.core = new Core(this.bag, this.tree);
  }

  public Relics(): Relic[];
  public Relics(tier: number): Relic[];
  public Relics(tier?: number): Relic[] {
    if (tier) {
      return this.bag.filter((r) => r.Tier() === tier);
    } else {
      return this.bag;
    }
  }
  public Relic(id: number) {
    return this.Relics().find((r) => r.id === id);
  }
  price(rel: Relic): number {
    if (rel.id > RelicBase) {
      return (
        rel.cost +
        rel.recipe.map((x) => this.price(this.Relic(x))).reduce((a, b) => a + b)
      );
    } else {
      return rel.cost;
    }
  }

  components(r: Relic): Relic[] {
    if (r.recipe.length > 1) {
      return [r].concat(
        r.recipe.map((x) => this.components(this.Relic(x))).flat()
      );
    } else {
      return [r];
    }
  }
  componentsDia(r: Relic): HTMLElement {
    if (r.recipe.length > 1) {
      const parent = r.html();
      parent.innerHTML += "|";
      [...new Set(r.recipe)]
        .map((x) => this.componentsDia(this.Relic(x)))
        .forEach((x) => parent.appendChild(x));
      return parent;
    } else {
      return r.html();
    }
  }

  sell(r: Relic) {
    return this.price(r) * AbExSellModifier;
  }
  upgradeCost() {
    return safeSum(this.core.wanted().map((x) => this.price(x)));
  }
  syncGoals() {
    const need = this.core.wanted().flatMap((x) => this.components(x));
    return this.droppedRelics().map((r) => {
      r.reserve = need.filter((f) => r.id === f.id).length;
      return r;
    });
  }

  droppedRelics() {
    return this.bag.filter((x) => x.amount > 0);
  }
  canBeSold() {
    return this.syncGoals().filter((x) => x.reserve < x.amount);
  }
  goalRequired() {
    return this.syncGoals().filter((x) => x.reserve > 0);
  }

  sellOut() {
    return safeSum(this.canBeSold().map((x) => this.sell(x)));
  }
  reservedValue() {
    return safeSum(
      this.syncGoals().map((x) => this.price(x) * Math.min(x.amount, x.reserve))
    );
  }

  html(): HTMLElement {
    const coreContainer = newEl(elTag.Div, { class: "blessed-core" });

    this.tree.forEach((v) => {
      const equipped = this.core.all(v.dura);
      const container = newEl("span", {
        class: `core-virtue ${v.name}`,
        style: `background-image: url(${v.icon});`,
      });
      const relicTree = newEl(
        "div",
        { class: `relic` },
        `<span class="core-virtue__label">equip</span>`
      );
      const goal = newEl(
        "div",
        { class: `goal` },
        `<span class="core-virtue__label">goal</span>`
      );
      equipped.forEach((t, i) => {
        relicTree.appendChild(t.html());

        goal.appendChild(t.HTMLGoal());
      });

      container.appendChild(relicTree);
      container.appendChild(goal);
      coreContainer.appendChild(container);
    });

    coreContainer.addEventListener("click", (e) => {
      if (e.target instanceof HTMLImageElement) {
        const imgClasses = e.target.parentElement.classList,
          goal = imgClasses.contains("goal"),
          virtue = <DurasVirtue>imgClasses.item(2),
          slot = parseInt(imgClasses.item(1).substring(4)),
          itemId = imgClasses.item(0).substring(5);

        const rel = this.core.next(virtue, slot, goal);
        if (goal) {
          e.target.parentElement.replaceWith(rel.HTMLGoal());
        } else {
          e.target.parentElement.replaceWith(rel.html());
        }
        rel.update();
        const r = this.core.getById(parseInt(itemId));
        const compo = this.components(r).map((x) => x.id);
        log(`Relic #${r.id} components: [${compo}] `);
      }
    });
    return coreContainer;
  }
}
