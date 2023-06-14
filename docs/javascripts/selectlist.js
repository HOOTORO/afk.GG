"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
