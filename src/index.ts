// // import {
//     domElWithProperties,
//     populateStorage,
//     setApp,
// } from "components/helper";
// // import { makeSelect } from "components/input/simpleSelect";
// // import { makeOut } from "components/output";
// // import * as loader from "./components/dataloader";
// // import * as gs from "./components/gsheets";
// // import { sources, userFields, verb } from "./constants";
// // import * as lo from "./log";
// const L = require("./log.ts")

const L = (x) => {
    if (verb) {
        console.log(x);
    }
};

L(`[Extended log] => ${verb}`);
L(`Looking for entry tag...`);
const app = document.getElementById("app");
const user: User = initUser();
const resources: BaseResources = {};
initBaseResources(resources);
const rewards: ModeRewards = {};
startApp();

function initUser() {
    L(`Init user...`);
    const u: User = {};
    for (let inputField of userFields) {
        if (!localStorage.getItem(inputField.name)) {
            const selected = $(inputField.name).find(":selected").get(0);
            u[gMode(inputField.name)].rank = selected?.innerText;
            populateStorage(inputField.name, selected?.innerText);
        } else {
            setApp(inputField.name);
        }
    }
    return u;
}

function startApp() {
    L("launch app...");
    drawInputs().catch((x) => L(`Promise rejected => ${x}`));
}

async function drawInputs() {
    let inputForm = domElWithProperties("form", [{ n: "id", v: "a-form" }]);

    modeRewards().forEach((x) => {
        const mode = sources.find((s) => s.tableName === x.mode);
        x.table
            .then((t) => {
                L(t);
                const container = domElWithProperties("div", [
                        { n: "class", v: "select-container" },
                    ]),
                    label = document.createElement("h4"),
                    s = makeSelect(mode.id, columnData(0, t));

                label.innerText = mode.label;
                container.appendChild(s);
                container.insertBefore(label, s);
                inputForm.append(container);
                loadRewards(x.mode, t);
            })
            .then(() => app.appendChild(inputForm))
            .catch((x) => L(`Promise rejected${x}`))
            // .then(() => app.appendChild(makeOut()))
            .finally(() => L(`Inputs done`));
    });
    setTimeout(() => app.appendChild(makeOut()), 2000);
}
