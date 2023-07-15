import { based, classes, races } from "./afk.js";

type Pet = { name: string; short?: string; lvl?: number; icon?: string };

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
  icon?: string;
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

export { Ascension, Engrv, Furn, Hero, Pet, Sig };
