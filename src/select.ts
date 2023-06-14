function renderBalck() {
  $("select[data-menu]").each(function () {
    let select = $(this),
      options = select.find("option"),
      menu = $("<div />").addClass("select-menu"),
      button = $("<div />").addClass("button"),
      list = $("<ul />");
    $("<em />").prependTo(button);

    options.each(function (i) {
      let option = $(this);
      list.append($("<li />").text(option.text()));
    });

    menu.css("--t", select.find(":selected").index() * -41 + "px");

    select.wrap(menu);

    button.append(list).insertAfter(select);

    list.clone().insertAfter(button);
  });
}

function renderHorizontal() {
  $("select[data-menu]").each(function () {
    let select = $(this),
      type = select.data("menu"),
      menu = $("<div />").addClass("select-menu " + type),
      button = $("<button />"),
      buttonDiv = $("<div />");
    $("<span />")
      .text(select.find("option:selected").text())
      .appendTo(buttonDiv);
    $("<em />").prependTo(button);

    button.css({
      "--h": select.outerHeight(),
      "--w": select.outerWidth(),
    });

    select.wrap(menu);

    button.append(buttonDiv).insertAfter(select);
  });
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
