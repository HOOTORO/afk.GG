import { rewards } from "./components/dataloader.js";
import { populateStorage, rangeSlide } from "./components/helper.js";
import { updateResourceBox } from "./components/output.js";
import { ValueModes } from "./constants.js";
import { user } from "./main.js";
import { RankReward } from "./types.js";

export const tLoadedEvent = new Event("tableready");

// Storing user input
$(document).on("change", "select", function (x) {
  const changedValue = $(x.target).find(":selected").val();
  const reward = rewards.find(
    (g: RankReward) =>
      g.mode === ValueModes.gMode(x.target.id) &&
      g.rank === (changedValue as string)
  );
  $("#" + x.target.id + " option[selected]").each(function () {
    this.removeAttribute("selected");
  });
  $(x.target).find(":selected").attr("selected", "");

  populateStorage(x.target.id, changedValue as string);
  user.reward = reward;
  user.calc();
  updateResourceBox(user.income);
});

$(document).on("mousemove", "input[type='range']", function (x) {
  rangeSlide(x.target.value, user);
  updateResourceBox(user.income, x.target.value);
});

$(window).on("hashchange", "body", function (x) {
  console.log("WE CHANGE PAGE ");
  console.log(x);
});

$(document).on("change", "input[type='number']", function (x) {
  $(this).val(x.target.value);
  console.log("change number triggered");
});
