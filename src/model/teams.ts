import { storedValue } from "../components/helper.js";
import { based, classes, races, treeBranches } from "./afk.js";

interface AfkObject {
  name: string;
  icon?: string;
}

type Pet = { name: string; short?: string; lvl?: number; icon?: string };

type EldTree = {
  might?: number;
  tank?: number;
  mage?: number;
  ranger?: number;
  support?: number;
};
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
  heroes: [number, Hero][];
  pet: Pet;
  target?: string;
  eldrerTree: Map<string, number>;
  private _max: number;
  damage: [number, string?][];
  constructor(p?: Pet, t?: string, ...team: Hero[]) {
    this._max = 5;
    this.pet = p;
    this.target = t;
    this.heroes = [];
    this.eldrerTree = new Map<string, number>();
    for (const br of treeBranches) {
      if (storedValue(br)) {
        this.eldrerTree.set(br, parseInt(storedValue(br).toString()));
      }
    }
    if (team.length >= this._max) {
      throw Error("Only 5 team members max");
    } else {
      team.forEach((v, i) => {
        this.heroes.push([i, v]);
      });
    }
  }

  // x - hero position from 1 to 5 only
  addToTeam(h: Hero) {
    if (this.heroes?.length < 5) {
      this.heroes.push([this.heroes.length, h]);
      return true;
    } else {
      console.log("Team is full!");
      return false;
    }
  }

  makeAttack(dmg: number, c?: string) {
    if (this.damage === undefined) {
      this.damage = [];
    }
    this.damage.push([dmg, c]);
  }
  removeHero(h: string | number | Hero) {
    if (typeof h === "string") {
      const idx = this.heroes.findIndex(
        (x) => x[1].name.includes(h) || x[1].short.includes(h)
      );
      if (idx > -1) {
        this.heroes.splice(idx, 1);
      }
    }
    if (typeof h === "number") {
      this.heroes.splice(h, 1);
    }
    if (typeof h === "object") {
      const idx = this.heroes.findIndex((x) => x[1].name === h.name);
      if (idx > -1) {
        this.heroes.splice(idx, 1);
      }
    }
  }

  Heroes() {
    return this.heroes.map((x) => x[1]);
  }

  setElderTree(t: string, lvl: number) {
    this.eldrerTree.set(t, lvl);
    storedValue(t, lvl.toString());
  }
  TreeString() {
    return `MI:${this.eldrerTree.get("might")} | TA:${this.eldrerTree.get(
      "tank"
    )} | RA:${this.eldrerTree.get("ranger")} | SU:${this.eldrerTree.get(
      "support"
    )} | MA:${this.eldrerTree.get("mage")}`;
  }
}

export { AfkObject, Ascension, Engrv, Furn, Hero, Pet, Sig };
