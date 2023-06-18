var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
var base = "https://docs.google.com/spreadsheets/d/".concat(sheetId, "/gviz/tq?");
var query = encodeURIComponent("Select *");
var url = function (x) {
    return "".concat(base, "&sheet=").concat(x, "&tq=").concat(query);
};
var resources = [
    { id: "bait", label: "Bait" },
    { id: "reds", label: "Red Cores" },
    { id: "tc", label: "Temple Card" },
    { id: "sg", label: "Stargazer Card" },
    { id: "dia", label: "Diamonds" },
    { id: "yells", label: "Yellow Shards" },
    { id: "poe", label: "POE" },
    { id: "dust", label: "Dust" },
    { id: "juice", label: "Twisted Essence" },
    { id: "mcard", label: "Furn. Card" },
    { id: "ss", label: "Secret Spices" }
];
var sources = [
    { id: "cursed-realm", label: "Cursed Realm", tableName: "CR", period: 7, display: true },
    { id: "treasure-scramble", label: "Treasure Scramble", tableName: "TS", period: 7, display: true },
    { id: "nightmare-corridor", label: "Nightmare Corridor", tableName: "NC", period: 7, display: true },
    { id: "afk-income", label: "Base AFK Income", tableName: "AFK", period: 1 / 24, display: false }
];
// CLICK Black Select
$(document).on("click", ".select-menu", function (e) {
    var menu = $(this);
    if (!menu.hasClass("open")) {
        menu.addClass("open");
    }
});
$(document).on("click", ".select-menu > ul > li", function (e) {
    var li = $(this), menu = li.parent().parent(), select = menu.children("select"), selected = select.find("option:selected"), index = li.index();
    menu.css("--t", index * -38 + "px");
    selected.removeAttr("selected");
    select.find("option").eq(index).attr("selected", "");
    menu.addClass(index > selected.index() ? "tilt-down" : "tilt-up");
    select.trigger("change");
    setTimeout(function () {
        menu.removeClass("open tilt-up tilt-down");
    }, 500);
});
$(document).on("click", function (e) {
    e.stopPropagation();
    if ($(".select-menu").has(e.target).length === 0) {
        $(".select-menu").removeClass("open");
    }
});
// =>  <=
var rewards = [];
function getRewards(source, rank) {
    return rewards.find(function (v) { return v.rank === rank && v.source === source; });
}
function userInput() {
    return __awaiter(this, void 0, void 0, function () {
        var inputForm, _i, _a, tbl;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    inputForm = document.createElement("form");
                    inputForm.setAttribute("class", "a-form");
                    _i = 0, _a = sources.filter(function (value) { return value.display; });
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    tbl = _a[_i];
                    return [4 /*yield*/, getSelectList(tbl)
                            .then(function (h) { return inputForm.appendChild(h); })
                            .finally(function () { return console.log("we re donr"); })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, inputForm];
            }
        });
    });
}
function getSelectList(re) {
    return __awaiter(this, void 0, void 0, function () {
        var listName;
        return __generator(this, function (_a) {
            listName = document.createElement("h4");
            listName.textContent = re.label;
            fetchTableData(re.tableName)
                .then(function (tt) { return getHeaders(re.label, tt); })
                .then(function (t) { return getOptions(t); })
                .then(function (o) { return listName.appendChild(makeBlackSelect(re.id, o)); })
                .finally(function () { return app.dispatchEvent(blackEvent); });
            return [2 /*return*/, listName];
        });
    });
}
function getOptions(table) {
    var firstColumn = [];
    for (var _i = 0, _a = table.rows; _i < _a.length; _i++) {
        var element = _a[_i];
        var row = element;
        //iterate through rows
        firstColumn.push(row.c[0].v);
        //rows would be accessed using the "row" variable assigned in the for loop
    }
    return firstColumn;
}
function getHeaders(source, table) {
    var columns = [];
    table.cols.forEach(function (element, index) {
        columns.push({ id: index, label: element.label });
    });
    table.rows.forEach(function (el) {
        var r = {
            source: source.toLowerCase().replace(" ", "-"),
            rank: el.c[0].v,
            bait: 0,
            reds: 0,
            sg: 0,
            tc: 0,
            dia: 0,
            yells: 0,
            poe: 0,
            dust: 0,
            juice: 0,
            mcard: 0,
            ss: 0,
        };
        var keys = Object.keys(r);
        columns.forEach(function (col) {
            var _a;
            if (el.c[col.id] && keys.some(function (e) { return e === col.label.toLowerCase(); })) {
                r[col.label.toLowerCase()] = (_a = el.c[col.id]) === null || _a === void 0 ? void 0 : _a.v;
            }
        });
        rewards.push(r);
    });
    return table;
}
window.onload = function () {
    startApp();
};
var app = document.getElementById("app");
app.addEventListener("BlackSelect", function (e) {
    console.log("Black FIRE!");
    console.log(e);
    renderBlack();
    checkStorage();
}, false);
function startApp() {
    userInput()
        .then(function (u) { return app.appendChild(u); })
        .then(function () { return app.appendChild(makeOut()); })
        .finally(function () { return console.log("app started"); });
}
app.onchange = populateStorage;
function checkStorage() {
    $(".select-menu > select").each(function () {
        if (!localStorage.getItem(this.id)) {
            populateStorage();
        }
        else {
            setApp();
        }
    });
}
function setApp() {
    var _a;
    console.log("SET APP");
    (_a = $(".select-menu > select")) === null || _a === void 0 ? void 0 : _a.each(function () {
        var storedValue = localStorage.getItem(this.id);
        var select = $(this), menu = select.parent(), options = select.find("option");
        var selected, sindex = 0;
        options.each(function (index, element) {
            if (element.textContent === storedValue) {
                options.eq(index).attr("selected", "");
                sindex = index;
                selected = element;
            }
        });
        menu.css("--t", sindex * -38 + "px");
        updateOutput();
        console.log("Value set for  ".concat(this.id, " => ").concat(selected.textContent));
    });
}
function populateStorage() {
    console.log("POPULI STORAGE!!");
    console.log(this);
    $(".select-menu > select").each(function () {
        var select = $(this), selected = select.find(":selected").get(0);
        console.log("".concat(this.id, ", ").concat(selected.innerText));
        localStorage.setItem(this.id, selected.innerText);
    });
    setApp();
}
function makeOut() {
    var out = document.createElement("div");
    out.className = "out";
    var output = document.createElement("output");
    output.name = "Total Income";
    output.setAttribute("for", "a-form");
    output.id = "result";
    var label = document.createElement("label");
    label.setAttribute("for", "result");
    label.textContent = output.name;
    resources.forEach(function (el) {
        var rr = resultRow(el);
        output.appendChild(rr);
    });
    out.appendChild(label);
    label.appendChild(output);
    return out;
}
function resultRow(nl) {
    var res = document.createElement("span");
    res.id = nl.id;
    res.appendChild(getResImg(nl.id));
    return res;
}
function updateOutput() {
    var output = {
        source: "out",
        rank: "total",
        bait: 0,
        reds: 0,
        sg: 0,
        tc: 0,
        dia: 0,
        yells: 0,
        poe: 0,
        dust: 0,
        juice: 0,
        mcard: 0,
        ss: 0,
    };
    var resKeys = Object.keys(output).filter(function (value, index) { return value && index > 1; });
    $(".select-menu > select").each(function () {
        var rank = localStorage.getItem(this.id);
        var rews = getRewards(this.id, rank);
        console.log(rews);
        for (var _i = 0, resKeys_2 = resKeys; _i < resKeys_2.length; _i++) {
            var element = resKeys_2[_i];
            if (rews[element]) {
                output[element] += rews[element];
            }
        }
    });
    for (var _i = 0, resKeys_1 = resKeys; _i < resKeys_1.length; _i++) {
        var element = resKeys_1[_i];
        var lab = document.createElement("label");
        lab.setAttribute("for", element);
        lab.innerText = output[element];
        $("#".concat(element)).children("label").remove();
        document.getElementById(element).appendChild(lab);
    }
    console.log(output);
}
function getResImg(name) {
    var img = document.createElement("img");
    img.src = "../../assets/icons/s/".concat(name, ".png");
    img.width = 24;
    return img;
}
function fetchTableData(tableName) {
    return __awaiter(this, void 0, void 0, function () {
        var response, text, json, x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url(tableName))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    text = _a.sent();
                    json = JSON.parse(text.substring(47).slice(0, -2));
                    x = {
                        cols: json.table.cols,
                        rows: json.table.rows,
                    };
                    return [2 /*return*/, x];
            }
        });
    });
}
var blackEvent = new Event("BlackSelect");
function renderBlack() {
    $("select[data-menu]").each(function () {
        var select = $(this), options = select.find("option"), menu = $("<div />").addClass("select-menu"), button = $("<div />").addClass("button"), list = $("<ul />");
        $("<em />").prependTo(button);
        select.removeAttr("data-menu");
        options.each(function (i) {
            var option = $(this);
            list.append($("<li />").text(option.text()));
        });
        menu.css("--t", select.find(":selected").index() * -1 + "px");
        select.wrap(menu);
        button.append(list).insertAfter(select);
        list.clone().insertAfter(button);
    });
}
function makeBlackSelect(name, options) {
    var list = document.createElement("select");
    list.setAttribute("data-menu", "");
    list.id = name;
    var storedValue = localStorage.getItem(list.id);
    for (var i = 0; i < options.length; i++) {
        var element = options[i];
        var opt = document.createElement("option");
        opt.innerHTML = element;
        if ((storedValue && storedValue === element) || (!storedValue && i === 0)) {
            opt.selected = true;
        }
        list.appendChild(opt);
    }
    return list;
}
function makeCutieSelect(name, options) {
    var sp = document.createElement("span");
    var hea = document.createElement("h2");
    hea.textContent = name;
    sp.setAttribute("class", "dropdown-el");
    app.appendChild(hea);
    var firstFlag = true;
    options.forEach(function (elem, index) {
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "sortType";
        input.value = elem;
        input.id = name + index;
        if (firstFlag) {
            input.checked = firstFlag;
            firstFlag = !firstFlag;
        }
        var lab = document.createElement("label");
        lab.setAttribute("for", name);
        lab.textContent = elem;
        sp.appendChild(input);
        sp.appendChild(lab);
    });
    return sp;
}
function renderCutie() {
    $(".dropdown-el").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass("expanded");
        $("#" + $(e.target).attr("for")).prop("checked", true);
    });
    $(document).on("click", function () {
        $(".dropdown-el").removeClass("expanded");
    });
}
function renderHorizontal() {
    $("select[data-menu]").each(function () {
        var select = $(this), type = select.data("menu"), menu = $("<div />").addClass("select-menu " + type), button = $("<button />"), buttonDiv = $("<div />");
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
// HORIZONTAL wheel
// $(document).on("click", ".select-menu", function (e) {
//   let menu = $(this),
//     select = menu.children("select"),
//     options = select.find("option"),
//     active = select.find("option:selected"),
//     button = menu.children("button"),
//     buttonDiv = button.children("div"),
//     current = buttonDiv.children("span");
//   if (!menu.hasClass("change")) {
//     let nextOption = options.eq(
//         active.index() == options.length - 1 ? 0 : active.index() + 1
//       ),
//       next = $("<span />")
//         .addClass("next")
//         .text(nextOption.text())
//         .appendTo(buttonDiv);
//     options.prop("selected", "");
//     nextOption.prop("selected", "selected");
//     menu.addClass("change");
//     setTimeout(() => {
//       next.removeClass("next");
//       menu.removeClass("change");
//       current.remove();
//     }, 650);
//   }
// });
