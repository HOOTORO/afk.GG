import { IconizedInput } from "./iconized.js";
export declare const stam = "https://i.imgur.com/n5WOzSZ.png";
export declare class Stamina extends IconizedInput {
    constructor();
    setValue(n: number): void;
    BossAttacks(): number;
    RetryLimit(): number;
}
export declare class Essence extends IconizedInput {
    lastUpdate: Date;
    hoursSinceLastUpdate: number;
    constructor();
}
export declare class Spectators extends IconizedInput {
    constructor();
    constructor(n: number);
}
export declare class StarOfDawn extends IconizedInput {
    status: boolean;
    hasSpectator: boolean;
    constructor();
}
//# sourceMappingURL=abex-resource.d.ts.map