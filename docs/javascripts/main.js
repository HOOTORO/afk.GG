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
// CLICK Black Select
// $(document).on("click", ".select-menu", function (e) {
//   let menu = $(this);
//   if (!menu.hasClass("open")) {
//     menu.addClass("open");
//   }
// });
// $(document).on("click", ".select-menu > ul > li", function (e) {
//   let li = $(this),
//     menu = li.parent().parent(),
//     select = menu.children("select") as JQuery<HTMLSelectElement>,
//     selected = select.find("option:selected") as JQuery<HTMLOptionElement>,
//     index = li.index();
//   menu.css("--t", index * -41 + "px");
//   selected.attr("selected", 0);
//   select.find("option").eq(index).attr("selected", 1);
//   menu.addClass(index > selected.index() ? "tilt-down" : "tilt-up");
//   setTimeout(() => {
//     menu.removeClass("open tilt-up tilt-down");
//   }, 500);
// });
// $(document).on("click", (e) => {
//   e.stopPropagation();
//   if ($(".select-menu").has(e.target as unknown as string).length === 0) {
//     $(".select-menu").removeClass("open");
//   }
// });
// HORIZONTAL wheel
$(document).on("click", ".select-menu", function (e) {
    var menu = $(this), select = menu.children("select"), options = select.find("option"), active = select.find("option:selected"), button = menu.children("button"), buttonDiv = button.children("div"), current = buttonDiv.children("span");
    if (!menu.hasClass("change")) {
        var nextOption = options.eq(active.index() == options.length - 1 ? 0 : active.index() + 1), next_1 = $("<span />")
            .addClass("next")
            .text(nextOption.text())
            .appendTo(buttonDiv);
        options.prop("selected", false);
        nextOption.prop("selected", true);
        menu.addClass("change");
        setTimeout(function () {
            next_1.removeClass("next");
            menu.removeClass("change");
            current.remove();
        }, 650);
    }
});
function renderBalck() {
    $("select[data-menu]").each(function () {
        var select = $(this), options = select.find("option"), menu = $("<div />").addClass("select-menu"), button = $("<div />").addClass("button"), list = $("<ul />");
        $("<em />").prependTo(button);
        options.each(function (i) {
            var option = $(this);
            list.append($("<li />").text(option.text()));
        });
        menu.css("--t", select.find(":selected").index() * -41 + "px");
        select.wrap(menu);
        button.append(list).insertAfter(select);
        list.clone().insertAfter(button);
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
var sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
var base = "https://docs.google.com/spreadsheets/d/".concat(sheetId, "/gviz/tq?");
var sheetName = "vals";
var query = encodeURIComponent("Select *");
var url = "".concat(base, "&sheet=").concat(sheetName, "&tq=").concat(query);
var data = [];
// document.addEventListener("DOMContentLoaded", init);
var output = function () {
    var app = document.getElementById("app");
    var table = document.createElement("table");
    table.setAttribute("class", "output");
    app.appendChild(table);
    return table;
};
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)
                        .then(function (res) { return res.text(); })
                        .then(function (rep) {
                        //Remove additional text and extract only JSON:
                        var jsonData = JSON.parse(rep.substring(47).slice(0, -2));
                        processHeader(jsonData);
                    })
                        .finally(function () { return renderPriority(); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processHeader(json) {
    var tbl = output();
    var colz = [];
    var tr = document.createElement("tr");
    //Extract column labels
    json.table.cols.forEach(function (heading) {
        if (heading.label) {
            var column = heading.label;
            colz.push(column);
            var th = document.createElement("th");
            th.innerText = column;
            tr.appendChild(th);
        }
    });
    tbl.appendChild(tr);
    //extract row data:
    json.table.rows.forEach(function (rowData) {
        var row = {};
        colz.forEach(function (ele, ind) {
            row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
        });
        data.push(row);
    });
    processRows(tbl, data);
}
function processRows(table, json) {
    json.forEach(function (row) {
        var tr = document.createElement("tr");
        var keys = Object.keys(row);
        keys.forEach(function (key) {
            var td = document.createElement("td");
            td.textContent = row[key];
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    renderPriority();
}
function remCol(id, n) {
    var tb = document.getElementById(id);
    tb.deleteCaption();
}
window.onload = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, init().finally(function () { return renderPriority(); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
function renderPriority() {
    findTable();
    selectPriority();
    renderHorizontal();
}
function findTable() {
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        var element = tables[i];
        element.setAttribute("id", "afk-table-" + i);
    }
}
function selectPriority() {
    var tbl = document.getElementById("afk-table-0");
    var _loop_1 = function (i) {
        var element = tbl.rows[i].cells[5];
        var val = element.innerHTML;
        element.innerHTML = "";
        var list = document.createElement("select");
        list.setAttribute("data-menu", "horizontal");
        [0, 1, 2, 3, 4, 5].forEach(function (el) {
            var opt = document.createElement("option");
            if (val == el.toString()) {
                opt.setAttribute("selected", "");
            }
            opt.innerHTML = el.toString();
            list.appendChild(opt);
        });
        element.appendChild(list);
    };
    for (var i = 1; i < tbl.rows.length - 1; i++) {
        _loop_1(i);
    }
}
function generateTable() {
    // creates a <table> element and a <tbody> element
    var tg = document.getElementById("tbl");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // creating all cells
    for (var i = 0; i < 2; i++) {
        // creates a table row
        var row = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row ".concat(i, ", column ").concat(j));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    tg.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}
var randomId = function (length) {
    if (length === void 0) { length = 6; }
    return Math.random()
        .toString(36)
        .substring(2, length + 2);
};
