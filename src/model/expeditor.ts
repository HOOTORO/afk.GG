import {
  isDefault,
  isEmpty,
  safeReduceSum,
  savedObj,
  storedValue,
} from "../components/helper.js";
import { SellPriceMod as SellCoef } from "../gamevents/abexvars.js";
import {
  Branch,
  RelicManager,
  Renderer,
  Tier,
  defaults,
  stored,
  townTypes,
} from "./afk.js";
import { AbEx } from "./constants.js";
import {
  BagRelic,
  CoreSlot,
  Militia,
  Relic,
  SLOT_ID,
  relicLvl,
} from "./types.js";

type BagValue = { items: number; keep: Relic[]; sell: BagRelic[] };

class Expeditor {
  private _essence = 0;
  private _stamina = 0;
  private _towns: { [tier: number]: number };
  private _bag: BagRelic[];
  private _slots: CoreSlot[];
  guild: Militia;
  starStatus: boolean;
  // INITIALIZATION, SETTERS/GETTERS
  constructor(militia: Militia, star: boolean, food = 0) {
    this.guild = militia;
    this.starStatus = star;
    this._towns = savedObj(stored.TOWN, defaults.aeTowns());
    this._essence = savedObj(stored.ESS, 0);
    this._bag = savedObj(stored.BAG, defaults.emptyBag() as BagRelic[]);
    this._slots = savedObj(stored.SLOT, defaults.baseSlots() as CoreSlot[]);
  }
  set stamina(n: number) {
    this._stamina = n;
  }
  get stamina() {
    return this._stamina;
  }
  set towns(town: { [tier: number]: number }) {
    this._towns[town[0]] = town[1];
    storedValue("towns", this.towns);
  }

  get towns() {
    return this._towns;
  }

  set essence(n: number | string | boolean) {
    let num = Number(n);

    if (!Number.isFinite(num)) {
      this._essence = 0;
      return;
    }
    this._essence = num;
    storedValue("ess", n);
  }
  get essence() {
    return this._essence;
  }
  set bag(x: BagRelic) {
    const idx = this._bag.findIndex((r) => x.id === r.id);
    this._bag[idx] = x;
    storedValue("bag", this._bag);
  }
  get bag(): BagRelic[] {
    return this._bag;
  }
  set relic(slot: SLOT_ID) {
    Tier.nextLevel(this._slots.find((x) => x.slotId === slot));
    storedValue(stored.SLOT, this._slots);
  }
  get relic(): CoreSlot[] {
    return this._slots;
  }
  // METHODS
  nextGoal(slot: SLOT_ID) {
    const res = Tier.nextGoal(this._slots.find((x) => x.slotId === slot));
    storedValue(stored.SLOT, this._slots);
    return res;
  }

  equippedSlot(id: SLOT_ID) {
    return this._slots.find((x) => x.slotId === id);
  }
  equippedRelics(branch: Branch) {
    return this._slots.map((x) => x.equipped);
  }
  income(): number {
    return this.starStatus
      ? this.guild.starIncome()
      : this.guild.actualIncome();
  }
  totalFood(): number {
    return this._stamina + AbEx.hoursLeft() * this.income();
  }
  EPH() {
    return safeReduceSum(
      Object.entries(this.towns).map(
        (x) => townTypes[parseInt(x[0])].garrisoned * x[1]
      )
    );
  }

  RepresentYourSelf() {
    const essPerHour: number = this.EPH();
    const goals = this.goalRelics();
    let totalEssRequired: number = this._essence * -1;
    if (goals && goals.length > 0) {
      totalEssRequired += safeReduceSum(
        goals.map((x) => RelicManager.price(x))
      );
    }
    let timeleft = totalEssRequired / essPerHour;
    const bag = this.bagCheck(goals);
    // const actualLeft = isEmpty(KeepArr)
    //   ? goals
    //   : difference(
    //       goals.map((x) => x.id),
    //       KeepArr
    //     );
    totalEssRequired -= safeReduceSum(
      bag.sell.map((x) => RelicManager.price(x) * x.qty * SellCoef)
    );
    timeleft = totalEssRequired / (essPerHour + this.townsLootValue(goals));

    timeleft = timeleft <= 0 || Number.isNaN(timeleft) ? 0 : timeleft;
    totalEssRequired =
      totalEssRequired <= 0 || Number.isNaN(totalEssRequired)
        ? 0
        : totalEssRequired;

    return [
      essPerHour.toString(),
      totalEssRequired.toString(),
      timeleft.toFixed(2),
      bag.items.toString(),
      "✅ " +
        Renderer.imgArray(
          bag.keep.map((v) => v.icon),
          24
        ),
      "♻️ " +
        Renderer.imgArray(
          bag.sell.map((v) => v.icon),
          24
        ),
      this.goalImages(),
    ];
  }

  bagCheck(need: Relic[]) {
    if (isEmpty(this._bag)) {
      console.log("Bag is empty");
    }
    return {
      items: this.bag.filter((x) => x.qty > 0).length,
      keep: this.keepRelic(),
      sell: this.sellRelics(),
    } as BagValue;
  }
  private keepRelic() {
    return this.bag.filter(
      (x) =>
        x.qty > 0 &&
        this.goalRelics()
          .flatMap((y) => RelicManager.consistOf(y))
          .includes(RelicManager.getById(x.id))
    );
  }

  private sellRelics() {
    return this.bag.filter(
      (x) =>
        x.qty > 0 && this.keepRelic().findIndex((y) => y.id === x.id) === -1
    );
  }
  townsLootValue(missing: Relic[]) {
    if (isEmpty(this.towns) || isDefault(this.towns)) {
      return;
    }
    const TXHourIncome = Object.keys(this.towns).map((tier) => {
      const TX = parseInt(tier),
        amount = this.towns[TX],
        singleTXTimer = townTypes[TX].dropTime,
        dropType = townTypes[TX].dropTier,
        dropTime = singleTXTimer / amount / 3600,
        loot = Tier.relics(<relicLvl>dropType),
        required = loot.filter((x) => missing.includes(x)),
        ratio = required.length / loot.length,
        avgPrice =
          safeReduceSum(loot.map((m) => RelicManager.price(m))) / loot.length;

      return (
        (avgPrice / dropTime) * ratio +
        (1 - ratio) * (avgPrice / dropTime) * SellCoef
      );
    });
    return safeReduceSum(TXHourIncome);
  }

  private goalRelics() {
    return this._slots
      .filter((x) => x.equipped.id !== x.goal.id)
      .map((g) => g.goal);
  }

  goalImages() {
    return Renderer.imgArray(
      this.goalRelics()
        .map((v) => RelicManager.consistOf(v).map((x) => x.icon))
        .flat(),
      20
    );
  }
}

export { Expeditor };
