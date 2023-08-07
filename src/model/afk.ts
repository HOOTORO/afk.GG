import {buttonWrapInput, createElementN, fetchData} from "../components/helper.js";
import {DuraTree, Hero, Pet} from "./teams.js";
import {
  BagRelic,
  CoreSlot,
  Relic,
  relicLvl,
  resourceIncome,
} from "./types.js";

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

enum Branch {
  WAR = "might",
  FORT = "fort",
  MAG = "mage",
  RAN = "celerity",
  SUP = "support",
}


const relBase = 18;
const Tree: DuraTree[] = await fetchData("json/duratree.json")
const Heroes: Hero[] = await fetchData("json/hero.json");
const relics: Relic[] = await fetchData("json/relic.json")
const Beasts: Pet[] = await fetchData("json/pets.json")
const baseRelics: {
  readonly [index: string]: readonly number[];
} = await fetchData("json/basecore.json")
const townTypes: Record<number, resourceIncome> = await fetchData("json/towns.json");

const FlawlessDroplets = {
  "E": 1,
  "E+": 1,
  "L": 4,
  "L+": 2,
  "M": 8,
  "M+": 8,
  "A": 4,
  "A1": 2,
  "A2": 2,
  "A3": 2,
  "A4": 2,
  "A5": 2,
};


export {
  Beasts,
  Branch,
  Tree,
  Heroes,
  RelicManager,
  Renderer,
  TierManager as Tier,
  based,
  classes,
  defaults,
  races,
  stored,
  townTypes,
};

class TierManager {
  static next(id: number) {
    const nextTier = id + relBase > 90 ? id - 4 * relBase : id + relBase;
    return RelicManager.getById(nextTier);
  }

  static relics(lvl: relicLvl) {
    return relics.filter((x) => x.id / relBase + 1 === lvl);
  }

  static nextLevel(cs: CoreSlot): void {
    cs.equipped = this.next(cs.equipped.id);
    cs.level = cs.level > 4 ? 1 : <relicLvl>(cs.level + 1);
    if (cs.goal.id < cs.equipped.id) {
      cs.goal = cs.equipped;
    }
  }

  static nextGoal(cs: CoreSlot) {
    cs.goal =
      cs.goal.id / relBase > 4 ? cs.equipped : TierManager.next(cs.goal.id);
    return cs.goal;
  }
}

class RelicManager {
  static consistOf(r: Relic) {
    return r.recipe.map((x) => this.getById(x));
  }

  static price(rel: Relic): number {
    if (rel.id > relBase) {
      return (
        rel.cost +
        rel.recipe
          .map((x) => this.price(this.getById(x)))
          .reduce((a, b) => a + b)
      );
    } else {
      return rel.cost;
    }
  }

  static getById(n: number) {
    return relics.find((x) => x.id === n);
  }
}

class Renderer {
  static relicInput(containerName: string, rels: BagRelic[]) {
    const div = createElementN("div", {class: containerName});
    rels.forEach((x) => {
      const el = createElementN(
        "span",
        {},
        `
      <img src=${x.icon} alt=${x.id} width=52>
      <span class="relinf n${x.id}" hidden>
      <div><u>id</u>: ${x.id}</div>
      <div><strong>price</strong>: ${RelicManager.price(x)}</div>
      <div><em>recipe</em>: ${x.recipe.join("/")}</div>
      </span>
      <input type="number" class="${containerName}-item-${x.id}" min=0 value="${x.qty}">
      `
      );
      div.appendChild(el);
      el.addEventListener("click", (e) => {
        document.querySelectorAll(".relinf").forEach(x => x.setAttribute("hidden", ""))
        if (e.target instanceof HTMLImageElement) {
          const rel = e.target as HTMLImageElement;
          let desc = document.querySelector(`.relinf.n${rel.alt}`);
          if (desc) {
            desc.removeAttribute("hidden")
          }
        }
      })
    });
    return div;
  }

  static imgArray(imgLinks: string[], w: number) {
    return imgLinks.map((s) => this.Icon(s, "s", w)).join("");
  }

  static Icon(url: string, alt = "plchlr", width = 24) {
    return `<img src="${url}" width=${width} alt="${alt}">`
  }
}

class defaults {
  static emptyBag() {
    return relics.map((rel) => {
      const bred = <BagRelic>rel;
      bred.qty = 0;
      return bred;
    });
  }

  static aeTowns() {
    return {5: 0, 6: 0, 7: 0, 8: 0};
  }

  static baseSlots() {
    return Object.entries(baseRelics)
      .map((b) =>
        b[1].map((r, i) => {
          return {
            slotId: `${b[0]}-${i}`,
            equipped: RelicManager.getById(r),
            goal: RelicManager.getById(r),
            level: 1,
          };
        })
      )
      .flat();
  }
}
