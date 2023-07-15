import { exportToCsv } from "../components/ csvexport.js";
import { createElementN, createInput, createSelectList, } from "../components/helper.js";
import { Beasts, Heroes } from "../model/afk.js";
import { Team } from "../model/teams.js";
import { Ascension, Engravings, Furniture, Signature } from "./abexvars.js";
let MetaTeam = new Team([]);
const formId = "team-set";
const heroForm = document.getElementById(formId);
const tree = ["might", "tank", "mage", "ranger", "support"];
const pet = createElementN("div", { class: `${formId}-pet` }, "Beast:");
const rcLevel = createInput("number", "RC Level: ", null, {
    id: "rc",
    class: `${formId}-inputs-number`,
    min: "500",
    max: "950",
    value: "800",
});
const aClsAtack = "attack-inputs";
const atkContainer = createElementN("div", { class: aClsAtack });
const attackForm = createElementN("form", { id: "team-attacks-form" });
atkContainer.appendChild(attackForm);
atkContainer.appendChild(createInput("number", "Damage, B", "", {
    class: `${aClsAtack}__input`,
    name: "Damage",
    id: "dps",
}));
atkContainer.appendChild(createInput("text", "Comment", "", {
    class: `${aClsAtack}__input`,
    name: "Comment",
    id: "comm",
}));
atkContainer.addEventListener("change", (x) => {
    const tg = x.target;
    $(tg).attr("value", tg.value);
    console.log(tg);
});
const addAttack = createElementN("button", {
    type: "button",
    class: "md-button",
    id: "add-attack",
}, "Append Btl.Damage");
let table = `
  <table id="dps-table" style="width:100%">
  <tr>
    <th>Team</th>
    <th>Damage</th>
    <th>Comment</th>
  </tr>
</table>
`;
attackForm.appendChild(addAttack);
atkContainer.appendChild(createElementN("output", {
    name: "battle-stat",
    id: "bat-stat",
}));
jQuery(atkContainer).appendTo("#attack-app");
jQuery(table).appendTo("#bat-stat");
const treeDiv = createElementN("div", { class: `${formId}-inputs` }, "Elder Tree:");
const petselect = createSelectList("team-pet-select", Beasts.map((x) => x.name));
MetaTeam.pet = Beasts.find((x) => (x.name = petselect.selectedOptions.item(0).value));
petselect.addEventListener("change", (x) => {
    const tg = x.target;
    const op = tg.value;
    tg.querySelector("option[selected]").removeAttribute("selected");
    tg.querySelector(`option[value*="${op}"]`).setAttribute("selected", "");
    MetaTeam.pet = Beasts.find((x) => x.name === op);
});
pet.appendChild(petselect);
tree.forEach((x) => {
    treeDiv.appendChild(createInput("number", "", `/afk.GG/assets/icons/tree/tree-${x}.png`, {
        class: `${formId}-inputs-number`,
        id: `${formId}-input-tree-${x}`,
        min: "107",
        max: "200",
        value: "107",
    }));
});
heroForm.appendChild(rcLevel);
heroForm.appendChild(pet);
heroForm.appendChild(treeDiv);
const fields = [
    ["team-member-hero-select", Object.values(Heroes).map((x) => x.name)],
    ["team-member-asc-select", Ascension],
    ["team-member-si-select", Signature],
    ["team-member-fu-select", Furniture],
    ["team-member-eng-select", Engravings],
];
const xport = createElementN("button", {
    type: "button",
    class: "md-button",
    id: "export-csv",
}, "Export Data");
const sub = createElementN("button", {
    type: "button",
    class: "md-button",
    id: "submit-hero",
}, "Add to team");
const clear = createElementN("button", {
    type: "button",
    class: "md-button",
    id: "clear-heroes",
}, "Clear Form");
sub.addEventListener("click", (e) => {
    console.log(e);
    addMemember();
});
xport.addEventListener("click", (e) => {
    exportToCsv("data.csv", MetaTeam.damage.map((x) => [
        MetaTeam.Heroes()
            .map((y) => y.short)
            .join("|"),
        MetaTeam.pet.name,
        x[0],
        x[1],
    ]), ["Team", "Pet", "Damage", "Comment"]);
});
addAttack.addEventListener("click", (e) => {
    console.log(e);
    console.log(`dps => ${$("#dps").val()} \ncomment => ${$("#comm").val()}`);
    const text = `
  <tr>
    <td>${MetaTeam.Heroes()
        .map((x) => x.short)
        .join("|")}</td>
    <td>${$("#dps").val()}</td>
    <td>${$("#comm").val()}</td>
  </tr>
  `;
    MetaTeam.makeAttack(parseInt($("#dps").val().toString()), $("#comm").val().toString());
    jQuery(text).appendTo("#dps-table");
});
clear.addEventListener("click", (x) => {
    const list = document.querySelector(".team-formation ol");
    list.innerHTML = "";
    MetaTeam = new Team([]);
    console.log("CLEARED");
});
fields.forEach((v) => {
    const heroption = createSelectList(v[0], v[1]);
    heroForm.appendChild(heroption);
    heroForm.addEventListener("change", (x) => {
        const tg = x.target;
        const op = tg.value;
        tg.querySelector("option[selected]").removeAttribute("selected");
        tg.querySelector(`option[value*="${op}"]`).setAttribute("selected", "");
        if (tg.getAttribute("aaaa")) {
        }
    });
});
const controlBtnContainer = createElementN("div", { class: "control btn" });
controlBtnContainer.appendChild(sub);
controlBtnContainer.appendChild(clear);
controlBtnContainer.appendChild(xport);
heroForm.appendChild(controlBtnContainer);
jQuery(`<div class="${formId}-nav">
      <div class="${formId}-button ${formId}-up">+</div>
      <div class="${formId}-button ${formId}-down">-</div>
    </div>`).insertAfter(`.${formId} input, #${formId} input`);
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
        var oldValue = parseFloat(input.val().toString());
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
jQuery(`
<form id="team-attacks-add-member">
  <output class="team-formation">
    <ol></ol>
  </output>
</form>;
`).insertAfter(controlBtnContainer);
console.log(MetaTeam);
export function addMemember() {
    const current = getCurrentHero();
    if (MetaTeam.Heroes().findIndex((x) => x.name === current.name) === -1 &&
        MetaTeam._len < 5) {
        const pos = MetaTeam._len + 1;
        MetaTeam.setHero(pos, current);
        const parent = document.querySelector(".team-formation ol");
        const li = document.createElement("li");
        const hero = heroF(current, pos);
        li.appendChild(hero);
        parent.appendChild(li);
    }
    else {
        console.log(`Hero exist or list is full`);
    }
}
function heroF(h, p) {
    const wrap = document.createElement("div");
    wrap.id = `team-member-${p} members`;
    for (const [k, v] of Object.entries(h)) {
        const fi = document.createElement("span");
        fi.className = `${k} member`;
        wrap.appendChild(fi);
        fi.innerText = v.toString();
    }
    return wrap;
}
function getSelectedById(id) {
    return document.getElementById(id).querySelector("option[selected]")
        .innerHTML;
}
function getCurrentHero() {
    const h = Heroes.find((x) => x.name === getSelectedById("team-member-hero-select"));
    return {
        name: getSelectedById("team-member-hero-select"),
        short: h.short,
        asc: getSelectedById("team-member-asc-select"),
        si: getSelectedById("team-member-si-select"),
        fu: getSelectedById("team-member-fu-select"),
        eng: getSelectedById("team-member-eng-select"),
    };
}
