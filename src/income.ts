import {loadRewards, modeRewards, rewards} from "./components/dataloader.js";
import {columnData} from "./components/gsheets.js";
import {createElementN, createSelectList, populateStorage, rangeSlide} from "./components/helper.js";
import {makeOut, updateResourceBox} from "./components/output.js";
import {user} from "./main.js";
import {ValueModes} from "./model/constants.js";
import {Gsheet, RankReward} from "./model/types.js";

export const app = document.getElementById("app");

export function startApp() {
  app.appendChild(makeOut());
  drawInputs().catch((x) => console.log(`Promise rejected => ${x}`));
}

async function drawInputs() {
  let inputForm = createElementN("form", {id: "a-form"});

  modeRewards().forEach((x) => {
    const mode = ValueModes.emuns().find((s) => s.table === x.mode);
    x.table
      .then((t: Gsheet) => {
        const container = createElementN("div", {
            class: "select-container",
          }),
          label = document.createElement("h4"),
          s = createSelectList(mode.id, columnData(0, t));

        label.innerText = mode.id;
        container.appendChild(s);
        container.insertBefore(label, s);
        inputForm.append(container);
        loadRewards(x.mode, t);
      })
      .then(() => app.appendChild(inputForm))
      .catch((x: PromiseRejectedResult) => console.log(`Promise rejected${x.status}`))
      .finally(() => {
        setTimeout(() => {
          app.dispatchEvent(new InputEvent("change"));
        }, 2000);
      });
  });
  app.addEventListener("change", (x: InputEvent) => {
    const tg = x.target as HTMLSelectElement;
    user.loadLocal();
    if (tg.value && tg.type !== "range") {
      const reward = rewards.find(
        (g: RankReward) =>
          g.mode === ValueModes.gMode(tg.id) && g.rank === tg.value
      );
      populateStorage(tg.id, tg.value);
      user.reward = reward;
      user.calc();
    }
    if (tg instanceof HTMLInputElement && tg.type /// tab |range") {
      rangeSlide(tg.value, user);
    } else if (user) {
      const weeks = parseInt(localStorage.getItem("rangeValue"));
      if (weeks > 0) {
        updateResourceBox(user.income, weeks);
      } else {
        updateResourceBox(user.income);
      }
    }
  });
}

