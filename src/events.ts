// CLICK Black Select
$(document).on("click", ".select-menu", function (e) {
  let menu = $(this);
  if (!menu.hasClass("open")) {
    menu.addClass("open");
  }
});

$(document).on("click", ".select-menu > ul > li", function (e) {
  let li = $(this),
    menu = li.parent().parent(),
    select = menu.children("select"),
    selected = select.find("option:selected") as JQuery<HTMLOptionElement>,
    index = li.index();

  menu.css("--t", index * -38 + "px");
  selected.removeAttr("selected");
  select.find("option").eq(index).attr("selected", "");

  menu.addClass(index > selected.index() ? "tilt-down" : "tilt-up");
  select.trigger("change");

  setTimeout(() => {
    menu.removeClass("open tilt-up tilt-down");
  }, 500);
});

$(document).on("click", (e) => {
  e.stopPropagation();
  if ($(".select-menu").has(e.target as unknown as string).length === 0) {
    $(".select-menu").removeClass("open");
  }
});


