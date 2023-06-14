window.onload = function () {
  //   generateTable();
  findTable();
  selectPriority();
  renderSelect();
  testSelectTrans();
  loadDrop();
  //   createSelect();
};

function findTable() {
  const tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    const element = tables[i];
    element.setAttribute("id", "afk-table-" + i);
  }
}

function selectPriority() {
  const tbl = document.getElementById("afk-table-0");
  // for (let i = 1; i < 3; i++) {
  for (let i = 0; i < tbl.rows.length - 1; i++) {
    i++;
    const element = tbl.rows[i].cells[5];
    const val = element.innerHTML;
    element.innerHTML = "";
    const selectlist = document.createElement("select");
    selectlist.setAttribute("data-menu", "");
    [0, 1, 2, 3, 4, 5].forEach((el) => {
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

const espan = `

<!-- Custom select structure --> 
<div class="simpselect" data-mate-select="inactive" onchange="" onclick="return false;">
<select name="espn" onchange="" onclick="return false;" id="">
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
  </select>
<p class="espna"  onclick="openSelect(this)" ></p><span onclick="openSelect(this)" class="icon_select_mate" ></span>
<div class="cont_list_select_mate">
  <ul class="cont_select_int"></ul> 
</div>
  </div>
  <!-- Custom select structure --> 	
`;
