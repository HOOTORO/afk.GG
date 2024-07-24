import { IconizedInput } from "./iconized.js";
export declare class Hero extends IconizedInput {
    heroType: string;
    heroClass: string;
    role: string;
    faction: string;
    slug: string;
    constructor(id: number, icon: string, heroType: string, heroClass: string, role: string, faction: string, slug: string);
    html(): HTMLElement;
}
//# sourceMappingURL=hero.d.ts.map