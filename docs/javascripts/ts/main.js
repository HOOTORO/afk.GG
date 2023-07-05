import { loadRewards, modeRewards, rewards } from "./components/dataloader.js";
import { columnData } from "./components/gsheets.js";
import { domElWithProperties, makeSelect, populateStorage, rangeSlide, setApp, } from "./components/helper.js";
import { makeOut, updateResourceBox } from "./components/output.js";
import { ValueModes, userFields, verb } from "./constants.js";
import { User } from "./types.js";
export const L = (x) => {
    if (verb) {
        console.log(x);
    }
};
L(`[Extended log] => ${verb}`);
L(`Looking for entry tag...`);
export const app = document.getElementById("app");
const user = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser();
startApp();
function initUser() {
    L(`Init user...`);
    for (let inputField of userFields) {
        if (!localStorage.getItem(inputField.name)) {
            const selected = $(inputField.name).find(":selected").get(0);
            populateStorage(inputField.name, selected?.innerText);
        }
        else {
            setApp(inputField.name);
        }
    }
}
function startApp() {
    L("launch app...");
    app.appendChild(makeOut());
    drawInputs().catch((x) => L(`Promise rejected => ${x}`));
    L("app started");
}
async function drawInputs() {
    let inputForm = domElWithProperties("form", [{ n: "id", v: "a-form" }]);
    modeRewards().forEach((x) => {
        const mode = ValueModes.emuns().find((s) => s.table === x.mode);
        x.table
            .then((t) => {
            const container = domElWithProperties("div", [
                { n: "class", v: "select-container" },
            ]), label = document.createElement("h4"), s = makeSelect(mode.id, columnData(0, t));
            label.innerText = mode.id;
            container.appendChild(s);
            container.insertBefore(label, s);
            inputForm.append(container);
            loadRewards(x.mode, t);
        })
            .then(() => app.appendChild(inputForm))
            .catch((x) => L(`Promise rejected${x.status}`))
            .finally(() => {
            setTimeout(() => {
                app.dispatchEvent(new InputEvent("change"));
            }, 2000);
        });
    });
}
app.addEventListener("change", (x) => {
    const tg = x.target;
    user.loadLocal();
    if (tg.value && tg.type !== "range") {
        const reward = rewards.find((g) => g.mode === ValueModes.gMode(tg.id) && g.rank === tg.value);
        populateStorage(tg.id, tg.value);
        user.reward = reward;
        user.calc();
    }
    if (tg instanceof HTMLInputElement && tg.type === "range") {
        rangeSlide(tg.value, user);
    }
    else if (user) {
        const weeks = localStorage.getItem("rangeValue");
        updateResourceBox(user.income, parseInt(weeks));
    }
});
export { user };
