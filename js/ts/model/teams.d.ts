import { Virtue } from "../types/virtue.js";
interface AfkObject {
    name: string;
    icon?: string;
}
type Pet = {
    name: string;
    short?: string;
    lvl?: number;
    icon?: string;
};
type Hero = {
    name: string;
    short: string;
    asc?: Ascension;
    si?: Sig;
    fu?: Furn;
    eng?: Engrv;
    icon?: string;
};
type Ascension = "E" | "E+" | "L" | "L+" | "M" | "M+" | "A" | "A*" | "A**" | "A***" | "A****" | "A*****";
type Furn = "0F" | "3F" | "9F";
type Sig = "+20" | "+30";
type Engrv = "E30" | "E60" | "E80";
export declare class Team {
    heroes: [number, Hero][];
    pet: Pet;
    target?: string;
    elderTree: Virtue[];
    private _max;
    damage: [number, string?][];
    constructor(p?: Pet, t?: string, ...team: Hero[]);
    addToTeam(h: Hero): boolean;
    makeAttack(dmg: number, c?: string): void;
    removeHero(h: string | number | Hero): void;
    Heroes(): Hero[];
    setElderTree(t: string, lvl: number): void;
    TreeString(): string;
}
export { AfkObject, Ascension, Engrv, Furn, Hero, Pet, Sig };
//# sourceMappingURL=teams.d.ts.map