import { rewards } from "../components/dataloader.js";
import { generateAFKResObj, rangeSlide } from "../components/helper.js";
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

class Expeditor {
  guild: Militia;
  starStatus: boolean;
  currentFood: number;
  constructor(militia: Militia, star: boolean, food = 0) {
    this.guild = militia;
    this.starStatus = star;
  }

  income(): number {
    return this.starStatus
      ? this.guild.starIncome()
      : this.guild.actualIncome();
  }
  totalFood(): number {
    return this.currentFood + AbEx.hoursLeft() * this.income();
  }
}
export {
  BaseResQty,
  BaseResource,
  DustChest,
  Expeditor,
  Gsheet,
  Militia,
  RankReward,
  User,
  prop,
};
