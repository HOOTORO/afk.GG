import { Input } from "../model/constants.js";
import { IconizedInput } from "./iconized.js";

export class Pet extends IconizedInput {
  constructor(id: number, icon: string, name: string) {
    super(id, icon, name, Input.CheckBox);
    this.height = 125;
    this.width = 93;
    this.cssName = "beast";
    this.namedId = `ch-${this.id}-${this.name}`;
    this.update = (x: InputEvent) => {
      let tg = x.target as HTMLInputElement;
      tg.checked = !tg.checked;
    };
  }

  html(): HTMLElement {
    const el = super.html();
    el.addEventListener("change", (e) => {
      this.update(e as InputEvent);
    });
    return el;
  }
}
