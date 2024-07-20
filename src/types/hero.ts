enum based {
  STR = "str",
  AGI = "agi",
  INT = "int",
}

enum classes {
  RANGER = "ranger",
  TANK = "tank",
  MAGE = "mage",
  SUPPORT = "support",
  WARRIOR = "warrior",
}

enum races {
  GB = "graveborn",
  CEL = "celestial",
  LB = "lightbearer",
  WD = "wilder",
  ML = "mauler",
  HP = "hypogenian",
  DM = "dimensional",
}

enum stored {
  BAG = "bag",
  RELIC = "relic",
  ESS = "essence",
  TOWN = "towns",
  SLOT = "relic-slots",
}

type baseType = "str" | "agi" | "int";

class HeroPortrait {
  name: string;
  based: "str" | "agi" | "int";
  gclass: "ranger" | "tank" | "mage" | "support" | "warrior";
  faction:
    | "graveborn"
    | "celestial"
    | "lightbearer"
    | "wilder"
    | "mauler"
    | "hypogenian"
    | "dimensional";
  skills: string[];

  constructor(name: string, base: based, gameclass: classes, race: races) {
    this.based = base;
    this.name = name;
    this.gclass = gameclass;
    this.faction = race;
  }
}

const Tier = [1, 2, 3, 4, 5, 6, 7];

// const Relic = ""
const Ascension = [
  "E",
  "E+",
  "L",
  "L+",
  "M",
  "M+",
  "A",
  "A*",
  "A**",
  "A***",
  "A****",
  "A*****",
];

const Furniture = ["0F", "3F", "9F"];
const Signature = ["+20", "+30"];

const Engravings = ["E30", "E60", "E80"];
