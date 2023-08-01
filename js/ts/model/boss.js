import { fetchData } from "../components/helper.js";
const afkBosses = await fetchData("json/bosses.json");
class BossManager {
    static bosses = afkBosses;
}
export { BossManager };
