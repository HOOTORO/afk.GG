import { Input } from "../model/constants.js";
export declare const log: (x: any) => void;
export declare function newIn(fieldType: Input, attrs?: {
    [k: string]: string;
}): HTMLElement;
export declare function newEl(tag: string, props?: {
    [k: string]: string;
}, inner?: string): HTMLElement;
export declare function newBtn(text?: string, c?: string, id?: string): HTMLElement;
export declare function buttonWrapInput(el: HTMLElement, update: (y: number) => void): HTMLElement;
export declare function storedValue(inputId: string, value?: any): boolean | string;
export declare function savedObj<Type>(str: string, def: Type): any;
export declare function fetchData(assetsPath: string): Promise<any>;
export declare function safeSum(n: number[]): number;
//# sourceMappingURL=helper.d.ts.map