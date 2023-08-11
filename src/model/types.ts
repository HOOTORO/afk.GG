// import { error } from "node:console";
import { rewards } from "../components/dataloader.js";
import { generateAFKResObj, rangeSlide } from "../components/helper.js";
import { Branch } from "./afk.js";
import {
  AbEx,
  AfkArena,
  ValueModes,
  allRes,
  bres,
  sheetId,
} from "./constants.js";
import { Expeditor } from "./expeditor.js";

// TYPES //
type prop = { n: string; v: string };

interface Relic {
  id: number;
  name: string;
  icon: string;
  cost: number;
  recipe: number[];
}
interface BagRelic extends Relic {
  qty: number;
}

interface CoreSlot {
  slotId: `${Branch}-${position}`;
  equipped: Relic;
  goal: Relic;
  level: relicLvl;
}

type relicLvl = 1 | 2 | 3 | 4 | 5;
type position = 0 | 1 | 2 | 3 | 4 | 5;
type hours = 2 | 6 | 8 | 24;

type SLOT_ID = `${Branch}-${position}`;
type resourceIncome = {
  baseEPH: number;
  garrisoned: number;
  dropTier: number;
  dropTime: number;
};

// INTERFACES //
interface Gsheet {
  cols: Array<{ id: string; label: string; type: string }>;
  rows: Array<{ c: Array<{ v: string; f: string }> }>;
}
interface RankReward {
  mode: string;
  rank: string;
  rewards: BaseResQty[];
}

// CLASSES //
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

export {
  BagRelic,
  BaseResQty,
  BaseResource,
  CoreSlot,
  DustChest,
  Gsheet,
  Militia,
  RankReward,
  Relic,
  SLOT_ID,
  User,
  prop,
  relicLvl,
  resourceIncome,
};
