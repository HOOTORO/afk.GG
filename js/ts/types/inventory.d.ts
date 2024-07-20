import Relic from "./relic.js";
import { Core } from "./core.js";
import { Virtue } from "./virtue.js";
export declare const Tree: Virtue[];
export default class Inventory {
    core: Core;
    tree: Virtue[];
    bag: Relic[];
    constructor();
    Relics(): Relic[];
    Relics(tier: number): Relic[];
    Relic(id: number): Relic;
    price(rel: Relic): number;
    components(r: Relic): Relic[];
    componentsDia(r: Relic): HTMLElement;
    sell(r: Relic): number;
    upgradeCost(): number;
    syncGoals(): Relic[];
    droppedRelics(): Relic[];
    canBeSold(): Relic[];
    goalRequired(): Relic[];
    sellOut(): number;
    reservedValue(): number;
    html(): HTMLElement;
}
//# sourceMappingURL=inventory.d.ts.map