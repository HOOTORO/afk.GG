import { createElementN, fetchData } from "../components/helper.js";
var based;
(function (based) {
    based["STR"] = "str";
    based["AGI"] = "agi";
    based["INT"] = "int";
})(based || (based = {}));
var classes;
(function (classes) {
    classes["RANGER"] = "ranger";
    classes["TANK"] = "tank";
    classes["MAGE"] = "mage";
    classes["SUPPORT"] = "support";
    classes["WARRIOR"] = "warrior";
})(classes || (classes = {}));
var races;
(function (races) {
    races["GB"] = "graveborn";
    races["CEL"] = "celestial";
    races["LB"] = "lightbearer";
    races["WD"] = "wilder";
    races["ML"] = "mauler";
    races["HP"] = "hypogenian";
    races["DM"] = "dimensional";
})(races || (races = {}));
var stored;
(function (stored) {
    stored["BAG"] = "bag";
    stored["RELIC"] = "relic";
    stored["ESS"] = "essence";
    stored["TOWN"] = "towns";
    stored["SLOT"] = "relic-slots";
})(stored || (stored = {}));
var Branch;
(function (Branch) {
    Branch["WAR"] = "might";
    Branch["FORT"] = "fort";
    Branch["MAG"] = "mage";
    Branch["RAN"] = "celerity";
    Branch["SUP"] = "support";
})(Branch || (Branch = {}));
const relBase = 18;
const Tree = await fetchData("json/duratree.json");
const Heroes = await fetchData("json/hero.json");
const relics = await fetchData("json/relic.json");
const Beasts = await fetchData("json/pets.json");
const baseRelics = await fetchData("json/basecore.json");
const townTypes = await fetchData("json/towns.json");
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
export { Beasts, Branch, Tree, Heroes, RelicManager, Renderer, TierManager as Tier, based, classes, defaults, races, stored, townTypes, };
class TierManager {
    static next(id) {
        const nextTier = id + relBase > 90 ? id - 4 * relBase : id + relBase;
        return RelicManager.getById(nextTier);
    }
    static relics(lvl) {
        return relics.filter((x) => x.id / relBase + 1 === lvl);
    }
    static nextLevel(cs) {
        cs.equipped = this.next(cs.equipped.id);
        cs.level = cs.level > 4 ? 1 : (cs.level + 1);
        if (cs.goal.id < cs.equipped.id) {
            cs.goal = cs.equipped;
        }
    }
    static nextGoal(cs) {
        cs.goal =
            cs.goal.id / relBase > 4 ? cs.equipped : TierManager.next(cs.goal.id);
        return cs.goal;
    }
}
class RelicManager {
    static consistOf(r) {
        return r.recipe.map((x) => this.getById(x));
    }
    static price(rel) {
        if (rel.id > relBase) {
            return (rel.cost +
                rel.recipe
                    .map((x) => this.price(this.getById(x)))
                    .reduce((a, b) => a + b));
        }
        else {
            return rel.cost;
        }
    }
    static getById(n) {
        return relics.find((x) => x.id === n);
    }
}
class Renderer {
    static relicInput(containerName, rels) {
        const div = createElementN("div", { class: containerName });
        rels.forEach((x) => {
            const el = createElementN("span", {}, `
      <img src=${x.icon} alt=${x.id} width=52>
      <span class="relinf n${x.id}" hidden>
      <div><u>id</u>: ${x.id}</div>
      <div><strong>price</strong>: ${RelicManager.price(x)}</div>
      <div><em>recipe</em>: ${x.recipe.join("/")}</div>
      </span>
      <input type="number" class="${containerName}-item-${x.id}" min=0 value="${x.qty}">
      `);
            div.appendChild(el);
            el.addEventListener("click", (e) => {
                document.querySelectorAll(".relinf").forEach(x => x.setAttribute("hidden", ""));
                if (e.target instanceof HTMLImageElement) {
                    const rel = e.target;
                    let desc = document.querySelector(`.relinf.n${rel.alt}`);
                    if (desc) {
                        desc.removeAttribute("hidden");
                    }
                }
            });
        });
        return div;
    }
    static imgArray(imgLinks, w) {
        return imgLinks.map((s) => this.Icon(s, "s", w)).join("");
    }
    static Icon(url, alt = "plchlr", width = 24) {
        return `<img src="${url}" width=${width} alt="${alt}">`;
    }
}
class defaults {
    static emptyBag() {
        return relics.map((rel) => {
            const bred = rel;
            bred.qty = 0;
            return bred;
        });
    }
    static aeTowns() {
        return { 5: 0, 6: 0, 7: 0, 8: 0 };
    }
    static baseSlots() {
        return Object.entries(baseRelics)
            .map((b) => b[1].map((r, i) => {
            return {
                slotId: `${b[0]}-${i}`,
                equipped: RelicManager.getById(r),
                goal: RelicManager.getById(r),
                level: 1,
            };
        }))
            .flat();
    }
}
