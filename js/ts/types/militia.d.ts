import { Spectators } from "./abex-resource.js";
export declare class Militia {
    baseStamRecovery: number;
    start: Date;
    _viewers: number;
    specs: Spectators;
    constructor(plebs: number);
    set viewers(n: number);
    get viewers(): number;
    StamIncome(hasSpectator?: boolean): number;
}
//# sourceMappingURL=militia.d.ts.map