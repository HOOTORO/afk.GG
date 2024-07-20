import { fetchData } from "../components/helper.js";
import { Hero, Pet } from "./teams.js";

const Heroes: Hero[] = await fetchData("json/hero.json");
const Beasts: Pet[] = await fetchData("json/pets.json");

export { Beasts, Heroes, Renderer };

class Renderer {
  static Icon(url: string, alt = "plchlr", width = 24, height = 24) {
    return `<img src="${url}" width=${width} height=${height} alt="${alt}">`;
  }
}
