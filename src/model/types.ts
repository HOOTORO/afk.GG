// import { error } from "node:console";
import { rewards } from "../components/dataloader.js";
import {
  generateAFKResObj,
  rangeSlide,
  savedObj,
  storedValue,
} from "../components/helper.js";
import { AbexHelper, relicLeveling, townTypes } from "./afk.js";
import {
  AbEx,
  AfkArena,
  ValueModes,
  allRes,
  bres,
  sheetId,
} from "./constants.js";

type prop = { n: string; v: string };

type hours = 2 | 6 | 8 | 24;

class DustChest {
  amount: number;
  hours: hours;
  constructor(qty: number, type: hours) {
    this.amount = qty;
    this.hours = type;
  }
  dust(): number {
    return this.amount * this.hours * AfkArena.dustInc();
  }
}

interface Gsheet {
  cols: Array<{ id: string; label: string; type: string }>;
  rows: Array<{ c: Array<{ v: string; f: string }> }>;
}
// Data types
interface RankReward {
  mode: string;
  rank: string;
  rewards: BaseResQty[];
}
class BaseResource {
  type: `${bres}`;
  label: string;
  img: string;
}
class BaseResQty extends BaseResource {
  amount: number;
}

class User {
  spreadSheetId: string;
  leaderboard: RankReward[];
  income: BaseResQty[];

  constructor(gSheetId: string = sheetId) {
    this.spreadSheetId = gSheetId;
    this.leaderboard = [];
    this.income = allRes.map((v) => generateAFKResObj(v));
  }
  set reward(val: RankReward) {
    if (!val) return;
    const existingResult = this.leaderboard.find((x) => x.mode === val?.mode);
    if (!existingResult) {
      this.leaderboard.push(val);
    } else {
      existingResult.rank = val.rank;
      existingResult.rewards = val?.rewards;
    }
  }

  loadLocal(): void {
    this.leaderboard = ValueModes.emuns().map((x) => {
      const val = localStorage.getItem(x.id);
      return {
        mode: x.table,
        rank: val,
        rewards: rewards.find((v) => v.mode === ValueModes.gMode(x.id))
          ?.rewards,
      } as RankReward;
    });
    if (this.leaderboard) {
      const rang = localStorage.getItem("rangeValue");
      if (!rang) {
        return;
      }
      $("input.range").attr("value", rang);
      rangeSlide(rang, this);
      this.calc();
    }
  }
  calc(): void {
    this.income = allRes.map((v) => generateAFKResObj(v));
    this.leaderboard.forEach((x) => {
      x?.rewards?.forEach((r) => {
        const ex = this.income.findIndex((k) => k.type === r.type);
        if (ex > -1) {
          this.income[ex].amount += r.amount;
        }
      });
    });
  }
}

class Militia {
  baseIncome: number;

  _viewers: number;
  constructor(plebs: number) {
    this.viewers = plebs;
    this.baseIncome = 4;
  }
  set viewers(n: number) {
    this._viewers = n;
  }
  get viewers(): number {
    return this._viewers;
  }
  actualIncome(): number {
    return (
      this.baseIncome +
      (this.baseIncome * this.viewers * AbEx.viewerMultiplier) / 100
    );
  }
  starIncome(): number {
    return this.actualIncome() / AbEx.starFasterRecoveryMod;
  }

  star(): Expeditor {
    return new Expeditor(this, true);
  }
  regular(): Expeditor {
    return new Expeditor(this, false);
  }
}

type RType = "might" | "fort" | "mage" | "support" | "celerity";
type Side = "R" | "L";
type VPosition = "Top" | "Mid" | "Bot";
type ExpeditorRelics = {
  equip: Record<string, number[]>;
  goal: Record<string, number[]>;
};
export type RelicInBag = [number, number];
class Expeditor {
  _essence = 0;
  _stamina = 0;
  _towns: { [tier: number]: number };
  // _bag: RelicInBag[];
  _bag: { [id: number]: number };
  _relic: ExpeditorRelics;
  guild: Militia;
  starStatus: boolean;

  constructor(militia: Militia, star: boolean, food = 0) {
    this.guild = militia;
    this.starStatus = star;
    this._towns = savedObj("towns", { 5: 0, 6: 0, 7: 0, 8: 0 });
    this._essence = savedObj("ess", 0);
    this._relic = savedObj("relic", {
      equip: {
        might: AbexHelper.defaultRelics("might"),
        fort: AbexHelper.defaultRelics("fort"),
        mage: AbexHelper.defaultRelics("mage"),
        support: AbexHelper.defaultRelics("support"),
        celerity: AbexHelper.defaultRelics("celerity"),
      },
      goal: {
        might: AbexHelper.defaultRelics("might"),
        fort: AbexHelper.defaultRelics("fort"),
        mage: AbexHelper.defaultRelics("mage"),
        support: AbexHelper.defaultRelics("support"),
        celerity: AbexHelper.defaultRelics("celerity"),
      },
    });
    this._bag = savedObj("bag", []);
  }
  set towns(town: { [tier: number]: number }) {
    this._towns[town[0]] = town[1];
    storedValue("towns", JSON.stringify(this.towns));
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
  set bag(x: [number, number]) {
    this._bag[x[0]] = x[1];
    storedValue("bag", JSON.stringify(this._bag));
  }
  // get bag() {
  //   return this._bag;
  // }
  set relic(r: ExpeditorRelics) {
    this._relic = r;
    storedValue("relic", JSON.stringify(this._relic));
  }
  get relic() {
    return this._relic;
  }

  lookBag(id: number) {
    return this._bag[id];
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
    return Object.entries(this.towns).map(
      (x) => townTypes[parseInt(x[0])].garrisoned * x[1]
    );
  }

  NextLevelRelic(branch: string, position: number, goal = false) {
    const type = goal ? "goal" : "equip",
      current = this._relic[type][branch][position],
      goalForCurrent = this._relic.goal[branch][position],
      lowestTier = goal
        ? AbexHelper.tier(this._relic.equip[branch][position])
        : 10,
      tier =
        AbexHelper.tier(current) < 50
          ? AbexHelper.tier(current) + 10
          : lowestTier;

    const nextId = relicLeveling[branch][tier][position];
    this._relic[type][branch][position] = nextId;
    if (nextId > goalForCurrent) {
      this._relic.goal[branch][position] = nextId;
    }
    storedValue("relic", JSON.stringify(this._relic));
    return this._relic[type][branch][position];
  }

  RepresentYourSelf() {
    const ess: number = this.EPH().reduce((a, b) => a + b);

    let reLeft: number[] = [];
    for (const [k, v] of Object.entries(this.relic.equip)) {
      for (let i = 0; i < v.length; i++) {
        const element = v[i];
        let goalRelic = this.relic.goal[k][i];
        while (element < goalRelic) {
          reLeft.push(goalRelic);
          goalRelic = AbexHelper.lowerTierRelic(k, goalRelic);
        }
      }
    }

    let totalEssRequired: number = this._essence * -1;
    if (reLeft && reLeft.length > 1) {
      totalEssRequired += reLeft
        .map((x) => AbexHelper.relicPrice(x))
        .reduce((a, b) => a + b);
    } else {
      totalEssRequired = 0;
    }
    console.log(reLeft);
    const timeleft = (totalEssRequired / ess).toFixed(2);
    if (!isEmpty(this._bag)) {
      const bago = this.proceedBag(reLeft);
      return [ess, totalEssRequired, timeleft, bago[0], bago[1], bago[2]];
    } else return [ess, totalEssRequired, timeleft, "", "", ""];
  }
  proceedBag(need: number[]) {
    if (isEmpty(this._bag)) {
      console.log("Bag is empty");
    }
    const bagRelics = safeReduceSum(Object.values(this._bag)),
      keys = Object.keys(this._bag)?.filter(
        (x, i) => this._bag[i] !== null && this._bag[i] > 0
      );
    console.log(bagRelics);
    console.log(keys);
    const relicsToSell = keys
      .filter((x) => !need.includes(parseInt(x)))
      ?.map((x) => AbexHelper.relicPrice(parseInt(x)) * 0.4);
    const have = keys.filter((x) => need.includes(parseInt(x)));
    return [keys.join("|"), have, safeReduceSum(relicsToSell)];
  }
}
export {
  BaseResQty,
  BaseResource,
  DustChest,
  Expeditor,
  Gsheet,
  Militia,
  RType,
  RankReward,
  Side,
  User,
  VPosition,
  prop,
};

function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}

function safeReduceSum(n: Array<any>) {
  if (!isEmpty(n)) {
    console.log("yes");
    return n.reduce((a, b) => a + b);
  }
}
