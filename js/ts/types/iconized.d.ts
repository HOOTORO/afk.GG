import { Input } from "../model/constants.js";
export declare class Iconized {
    id: number;
    icon: string;
    name?: string;
    width?: number;
    height?: number;
    constructor(id: number, icon: string);
    constructor(id: number, icon: string, name: string);
    constructor(id: number, icon: string, name: string, width: number, height: number);
    html(): HTMLElement;
    img(): HTMLImageElement;
}
export declare class IconizedInput extends Iconized {
    buttons?: boolean;
    value?: number;
    cssName?: string;
    namedId?: string;
    private type;
    init: () => string;
    update: (x: any) => void;
    constructor(id: number, src: string, name: string);
    constructor(id: number, src: string, name: string, type: Input);
    html(): HTMLElement;
}
//# sourceMappingURL=iconized.d.ts.map