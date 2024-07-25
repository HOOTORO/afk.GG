import Inventory from "./inventory.js";
import { Militia } from "./militia.js";
import { Settlement } from "./settlement.js";
import { Essence, Stamina, StarOfDawn } from "./abex-resource.js";
import { Virtue } from "./virtue.js";
export declare const TreeData: Virtue[];
export declare class Expeditor {
    guild: Militia;
    essence: Essence;
    stamina: Stamina;
    captured: Settlement[];
    inventory: Inventory;
    star: StarOfDawn;
    DuraTree: Virtue[];
    constructor(guild: Militia, star: boolean);
    BossAttack(): void;
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