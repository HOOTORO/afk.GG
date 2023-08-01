import { createElementN, createInput } from "../components/helper.js";
import {Branch, RelicManager, Renderer, Tree} from "../model/afk.js";
import { relicEstimateTable } from "../model/constants.js";
import { BagRelic, CoreSlot, SLOT_ID } from "../model/types.js";
import { expeditor } from "./abex.js";

const relApp = document.getElementById("relic-app");

export function runRelic() {
  CoreRelicInfo(expeditor.relic);

  const userInput = createElementN(
      "div",
      { class: "ui-input" },
      "Essence & Captured Towns"
    ),
    ess = createInput("number", "", "/afk.GG/assets/ae/slg_coin.png", {
      value: expeditor.essence ? expeditor.essence.toString() : "0",
      min: "0",
      size: "10",
    });
  userInput.appendChild(ess);
  [5, 6, 7, 8].forEach((x) => {
    userInput.appendChild(
      createInput("number", ``, `/afk.GG/assets/ae/ranks/icon_level${x}.png`, {
        min: "0",
        max: "40",
        value: expeditor.towns[x] ? expeditor.towns[x].toString() : "0",
        class: `town tier-${x}`,
      })
    );
  });
  relApp.appendChild(userInput);

  const relicPics = document.querySelectorAll(".relic-type"),
    townsInputs = document.querySelectorAll(".town");

  ess.addEventListener("change", (e) => {
    if (e.target instanceof HTMLInputElement) {
      const num = parseInt(e.target.value);
      expeditor.essence = num;
    }
  });
  relicPics.forEach((x) => {
    x.addEventListener("click", (e) => {
      if (e.target instanceof HTMLImageElement) {
        const containerClasses = e.target.parentElement?.className.split(" "),
          topLevelContainerClasses = e.target.parentElement?.parentElement,
          idx = parseInt(containerClasses[0].replace("idx-", "")),
          relId = parseInt(containerClasses[1].replace("item-", "")),
          type = topLevelContainerClasses.className.split(" ")[0],
          branch = topLevelContainerClasses.className.split(" ")[2] as Branch,
          slotId = `${branch}-${idx}`;

        if (relId) {
          const temp = topLevelContainerClasses.parentElement.querySelectorAll(
            `.item-${relId}`
          );
          if (type === "equip") {
            const value = expeditor.equippedSlot(<SLOT_ID>slotId);
            expeditor.relic = <SLOT_ID>slotId;
            for (const ite of temp) {
              ite.firstElementChild.setAttribute("src", value.equipped.icon);
              ite.className = `idx-${idx} item-${value.equipped.id}`;
            }
          } else {
            expeditor.nextGoal(<SLOT_ID>slotId);
            const value = expeditor.equippedSlot(<SLOT_ID>slotId);
            e.target.setAttribute("src", value.goal.icon);
            e.target.parentElement.className = `idx-${idx} item-${value.goal.id}`;
          }
        }
      }
    });
  });

  townsInputs.forEach((t) => {
    t.addEventListener("change", (e) => {
      if (
        e.target instanceof HTMLInputElement &&
        e.target.classList &&
        e.target.classList.length > 1
      ) {
        const classes = e.target.classList,
          tier = parseInt(classes[1].replace("tier-", "")),
          num = parseInt(e.target.value);
        expeditor.towns = [tier, num];
      }
    });
  });

  const expLabel = createElementN("span", {
      class: "ui-output",
      style: "width:100%",
    }),
    out = createElementN("output", { id: "expeditor-data" }),
    resultTable = createElementN("table", {
      id: "final-table",
      style: "width:100%",
    });

  out.appendChild(resultTable);
  expLabel.appendChild(out);
  relApp.appendChild(expLabel);
  updateOut();

  relApp.addEventListener("change", () => {
    updateOut();
  });
  relApp.addEventListener("click", () => {
    updateOut();
  });
}

function updateOut() {
  const data = expeditor.calculateEstimates();
  document.getElementById("final-table").innerHTML = relicEstimateTable
    .replace("$inc", data[0])
    .replace("$gc", data[1])
    .replace("$tl", data[2])
    .replace("$tg", data[3])
    .replace("$need", data[4])
    .replace("$toSell", data[5])
    .replace("$comp", data[6]);
}

export function loadBag() {
  const app = document.getElementById("relic-bag");
  const expeditorBag = Renderer.relicInput("user-bag", expeditor.bag);

  expeditorBag.childNodes.forEach((x) => {
    x.addEventListener("change", (e: InputEvent) => {
      const tg = e.target as HTMLInputElement;

      const regexpSize = /item-([0-9]+)/;
      const match = tg.className.match(regexpSize);

      if (match.length > 0) {
        const itemId = parseInt(match[1]),
          rel = <BagRelic>RelicManager.getById(itemId);
        rel.qty = parseInt(tg.value);
        expeditor.bag = rel;
        tg.setAttribute("value", tg.value);
        updateOut();
      }
    });
  });
  app.appendChild(expeditorBag);
}

function CoreRelicInfo(r: CoreSlot[]) {
  const innerTemplate = `<span class='idx-$i item-$id'>
      <img src=$src width=52>
      </span>`;

  for (const v of Tree) {
    let eq = "",
      goalstr = "";
    r.filter((x) => x.slotId.startsWith(v.name)).forEach((rel, i) => {
      eq += innerTemplate
        .replaceAll("$id", rel.equipped.id.toString())
        .replace("$src", rel.equipped.icon)
        .replace("$i", i.toString());
      goalstr += innerTemplate
        .replaceAll("$id", rel.goal.id.toString())
        .replace("$src", rel.goal.icon)
        .replace("$i", i.toString());
    });

    const container = createElementN("span", { class: "relic-type" });
    const relicTree = createElementN("div", { class: `equip relic ${v.name}` }, eq);
    const lb = createElementN(
      "span",
      {},
      `<| equip <img src="${v.icon}"> goal |>`
    );
    const goal = createElementN("div", { class: `goal relic ${v.name}` }, goalstr);
    container.appendChild(relicTree);
    container.appendChild(lb);
    container.appendChild(goal);
    relApp.appendChild(container);
  }
}
