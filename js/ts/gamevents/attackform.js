import { exportToCsv } from "../components/ csvexport.js";
import { createElementN, createInput, storedValue, } from "../components/helper.js";
import { Beasts, Heroes, treeBranches } from "../model/afk.js";
import { Team } from "../model/teams.js";
let MetaTeam = new Team();
const formId = "team-set";
const heroSelectId = "hero-selection";
const petSelectId = "pet-sele";
const heroForm = document.getElementById(formId);
const aClsAttack = "attack-inputs";
const atkContainer = createElementN("div", { class: aClsAttack });
const attackForm = createElementN("form", { id: "team-attacks-form" });
atkContainer.appendChild(attackForm);
atkContainer.appendChild(createInput("number", "Damage, B", "", {
    class: `${aClsAttack}__input`,
    name: "Damage",
    id: "dps",
}));
atkContainer.appendChild(createInput("text", "Comment", "", {
    class: `${aClsAttack}__input`,
    name: "Comment",
    id: "comm",
}));
atkContainer.addEventListener("change", (x) => {
    const tg = x.target;
    $(tg).attr("value", tg.value);
});
let table = `
<table id="dps-table" style="width:100%">
<tr>
<th style='width:65%'>Team</th>
<th>Pet</th>
<th style='width:50%'>Elder Tree</th>
<th>Damage</th>
<th>Comment</th>
</tr>
</table>
`;
const btnContainer = createElementN("div", { class: "butt-container" });
const addAttack = createElementN("button", {
    type: "button",
    class: "md-button",
    id: "add-attack",
}, "Add Dmg");
const csvExport = createElementN("button", {
    type: "button",
    class: "md-button",
    id: "export-csv",
}, "Export Data");
btnContainer.appendChild(addAttack);
btnContainer.appendChild(csvExport);
csvExport.addEventListener("click", (e) => {
    exportToCsv("data.csv", MetaTeam.damage.map((x) => [
        MetaTeam.Heroes()
            .map((y) => y.short)
            .join("|"),
        MetaTeam.pet.name,
        MetaTeam.TreeString(),
        x[0],
        x[1],
    ]), ["Team", "Pet", "Elder Tree", "Damage", "Comment"]);
});
attackForm.appendChild(createElementN("output", {
    name: "battle-stat",
    id: "bat-stat",
}));
jQuery(atkContainer).appendTo("#attack-app");
jQuery(table).appendTo("#bat-stat");
atkContainer.appendChild(btnContainer);
const treeDiv = createElementN("div", { class: `${formId}-inputs` });
treeBranches.forEach((x) => {
    const inp = createInput("number", "", `/afk.GG/assets/icons/tree/tree-${x}.png`, {
        class: `${formId}-inputs-number`,
        id: `${formId}-input-tree-${x}`,
        min: "0",
        max: "200",
        value: storedValue(x) ? storedValue(x).toString() : "107",
    });
    inp.onchange = updOnChange;
    treeDiv.appendChild(inp);
});
addAttack.addEventListener("click", (e) => {
    const text = `
    <tr>
    <td>${MetaTeam.Heroes()
        .map((x) => x.name)
        .join(" | ")}</td>
      <td>${MetaTeam.pet.short}</td>
      <td>${MetaTeam.TreeString()}</td>
      <td>${$("#dps").val()}</td>
      <td>${$("#comm").val()}</td>
      </tr>
      `;
    MetaTeam.makeAttack(parseInt($("#dps").val().toString()), $("#comm").val().toString());
    jQuery(text).appendTo("#dps-table");
});
const petCheckBoxes = checkBoxSelector(petSelectId, Beasts, petClick);
const heroselector = checkBoxSelector(heroSelectId, Heroes, heroClick);
heroselector.addEventListener("click", (x) => {
    const tg = x.target;
    const offElement = tg.offsetParent;
    if (MetaTeam.Heroes().length >= 5 && !offElement.control.checked) {
        x.preventDefault();
        x.stopPropagation();
        x.stopImmediatePropagation();
        return false;
    }
});
heroForm.appendChild(createElementN("h2", {}, "Set Elder Tree"));
heroForm.appendChild(treeDiv);
heroForm.appendChild(createElementN("h2", {}, "Choose Pet"));
heroForm.appendChild(petCheckBoxes);
heroForm.appendChild(createElementN("h2", {}, "Choose Team"));
heroForm.appendChild(heroselector);
function heroClick(e) {
    const tg = e.target;
    const clickedHero = Heroes.find((x) => x.name.includes(tg.id.substring(7)));
    if (tg.checked) {
        MetaTeam.addToTeam(clickedHero);
    }
    else {
        MetaTeam.removeHero(clickedHero);
    }
}
function petClick(e) {
    const tg = e.target;
    const petGroup = document.querySelectorAll(`.${petSelectId} input`);
    const clickedPet = Beasts.find((x) => x.name.includes(tg.id.substring(7)));
    petGroup.forEach((x) => {
        if (!x.id.includes(clickedPet.name))
            x.checked = false;
    });
    MetaTeam.pet = clickedPet;
}
function checkBoxSelector(id, data, fn, type = "checkbox") {
    const container = createElementN("div", { class: id });
    const ul = document.createElement("ul");
    for (const h of data) {
        const li = document.createElement("li");
        const checkBox = createInput("checkbox", "", h.icon, { id: `ch-${id.substring(0, 3)}-${h.name}` }, li);
        checkBox.onchange = fn;
        ul.appendChild(checkBox);
    }
    container.appendChild(ul);
    return container;
}
jQuery(`<div class="${formId}-nav">
      <div class="${formId}-button ${formId}-up">+</div>
      <div class="${formId}-button ${formId}-down">-</div>
    </div>`).insertAfter(`.${formId} input[type="number"], #${formId} input[type="number"]`);
jQuery(`#${formId} label`).each(function () {
    var spinner = jQuery(this), input = spinner.find('input[type="number"]'), btnUp = spinner.find(`.${formId}-up`), btnDown = spinner.find(`.${formId}-down`), min = parseInt(input.attr("min")), max = parseInt(input.attr("max"));
    btnUp.on("click", function () {
        const oldValue = parseFloat(input.val().toString());
        if (oldValue >= max) {
            var newVal = oldValue;
        }
        else {
            var newVal = oldValue + 1;
        }
        input.val(newVal);
        input.trigger("change");
    });
    btnDown.on("click", function () {
        let oldValue = parseFloat(input.val().toString());
        if (oldValue <= min) {
            var newVal = oldValue;
        }
        else {
            var newVal = oldValue - 1;
        }
        input.val(newVal);
        input.trigger("change");
    });
});
function updOnChange(e) {
    const tg = e.target;
    $(tg).attr("value", tg.value);
    MetaTeam.setElderTree(tg.id.split("-").slice(-1)[0], parseInt(tg.value));
}
