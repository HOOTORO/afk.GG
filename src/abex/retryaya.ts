import { expeditor } from "../abex.js";
import { elBuilder } from "../components/builder.js";
import { Boss, elTag, Input, AbEx } from "../model/constants.js";

export function foodRemain() {
  const app = document.getElementById("rem-food");
  if (!app) {
    console.log(`no app tag, return`);
  } else {
    initForm(app);
    window.onload = updateAbex;

    app.addEventListener("input", (e) => {
      if (e.target instanceof HTMLInputElement) {
        inputChange(e.target);
        updateAbex();
      }
    });
  }
}
function updateAbex() {
  // calculations
  let totalFood = expeditor.SilentStam();
  let atl = totalFood / Boss.foodCost;
  let rtyLeft = (totalFood % Boss.foodCost) / Boss.retry;

  document.getElementById("total-food").innerText =
    Math.floor(totalFood).toString();
  document.getElementById("attack-left").innerText = Math.floor(atl).toString();
  document.getElementById("retry-lim").innerText = rtyLeft.toFixed(1);
}

function initForm(n: HTMLElement) {
  const form = new elBuilder(elTag.Form, { class: "team-set-inputs" }) //id: "abex-form",
      .add(
        elTag.Input,
        { type: Input.Datetime, id: "abex-date" },
        "Season start"
      )
      .add(expeditor.stamina.html())
      .add(expeditor.guild.specs.html())
      .add(expeditor.star.html())
      .html(),
    out = new elBuilder(elTag.Div, { class: "outbox" })
      .add(elTag.Span, { id: `total-food` }, "Food")
      .add(elTag.Span, { id: `attack-left` }, "Left")
      .add(elTag.Span, { id: `retry-lim` }, "Retries")
      .html();

  // const outputFields = ["Total Food", "Attacks left", "Retry Breakpoint"]
  n.appendChild(form);
  n.appendChild(out);
}

function inputChange(e: HTMLInputElement) {
  if (e.type === "datetime-local") {
    AbEx.startD = e.valueAsDate;
  } else {
    e.setAttribute("value", e.value);
  }
}
