"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// render Black select
function renderSelect() {
    $("select[data-menu]").each(function () {
        var select = $(this), options = select.find("option"), menu = $("<div />").addClass("select-menu"), button = $("<div />").addClass("button"), list = $("<ul />");
        $("<em />").prependTo(button);
        options.each(function (i) {
            var option = $(this);
            list.append($("<li />").text(option.text()));
        });
        menu.css("--t", select.find(":selected").index() * -41 + "px");
        select.wrap(menu);
        button.append(list).insertAfter(select);
        list.clone().insertAfter(button);
    });
}
$(document).on("click", ".select-menu", function (e) {
    var menu = $(this);
    if (!menu.hasClass("open")) {
        menu.addClass("open");
    }
});
$(document).on("click", ".select-menu > ul > li", function (e) {
    var li = $(this), menu = li.parent().parent(), select = menu.children("select"), selected = select.find("option:selected"), index = li.index();
    menu.css("--t", index * -41 + "px");
    selected.attr("selected", 0);
    select.find("option").eq(index).attr("selected", 1);
    menu.addClass(index > selected.index() ? "tilt-down" : "tilt-up");
    setTimeout(function () {
        menu.removeClass("open tilt-up tilt-down");
    }, 500);
});
$(document).on("click", function (e) {
    e.stopPropagation();
    if ($(".select-menu").has(e.target.activeElement).length === 0) {
        $(".select-menu").removeClass("open");
    }
});
// EL DROP
function loadDrop() {
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
// render wheel
function renderSelectTwo() {
    $("select[data-menu]").each(function () {
        var select = $(this), type = select.data("menu"), menu = $("<div />").addClass("select-menu " + type), button = $("<button />"), buttonDiv = $("<div />");
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
$(document).on("click", ".select-menu", function (e) {
    var menu = $(this), select = menu.children("select"), options = select.find("option"), active = select.find("option:selected"), button = menu.children("button"), buttonDiv = button.children("div"), current = buttonDiv.children("span");
    if (!menu.hasClass("change")) {
        var nextOption = options.eq(active.index() == options.length - 1 ? 0 : active.index() + 1), next_1 = $("<span />")
            .addClass("next")
            .text(nextOption.text())
            .appendTo(buttonDiv);
        options.attr("selected", 0);
        nextOption.attr("selected", 1);
        menu.addClass("change");
        setTimeout(function () {
            next_1.removeClass("next");
            menu.removeClass("change");
            current.remove();
        }, 650);
    }
});
