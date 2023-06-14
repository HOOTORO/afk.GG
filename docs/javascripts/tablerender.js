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
    var _loop_1 = function (i) {
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
        _loop_1(i);
    }
}
