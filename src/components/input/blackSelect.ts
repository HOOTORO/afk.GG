const blackEvent = new Event("BlackSelect");

function renderBlack() {
  $("select[data-menu]").each(function () {
    let select = $(this),
      options = select.find("option"),
      menu = $("<div />").addClass("select-menu"),
      button = $("<div />").addClass("button"),
      list = $("<ul />");
    $("<em />").prependTo(button);
    select.removeAttr("data-menu");

    options.each(function (i) {
      let option = $(this);
      list.append($("<li />").text(option.text()));
    });
    menu.css("--t", select.find(":selected").index() * -1 + "px");
    select.wrap(menu);
    button.append(list).insertAfter(select);
    list.clone().insertAfter(button);
  });
}

function makeBlackSelect(name: string, options: string[]) {
  const list = document.createElement("select");
  list.setAttribute("data-menu", "");
  list.id = name;
  const storedValue = localStorage.getItem(list.id);
  for (let i = 0; i < options.length; i++) {
    const element = options[i];
    const opt = document.createElement("option");
    opt.innerHTML = element;
    if ((storedValue && storedValue === element) || (!storedValue && i === 0)) {
      opt.selected = true;
    }
    list.appendChild(opt);
  }

  return list;
}
