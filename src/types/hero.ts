import { Input } from "../model/constants.js";
import { IconizedInput } from "./iconized.js";

export class Hero extends IconizedInput {
  constructor(
    id: number,
    icon: string,
    public heroType: string,
    public heroClass: string,
    public role: string,
    public faction: string,
    public slug: string
  ) {
    super(id, icon, slug, Input.CheckBox);
    this.width = 100;
    this.height = 100;
    this.cssName = `hero`;
    this.namedId = `ch-${this.id}-${this.name}`;
    this.update = (x: InputEvent) => {
      // log(x.target);
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
