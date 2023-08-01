import {fetchData} from "../components/helper.js";

interface Boss {
  id: number;
  name: string;
  icon: string;
}

const afkBosses: Boss[] = await fetchData("json/bosses.json");

class BossManager {
  static bosses: Boss[] = afkBosses;
}

export {BossManager};
