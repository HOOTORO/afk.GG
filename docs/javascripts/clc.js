"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
