import { expeditor, team } from "../abex.js";
import { elBuilder } from "../components/builder.js";
import { exportToCsv } from "../components/csvexport.js";
import { newBtn, newEl, newIn } from "../components/helper.js";
import { elTag, Input } from "../model/constants.js";
import { Virtues } from "../types/virtue.js";

const outputTableId = "dps-table";

export function AttackForm() {
  const c = "attack-inputs",
    dataColumns = [
      "Team",
      "Pet",
      ...expeditor.DuraTree.map((x) => x.img().outerHTML),
      "Damage",
      "Comment",
    ];

  const addAttack = newBtn("Add Dmg", "add-attack md-button"),
    csvExport = newBtn("Export", "export-csv md-button"),
    retryBtn = newBtn("Retry", "retry-attack md-button"),
    treeDiv = newEl("div", { class: `team-set-inputs` });

  treeDiv.appendChild(team.food.html());
  expeditor.DuraTree.forEach((x) => {
    treeDiv.appendChild(x.html());
  });

  const btnContainer = new elBuilder(elTag.Label)
    .add(addAttack)
    // .add(retryBtn)
      .add(csvExport)
      .html(),
    dpsLabel = new elBuilder(elTag.Label, { for: "dps" }, "Damage, B.")
      .add(
        newIn(Input.Number, { class: `${c}__input`, id: "dps", step: "1000" })
      )
      .add(newEl(elTag.Span, { id: "allowed-retry", class: "calculated" }))
      .html(),
    comLabel = new elBuilder(elTag.Label, { for: "comm" }, "Comment")
      .add(newIn(Input.Text, { class: `${c}__input`, id: "comm" }))
      .add(newEl(elTag.Span, { id: "avg-dps", class: "calculated" }))
      .html(),
    retryLabel = new elBuilder(elTag.Label, { for: "dis-flag" }, "Discarded?")
      .add(newIn(Input.CheckBox, { class: `${c}__input`, id: "dis-flag" }))
      .html();

  const atkF = new elBuilder(elTag.Form, {
    class: "team-set-inputs",
    id: "team-attacks-form",
  })
    .add(dpsLabel)
    .add(comLabel)
    .add(retryLabel)
    .add(btnContainer)
    .html();

  const atkC = new elBuilder(elTag.Div, { class: c })
    .add(newEl("h2", {}, "Set Food & Dura Tree"))
    .add(treeDiv)
    .add(atkF)
    .html();

  document.getElementById("attack-app").appendChild(atkC);
  team.mount("team-set");

  const header = document
    .getElementById("attack-app")
    .appendChild(
      newEl(elTag.Table, {
        id: outputTableId,
        class: "dps",
        style: "width:100%",
      })
    )
    .appendChild(newEl(elTag.Thead))
    .appendChild(newEl(elTag.tr));
  const body = document
    .getElementById("dps-table")
    .appendChild(newEl(elTag.Tbody));
  dataColumns.forEach((x) => header.appendChild(newEl(elTag.th, {}, x)));

  const dpsField = document.getElementById("dps") as HTMLInputElement;
  const commentField = document.getElementById("comm") as HTMLInputElement;
  const discarded = document.getElementById("dis-flag") as HTMLInputElement;

  csvExport.addEventListener("click", (e) => {
    const o = team.damage.map((x) => [
      team.roster.map((y) => y.name).join("|"),
      team.beast.name,
      ...expeditor.DuraTree.map((v) => `${v.value}`),
      x[0].toString(),
      x[1].toString(),
    ]);
    exportToCsv("data.csv", o, dataColumns);
  });

  addAttack.addEventListener("click", (e) => {
    const tree = newEl(elTag.Div);
    expeditor.DuraTree.forEach((x) => {
      tree.appendChild(x.img());
      tree.innerHTML += `:${x.value}`;
    });

    team.appendResultRow(
      body,
      dpsField.valueAsNumber,
      expeditor.DuraTree[Virtues.MIGHT].value,
      expeditor.DuraTree[Virtues.FORTITUDE].value,
      expeditor.DuraTree[Virtues.CELERITY].value,
      expeditor.DuraTree[Virtues.SORCERY].value,
      expeditor.DuraTree[Virtues.SUSTENANCE].value,
      commentField.value,
      discarded.checked
    );
    // let food = document.getElementsByName("team-food")[0] as HTMLInputElement
    // let atkLeft = food.valueAsNumber/BossManager.foodCost
    // if (food.valueAsNumber > BossManager.foodCost && discarded.checked) {
    //    food.value = (food.valueAsNumber - BossManager.retry).toString()
    // }
    //     if (food.valueAsNumber > BossManager.foodCost && !discarded.checked) {
    //    food.value = (food.valueAsNumber - BossManager.foodCost).toString()
    //     }
    
    


  });
}

// TODO
// since all attackrem func merged here. will be great to implement calculation on the end date of season
// function inputChange(e: HTMLInputElement) {
//   if (e.type === "datetime-local") {
//     AbEx.startD = e.valueAsDate;
//   } else {
//     e.setAttribute("value", e.value);
//   }
// }
