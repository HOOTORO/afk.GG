window.onload = function () {
  findTable();
  selectPriority();
  renderSelectTwo();
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
    ["0", "1", "2", "3", "4", "5"].forEach((el) => {
      const opt = document.createElement("option");
      console.log(val + " <> " + el);
      console.log(val == el);
      if (val == el) {
        opt.setAttribute("selected", "");
      }
      opt.innerHTML = el;
      selectlist.appendChild(opt);
    });
    element.appendChild(selectlist);
  }
}
