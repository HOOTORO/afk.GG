import { updateTableData } from "../abex/relicEstimate.js";
import { savedObj, storedValue } from "../components/helper.js";
import { Input } from "../model/constants.js";
import { BossManager } from "./boss.js";
import { IconizedInput } from "./iconized.js";

export const stam = "https://i.imgur.com/n5WOzSZ.png";
const ess = "https://i.imgur.com/Gw216PZ.png";
const bpEnter = "https://i.imgur.com/j6qEANW.png";
const bpEnterImg = "https://i.imgur.com/QxSfSFU.png";
// const clName = "";
const clName = "abex input resource";

export class Stamina extends IconizedInput {
  constructor() {
    super(0, stam, `team-food`);
    this.width = 42;
    this.height = 46;
    this.buttons = true;
    this.cssName = clName;
    this.value = parseInt(this.init());
  }

  setValue(n: number) {
    this.value = n;
    this.update(n);
    (
      document.querySelector(`input[name=${this.name}]`) as HTMLInputElement
    ).value = `${n}`;
  }

  BossAttacks(): number {
    return Math.floor(this.value / BossManager.foodCost);
  }
  RetryLimit(): number {
    return Math.floor((this.value % BossManager.foodCost) / BossManager.retry);
  }
}

export class Essence extends IconizedInput {
  lastUpdate: Date;
  hoursSinceLastUpdate: number;
  constructor() {
    super(0, ess, "essence");
    this.width = 32;
    this.height = 32;
    this.cssName = clName;
    this.value = parseInt(this.init());
    const updated: Date = savedObj(`${this.name}-timestamp`, new Date());
    if (updated) {
      const now = new Date();
      this.hoursSinceLastUpdate = (now.getTime() - updated.getTime()) / 3600000;
      this.lastUpdate = updated;
    }
    const fn = (y: number) => {
      if (y >= 0) {
        this.value = y;
        storedValue(this.name, this.value);
        storedValue(`${this.name}-timestamp`, new Date());
        updateTableData();
      }
    };
    this.update = fn;
  }
}

export class Spectators extends IconizedInput {
  constructor();
  constructor(n: number);
  constructor(n?: number) {
    super(0, bpEnter, "mil-specs");
    this.cssName = clName;
    this.buttons = true;
    this.value = 0;
    if (n) {
      this.value = n;
    }
  }
}

export class StarOfDawn extends IconizedInput {
  status: boolean;
  hasSpectator: boolean;
  constructor() {
    super(0, bpEnterImg, "mil-sod", Input.CheckBox);
    this.width = 40;
    this.height = 41;
    this.cssName = clName;

    this.update = (y: number) => {
      this.hasSpectator = !this.hasSpectator;
    };
  }
}
