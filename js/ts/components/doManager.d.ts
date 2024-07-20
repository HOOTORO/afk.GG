import { prop } from "../model/types.js";
import { elProp, elTag } from "./helper.js";
declare function createElem(t: string, attr?: prop | prop[], ch?: elTag[]): HTMLElement;
declare function genId(s: string): string;
declare function buildElement(el: elTag, properties?: prop[], labelText?: string): HTMLElement;
declare function buildProperty(k: string, val: string): prop;
export { elProp, buildElement, buildProperty, createElem, genId, };
//# sourceMappingURL=doManager.d.ts.map