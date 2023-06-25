var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const allRes = [
    "dia",
    "bait",
    "redc",
    "yells",
    "emblcc",
    "timee",
    "stars",
    "poe",
    "dust",
    "twise",
    "mythfs",
    "secrs",
];
var GameMode;
(function (GameMode) {
    GameMode["CR"] = "CR";
    GameMode["TS"] = "TS";
    GameMode["NC"] = "NC";
    GameMode["all"] = "all";
})(GameMode || (GameMode = {}));
const verb = true;
const xh = `
    <div>
        <span id="rangeValue">1 week</span>
        <input class="range" type="range" name="times" value="1" min="1" max="52" onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)" list="values" />
<datalist id="values">
`;
const leftover = `
</datalist>
    </div>
`;
const userFields = [
    { name: "cursed-realm", type: "select", src: "gsheet" },
    { name: "treasure-scramble", type: "select", src: "gsheet" },
    { name: "nightmare-corridor", type: "select", src: "gsheet" },
];
const sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const query = encodeURIComponent("Select *");
const url = function (x) {
    return `${base}&sheet=${x}&tq=${query}`;
};
const sources = [
    {
        id: "cursed-realm",
        label: "Cursed Realm",
        tableName: "CR",
        period: 7,
        display: true,
    },
    {
        id: "treasure-scramble",
        label: "Treasure Scramble",
        tableName: "TS",
        period: 7,
        display: true,
    },
    {
        id: "nightmare-corridor",
        label: "Nightmare Corridor",
        tableName: "NC",
        period: 7,
        display: true,
    },
    {
        id: "afk-income",
        label: "Base AFK Income",
        tableName: "AFK",
        period: 1 / 24,
        display: false,
    },
];
const tLoadedEvent = new Event("tableready");
$(document).on("change", "select", function (x) {
    const changedValue = $(x.target).find(":selected").val();
    L(`[Events]|> Changing ${x.target.id}, new value => ${changedValue}`);
    $("#" + x.target.id + " option[selected]").each(function () {
        this.removeAttribute("selected");
    });
    $(x.target).find(":selected").attr("selected", "");
    populateStorage(x.target.id, changedValue);
    const rewrd = rewards.find((g) => g.mode === gMode(x.target.id) && g.rank === changedValue);
    user.reward = rewrd;
    LCD(`User =>`);
    L(user);
    user.calc();
    updateResourceBox(user.income);
});
const L = (x) => {
    if (verb) {
        console.log(x);
    }
};
class User {
    constructor(sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY") {
        this.spreadSheetId = sheetId;
        this.leaderboard = [];
        this.income = allRes.map((v) => generateAFKResObj(v));
    }
    set reward(val) {
        if (!val)
            return;
        const existingResult = this.leaderboard.find((x) => x.mode === (val === null || val === void 0 ? void 0 : val.mode));
        if (!existingResult) {
            this.leaderboard.push(val);
        }
        else {
            existingResult.rank = val.rank;
            existingResult.rewards = val === null || val === void 0 ? void 0 : val.rewards;
        }
    }
    calc() {
        this.income = allRes.map((v) => generateAFKResObj(v));
        this.leaderboard.forEach((x) => {
            x.rewards.forEach((r) => {
                const ex = this.income.findIndex((k) => k.type === r.type);
                if (ex > -1) {
                    this.income[ex].amount += r.amount;
                }
            });
        });
    }
}
L(`[Extended log] => ${verb}`);
L(`Looking for entry tag...`);
const app = document.getElementById("app");
let rewards = [];
const user = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser(user);
startApp();
setTimeout(() => L(rewards), 2000);
function initUser(u) {
    L(`Init user...`);
    for (let inputField of userFields) {
        if (!localStorage.getItem(inputField.name)) {
            const selected = $(inputField.name).find(":selected").get(0);
            populateStorage(inputField.name, selected === null || selected === void 0 ? void 0 : selected.innerText);
        }
        else {
            setApp(inputField.name);
        }
    }
    return u;
}
function startApp() {
    L("launch app...");
    drawInputs().catch((x) => L(`Promise rejected => ${x}`));
    L("app started");
}
function drawInputs() {
    return __awaiter(this, void 0, void 0, function* () {
        let inputForm = domElWithProperties("form", [{ n: "id", v: "a-form" }]);
        modeRewards().forEach((x) => {
            const mode = sources.find((s) => s.tableName === x.mode);
            x.table
                .then((t) => {
                const container = domElWithProperties("div", [
                    { n: "class", v: "select-container" },
                ]), label = document.createElement("h4"), s = makeSelect(mode.id, columnData(0, t));
                label.innerText = mode.label;
                container.appendChild(s);
                container.insertBefore(label, s);
                inputForm.append(container);
                loadRewards(x.mode, t).forEach((r) => rewards.push({
                    mode: x.mode,
                    rank: r.rank,
                    rewards: r.rewards.filter((h) => h.amount > 0),
                }));
            })
                .then(() => app.appendChild(inputForm))
                .catch((x) => L(`Promise rejected${x}`))
                .finally(() => {
                L(`Inputs done`);
            });
        });
        setTimeout(() => {
            app.appendChild(makeOut());
            user.calc();
            $("select-container").trigger("change");
        }, 2000);
    });
}
const LC = (x) => {
    L(`⬇︎[COMPONENT]⬇︎\n ${x}`);
};
const LG = (x) => {
    L(`⬇︎[GSHEET]⬇︎\n${x}`);
};
const LCD = (x) => {
    LC(`<dataloader> -> ${x}`);
};
class BaseResource {
}
class BaseResQty extends BaseResource {
}
function modeRewards() {
    const modes = [GameMode.CR, GameMode.TS, GameMode.NC];
    return modes.map((x) => {
        return {
            mode: x,
            table: fetchTableData(x),
        };
    });
}
function loadRewards(gm, gt) {
    return gt.rows.map((v) => {
        const rank = v.c[0].v, pairs = v.c
            .slice(1, v.c.length)
            .map((v, i) => {
            const col1rank = gt.cols[i + 1].label, qty = v ? v.v : 0;
            return {
                type: col1rank,
                label: col1rank,
                img: `../../../assets/icons/s/${col1rank}.png`,
                amount: qty,
            };
        });
        return { rank: rank, rewards: pairs };
    });
}
function fetchTableData(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url(tableName));
        const text = yield response.text();
        const json = JSON.parse(text.substring(47).slice(0, -2));
        let x = {
            cols: json.table.cols,
            rows: json.table.rows,
        };
        app.dispatchEvent(tLoadedEvent);
        return x;
    });
}
function headers(t) {
    return t.cols.map((x) => {
        return { id: CharIdToNumber(x.id), label: x.label };
    });
}
function columnData(n, t) {
    return t.rows.map((x) => x.c[n].v);
}
function CharIdToNumber(n) {
    const input = n.toUpperCase().charCodeAt(0), ACode = 65, ZCode = 90;
    if (input < ACode || input > ZCode) {
        throw new Error("Bad Character");
    }
    return input - ACode + 1;
}
function tableObjects(table) {
    return table.rows.map((el) => {
        return headers(table).map((h) => {
            return { obj: h.label, value: el.c[h.id].v };
        });
    });
}
function generateAFKResObj(x) {
    const gid = x.toLowerCase().replace(/ /g, "-"), short = x
        .split(" ")
        .map((v, i) => {
        if (i > 0) {
            return v.charAt(0).toLowerCase();
        }
        else {
            return v.toLowerCase().substring(0, 4);
        }
    })
        .join("");
    const br = {
        type: gid,
        label: short,
        img: `../../../assets/icons/s/${short}.png`,
        amount: 0,
    };
    return br;
}
const gMode = (x) => {
    const source = sources.find((y) => y.id === x || y.label === x || y.tableName === x);
    if (!source) {
        throw new Error("Unknown Source Mode");
    }
    return Object.values(GameMode).find((y) => y === source.tableName);
};
function setApp(key) {
    const storedVal = localStorage.getItem(key);
    $(`#${key} option[value="${storedVal}"]`).first().attr("selected", "");
}
function populateStorage(key, value) {
    if (key && value) {
        localStorage.setItem(key, value);
        setApp(key);
    }
}
function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
function chainDomElement(tags) {
    let parentEl = document.createElement(tags[0]);
    tags.forEach((tag) => parentEl.appendChild(document.createElement(tag)));
    return parentEl;
}
function domElWithProperties(tag, props) {
    const doc = document.createElement(tag);
    props.forEach((v) => doc.setAttribute(v.n, v.v));
    return doc;
}
function weekLabels(n, stops) {
    var _a;
    let html = "";
    for (let i = 1; i <= n; i++) {
        if (stops.some((v) => v.n === i)) {
            html += `<option value="${i.toString()}" label="${(_a = stops.find((v) => v.n === i)) === null || _a === void 0 ? void 0 : _a.desc}"></option>`;
        }
        else {
            html += `<option value="${i.toString()}" label=""></option>`;
        }
    }
    return html;
}
function rangeSlide(value) {
    document.getElementById("rangeValue").innerHTML = value + " weeks";
    $(this).attr("value", value.toString());
    populateStorage("rangeValue", value);
    updateResourceBox(user.income, value);
}
function radioGroups(opts) {
    const container = document.createElement("div");
    container.id = "mv";
    for (let row of opts) {
        const form = document.createElement("form"), wrap = document.createElement("div");
        form.id = `misty-row-${row.id}`;
        wrap.className = "misty-group";
        for (let choice of row.res) {
            const input = `<input type="radio" id="misty-ch-${row.id}-${choice.type}" name="selector">
                            <label for="misty-ch-${row.id}-${choice.type}">
                                ${choice.amount}
                                <img src="../../assets/icons/s/${choice.type}.png" width="24"></label>
                            </label>`;
            wrap.innerHTML += input;
        }
        container.appendChild(form.appendChild(wrap));
    }
    return container;
}
const radio = `
<form>
 <div class="misty-group">
<input type="radio" id="option-one" name="selector"><label for="option-one">One</label>
   <input type="radio" id="option-two" name="selector"><label for="option-two">Two</label>
   <input type="radio" id="option-three" name="selector"><label for="option-three"><img src="https://uberstrategist.com/wp-content/uploads/2023/04/unnamed-20.png" width="24"></label>
  </div>
   </form>
<form>
   <div class="misty-group">
<input type="radio" id="option-one1" name="selector"><label for="option-one1">One</label>
     <input type="radio" id="option-two1" name="selector"><label for="option-two1">Two</label>
     <input type="radio" id="option-three1" name="selector"><label for="option-three1"><img src="https://uberstrategist.com/wp-content/uploads/2023/04/unnamed-20.png" width="24"></label>
  </div>
   </form>

`;
function makeOut() {
    const out = document.createElement("div"), output = document.createElement("output"), datalist = xh +
        weekLabels(52, [
            { n: 1, desc: "↑ нед." },
            { n: 2, desc: "↑ ~1 мес.   " },
            { n: 26, desc: "↑ полгода" },
            { n: 52, desc: "1 год ↑" },
        ]) +
        leftover;
    out.className = "out";
    output.name = "Total Income";
    output.setAttribute("for", "a-form");
    output.id = "result";
    output.innerHTML += datalist;
    drawResourceBox(output);
    out.appendChild(output);
    return out;
}
function drawResourceBox(parent) {
    allRes.forEach((el) => {
        LCD(`el => ${el}`);
        const resContainer = domElWithProperties("div", [
            { n: "class", v: "inc-res" },
        ]);
        const rr = domElWithProperties("span", [{ n: "id", v: el }]);
        resContainer.appendChild(getResImg(el));
        resContainer.appendChild(rr);
        parent.appendChild(resContainer);
    });
}
function getResImg(src) {
    const img = document.createElement("img");
    img.src = `../../../assets/icons/s/${src}.png`;
    img.width = 24;
    return img;
}
function getRankRewards(gm, rank) {
    return rewards.find((v) => v.rank === rank && v.mode === gm)
        .rewards;
}
function updateResourceBox(gr, timeW = 1) {
    L(gr);
    gr.filter((f) => f.amount > -1).forEach((x) => (document.getElementById(x.type).innerHTML = (x
        ? x.amount * timeW
        : 0)));
}
function mistyData() {
    fetchTableData("MV").then((v) => mistyResources(v));
}
function mistyResources(t) {
    var _a;
    let options = [];
    for (let rdata of t.rows) {
        let res = { id: rdata.c[0], res: [] };
        for (let i = 1; i < rdata.c.length; i++) {
            res.res.push((_a = rdata.c[i]) === null || _a === void 0 ? void 0 : _a.v);
        }
        options.push(res);
    }
    return options;
}
function prizeQty(elem) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = yield fetchTableData("MV2");
        let col = t.cols.findIndex((v) => v.id);
        let qty = t.rows[elem.n].c[col].v;
        return qty;
    });
}
function makeSelect(name, options) {
    const list = document.createElement("select");
    list.id = name;
    const storedValue = localStorage.getItem(list.id);
    for (let i = 0; i < options.length; i++) {
        const element = options[i];
        let opt = document.createElement("option");
        opt.innerText = element.toString();
        opt.setAttribute("value", element.toString());
        if ((storedValue && storedValue === element) ||
            (!storedValue && i === 0)) {
            opt.setAttribute("selected", "");
        }
        list.appendChild(opt);
    }
    return list;
}
function setValFromLocalStore(m) {
    const storedValue = localStorage.getItem(m);
    const r = getRankRewards(gMode(m), storedValue);
    user.reward = {
        mode: gMode(m),
        rank: storedValue,
        rewards: r,
    };
}
function renderHorizontal() {
    $("select[data-menu]").each(function () {
        let select = $(this), type = select.data("menu"), menu = $("<div />").addClass("select-menu " + type), button = $("<button />"), buttonDiv = $("<div />");
        $("<span />")
            .text(select.find("option:selected").text())
            .appendTo(buttonDiv);
        $("<em />").prependTo(button);
        button.css({
            "--h": select.outerHeight(),
            "--w": select.outerWidth(),
        });
        select.wrap(menu);
        button.append(buttonDiv).insertAfter(select);
    });
}
//# sourceMappingURL=main.js.map