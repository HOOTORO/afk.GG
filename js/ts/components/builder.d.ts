import { elTag } from "../model/constants.js";
export declare class elBuilder {
    #private;
    constructor(tag: elTag, props?: {
        [k: string]: string;
    }, inner?: string);
    add(el: HTMLElement): elBuilder;
    add(tag: elTag, props: {
        [k: string]: string;
    }, inner?: string): elBuilder;
    html(): HTMLElement;
}
//# sourceMappingURL=builder.d.ts.map