function testSelectTrans() {
  const tbl = document.getElementById("afk-table-0") as HTMLTableElement;

  for (let i = 1; i < tbl.rows.length; i++) {
    i++;
    const element = tbl.rows[i].cells[5];
    element.innerHTML = "";
    const bselect = document.createElement("span");
    bselect.setAttribute("class", "dropdown-el");

    ["0", "1", "2", "3", "4", "5"].forEach((el) => {
      const opt = document.createElement("input");
      opt.setAttribute("type", "radio");
      opt.setAttribute("name", "sortType");
      opt.setAttribute("value", el);
      opt.setAttribute("id", "sort" + el + i);
      if ("1" == el) {
        opt.setAttribute("checked", "checked");
      }
      const label = document.createElement("label");
      label.setAttribute("for", "sort" + el + i);
      label.innerHTML = el;
      bselect.appendChild(opt);
      bselect.appendChild(label);
    });
    element.appendChild(bselect);
  }
  // document.getElementById("tbl").innerHTML;
}

// module.exports = { testSelectTrans };
