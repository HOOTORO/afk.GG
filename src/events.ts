const tLoadedEvent = new Event("tableready");

// Listen for the event.
$(document).on("tableready", "app", function (e) {
    /* … */
});

$(document).on("click", "select", function (e) {
    L(`[Events]|> ${e}`);
});

// Storing user input
$(document).on("change", "select", function (x) {
    const changedValue = $(x.target).find(":selected").val();

    L(`[Events]|> Changing ${x.target.id}, new value => ${changedValue}`);

    $("#" + x.target.id + " option[selected]").each(function () {
        this.removeAttribute("selected");
    });
    $(x.target).find(":selected").attr("selected", "");
    populateStorage(x.target.id, changedValue);
    updateUserRank(x.target.id, changedValue as string);
    LCD(`User => ${user}`);
    updateResourceBox(user[gMode(x.target.id)].rewards);
});

// test
$(document).on("recalc", "app", function (y) {
    L(y);
});
