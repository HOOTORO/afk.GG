import { createElementN, createInput, storedValue, } from "../components/helper.js";
import { relicType, relics } from "../model/afk.js";
import { expeditor } from "./abex.js";
console.log("WE RE RELIC");
const relApp = document.getElementById("relic-app");
const resultHeadBody = `
  <thead>
    <tr>
      <th align="center">Expeditor</th>
      <th align="left">Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Income</td>
      <td align="left">$inc</td>
    </tr>
    <tr>
      <td align="center">Goal Cost</td>
      <td align="left">$gc</td>
    </tr>
    <tr>
      <td align="center">Goal timeleft</td>
      <td align="left">$tl</td>
    </tr>    
    <tr>
      <td align="center" colspan="2">Bag</td>
    </tr>
      <tr>
      <td align="center">Relics</td>
      <td align="center">$tg</td>
      </tr>
      <tr>
      <td align="center">Used in</td>
      <td align="center">$need</td>
      </tr>
      <tr>
      <td align="center">Sell</td>
      <td align="center">$toSell</td>
      </tr>
  </tbody>
`;
export function runRelic() {
    for (const item of relicType) {
        let equippedRelics = CoreRelicInfo(item, "equip"), planned = CoreRelicInfo(item, "goal"), lb = createElementN("span", {}, "equip 🢁 | 🡻 goal");
        const container = createElementN("span", { class: "relic-type" }, item);
        container.innerText = item;
        container.appendChild(equippedRelics);
        container.appendChild(lb);
        container.appendChild(planned);
        relApp.appendChild(container);
    }
    const userInput = createElementN("div", { class: "ui-input" }, "Essence & Captured Towns"), ess = createInput("number", "", "/afk.GG/assets/ae/slg_coin.png", {
        value: expeditor.essence ? expeditor.essence.toString() : "0",
        min: "0",
        size: "10",
    });
    userInput.appendChild(ess);
    [5, 6, 7, 8].forEach((x) => {
        userInput.appendChild(createInput("number", ``, `/afk.GG/assets/ae/ranks/icon_level${x}.png`, {
            min: "0",
            max: "40",
            value: expeditor.towns[x] ? expeditor.towns[x].toString() : "0",
            class: `town tier-${x}`,
        }));
    });
    relApp.appendChild(userInput);
    const relicPics = document.querySelectorAll(".relic-type"), townsInputs = document.querySelectorAll(".town");
    ess.addEventListener("change", (e) => {
        if (e.target instanceof HTMLInputElement) {
            const num = parseInt(e.target.value);
            expeditor.essence = num;
        }
    });
    relicPics.forEach((x) => {
        x.addEventListener("click", (e) => {
            if (e.target instanceof HTMLImageElement) {
                const containerClasses = e.target.parentElement?.className.split(" "), topLevelContainerClasses = e.target.parentElement?.parentElement, idx = parseInt(containerClasses[0].replace("idx-", "")), relId = parseInt(containerClasses[1].replace("item-", "")), type = topLevelContainerClasses.className.split(" ")[0], branch = topLevelContainerClasses.className.split(" ")[2];
                const getValue = function (t) {
                    return RelicInfo(expeditor.NextLevelRelic(branch, idx, t === "goal"));
                };
                const value = getValue(type);
                if (relId && value) {
                    const temp = topLevelContainerClasses.parentElement.querySelectorAll(`.item-${relId}`);
                    if (type === "equip") {
                        for (const ite of temp) {
                            ite.firstElementChild.setAttribute("src", value.icon);
                            ite.className = `idx-${idx} item-${value.id}`;
                        }
                    }
                    else {
                        e.target.setAttribute("src", value.icon);
                        e.target.parentElement.className = `idx-${idx} item-${value.id}`;
                    }
                }
            }
        });
    });
    townsInputs.forEach((t) => {
        t.addEventListener("change", (e) => {
            if (e.target instanceof HTMLInputElement &&
                e.target.classList &&
                e.target.classList.length > 1) {
                const classes = e.target.classList, tier = parseInt(classes[1].replace("tier-", "")), num = parseInt(e.target.value);
                expeditor.towns = [tier, num];
            }
        });
    });
    const expLabel = createElementN("span", { class: "ui-output" }), out = createElementN("output", { id: "expeditor-data" }), resultTable = createElementN("table", {
        id: "final-table",
        class: "expeditor-table",
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
    const data = expeditor.RepresentYourSelf();
    document.getElementById("final-table").innerHTML = resultHeadBody
        .replace("$inc", data[0].toString())
        .replace("$gc", data[1].toString())
        .replace("$tl", `${data[2]}h`)
        .replace("$tg", data[3].toString())
        .replace("$need", data[4].toString())
        .replace("$toSell", data[5]?.toString());
}
export function loadBag() {
    const bag = document.getElementById("relic-bag");
    relics.forEach((x) => {
        const val = expeditor._bag[x.id] ? expeditor._bag[x.id] : 0;
        const el = createElementN("span", {}, `
      <img src=${x.icon} alt=${x.name} width=42></img>
      <input type="number" class="user-bag item-${x.id}" min=0 value="${val}">
      `);
        bag?.appendChild(el);
    });
    const inputs = document.querySelectorAll(".user-bag");
    inputs.forEach((x) => {
        x.addEventListener("change", (e) => {
            const tg = e.target;
            const regexpSize = /item-([0-9]+)/;
            const match = tg.className.match(regexpSize);
            if (match.length > 0) {
                const itemId = parseInt(match[1]), val = parseInt(tg.value);
                expeditor._bag[itemId] = val;
                storedValue("bag", JSON.stringify(expeditor._bag));
                tg.setAttribute("value", tg.value);
                console.log(`relic in the bag! \n\t => ${itemId} \n val => ${val}`);
                console.log(expeditor._bag);
                updateOut();
            }
        });
    });
}
function CoreRelicInfo(branch, type) {
    let r = expeditor.relic.equip[branch];
    if (type === "goal") {
        r = expeditor.relic.goal[branch];
    }
    const innerSpan = `<span class='idx-$i item-$id'>
      <img src=$src width=52>
      </span>`;
    let inner = "";
    for (let i = 0; i < 6; i++) {
        inner += innerSpan
            .replaceAll("$id", RelicInfo(r[i])?.id.toString())
            .replace("$src", RelicInfo(r[i])?.icon)
            .replace("$i", i.toString());
    }
    const relicTree = createElementN("div", { class: `${type} relic ${branch}` }, inner);
    return relicTree;
}
function RelicInfo(n) {
    return relics.find((x) => x.id === n);
}
