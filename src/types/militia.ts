import { AbEx } from "../model/constants.js";
import { Spectators } from "./abex-resource.js";
import { Expeditor } from "./expeditor.js";

export class Militia {
  baseStamRecovery: number;

  start: Date = new Date();

  _viewers: number;

  specs: Spectators = new Spectators();

  constructor(plebs: number) {
    this.viewers = plebs;
    this.baseStamRecovery = 4;
  }
  set viewers(n: number) {
    this._viewers = n;
  }
  get viewers(): number {
    return this._viewers;
  }
  StamIncome(hasSpectator?: boolean): number {
    const inc =
      this.baseStamRecovery +
      (this.baseStamRecovery * this.viewers * AbEx.spectatorMod) / 100;
    if (hasSpectator) {
      return inc / AbEx.sodFastenMod;
    }
    return inc;
  }
}
