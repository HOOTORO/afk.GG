declare const verb = true;
export declare enum elTag {
    Input = "input",
    Div = "div",
    Span = "span",
    Label = "label",
    Select = "select",
    Option = "option",
    Form = "form",
    Img = "img",
    tr = "tr",
    td = "td",
    th = "th",
    Table = "table",
    Thead = "thead",
    Tbody = "tbody",
    Button = "button",
    Output = "output"
}
export declare enum elProp {
    Id = "id",
    Class = "class",
    For = "for",
    Alt = "alt",
    Src = "src",
    Width = "width",
    Style = "style",
    Type = "type"
}
export declare enum Input {
    Number = "number",
    Text = "text",
    CheckBox = "checkbox",
    Datetime = "datetime-local"
}
export declare const RelicBase = 18;
export declare const AbExSellModifier = 0.4;
export declare const aeIcons: {
    stam: string;
    coin: string;
    ess: string;
};
declare const relicEstimateTable: string;
declare class Period {
    static hour: number;
    static day: number;
    static week: number;
    static month: number;
}
declare const iconSize = 38;
declare class AfkArena {
    static levelup: number;
    static dustInc(): number;
    static storeDust(): number;
    static fastRewards(): number;
    static storeDiDeal(): number;
    static subsChest(): number;
    static mistyValley(): number;
}
declare class AbEx {
    static now: Date;
    static abexDurationDays: number;
    static silentDay: number;
    static spectatorMod: number;
    static sodFastenMod: number;
    static startD: Date;
    static silentHoursIn(): Date;
    static hoursLeft(): number;
}
declare const allRes: string[];
declare const query: string;
export { AbEx, AfkArena, Period, allRes, iconSize, query, relicEstimateTable, verb, };
//# sourceMappingURL=constants.d.ts.map