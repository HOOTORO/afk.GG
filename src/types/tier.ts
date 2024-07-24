import { newEl } from "../components/helper.js";
import { elTag } from "../model/constants.js";

export enum tier {
  EMPTY = 0,
  COMMON,
  RARE,
  ELITE,
  LEGENDARY,
  MYTHIC,
}

export class Tier {
  constructor(public id: tier) {}

  color = () => {
    switch (this.id) {
      case tier.COMMON:
        return "white";
      case tier.RARE:
        return "blue";
      case tier.ELITE:
        return "magenta";
      case tier.LEGENDARY:
        return "darkorange";
      case tier.MYTHIC:
        return "red";
      default:
        break;
    }
  };
  html() {
    return newEl(
      elTag.Span,
      { style: `color: ${this.color()}` },
      tier[this.id]
    );
  }
}
