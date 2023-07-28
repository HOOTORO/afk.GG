import { rewards } from "./components/dataloader.js";
import { populateStorage, rangeSlide } from "./components/helper.js";
import { updateResourceBox } from "./components/output.js";
import { user } from "./gamevents/main.js";
import { ValueModes } from "./model/constants.js";
export const tLoadedEvent = new Event("tableready");
$(document).on("change", "select", function (x) {
    const changedValue = $(x.target).find(":selected").val();
    const reward = rewards.find((g) => g.mode === ValueModes.gMode(x.target.id) &&
        g.rank === changedValue);
    $("#" + x.target.id + " option[selected]").each(function () {
        this.removeAttribute("selected");
    });
    $(x.target).find(":selected").attr("selected", "");
    populateStorage(x.target.id, changedValue);
    user.reward = reward;
    user.calc();
    updateResourceBox(user.income);
});
$(document).on("mousemove", "input[type='range']", function (x) {
    rangeSlide(x.target.value, user);
    updateResourceBox(user.income, x.target.value);
});
$(document).on("change", "input[type='number']", function (x) {
    $(this).val(x.target.value);
});
