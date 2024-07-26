import {
  fetchData,
  newEl,
  savedObj,
  storedValue,
} from "../components/helper.js";
import { elTag } from "../model/constants.js";
import { Stamina } from "./abex-resource.js";
import { BossManager } from "./boss.js";
import { Hero } from "./hero.js";
import { Pet } from "./pet.js";

const teamWrap = "team";
const heroSelectId = "hero-selection";
const petSelectId = "pet-sele";

export const rawHeroesData: Hero[] = await fetchData("json/heroes.json");
export const rawBeasts: Pet[] = await fetchData("json/pets.json");

const Heroes: Hero[] = rawHeroesData.map(
  (x) =>
    new Hero(x.id, x.icon, x.heroType, x.heroClass, x.role, x.faction, x.slug)
);
const puppies: Pet[] = rawBeasts.map((x) => new Pet(x.id, x.icon, x.name));

export class Team {
  #wrap: HTMLElement;
  roster: Hero[] = [];
  private _max: number = 5;
  damage: [number, string?, boolean?][];

  food: Stamina = new Stamina();

  constructor(mountId: string);
  constructor(
    mountId: string,
    public team?: Hero[],
    public beast?: Pet,
    public target?: string
  ) {
    const heroSaved: Hero[] = savedObj("team", []);
    if (heroSaved.length > 0) {
      heroSaved.forEach((v, i) => {
        this.roster.push(
          new Hero(
            v.id,
            v.icon,
            v.heroType,
            v.heroClass,
            v.role,
            v.faction,
            v.slug
          )
        );
      });
    }

    this.beast = savedObj("team-pet", new Pet(0, "1", "0"));
    this.food = savedObj(this.food.name, new Stamina());
    this.init(mountId);
  }
  init(mid: string) {
    this.#wrap = newEl(elTag.Div, { class: teamWrap });

    const allPets = this.inputsContainer(petSelectId, puppies),
      allHeroes = this.inputsContainer(heroSelectId, Heroes);
    this.#wrap.appendChild(allPets);
    this.#wrap.appendChild(allHeroes);

    this.#wrap.addEventListener("input", (e) => {
      if (
        e.target instanceof HTMLInputElement &&
        e.target.className === "beast"
      ) {
        this.petHandler(e as InputEvent);
      } else {
        this.heroHandler(e as InputEvent);
      }
      this.update();
    });
  }

  update() {
    storedValue("team", this.roster);
    storedValue("team-pet", this.beast);
  }
  isInTeam(hero: Hero): boolean {
    return this.roster.findIndex((x) => x.id === hero.id) > -1;
  }
  add(h: Hero) {
    if (this.roster?.length < this._max) {
      this.roster.push(h);
      return true;
    } else {
      console.log("Team is full!");
      return false;
    }
  }
  remove(h: Hero) {
    const idx = this.roster.findIndex((x) => x.id === h.id);
    if (idx > -1) {
      this.roster.splice(idx, 1);
    }
  }

  makeAttack(dmg: number, c?: string, d?: boolean) {
    if (this.damage === undefined) {
      this.damage = [];
    }
    if (d) {
      this.food.setValue(this.food.value - BossManager.retry);
    } else {
      this.food.setValue(this.food.value - BossManager.foodCost);
    }
    this.damage.push([dmg, c, d]);

    document.getElementById(
      "allowed-retry"
    ).innerText = `Attack: ${this.food.BossAttacks()} \nRetry: ${this.food.RetryLimit()}`;
    document.getElementById("avg-dps").innerText = `AVG DPS: ${Math.round(
      this.damage.map((x) => x[0]).reduce((a, b) => a + b) / this.damage.length
    )}`;
  }

  inputsContainer(id: string, data: Hero[] | Pet[]) {
    const container = newEl("div", { class: id });
    container.appendChild(
      newEl("h2", {}, `CHOOSE ${id.split("-")[0].toUpperCase()}`)
    );
    const ul = document.createElement("ul");
    for (const h of data) {
      const li = document.createElement("li"),
        checkBox = h.html();
      li.appendChild(checkBox);
      ul.appendChild(li);
      if (h instanceof Pet && this.beast && this.beast.id === h.id) {
        checkBox.getElementsByTagName("input")[0].checked = true;
      }
      if (
        h instanceof Hero &&
        this.roster.length > 0 &&
        this.roster.findIndex((x) => x.id === h.id) > -1
      ) {
        checkBox.getElementsByTagName("input")[0].checked = true;
      }
    }
    container.appendChild(ul);
    return container;
  }

  heroHandler(e: InputEvent) {
    const tg = e.target as HTMLInputElement;
    const Hero = Heroes.find((x) => x.id === parseInt(tg.id.split("-")[1]));

    if (tg.checked && !this.isInTeam(Hero)) {
      if (!this.add(Hero)) {
        tg.checked = !tg.checked;
      }
    }
    if (!tg.checked && this.isInTeam(Hero)) {
      this.remove(Hero);
    }
  }

  petHandler(e: InputEvent) {
    const tg = e.target as HTMLInputElement;
    const petGroup = document.querySelectorAll(`.${petSelectId} input`);
    const clickedPet = puppies.find((x) => x.name === tg.name);
    petGroup.forEach((x: HTMLInputElement) => {
      if (x.name != clickedPet.name) x.checked = false;
    });
    this.beast = clickedPet;
    tg.checked = !tg.checked;
  }

  appendResultRow(
    body: HTMLElement,
    dps: number,
    duraMight: number,
    duraFort: number,
    duraCelerity: number,
    duraSorcery: number,
    duraSustenance: number,
    c: string = "",
    d: boolean
  ) {
    const resultRow = newEl(elTag.tr),
      team = newEl(elTag.td, {}),
      pet = newEl(elTag.td, {}),
      might = newEl(elTag.td, {}, `${duraMight}`),
      fort = newEl(elTag.td, {}, `${duraFort}`),
      celerity = newEl(elTag.td, {}, `${duraCelerity}`),
      sorcery = newEl(elTag.td, {}, `${duraSorcery}`),
      sustenance = newEl(elTag.td, {}, `${duraSustenance}`),
      comment = newEl(elTag.td, {}, c),
      damage = newEl(elTag.td, {}, `${dps}B`);

    this.roster.forEach((x) => team.appendChild(x.img()));
    pet.appendChild(this.beast.img());
    if (d) {
      comment.innerText += "discarded attack, retry";
    }
    resultRow.style.verticalAlign = "middle";
    resultRow.appendChild(team);
    resultRow.appendChild(pet);
    resultRow.appendChild(might);
    resultRow.appendChild(fort);
    resultRow.appendChild(celerity);
    resultRow.appendChild(sorcery);
    resultRow.appendChild(sustenance);
    resultRow.appendChild(damage);
    resultRow.appendChild(comment);

    this.makeAttack(dps, c, d);
    body.appendChild(resultRow);
  }

  mount(elId: string) {
    document.getElementById(elId).appendChild(this.#wrap);
  }
}
