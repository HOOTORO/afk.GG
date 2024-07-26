import { fetchData } from "../components/helper.js";

interface Boss {
  id: number;
  name: string;
  icon: string;
}

const afkBosses: Boss[] = await fetchData("json/bosses.json");

export class BossManager {
  static foodCost = 48;
  static retry = 4;
  static bosses: Boss[] = afkBosses;
}
