import { generateAFKResObj, rangeSlide } from "./components/helper.js";
import { AfkArena, ValueModes, allRes, bres, sheetId } from "./constants.js";
import { rewards } from "./components/dataloader.js";

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

export { User, DustChest, BaseResource, BaseResQty, Gsheet, prop, RankReward };
