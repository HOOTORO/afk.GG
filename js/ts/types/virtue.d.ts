import { IconizedInput } from "./iconized.js";
export declare enum Virtues {
    MIGHT = 0,
    FORTITUDE = 1,
    CELERITY = 2,
    SORCERY = 3,
    SUSTENANCE = 4
}
export type DurasVirtue = keyof typeof Virtues;
export declare class Virtue extends IconizedInput {
    class: string;
    acronym: string;
    dura: DurasVirtue;
    constructor(icon: string, name: string, id: number, cl: string, acronym: string);
}
//# sourceMappingURL=virtue.d.ts.map