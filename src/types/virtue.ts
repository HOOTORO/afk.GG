import { Iconized } from "./iconized.js";

export enum Virtues {
  MIGHT,
  FORTITUDE,
  CELERITY,
  SORCERY,
  SUSTENANCE,
}

export type DurasVirtue = keyof typeof Virtues;

export class Virtue extends Iconized {
  class: string;
  acronym: string;
  value: number;

  public dura: DurasVirtue;
  constructor(
    icon: string,
    name: string,
    id: number,
    cl: string,
    acronym: string
  ) {
    super(id, icon, name);
    this.class = cl;
    this.acronym = acronym;
    this.dura = this.name as DurasVirtue;
  }
}
