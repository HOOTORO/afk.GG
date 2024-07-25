// import { error } from "node:console";
import { AfkArena, bres } from "./constants.js";

// TYPES //

type hours = 2 | 6 | 8 | 24;

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

export { BaseResQty, BaseResource, DustChest, Gsheet, RankReward };
