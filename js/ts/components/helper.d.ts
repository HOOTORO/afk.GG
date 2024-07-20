import { BaseResQty, User } from "../model/types.js";
declare enum elTag {
    Input = "input",
    Div = "div",
    Span = "span",
    Label = "label",
    Select = "select",
    Option = "option",
    Form = "form",
    Img = "img"
}
declare enum elProp {
    Id = "id",
    Class = "class",
    For = "for",
    Alt = "alt",
    Src = "src",
    Width = "width",
    Style = "style",
    Type = "type"
}
declare enum Input {
    Number = "number",
    Text = "text",
    CheckBox = "checkbox",
    Datetime = "datetime-local"
}
export declare const log: (x: string) => void;
declare function generateAFKResObj(x: string): BaseResQty;
declare function setApp(key: string): void;
declare function populateStorage(key: string, value: string): void;
declare function weekLabels(n: number, stops: {
    n: number;
    desc: string;
}[]): string;
declare function rangeSlide(value: string, user: User): void;
declare function createSelectList(name: string, options: string[] | number[]): HTMLSelectElement;
declare function createInput(fieldType: Input, attrs?: {
    [k: string]: string;
}): HTMLElement;
declare function savedObj(str: string, def: any): any;
export { newEl, newBtn, createInput, createSelectList, generateAFKResObj, hasEmpty as isEmpty, populateStorage, rangeSlide, savedObj, setApp, storedValue, weekLabels, fetchData, buttonWrapInput, elTag, Input, elProp, };
declare function newEl(tag: string, props?: {
    [k: string]: string;
}, inner?: string): HTMLElement;
declare function newBtn(text?: string, c?: string, id?: string): HTMLElement;
declare function storedValue(inputId: string, value?: any): boolean | string;
declare function hasEmpty(obj: Record<string, any>): boolean;
export declare function safeSum(n: number[]): number;
declare function fetchData(assetsPath: string): Promise<any>;
declare function buttonWrapInput(el: HTMLElement, update: (y: number) => void): HTMLElement;
//# sourceMappingURL=helper.d.ts.map