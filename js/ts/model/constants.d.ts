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
    static dailyPile(): number;
    static mistyValley(): number;
}
declare class AbEx {
    static now: Date;
    static abexDurationDays: number;
    static silentDay: number;
    static spectatorMod: number;
    static sodFastenMod: number;
    static startD: Date;
    static start(): Date;
    static left(): Date;
    static silentHoursIn(): Date;
    static hoursLeft(): number;
}
declare class Boss {
    static foodCost: number;
    static retry: number;
}
declare class ValueModes extends AfkArena {
    static rSources: {
        id: string;
        label: string;
        tableName: string;
        period: number;
        display: boolean;
    }[];
    static emuns(): {
        id: string;
        table: string;
    }[];
    static gMode(x: string): GameMode;
}
type bres = "dia" | "bait" | "redc" | "yells" | "emblcc" | "timee" | "stars" | "poe" | "dust" | "twise" | "mythfs" | "secrs";
declare const allRes: string[];
declare enum GameMode {
    CR = "CR",
    TS = "TS",
    NC = "NC",
    all = "all"
}
declare const verb = true;
declare const xh = "\n    <div>\n        <span id=\"rangeValue\">1 week</span>\n        <input class=\"range\" type=\"range\" name=\"times\" value=\"1\" min=\"1\" max=\"52\"  list=\"values\" />\n<datalist id=\"values\">\n";
declare const leftover = "\n</datalist>\n    </div>\n";
declare const userFields: {
    name: string;
    type: string;
    src: string;
}[];
declare const sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
declare const base = "https://docs.google.com/spreadsheets/d/1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY/gviz/tq?";
declare const query: string;
declare const url: (x: string) => string;
export { AbEx, AfkArena, Boss, GameMode, Period, ValueModes, allRes, base, bres, iconSize, leftover, query, relicEstimateTable, sheetId, url, userFields, verb, xh, };
//# sourceMappingURL=constants.d.ts.map