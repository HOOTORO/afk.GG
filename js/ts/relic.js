import { createElementN } from "./components/helper.js";
import { expeditor } from "./gamevents/abex.js";
import { relics } from "./model/afk.js";
console.log("WE RE RELIC");
const relApp = document.getElementById("relic-app");
export function runRelic() {
    relics.sort((a, b) => a.id - b.id);
    relics.forEach((x) => {
        const el = createElementN("span", {}, `<br><img src=${x.icon} alt=${x.name} width=42> <code>id: ${x.id}</code>[ ${x.recipe} ]</img>`);
        relApp.appendChild(el);
    });
    for (const item of Object.keys(expeditor.relicPower)) {
        const relicTree = createElementN("div", { class: `relic ${item}` }, `
      1: <span class='top left'> tl</span>
      2: <span class='top right'>tr </span>   
      3: <span class='mid left'>ml </span>
      4: <span class='mid right'> mr</span>   
      5: <span class='bottom left'> bl</span>
      6: <span class='bottom right'>br </span>
      `);
        relApp.appendChild(relicTree);
    }
}
