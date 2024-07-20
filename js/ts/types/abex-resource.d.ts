import { Iconized } from "./iconized.js";
export declare const stam = "https://i.imgur.com/n5WOzSZ.png";
export declare class IconizedInput extends Iconized {
    value: number;
    cssName: string;
    init: () => string;
    update: (x: number) => void;
    constructor(id: number, src: string, name: string, value: number, cssName: string);
    html(): HTMLElement;
}
export declare class Stamina extends IconizedInput {
    constructor();
}
export declare class Essence extends IconizedInput {
    constructor();
    html(): HTMLElement;
}
//# sourceMappingURL=abex-resource.d.ts.map