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
// render Black select
function renderSelect() {
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
$(document).on("click", ".select-menu", function (e) {
    var menu = $(this);
    if (!menu.hasClass("open")) {
        menu.addClass("open");
    }
});
$(document).on("click", ".select-menu > ul > li", function (e) {
    var li = $(this), menu = li.parent().parent(), select = menu.children("select"), selected = select.find("option:selected"), index = li.index();
    menu.css("--t", index * -41 + "px");
    selected.attr("selected", 0);
    select.find("option").eq(index).attr("selected", 1);
    menu.addClass(index > selected.index() ? "tilt-down" : "tilt-up");
    setTimeout(function () {
        menu.removeClass("open tilt-up tilt-down");
    }, 500);
});
$(document).on("click", function (e) {
    e.stopPropagation();
    if ($(".select-menu").has(e.target.activeElement).length === 0) {
        $(".select-menu").removeClass("open");
    }
});
// EL DROP
function loadDrop() {
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
// render wheel
function renderSelectTwo() {
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
$(document).on("click", ".select-menu", function (e) {
    var menu = $(this), select = menu.children("select"), options = select.find("option"), active = select.find("option:selected"), button = menu.children("button"), buttonDiv = button.children("div"), current = buttonDiv.children("span");
    if (!menu.hasClass("change")) {
        var nextOption = options.eq(active.index() == options.length - 1 ? 0 : active.index() + 1), next_1 = $("<span />")
            .addClass("next")
            .text(nextOption.text())
            .appendTo(buttonDiv);
        options.attr("selected", 0);
        nextOption.attr("selected", 1);
        menu.addClass("change");
        setTimeout(function () {
            next_1.removeClass("next");
            menu.removeClass("change");
            current.remove();
        }, 650);
    }
});
function testSelectTrans() {
    var tbl = document.getElementById("afk-table-0");
    var _loop_1 = function (i) {
        i++;
        var element = tbl.rows[i].cells[5];
        element.innerHTML = "";
        var bselect = document.createElement("span");
        bselect.setAttribute("class", "dropdown-el");
        ["0", "1", "2", "3", "4", "5"].forEach(function (el) {
            var opt = document.createElement("input");
            opt.setAttribute("type", "radio");
            opt.setAttribute("name", "sortType");
            opt.setAttribute("value", el);
            opt.setAttribute("id", "sort" + el + i);
            if ("1" == el) {
                opt.setAttribute("checked", "checked");
            }
            var label = document.createElement("label");
            label.setAttribute("for", "sort" + el + i);
            label.innerHTML = el;
            bselect.appendChild(opt);
            bselect.appendChild(label);
        });
        element.appendChild(bselect);
        out_i_1 = i;
    };
    var out_i_1;
    for (var i = 1; i < tbl.rows.length; i++) {
        _loop_1(i);
        i = out_i_1;
    }
    // document.getElementById("tbl").innerHTML;
}
// module.exports = { testSelectTrans };
window.onload = function () {
    findTable();
    selectPriority();
    renderSelectTwo();
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
    var _loop_2 = function (i) {
        var element = tbl.rows[i].cells[5];
        var val = element.innerHTML;
        element.innerHTML = "";
        var selectlist = document.createElement("select");
        selectlist.setAttribute("data-menu", "horizontal");
        ["0", "1", "2", "3", "4", "5"].forEach(function (el) {
            var opt = document.createElement("option");
            console.log(val + " <> " + el);
            console.log(val == el);
            if (val == el) {
                opt.setAttribute("selected", "");
            }
            opt.innerHTML = el;
            selectlist.appendChild(opt);
        });
        element.appendChild(selectlist);
    };
    for (var i = 1; i < tbl.rows.length - 1; i++) {
        _loop_2(i);
    }
}
