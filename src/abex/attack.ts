import { expeditor, team } from "../abex.js";
import { elBuilder } from "../components/builder.js";
import { exportToCsv } from "../components/csvexport.js";
import { newEl, newIn, newBtn } from "../components/helper.js";
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
    treeDiv = newEl("div", { class: `team-set-inputs` });

  treeDiv.appendChild(expeditor.stamina.html());
  expeditor.DuraTree.forEach((x) => {
    treeDiv.appendChild(x.html());
  });

  const btnContainer = new elBuilder(elTag.Label)
      .add(addAttack)
      .add(csvExport)
      .html(),
    dpsLabel = new elBuilder(elTag.Label, { for: "dps" })
      .add(
        newIn(Input.Number, { class: `${c}__input`, id: "dps", step: "1000" })
      )
      .html(),
    comLabel = new elBuilder(elTag.Label, { for: "comm" })
      .add(newIn(Input.Text, { class: `${c}__input`, id: "comm" }))
      .html();
  dpsLabel.innerHTML += "Damage, B.";
  comLabel.innerHTML += "Comment";

  const atkF = new elBuilder(elTag.Form, {
    class: "team-set-inputs",
    id: "team-attacks-form",
  })
    .add(dpsLabel)
    .add(comLabel)
    .add(btnContainer)
    .html();

  const atkC = new elBuilder(elTag.Div, { class: c })
    .add(atkF)
    .add(newEl("h2", {}, "Set Food & Dura Tree"))
    .add(treeDiv)
    .html();

  document.getElementById("attack-app").appendChild(atkC);
  team.mount("team-set");

  const header = document
    .getElementById("team-attacks-form")
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
      parseInt($("#dps").val().toString()),
      expeditor.DuraTree[Virtues.MIGHT].value,
      expeditor.DuraTree[Virtues.FORTITUDE].value,
      expeditor.DuraTree[Virtues.CELERITY].value,
      expeditor.DuraTree[Virtues.SORCERY].value,
      expeditor.DuraTree[Virtues.SUSTENANCE].value,
      $("#comm").val().toString()
    );
  });
}
