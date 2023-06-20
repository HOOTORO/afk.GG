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
var verb = true;
var xh = "\n    <div>\n        <span id=\"rangeValue\">1 week</span>\n        <input class=\"range\" type=\"range\" name=\"times\" value=\"1\" min=\"1\" max=\"52\" onChange=\"rangeSlide(this.value)\" onmousemove=\"rangeSlide(this.value)\" list=\"values\" />\n<datalist id=\"values\">\n";
var leftover = "\n</datalist>\n    </div>\n";
var userFields = [
    { name: "cursed-realm", type: "select", src: "gsheet" },
    { name: "treasure-scramble", type: "select", src: "gsheet" },
    { name: "nightmare-corridor", type: "select", src: "gsheet" },
    //    {name: "afk", type: "bool", src: "gsheet"}
];
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
var recalc = new Event("recalc");
var tLoadedEvent = new Event("tableready");
// Listen for the event.
$(document).on("tableready", "app", function (e) {
    /* … */
});
$(document).on("click", "select", function (e) {
    L("[Events]|> ".concat(e));
});
// Storing user input
$(document).on("change", "select", function (x) {
    var changedValue = $(x.target).find(":selected").val();
    L("[Events]|> Changing ".concat(x.target.id, ", new value => ").concat(changedValue));
    $("#" + x.target.id + " option[selected]").each(function () {
        this.removeAttribute("selected");
    });
    $(x.target).find(":selected").attr("selected", "");
    populateStorage(x.target.id, changedValue);
    var sli = localStorage.getItem("rangeValue");
    updateOutput(sli);
});
// test
$(document).on("recalc", "app", function (y) {
    L(y);
});
var L = function (x) {
    if (verb) {
        console.log(x);
    }
};
var app = document.getElementById("app");
startApp();
for (var _i = 0, userFields_1 = userFields; _i < userFields_1.length; _i++) {
    var inputfield = userFields_1[_i];
    if (!localStorage.getItem(inputfield.name)) {
        var selected = $(inputfield.name).find(":selected").get(0);
        populateStorage(inputfield.name, selected.innerText);
    }
    else {
        setApp(inputfield.name);
    }
}
function startApp() {
    userInput()
        .then(function (u) { return app.appendChild(u); })
        .then(function () { return app.appendChild(makeOut()); })
        .finally(function () { return L("[MAIN]|> app started"); });
}
function setApp(key) {
    var storedVal = localStorage.getItem(key);
    $("#".concat(key, " *")).filter(function () {
        return $(this).text().toLowerCase().indexOf(storedVal) > -1;
    }).attr("selected", "selected");
    L("[L.Store]|> Value set for  ".concat(key, " => ").concat(storedVal));
}
function populateStorage(key, value) {
    L("[L.Store]|> save data to local store");
    if (key && value) {
        localStorage.setItem(key, value);
        setApp(key);
    }
}
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
function weekLabels(n, stops) {
    var _a;
    var html = "";
    var _loop_1 = function (i) {
        L(stops.some(function (v) { return v.n === i; }));
        if (stops.some(function (v) { return v.n === i; })) {
            html += "<option value=\"".concat(i.toString(), "\" label=\"").concat((_a = stops.find(function (v) { return v.n === i; })) === null || _a === void 0 ? void 0 : _a.desc, "\"></option>");
        }
        else {
            html += "<option value=\"".concat(i.toString(), "\" label=\"\"></option>");
        }
    };
    for (var i = 1; i <= n; i++) {
        _loop_1(i);
    }
    return html;
}
function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value + " weeks";
    $(this).attr("value", value.toString());
    populateStorage("rangeValue", value);
    updateOutput(value);
}
// =>  <=
var rewards = [];
function getRewards(source, rank) {
    return rewards.find(function (v) { return v.rank === rank && v.source === source; });
}
function userInput() {
    return __awaiter(this, void 0, void 0, function () {
        var inputForm;
        return __generator(this, function (_a) {
            inputForm = document.createElement("form");
            inputForm.setAttribute("id", "a-form");
            sources.filter(function (v) { return v.display; }).forEach(function (k, v) {
                var container = document.createElement("div");
                container.setAttribute("class", "select-container");
                var label = document.createElement("h4");
                label.innerText = k.label;
                fetchTableData(k.tableName)
                    .then(function (raw) { return getHeaders(k.label, raw); })
                    .then(function (table) { return getOptions(table); })
                    .then(function (firstcolumn) { return makeSelect(k.id, firstcolumn); })
                    .then(function (select) { return container.appendChild(select); })
                    .then(function (x) { return container.insertBefore(label, x); })
                    .finally(function () { return L(k); });
                inputForm.append(container);
            });
            return [2 /*return*/, inputForm];
        });
    });
}
function getOptions(table) {
    var firstColumn = [];
    for (var _i = 0, _a = table.rows; _i < _a.length; _i++) {
        var element = _a[_i];
        var row = element;
        firstColumn.push(row.c[0].v);
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
            source: source.toLowerCase().replace(" ", "-"), rank: el.c[0].v,
            bait: 0, reds: 0, sg: 0, tc: 0,
            dia: 0, yells: 0, poe: 0, dust: 0,
            juice: 0, mcard: 0, ss: 0,
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
function makeOut() {
    var out = document.createElement("div"), output = document.createElement("output"), datalist = xh + weekLabels(52, [{ n: 1, desc: "↑ нед." },
        { n: 2, desc: "↑ ~1 мес.   " },
        { n: 26, desc: "↑ полгода" },
        { n: 52, desc: "1 год ↑" }
    ]) + leftover;
    out.className = "out";
    output.name = "Total Income";
    output.setAttribute("for", "a-form");
    output.id = "result";
    output.innerHTML += datalist;
    resources.forEach(function (el) {
        var resContainer = document.createElement("div");
        resContainer.className = "inc-res";
        var rr = resultRow(el);
        resContainer.appendChild(getResImg(el.id));
        resContainer.appendChild(rr);
        output.appendChild(resContainer);
    });
    out.appendChild(output);
    return out;
}
function resultRow(nl) {
    var res = document.createElement("span");
    res.id = nl.id;
    return res;
}
function updateOutput(x) {
    var output = {
        source: "out",
        rank: "total",
        bait: 0, reds: 0, sg: 0, tc: 0,
        dia: 0, yells: 0, poe: 0, dust: 0,
        juice: 0, mcard: 0, ss: 0,
    };
    var resKeys = Object.keys(output).filter(function (value, index) { return value && index > 1; });
    $("select").each(function () {
        var rank = localStorage.getItem(this.id);
        var rews = getRewards(this.id, rank);
        for (var _i = 0, resKeys_2 = resKeys; _i < resKeys_2.length; _i++) {
            var element = resKeys_2[_i];
            if (rews[element]) {
                output[element] += rews[element];
            }
        }
    });
    for (var _i = 0, resKeys_1 = resKeys; _i < resKeys_1.length; _i++) {
        var element = resKeys_1[_i];
        L("[UPD.OUT]|> ".concat(element, " val. -> ").concat(output[element]));
        $("#" + element).text((output[element] * x).toString());
    }
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
                    app.dispatchEvent(tLoadedEvent);
                    return [2 /*return*/, x];
            }
        });
    });
}
function makeSelect(name, options) {
    var list = document.createElement("select");
    list.id = name;
    var storedValue = localStorage.getItem(list.id);
    for (var i = 0; i < options.length; i++) {
        var element = options[i];
        var opt = document.createElement("option");
        opt.innerText = element.toString();
        opt.setAttribute("value", element.toString());
        if ((storedValue && storedValue === element) || (!storedValue && i === 0)) {
            opt.setAttribute("selected", "");
        }
        list.appendChild(opt);
    }
    return list;
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
