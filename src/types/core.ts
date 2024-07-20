import { safeSum, savedObj, storedValue } from "../components/helper.js";
import { RelicBase } from "../model/constants.js";
import Relic, { CoreRelic } from "./relic.js";
import { tier } from "./tier.js";
import { DurasVirtue, Virtue, Virtues } from "./virtue.js";

export class Core {
  #baseRelics = {
    MIGHT: [10, 12, 11, 6, 7, 1],
    FORTITUDE: [8, 9, 10, 11, 12, 2],
    CELERITY: [12, 6, 11, 13, 14, 3],
    SORCERY: [14, 9, 13, 15, 16, 4],
    SUSTENANCE: [14, 15, 9, 17, 18, 5],
  };

  #slots: Record<DurasVirtue, CoreRelic[]> = {
    MIGHT: [],
    FORTITUDE: [],
    CELERITY: [],
    SORCERY: [],
    SUSTENANCE: [],
  };

  constructor(public rels: Relic[], public virtues: Virtue[]) {
    virtues.forEach((v) => {
      this.#baseRelics[v.dura].forEach((b, i) => {
        const stored = savedObj(
          `${v.dura}.${i}`,
          this.CoreRelicById(b, i, v.dura)
        );
        if (stored instanceof CoreRelic) {
          stored.goal = this.rels.find((x) => x.id === stored.goal.id);
        }
        this.#slots[v.dura].push(stored);
      });
    });
  }

  getById(id: number) {
    return this.rels.find((r) => r.id === id);
  }

  next(v: DurasVirtue, i: number, goal?: boolean) {
    let slot = this.#slots[v][i];

    if (goal) {
      if (slot.GoalTier() < tier.MYTHIC) {
        this.#slots[v][i].goal = this.getById(slot.goal.id + RelicBase);
      } else {
        this.#slots[v][i].goal = this.getById(slot.id);
      }
    } else {
      if (slot.Tier() < tier.MYTHIC) {
        this.#slots[v][i] = this.CoreRelicById(slot.id + RelicBase, i, v);
      } else {
        this.#slots[v][i] = this.CoreRelicById(this.#baseRelics[v][i], i, v);
      }
    }
    return this.#slots[v][i];
  }

  CoreRelicById(id: number, i: number, v: DurasVirtue) {
    const rel = this.getById(id);
    return new CoreRelic(
      rel.icon,
      rel.name,
      rel.id,
      rel.cost,
      rel.recipe,
      i,
      v,
      rel
    );
  }

  all(): CoreRelic[];
  all(virtue: DurasVirtue): CoreRelic[];
  all(virtue?: DurasVirtue): CoreRelic[] {
    if (virtue) {
      return this.#slots[virtue];
    } else {
      return this.virtues.flatMap((v) => this.#slots[v.dura]);
    }
  }

  wanted(): Relic[] {
    return this.all()
      .filter((b) => b.id < b.goal.id)
      .map((j) => j.goal);
  }
}
