import { exportToCsv } from "../components/csvexport.js";
import {
  newEl,
  createInput,
  storedValue,
  newBtn,
  Input,
} from "../components/helper.js";
import { Beasts, Heroes, Renderer } from "../model/afk.js";
import { AfkObject, Team } from "../model/teams.js";
import { Tree } from "../types/inventory.js";

let MetaTeam = new Team();
const petSelectId = "pet-sele";

export function AttackForm() {
  const formId = "team-set";
  const heroSelectId = "hero-selection";

  const heroForm = document.getElementById(formId);

  const atkContainer = newEl("div", { class: "attack-inputs" });
  const attackForm = newEl("form", { id: "team-attacks-form" });

  const addAttack = newBtn("Add Dmg", "add-attack");
  const csvExport = newBtn("Export", "export-csv");

  atkContainer.appendChild(attackForm);

  attackForm.appendChild(
    newEl("label", { for: "dps", class: "attack-inputs__label" }, "Damage, B.")
  );
  attackForm.appendChild(
    createInput(Input.Number, {
      class: "attack-inputs__input",
      id: "dps",
      step: "1000",
    })
  );
  attackForm.appendChild(addAttack);
  attackForm.appendChild(
    newEl("label", { for: "comm", class: "attack-inputs__label" }, "Comment")
  );
  attackForm.appendChild(
    createInput(Input.Text, { class: "attack-inputs__input", id: "comm" })
  );
  attackForm.appendChild(csvExport);
  atkContainer.addEventListener("change", (x: InputEvent) => {
    const tg = x.target as HTMLInputElement;
    $(tg).attr("value", tg.value);
  });

  let table = `
<table id="dps-table" style="width:100%">
<thead>
<tr>
<th>Team</th>
<th class="fit">Pet</th>
<th>Elder Tree</th> 
<th>Damage</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
`;

  csvExport.addEventListener("click", (e) => {
    const o = MetaTeam.damage.map((x) => [
      MetaTeam.Heroes()
        .map((y) => y.short)
        .join("|"),
      MetaTeam.pet.name,
      MetaTeam.elderTree.map((x) => `${x.name}:${x.value}`).join("|"),
      x[0].toString(),
      x[1].toString(),
    ]);
    exportToCsv("data.csv", o, [
      "Team",
      "Pet",
      "Elder Tree",
      "Damage",
      "Comment",
    ]);
  });

  attackForm.appendChild(
    newEl("output", {
      name: "battle-stat",
      id: "bat-stat",
    })
  );
  jQuery(atkContainer).appendTo("#attack-app");
  jQuery(table).appendTo("#bat-stat");

  const treeDiv = newEl("div", { class: `${formId}-inputs` });

  for (const v of Tree) {
    const lb = newEl("label", { for: `${formId}-input-tree-${v.name}` });
    const inp = createInput(Input.Number, {
      class: `${formId}-inputs-number`,
      id: `${formId}-input-tree-${v.name}`,
      min: "0",
      max: "200",
      value: storedValue(v.name)
        ? (storedValue(v.name) as string)
        : v.value.toString(),
    });
    inp.onchange = updOnChange;
    lb.appendChild(newEl("img", { src: v.icon }));
    lb.appendChild(inp);
    treeDiv.appendChild(lb);
  }

  addAttack.addEventListener("click", (e) => {
    const text = `
    <tr>
    <td>${MetaTeam.Heroes()
      .map((x) => Renderer.Icon(x.icon, x.name))
      .join(" | ")}</td>
      <td>${Renderer.Icon(MetaTeam.pet.icon, MetaTeam.pet.name)}</td>
      <td>${MetaTeam.TreeString()}</td>
      <td>${$("#dps").val()}</td>
      <td>${$("#comm").val()}</td>
      </tr>
      `;
    MetaTeam.makeAttack(
      parseInt($("#dps").val().toString()),
      $("#comm").val().toString()
    );
    $(text).appendTo("#dps-table > tbody");
  });

  const petCheckBoxes = checkBoxSelector(petSelectId, Beasts, petClick);
  const heroselector = checkBoxSelector(heroSelectId, Heroes, heroClick);
  heroselector.addEventListener("click", (x) => {
    const tg = x.target as HTMLInputElement;
    const offElement = tg.offsetParent as HTMLLabelElement;
    const inp = offElement?.control as HTMLInputElement;
    if (MetaTeam.Heroes().length >= 5 && !inp.checked) {
      x.preventDefault();
      x.stopPropagation();
      x.stopImmediatePropagation();
      return false;
    }
  });

  heroForm.appendChild(newEl("h2", {}, "Set Elder Tree"));
  heroForm.appendChild(treeDiv);

  heroForm.appendChild(newEl("h2", {}, "Choose Pet"));
  heroForm.appendChild(petCheckBoxes);
  heroForm.appendChild(newEl("h2", {}, "Choose Team"));
  heroForm.appendChild(heroselector);
  //  ELDER TREE HANDLER
  jQuery(
    `<div class="${formId}-nav">
      <div class="${formId}-button ${formId}-up">+</div>
      <div class="${formId}-button ${formId}-down">-</div>
    </div>`
  ).insertAfter(
    `.${formId} input[type="number"], #${formId} input[type="number"]`
  );

  jQuery(`#${formId} label`).each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(`.${formId}-up`),
      btnDown = spinner.find(`.${formId}-down`),
      min = parseInt(input.attr("min")),
      max = parseInt(input.attr("max"));

    btnUp.on("click", function () {
      const oldValue = parseFloat(input.val().toString());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      input.val(newVal);
      input.trigger("change");
    });

    btnDown.on("click", function () {
      let oldValue = parseFloat(input.val().toString());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      input.val(newVal);
      input.trigger("change");
    });
  });
}

function heroClick(e: InputEvent) {
  const tg = e.target as HTMLInputElement;
  const clickedHero = Heroes.find((x) => x.name.includes(tg.id.substring(7)));
  if (tg.checked) {
    MetaTeam.addToTeam(clickedHero);
  } else {
    MetaTeam.removeHero(clickedHero);
  }
}

function petClick(e: InputEvent) {
  const tg = e.target as HTMLInputElement;
  const petGroup = document.querySelectorAll(`.${petSelectId} input`);
  const clickedPet = Beasts.find((x) => x.name.includes(tg.id.substring(7)));
  petGroup.forEach((x: HTMLInputElement) => {
    if (!x.id.includes(clickedPet.name)) x.checked = false;
  });
  MetaTeam.pet = clickedPet;
}

function checkBoxSelector(
  id: string,
  data: AfkObject[],
  fn: {
    (e: InputEvent): void;
    (e: InputEvent): void;
    (this: GlobalEventHandlers, ev: Event): any;
  }
) {
  const container = newEl("div", { class: id });

  const ul = document.createElement("ul");
  for (const h of data) {
    const li = document.createElement("li");
    const checkBox = createInput(Input.CheckBox, {
      id: `ch-${id.substring(0, 3)}-${h.name}`,
    });
    checkBox.onchange = fn;
    const lb = newEl("label", { for: `ch-${id.substring(0, 3)}-${h.name}` });
    lb.appendChild(newEl("img", { src: h.icon }));
    li.appendChild(checkBox);
    li.appendChild(lb);
    ul.appendChild(li);
  }
  container.appendChild(ul);
  return container;
}

function updOnChange(e: InputEvent) {
  const tg = e.target as HTMLInputElement;
  $(tg).attr("value", tg.value);
  MetaTeam.setElderTree(tg.id.split("-").slice(-1)[0], parseInt(tg.value));
}
