import { based, classes, races } from "./afk.js";

type Pet = { name: string; short?: string; lvl?: number };

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

type Hero = {
  name: string;
  short: string;
  asc?: Ascension;
  si?: Sig;
  fu?: Furn;
  eng?: Engrv;
};

// class Hero extends HeroPortrait {
//   asc: string;
//   si: string;
//   fu: string;
//   eng: string;
//   /**
//    *
//    */
//   constructor() {
//     super();
//   }
// }

type Ascension =
  | "E"
  | "E+"
  | "L"
  | "L+"
  | "M"
  | "M+"
  | "A"
  | "A*"
  | "A**"
  | "A***"
  | "A****"
  | "A*****";
type Furn = "0F" | "3F" | "9F";
type Sig = "+20" | "+30";

type Engrv = "E30" | "E60" | "E80";

export class Team {
  [index: number]: Hero;
  pet: Pet;
  target?: string;
  _len: number;
  damage: [number, string?][];
  constructor(team: Hero[], p?: Pet, t?: string) {
    this.pet = p;
    this.target = t;
    this._len = team.length;
    team.forEach((v, i) => {
      this[i] = v;
    });
  }

  // x - hero position from 1 to 5 only
  setHero(x: number, h: Hero) {
    if (x < 6) {
      this[x] = h;
      this._len = x;
    } else {
      console.log("Hero position out  of range");
    }
  }

  makeAttack(dmg: number, c?: string) {
    if (this.damage === undefined) {
      this.damage = [];
    }
    this.damage.push([dmg, c]);
  }
  removeHero(position: number) {
    this[position] = null;
    this._len--;
  }

  Heroes() {
    let i = 0;
    let result: Hero[] = [];
    while (i < this._len) {
      i++;
      result.push(this[i]);
    }
    return result;
  }
}

const Beasts = [
  {
    name: "Rock Lizard",
    short: "Rick",
  },
  {
    name: "Talismane",
    short: "Tal",
  },
  {
    name: "Moth",
    short: "Mo",
  },
  {
    name: "Fox Fatale",
    short: "Fox",
  },
  {
    name: "Winged Lion",
    short: "Lion",
  },
  {
    name: "Flutter Owl",
    short: "Owl",
  },
  {
    name: "Seal",
    short: "Sel",
  },
  {
    name: "Souflee",
    short: "Cake",
  },
  {
    name: "Deer",
    short: "Dir",
  },
  {
    name: "Blade Lizard",
    short: "Blade",
  },
  {
    name: "Red Fat",
    short: "RFat",
  },
  {
    name: "White Snow Fat",
    short: "WFat",
  },
  {
    name: "Vesperio",
    short: "Vesp",
  },
];

const Heroes = [
  {
    name: "Awk.Belinda",
    short: "ABel",
  },
  {
    name: "Palmer",
    short: "Pal",
  },

  {
    name: "Rosaline",
    short: "Rosa",
  },
  {
    name: "Daimon",
    short: "Dima",
  },
  {
    name: "Edwin",
    short: "Ed",
  },
  {
    name: "Rem",
    short: "Rem",
  },
  {
    name: "Antandra",
    short: "Anta",
  },
  {
    name: "Awk.Solise",
    short: "ASsose",
  },
  {
    name: "Ellaja & Laija",
    short: "Twins",
  },
  {
    name: "Mortas",
    short: "Mort",
  },
  {
    name: "Grezhul",
    short: "Grez",
  },
  {
    name: "Trisha",
    short: "Trsh",
  },
  {
    name: "Albedo",
    short: "Alb",
  },
  {
    name: "Tasi",
    short: "SHTazi",
  },
  {
    name: "Awk.Safiya",
    short: "ASafy",
  },
  {
    name: "Zolrath",
    short: "Zol",
  },
  {
    name: "Baden",
    short: "Bad",
  },
  {
    name: "Awk.Baden",
    short: "ABad",
  },
  {
    name: "Awk.Athalia",
    short: "A.At",
  },
  {
    name: "Anasta",
    short: "Ana",
  },
  {
    name: "Silas",
    short: "Sil",
  },
  {
    name: "Hodgkin",
    short: "Cap",
  },
  {
    name: "Nevanti",
    short: "Neva",
  },
  {
    name: "Estrilda",
    short: "Est",
  },
  {
    name: "Joan of D'Arc",
    short: "Jon",
  },
  {
    name: "Saurus",
    short: "Saru",
  },
  {
    name: "Veithael",
    short: "Vite",
  },
  {
    name: "Daemia",
    short: "Dam",
  },
  {
    name: "Maetria",
    short: "Mae",
  },
] as Hero[];

export { Ascension, Beasts, Engrv, Furn, Hero, Heroes, Pet, Sig };
