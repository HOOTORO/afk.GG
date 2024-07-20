import {
  buildElement,
  buildProperty,
  createElem,
  elProp,
  genId,
} from "./components/doManager.js";
import { aeIcons, Boss } from "./model/constants.js";

import { loadBag, RelicEstimator } from "./abex/relicEstimate.js";
import { elTag, Input, log } from "./components/helper.js";
import { Militia } from "./types/militia.js";
import { Expeditor } from "./types/expeditor.js";
import { Locations } from "./util/locations.js";
import { stam } from "./types/abex-resource.js";
import { AttackForm } from "./abex/attackform.js";

export const mil = new Militia(10);
export const expeditor = new Expeditor(mil, false);

switch (window.location.pathname) {
  case Locations.abex:
    RelicEstimator();
    loadBag();
    break;
  case Locations.warBook:
    log(
      `may be PIDOR? ${window.location.pathname}\nno, you PIDOR may be? ${Locations.warBook}`
    );
    AttackForm();
    foodRemain();
    break;
  default:
    console.log("nothing to do here");
}

export function foodRemain() {
  const app = document.getElementById("rem-food");
  if (!app) {
    console.log(`no app tag, return`);
  } else {
    initForm(app);
    window.onload = updateAbex;

    app.addEventListener("change", (e) => {
      if (e.target instanceof HTMLInputElement) {
        inputChange(e.target);
        updateAbex();
      }
    });
  }
}
function updateAbex() {
  // updatevaluers
  mil.viewers = parseInt(
    document.getElementById("mil-specs").getAttribute("value")
  );
  const sod = document.getElementById("mil-sod") as HTMLInputElement;
  expeditor.star = sod.checked ? true : false;
  expeditor.stamina.value = parseInt(
    document.getElementById("ex-food").getAttribute("value")
  );

  // calculations
  let totalFood = expeditor.SilentStam();
  let atl = totalFood / Boss.foodCost;
  let rtyLeft = (totalFood % Boss.foodCost) / Boss.retry;

  document.getElementById("total-food").innerText =
    Math.floor(totalFood).toString();
  document.getElementById("attacks-left").innerText =
    Math.floor(atl).toString();
  document.getElementById("retry-breakpoint").innerText = rtyLeft.toFixed(1);
}

function initForm(n: HTMLElement) {
  const inputFields = [
    {
      n: elTag.Input,
      v: "AbEx Start",
      props: [
        buildProperty("type", Input.Datetime),
        buildProperty("id", "abex-date"),
      ],
    },
    {
      n: elTag.Input,
      v: "Current Stam",
      props: [
        buildProperty("type", "number"),
        buildProperty("id", "ex-food"),
        buildProperty("min", "0"),
        buildProperty("max", "9999"),
        buildProperty("size", "20"),
        buildProperty("value", "0"),
        buildProperty("icon", stam),
      ],
    },
    {
      n: elTag.Input,
      v: "Spectators",
      props: [
        buildProperty("type", "number"),
        buildProperty("id", "mil-specs"),
        buildProperty("min", "0"),
        buildProperty("max", "10"),
        buildProperty("size", "20"),
        buildProperty("value", "0"),
        buildProperty("icon", aeIcons.bpEnter),
      ],
    },
    {
      n: elTag.Input,
      v: "Star of Dawn",
      props: [
        buildProperty("type", "checkbox"),
        buildProperty("id", "mil-sod"),
        buildProperty("icon", aeIcons.bpEnterImg),
      ],
    },
  ];
  const outputFields = ["Total Food", "Attacks left", "Retry Breakpoint"];
  const out = createElem(elTag.Div, buildProperty(elProp.Class, "outbox"));
  const form = createElem(elTag.Form, buildProperty(elProp.Id, "abex-form"));

  for (const field of inputFields) {
    form.appendChild(buildElement(field.n, field.props, field.v));
  }

  for (const o of outputFields) {
    out.appendChild(
      buildElement(elTag.Span, [buildProperty(elProp.Id, `${genId(o)}`)], o)
    );
  }
  n.appendChild(form);
  n.appendChild(out);
}

function inputChange(e: HTMLInputElement) {
  if (e.type === "checkbox") {
    e.checked ? e.setAttribute("checked", "") : e.removeAttribute("checked");
  } else {
    e.setAttribute("value", e.value);
  }
}
