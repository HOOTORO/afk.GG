import { AbEx } from "../model/constants.js";
import { Expeditor } from "./expeditor.js";

export class Militia {
  baseStamRecovery: number;

  _viewers: number;
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
  StamRecoverRate(): number {
    return (
      this.baseStamRecovery +
      (this.baseStamRecovery * this.viewers * AbEx.viewerMultiplier) / 100
    );
  }
  StarStamRR(): number {
    return this.StamRecoverRate() / AbEx.starFasterRecoveryMod;
  }

}
