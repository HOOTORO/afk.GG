import {storedValue} from "../components/helper.js";
import {based, classes, races, Branch, Tree, Renderer} from "./afk.js";

interface AfkObject {
  name: string;
  icon?: string;
}

type Pet = { name: string; short?: string; lvl?: number; icon?: string };

type DuraTree = {
  id: string,
  name: string,
  icon: string,
  value: number
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

type Hero = {
  name: string;
  short: string;
  asc?: Ascension;
  si?: Sig;
  fu?: Furn;
  eng?: Engrv;
  icon?: string;
};

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
  elderTree: DuraTree[];
  private _max: number;
  damage: [number, string?][];

  constructor(p?: Pet, t?: string, ...team: Hero[]) {
    this._max = 5;
    this.pet = p;
    this.target = t;
    this.heroes = [];
    this.elderTree = Tree;
    for (const br of this.elderTree) {
      if (storedValue(br.id)) {
        br.value = parseInt(storedValue(br.id).toString());
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
    if (typeof h /// tab |string") {
      const idx = this.heroes.findIndex(
        (x) => x[1].name.includes(h) || x[1].short.includes(h)
      );
      if (idx > -1) {
        this.heroes.splice(idx, 1);
      }
    }
    if (typeof h /// tab |number") {
      this.heroes.splice(h, 1);
    }
    if (typeof h /// tab |object") {
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
    this.elderTree.find(x => x.name === t).value = lvl
    storedValue(t, lvl);
  }

  TreeString() {
    return this.elderTree.map(x => `${Renderer.Icon(x.icon, x.name,12)}:${x.value}`).join("  ");
  }
}

export {AfkObject, Ascension, Engrv, Furn, Hero, Pet, Sig, DuraTree};
