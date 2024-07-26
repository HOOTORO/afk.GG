// import { error } from "node:console";
import { AfkArena } from "./constants.js";

// TYPES //

type hours = 2 | 6 | 8 | 24;

// INTERFACES //
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

export { DustChest };
