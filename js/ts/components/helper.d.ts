import { Input } from "../model/constants.js";
export declare const log: (x: any) => void;
export { hasEmpty, populateStorage, savedObj, setApp, buttonWrapInput };
export declare function newIn(fieldType: Input, attrs?: {
    [k: string]: string;
}): HTMLElement;
export declare function newEl(tag: string, props?: {
    [k: string]: string;
}, inner?: string): HTMLElement;
export declare function newBtn(text?: string, c?: string, id?: string): HTMLElement;
declare function buttonWrapInput(el: HTMLElement, update: (y: number) => void): HTMLElement;
export declare function storedValue(inputId: string, value?: any): boolean | string;
declare function savedObj<Type>(str: string, def: Type): any;
declare function setApp(key: string): void;
declare function populateStorage(key: string, value: string): void;
declare function hasEmpty(obj: Record<string, any>): boolean;
export declare function safeSum(n: number[]): number;
export declare function fetchData(assetsPath: string): Promise<any>;
//# sourceMappingURL=helper.d.ts.map