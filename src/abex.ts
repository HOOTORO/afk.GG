import { loadBag, RelicEstimator } from "./abex/relicEstimate.js";
import { Militia } from "./types/militia.js";
import { Expeditor } from "./types/expeditor.js";
import { Locations } from "./util/locations.js";
import { AttackForm } from "./abex/attack.js";
import { Team } from "./types/team.js";

export const mil = new Militia(10);
export const expeditor = new Expeditor(mil, false);

export const team = new Team("team-set");

switch (window.location.pathname) {
  case Locations.abex:
    RelicEstimator();
    loadBag();
    break;
  case Locations.warBook:
    AttackForm();
    break;
  default:
    console.log("nothing to do here");
}
