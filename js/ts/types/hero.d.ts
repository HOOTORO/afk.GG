declare enum based {
    STR = "str",
    AGI = "agi",
    INT = "int"
}
declare enum classes {
    RANGER = "ranger",
    TANK = "tank",
    MAGE = "mage",
    SUPPORT = "support",
    WARRIOR = "warrior"
}
declare enum races {
    GB = "graveborn",
    CEL = "celestial",
    LB = "lightbearer",
    WD = "wilder",
    ML = "mauler",
    HP = "hypogenian",
    DM = "dimensional"
}
declare enum stored {
    BAG = "bag",
    RELIC = "relic",
    ESS = "essence",
    TOWN = "towns",
    SLOT = "relic-slots"
}
type baseType = "str" | "agi" | "int";
declare class HeroPortrait {
    name: string;
    based: "str" | "agi" | "int";
    gclass: "ranger" | "tank" | "mage" | "support" | "warrior";
    faction: "graveborn" | "celestial" | "lightbearer" | "wilder" | "mauler" | "hypogenian" | "dimensional";
    skills: string[];
    constructor(name: string, base: based, gameclass: classes, race: races);
}
declare const Tier: number[];
declare const Ascension: string[];
declare const Furniture: string[];
declare const Signature: string[];
declare const Engravings: string[];
//# sourceMappingURL=hero.d.ts.map