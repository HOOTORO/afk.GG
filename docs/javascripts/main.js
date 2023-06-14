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
window.onload = function () {
    findTable();
    selectPriority();
    renderHorizontal();
};
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
        var selectlist = document.createElement("select");
        selectlist.setAttribute("data-menu", "horizontal");
        [0, 1, 2, 3, 4, 5].forEach(function (el) {
            var opt = document.createElement("option");
            if (val == el.toString()) {
                opt.setAttribute("selected", "");
            }
            opt.innerHTML = el.toString();
            selectlist.appendChild(opt);
        });
        element.appendChild(selectlist);
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
