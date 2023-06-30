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
