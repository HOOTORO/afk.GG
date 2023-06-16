// window.onload = async function () {
//   await init()
//     .then(() => renderPriority())
//     .finally(() => populateStorage());
// };

let app = document.getElementById("app");
if (!localStorage.getItem("app")) {
  populateStorage();
} else {
  setApp();
}
app.onchange = populateStorage;

function setApp() {
  console.log("SET APP");
  const appState = localStorage.getItem("app");
  document.getElementById("app").innerHTML = appState;
}

function populateStorage() {
  console.log("POPULI STORAGE!!");
  localStorage.setItem("app", app.innerHTML);
  setApp();
}

window.onhashchange = function () {
  console.log("Change!" + this);
};

// CLICK Black Select
// $(document).on("click", ".select-menu", function (e) {
//   let menu = $(this);

//   if (!menu.hasClass("open")) {
//     menu.addClass("open");
//   }
// });

// $(document).on("click", ".select-menu > ul > li", function (e) {
//   let li = $(this),
//     menu = li.parent().parent(),
//     select = menu.children("select") as JQuery<HTMLSelectElement>,
//     selected = select.find("option:selected") as JQuery<HTMLOptionElement>,
//     index = li.index();

//   menu.css("--t", index * -41 + "px");
//   selected.attr("selected", 0);
//   select.find("option").eq(index).attr("selected", 1);

//   menu.addClass(index > selected.index() ? "tilt-down" : "tilt-up");

//   setTimeout(() => {
//     menu.removeClass("open tilt-up tilt-down");
//   }, 500);
// });

// $(document).on("click", (e) => {
//   e.stopPropagation();
//   if ($(".select-menu").has(e.target as unknown as string).length === 0) {
//     $(".select-menu").removeClass("open");
//   }
// });

// HORIZONTAL wheel

$(document).on("click", ".select-menu", function (e) {
  let menu = $(this),
    select = menu.children("select"),
    options = select.find("option"),
    active = select.find("option:selected"),
    button = menu.children("button"),
    buttonDiv = button.children("div"),
    current = buttonDiv.children("span");

  if (!menu.hasClass("change")) {
    let nextOption = options.eq(
        active.index() == options.length - 1 ? 0 : active.index() + 1
      ),
      next = $("<span />")
        .addClass("next")
        .text(nextOption.text())
        .appendTo(buttonDiv);

    options.prop("selected", "");
    nextOption.prop("selected", "selected");

    menu.addClass("change");

    setTimeout(() => {
      next.removeClass("next");
      menu.removeClass("change");
      current.remove();
    }, 650);
  }
});
