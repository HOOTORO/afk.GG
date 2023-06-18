function makeCutieSelect(name: string, options: string[]) {
  let sp = document.createElement("span");
  let hea = document.createElement("h2");
  hea.textContent = name;
  sp.setAttribute("class", "dropdown-el");
  app.appendChild(hea);
  let firstFlag = true;
  options.forEach((elem, index) => {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "sortType";
    input.value = elem;
    input.id = name + index;
    if (firstFlag) {
      input.checked = firstFlag;
      firstFlag = !firstFlag;
    }
    let lab = document.createElement("label");
    lab.setAttribute("for", name);
    lab.textContent = elem;
    sp.appendChild(input);
    sp.appendChild(lab);
  });
  return sp;
}

function renderCutie() {
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
