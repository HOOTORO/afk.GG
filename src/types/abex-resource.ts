import { updateTableData } from "../abex/relicEstimate.js";
import { buttonWrapInput, newEl, storedValue } from "../components/helper.js";
import { elTag, Input } from "../model/constants.js";
import { Iconized, IconizedInput } from "./iconized.js";

export const stam = "https://i.imgur.com/n5WOzSZ.png";
const ess = "https://i.imgur.com/Gw216PZ.png";
const bpEnter = "https://i.imgur.com/j6qEANW.png";
const bpEnterImg = "https://i.imgur.com/QxSfSFU.png";
// const clName = "";
const clName = "abex input resource";

export class Stamina extends IconizedInput {
  constructor() {
    super(0, stam, "ex-food");
    this.width = 42;
    this.height = 46;
    this.buttons = true;
    this.cssName = clName;
    this.value = parseInt(this.init());
  }
}

export class Essence extends IconizedInput {
  constructor() {
    super(0, ess, "essence");
    this.width = 32;
    this.height = 32;
    this.cssName = clName;
    this.value = parseInt(this.init());
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
