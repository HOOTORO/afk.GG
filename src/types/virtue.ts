import { storedValue } from "../components/helper.js";
import { Iconized, IconizedInput } from "./iconized.js";
export enum Virtues {
  MIGHT,
  FORTITUDE,
  CELERITY,
  SORCERY,
  SUSTENANCE,
}

export type DurasVirtue = keyof typeof Virtues;

export class Virtue extends IconizedInput {
  class: string;
  acronym: string;

  public dura: DurasVirtue;
  constructor(
    icon: string,
    name: string,
    id: number,
    cl: string,
    acronym: string
  ) {
    super(id, icon, name);
    this.buttons = true;
    this.cssName = `team-set-inputs-number`;
    this.acronym = acronym;
    this.dura = this.name as DurasVirtue;
    this.value = parseInt(storedValue(this.name).toString());
    this.width = 45; //66;
    this.height = 46; //67;
  }
}
