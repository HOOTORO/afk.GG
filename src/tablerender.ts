window.onload = function () {
  findTable();
  selectPriority();
  renderHorizontal();
};

function findTable() {
  const tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    const element = tables[i];
    element.setAttribute("id", "afk-table-" + i);
  }
}

function selectPriority() {
  const tbl = document.getElementById("afk-table-0") as HTMLTableElement;
  for (let i = 1; i < tbl.rows.length - 1; i++) {
    const element = tbl.rows[i].cells[5];
    const val = element.innerHTML;
    element.innerHTML = "";
    const selectlist = document.createElement("select");
    selectlist.setAttribute("data-menu", "horizontal");
    [0, 1, 2, 3, 4, 5].forEach((el) => {
      const opt = document.createElement("option");
      if (val == el.toString()) {
        opt.setAttribute("selected", "");
      }
      opt.innerHTML = el.toString();
      selectlist.appendChild(opt);
    });
    element.appendChild(selectlist);
  }
}

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tg = document.getElementById("tbl");
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
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

const randomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};
