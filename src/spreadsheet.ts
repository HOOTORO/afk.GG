const sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "vals";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

// document.addEventListener("DOMContentLoaded", init);

const output = function () {
  let app = document.getElementById("app");
  let table = document.createElement("table");
  table.setAttribute("class", "output");
  app.appendChild(table);
  return table;
};
async function init() {
  await fetch(url)
    .then((res) => res.text())
    .then((rep) => {
      //Remove additional text and extract only JSON:
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      processHeader(jsonData);
    })
    .finally(() => renderPriority());
}

function processHeader(json) {
  const tbl = output();
  const colz = [];
  const tr = document.createElement("tr");
  //Extract column labels
  json.table.cols.forEach((heading) => {
    if (heading.label) {
      let column = heading.label;
      colz.push(column);
      const th = document.createElement("th");
      th.innerText = column;
      tr.appendChild(th);
    }
  });
  tbl.appendChild(tr);
  //extract row data:
  json.table.rows.forEach((rowData) => {
    const row = {};
    colz.forEach((ele, ind) => {
      row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
    });
    data.push(row);
  });
  processRows(tbl, data);
}

function processRows(table, json) {
  json.forEach((row) => {
    const tr = document.createElement("tr");
    const keys = Object.keys(row);

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  renderPriority();
}
