import { updateTableData } from "../abex/relicEstimate.js";
import { newEl, storedValue } from "../components/helper.js";
import { elTag, Input } from "../model/constants.js";
import { Iconized } from "./iconized.js";
import { DurasVirtue } from "./virtue.js";

export default class Relic extends Iconized {
  amount = 0;
  reserve = 0;

  constructor(
    icon: string,
    name: string,
    id: number,
    public cost: number,
    public recipe: number[]
  ) {
    super(id, icon, name);
    const fnu = (y: number) => {
      if (y >= 0) {
        this.amount = y;
        storedValue(this.name, this.amount);
      }
    };
    const fni = () => {
      return storedValue(`rel${this.id}`).toString();
    };
    this.amount = parseInt(fni());
  }

  public Tier() {
    return Math.floor((this.id - 1) / 18) + 1;
  }

  html(): HTMLElement {
    let img = super.html();
    const span = newEl(elTag.Span, { class: `item-${this.id}` });
    img.setAttribute("width", "52");
    img.setAttribute("height", "52");
    span.appendChild(img);
    return span;
  }

  HTMLInput(): HTMLElement {
    const stored = storedValue(`rel${this.id}`)
      ? parseInt(storedValue(`rel${this.id}`).toString())
      : 0;
    this.amount = stored;
    const img = super.html(),
      container = newEl(elTag.Span, { class: `inventory relic` }),
      props = {
        type: Input.Number,
        class: `user-bag-item-${this.id}`,
        name: this.name,
        min: "0",
        value: stored.toString(),
      },
      input = newEl(elTag.Input, props);
    img.setAttribute("width", "52");
    img.setAttribute("height", "52");

    input.addEventListener("change", (e) => {
      if (e.target instanceof HTMLInputElement) {
        this.amount = e.target.valueAsNumber;
        e.target.setAttribute("value", this.amount.toString());
        storedValue(`rel${this.id}`, this.amount);
        updateTableData();
      }
    });
    container.appendChild(img);
    container.appendChild(input);
    return container;
  }
}

export class CoreRelic extends Relic {
  position: number;
  goal: Relic;
  virtue: DurasVirtue;
  constructor(
    icon: string,
    name: string,
    id: number,
    cost: number,
    rec: number[],
    pos: number,
    v: DurasVirtue,
    goal: Relic
  ) {
    super(icon, name, id, cost, rec);
    this.position = pos;
    this.goal = goal;
    this.virtue = v;
  }
  public GoalTier() {
    return this.goal.Tier();
  }

  html(): HTMLElement {
    let r = super.html();
    let tg = "relic";
    r.classList.add(`idx-${this.position}`, this.virtue, tg);
    return r;
  }

  HTMLGoal(): HTMLElement {
    let r = this.goal.html();
    let tg = "goal";
    r.classList.add(`idx-${this.position}`, this.virtue, tg);
    return r;
  }

  update() {
    const relSpan = `.idx-${this.position}.${this.virtue}`;
    document.querySelectorAll(relSpan).forEach((v) => {
      if (v.classList.contains("goal")) {
        v.replaceWith(this.HTMLGoal());
      } else {
        v.replaceWith(this.html());
      }
    });
    storedValue(`${this.virtue}.${this.position}`, this);
    updateTableData();
  }
}
