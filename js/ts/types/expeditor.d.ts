import Inventory from "./inventory.js";
import { Militia } from "./militia.js";
import { Settlement } from "./settlement.js";
import { Essence, Stamina } from "./abex-resource.js";
export declare class Expeditor {
    guild: Militia;
    star: boolean;
    essence: Essence;
    stamina: Stamina;
    captured: Settlement[];
    inventory: Inventory;
    constructor(guild: Militia, star: boolean);
    EssenceIncome(): number;
    StamRecovery(): number;
    SilentStam(): number;
    ReadyToSet(): string;
    TotalCaptured(): string;
    DropTiers(): string;
    DropTime(): string;
    ToSell(): string;
    FullPrice(): number;
    MissEssence(): number;
    futureValue(): number;
    Timeleft(): number;
}
//# sourceMappingURL=expeditor.d.ts.map