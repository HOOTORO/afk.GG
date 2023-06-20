const recalc = new Event("recalc");

$(document).on("click", "select", function (e) {
    L(`[Events]|> ${e}`)
});

// Storing user input
$(document).on("change", "select", function (x) {
    const changedValue = $(x.target).find(":selected").val()
    
    L(`[Events]|> Changing ${x.target.id}, new value => ${changedValue}`)
    
    $("#" + x.target.id + " option[selected]").each(function () {
        this.removeAttribute("selected")
    })
    $(x.target).find(":selected").attr("selected", "")
    populateStorage(x.target.id, changedValue)
    
//    $(x.target).trigger("recalc")
    const sli:number = localStorage.getItem("rangeValue") as unknown as number
    updateOutput(sli)
});

$(document).on("recalc", "app", function (y) {
    L(y)    
})