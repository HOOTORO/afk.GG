import { Iconized } from "./iconized.js";
import { DurasVirtue } from "./virtue.js";
export default class Relic extends Iconized {
    cost: number;
    recipe: number[];
    amount: number;
    reserve: number;
    constructor(icon: string, name: string, id: number, cost: number, recipe: number[]);
    Tier(): number;
    html(): HTMLElement;
    HTMLInput(): HTMLElement;
}
export declare class CoreRelic extends Relic {
    position: number;
    goal: Relic;
    virtue: DurasVirtue;
    constructor(icon: string, name: string, id: number, cost: number, rec: number[], pos: number, v: DurasVirtue, goal: Relic);
    GoalTier(): number;
    html(): HTMLElement;
    HTMLGoal(): HTMLElement;
    update(): void;
}
//# sourceMappingURL=relic.d.ts.map