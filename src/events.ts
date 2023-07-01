const tLoadedEvent = new Event("tableready");

// Storing user input
$(document).on("change", "select", function (x) {
    const changedValue = $(x.target).find(":selected").val();
    const reward = rewards.find(
        (g) =>
            g.mode === gMode(x.target.id) && g.rank === (changedValue as string)
    );

    L(`[Events]|> Changing ${x.target.id}, new value => ${changedValue}`);
    $("#" + x.target.id + " option[selected]").each(function () {
        this.removeAttribute("selected");
    });
    $(x.target).find(":selected").attr("selected", "");

    populateStorage(x.target.id, changedValue);
    user.reward = reward;
    user.calc();
    updateResourceBox(user.income);
});
