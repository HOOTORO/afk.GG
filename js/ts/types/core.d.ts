import Relic, { CoreRelic } from "./relic.js";
import { DurasVirtue, Virtue } from "./virtue.js";
export declare class Core {
    #private;
    rels: Relic[];
    virtues: Virtue[];
    constructor(rels: Relic[], virtues: Virtue[]);
    getById(id: number): Relic;
    next(v: DurasVirtue, i: number, goal?: boolean): CoreRelic;
    CoreRelicById(id: number, i: number, v: DurasVirtue): CoreRelic;
    all(): CoreRelic[];
    all(virtue: DurasVirtue): CoreRelic[];
    wanted(): Relic[];
}
//# sourceMappingURL=core.d.ts.map