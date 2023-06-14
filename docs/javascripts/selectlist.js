function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

let li = new Array();
function createSelect() {
  const elem = document.getElementsByClassName("simpselect");
  let select_ = "";
  for (let e = 0; e < elem.length; e++) {
    elem[e].setAttribute("data-indx-select", e);
    elem[e].setAttribute("data-select-open", "false");
    const ul_cont = document.querySelectorAll(
      "[data-indx-select='" + e + "'] > .cont_list_select_mate > ul"
    );
    select_ = document.querySelectorAll(
      "[data-indx-select='" + e + "'] >select"
    )[0];
    if (isMobileDevice()) {
      select_.addEventListener("change", function () {
        _select_option(select_.selectedIndex, e);
      });
    }
    const selectOpts = select_.options;
    document
      .querySelectorAll("[data-indx-select='" + e + "']  > .espna ")[0]
      .setAttribute("data-n-select", e);
    document
      .querySelectorAll(
        "[data-indx-select='" + e + "']  > .icon_select_mate "
      )[0]
      .setAttribute("data-n-select", e);
    for (let i = 0; i < selectOpts.length; i++) {
      li[i] = document.createElement("li");
      if (selectOpts[i].selected || select_.value === selectOpts[i].innerHTML) {
        li[i].className = "active";
        document.querySelector(
          "[data-indx-select='" + e + "']  > .espna "
        ).innerHTML = selectOpts[i].innerHTML;
      }
      li[i].setAttribute("data-index", i);
      li[i].setAttribute("data-select-index", e);
      // funcion click al selecionar
      li[i].addEventListener("click", function () {
        _select_option(
          this.getAttribute("data-index"),
          this.getAttribute("data-select-index")
        );
      });

      li[i].innerHTML = selectOpts[i].innerHTML;
      ul_cont[0].appendChild(li[i]);
    } // Fin For selectOpts
  } // fin for divs_cont_select
} // Fin Function

let cont_slc = 0;
function openSelect(idx) {
  let idx1 = idx.getAttribute("data-n-select");
  let ul_cont_li = document.querySelectorAll(
    "[data-indx-select='" + idx1 + "'] .cont_select_int > li"
  );
  let hg = 0;
  let slect_open = document
    .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
    .getAttribute("data-select-open");
  let slect_element_open = document.querySelectorAll(
    "[data-indx-select='" + idx1 + "'] select"
  )[0];
  if (isMobileDevice()) {
    if (window.document.createEvent) {
      // All
      let evt = window.document.createEvent("MouseEvents");
      evt.initMouseEvent(
        "mousedown",
        false,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      slect_element_open.dispatchEvent(evt);
    } else if (slect_element_open.fireEvent) {
      // IE
      slect_element_open.fireEvent("onmousedown");
    } else {
      slect_element_open.click();
    }
  } else {
    for (let i = 0; i < ul_cont_li.length; i++) {
      hg += ul_cont_li[i].offsetHeight;
    }
    if (slect_open == "false") {
      document
        .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
        .setAttribute("data-select-open", "true");
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul"
      )[0].style.height = hg + "px";
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .icon_select_mate"
      )[0].style.transform = "rotate(180deg)";
    } else {
      document
        .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
        .setAttribute("data-select-open", "false");
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .icon_select_mate"
      )[0].style.transform = "rotate(0deg)";
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul"
      )[0].style.height = "0px";
    }
  }
} // fin function open_select

function closeSelect(indx) {
  const select_ = document.querySelectorAll(
    "[data-indx-select='" + indx + "'] > select"
  )[0];
  document.querySelectorAll(
    "[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul"
  )[0].style.height = "0px";
  document.querySelector(
    "[data-indx-select='" + indx + "'] > .icon_select_mate"
  ).style.transform = "rotate(0deg)";
  document
    .querySelectorAll("[data-indx-select='" + indx + "']")[0]
    .setAttribute("data-select-open", "false");
}

function _select_option(indx, selc) {
  if (isMobileDevice()) {
    selc = selc - 1;
  }
  let select_ = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > select"
  )[0];

  let li_s = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] .cont_select_int > li"
  );
  const p_act = (document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > .espna"
  )[0].innerHTML = li_s[indx].innerHTML);
  const selectOpts = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > select > option"
  );
  for (let i = 0; i < li_s.length; i++) {
    if (li_s[i].className == "active") {
      li_s[i].className = "";
    }
    li_s[indx].className = "active";
  }
  selectOpts[indx].selected = true;
  select_.selectedIndex = indx;
  select_.onchange();
  closeSelect(selc);
}

function testSelectTrans() {
  const tbl = document.getElementById("afk-table-0");

  for (let i = 1; i < tbl.rows.length; i++) {
    i++;
    const element = tbl.rows[i].cells[5];
    element.innerHTML = "";
    // element.innerHTML = listHTML;
    const bselect = document.createElement("span", { class: "dropdown-el" });
    [
      "Relevance",
      "Popularity",
      "PriceIncreasing",
      "PriceDecreasing",
      "ProductBrand",
      "ProductName",
    ].forEach((el) => {
      const opt = document.createElement("input");
      opt.setAttribute("type", "radio");
      opt.setAttribute("name", "sortType");
      opt.setAttribute("value", el);
      opt.setAttribute("id", "sort" + el + i);
      if ("Relevance" == el) {
        opt.setAttribute("checked", "checked");
      }
      const label = document.createElement("label");
      label.setAttribute("for", el + i);
      label.innerHTML = el;
      opt.appendChild(label);
      bselect.appendChild(opt);
    });
    333322;
    element.appendChild(bselect);
  }
  // tbl.innerHTML = listHTML;
}
const listHTML = `
  <span class="dropdown-el">
  <input type="radio" name="sortType" value="Relevance" checked="checked" id="sort-relevance"><label for="sort-relevance">Relevance</label>
  <input type="radio" name="sortType" value="Popularity" id="sort-best"><label for="sort-best">Product Popularity</label>
  <input type="radio" name="sortType" value="PriceIncreasing" id="sort-low"><label for="sort-low">Price Low to High</label>
  <input type="radio" name="sortType" value="PriceDecreasing" id="sort-high"><label for="sort-high">Price High to Low</label>
  <input type="radio" name="sortType" value="ProductBrand" id="sort-brand"><label for="sort-brand">Product Brand</label>
  <input type="radio" name="sortType" value="ProductName" id="sort-name"><label for="sort-name">Product Name</label>
  </span>

  `;
