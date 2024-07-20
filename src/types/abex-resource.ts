import { updateTableData } from "../abex/relicEstimate.js";
import {
  buttonWrapInput,
  elTag,
  Input,
  newEl,
  storedValue,
} from "../components/helper.js";
import { Iconized } from "./iconized.js";

export const stam = "https://i.imgur.com/n5WOzSZ.png";
const ess = "https://i.imgur.com/Gw216PZ.png";
const clName = "abex resource";

export class IconizedInput extends Iconized {
  public init: () => string;
  public update: (x: number) => void;
  constructor(
    id: number,
    src: string,
    name: string,
    public value: number,
    public cssName: string
  ) {
    const fnu = (y: number) => {
      if (y >= 0) {
        this.value = y;
        storedValue(this.name, this.value);
        updateTableData();
      }
    };
    const fni = () => {
      return storedValue(this.name).toString();
    };

    super(id, src, name);

    this.init = fni;
    this.update = fnu;
  }

  html(): HTMLElement {
    const img = super.html(),
      container = newEl(elTag.Div, { class: this.cssName }),
      props = {
        type: Input.Number,
        class: this.cssName,
        name: this.name,
        value: this.init(),
      },
      input = buttonWrapInput(newEl(elTag.Input, props), this.update);
    container.appendChild(img);
    container.appendChild(input);
    return container;
  }
}
export class Stamina extends IconizedInput {
  constructor() {
    super(0, stam, "ex-food", 0, clName);
    this.value = parseInt(this.init());
  }
}

export class Essence extends IconizedInput {
  constructor() {
    super(0, ess, "essence", 0, clName);
    this.value = parseInt(this.init());
  }

  html(): HTMLElement {
    const r = super.html();
    r.querySelectorAll("button").forEach((x) => {
      x.remove();
    });
    return r;
  }
}
