import { Stamina } from "./abex-resource.js";
import { Hero } from "./hero.js";
import { Pet } from "./pet.js";
export declare const rawHeroesData: Hero[];
export declare const rawBeasts: Pet[];
export declare class Team {
    #private;
    team?: Hero[];
    beast?: Pet;
    target?: string;
    roster: Hero[];
    private _max;
    damage: [number, string?, boolean?][];
    food: Stamina;
    constructor(mountId: string);
    init(mid: string): void;
    update(): void;
    isInTeam(hero: Hero): boolean;
    add(h: Hero): boolean;
    remove(h: Hero): void;
    makeAttack(dmg: number, c?: string, d?: boolean): void;
    inputsContainer(id: string, data: Hero[] | Pet[]): HTMLElement;
    heroHandler(e: InputEvent): void;
    petHandler(e: InputEvent): void;
    appendResultRow(body: HTMLElement, dps: number, duraMight: number, duraFort: number, duraCelerity: number, duraSorcery: number, duraSustenance: number, c: string, d: boolean): void;
    mount(elId: string): void;
}
//# sourceMappingURL=team.d.ts.map