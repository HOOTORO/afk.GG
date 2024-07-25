import { newEl } from "../components/helper.js";
import { elTag, relicEstimateTable } from "../model/constants.js";
import { expeditor } from "../abex.js";

const relApp = document.getElementById("relic-app");

export function RelicEstimator() {
  const expLabel = newEl("span", {
      class: "ui-output",
      style: "width:100%",
    }),
    out = newEl("output", { id: "expeditor-data" }),
    resultTable = newEl("table", {
      id: "final-table",
      style: "width:100%",
    }),
    userInput = newEl(
      "div",
      { class: "ui-input" },
      `<span class="ui-input__label">Essence & Towns</span>`
    ),
    core = expeditor.inventory.html();

  userInput.appendChild(expeditor.essence.html());

  expeditor.captured.forEach((s) => {
    userInput.appendChild(s.html());
  });

  core.appendChild(userInput);
  relApp.appendChild(core);

  out.appendChild(resultTable);
  expLabel.appendChild(out);
  relApp.appendChild(expLabel);
}

export function loadBag() {
  const app = document.getElementById("relic-bag");

  const userBag = newEl(elTag.Div, { class: "user-bag" });
  expeditor.inventory.bag.forEach((x) => {
    const html = x.HTMLInput();
    // TODO:
    // * well, poor perform
    // html.insertBefore(
    //   newEl(
    //     elTag.Div,
    //     { class: "relic-tooltip" },
    //     expeditor.inventory.componentsDia(x).outerHTML
    //   ),
    //   html.lastChild
    // );
    userBag.appendChild(html);
  });
  app.appendChild(userBag);
  updateTableData();
}

export function updateTableData() {
  if (!relApp) {
    return;
  }
  document.getElementById("final-table").innerHTML = relicEstimateTable
    .replace("$inc", expeditor.EssenceIncome().toString())
    .replace("$tier", expeditor.DropTiers())
    .replace("$tw", expeditor.TotalCaptured())
    .replace("$gc", expeditor.MissEssence().toString())
    .replace(
      "$tl",
      `${Math.floor(expeditor.Timeleft() / 24)} d. ${Math.round(
        expeditor.Timeleft() % 24
      )} h.`
    )
    .replace("$tg", expeditor.ReadyToSet())
    .replace("$drop", expeditor.DropTime())
    .replace("$toSell", expeditor.ToSell());
}
