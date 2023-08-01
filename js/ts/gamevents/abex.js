import { buildElement, buildProperty, createElem, DElem, ElProps, genId, } from "../components/doManager.js";
import * as t from "../components/timeleft.js";
import { AbEx, Boss } from "../model/constants.js";
import { Expeditor } from "../model/expeditor.js";
import { Militia } from "../model/types.js";
export default function runAbExTimers() {
    if (AbEx.now < AbEx.start()) {
        t.default(AbEx.lastAbexEnd, AbEx.start(), "abex-timer", `Next Season In<sup id="fnref:teo"><a href="#fn:teo" >1</a></sup>`, "");
    }
    else if (AbEx.now < AbEx.silentHoursIn()) {
        t.default(AbEx.start(), AbEx.silentHoursIn(), "abex-timer", "Silent Hour In", "Наступил");
    }
    else {
        t.default(AbEx.start(), AbEx.left(), "abex-timer", "End In", "Сезон<br>завершен");
    }
}
const app = document.getElementById("rem-food");
const mil = new Militia(10);
export const expeditor = new Expeditor(mil, false);
runAbExTimers();
if (!app) {
    console.log(`no app tag, return`);
}
else {
    initForm(app);
    window.onload = updateAbex;
    app.addEventListener("change", (e) => {
        if (e.target instanceof HTMLInputElement) {
            inputChange(e.target);
            updateAbex();
        }
    });
}
function updateAbex() {
    mil.viewers = parseInt(document.getElementById("mil-specs").getAttribute("value"));
    const sod = document.getElementById("mil-sod");
    expeditor.starStatus = sod.checked ? true : false;
    expeditor.stamina = parseInt(document.getElementById("ex-food").getAttribute("value"));
    let totalFood = expeditor.totalFood();
    let atl = totalFood / Boss.foodCost;
    let rtyLeft = (totalFood % Boss.foodCost) / Boss.retry;
    document.getElementById("total-food").innerText =
        Math.floor(totalFood).toString();
    document.getElementById("attacks-left").innerText =
        Math.floor(atl).toString();
    document.getElementById("retry-breakpoint").innerText = rtyLeft.toFixed(1);
}
function initForm(n) {
    const inputFields = [
        {
            n: DElem.Input,
            v: "Current Stam",
            props: [
                buildProperty("type", "number"),
                buildProperty("id", "ex-food"),
                buildProperty("min", "0"),
                buildProperty("max", "9999"),
                buildProperty("size", "20"),
                buildProperty("value", "0"),
                buildProperty("icon", "/afk.GG/assets/ae/img_stamina_icon_big.png"),
            ],
        },
        {
            n: DElem.Input,
            v: "Spectators",
            props: [
                buildProperty("type", "number"),
                buildProperty("id", "mil-specs"),
                buildProperty("min", "0"),
                buildProperty("max", "10"),
                buildProperty("size", "20"),
                buildProperty("value", "0"),
                buildProperty("icon", "/afk.GG/assets/icons/slg_battlepass_enter.png"),
            ],
        },
        {
            n: DElem.Input,
            v: "Star of Dawn",
            props: [
                buildProperty("type", "checkbox"),
                buildProperty("id", "mil-sod"),
                buildProperty("icon", "/afk.GG/assets/icons/img_bp_enter.png"),
            ],
        },
    ];
    const outputFields = ["Total Food", "Attacks left", "Retry Breakpoint"];
    const out = createElem(DElem.Div, buildProperty(ElProps.Class, "outbox"));
    const form = createElem(DElem.Form, buildProperty("id", "abex-form"));
    for (const field of inputFields) {
        form.appendChild(buildElement(field.n, field.props, field.v));
    }
    for (const o of outputFields) {
        out.appendChild(buildElement(DElem.Span, [buildProperty("id", `${genId(o)}`)], o));
    }
    n.appendChild(form);
    n.appendChild(out);
}
function inputChange(e) {
    if (e.type === "checkbox") {
        e.checked ? e.setAttribute("checked", "") : e.removeAttribute("checked");
    }
    else {
        e.setAttribute("value", e.value);
    }
}
function updateProgressBar() {
    let totalHours = AbEx.abexDurationDays * 24;
    let timePassed = totalHours - AbEx.hoursLeft();
    let percent = (timePassed / totalHours) * 100;
    const bar = document.getElementsByClassName("abex-progress").item(0);
    if (bar) {
        const style = bar.getElementsByClassName("progress-bar").item(0);
        const label = bar.getElementsByClassName("progress-label").item(0);
        style.setAttribute("style", `width:${percent.toFixed(2)}%`);
        label.innerHTML = `${percent.toFixed(2)}% done`;
        for (const item of bar.classList) {
            if (item.startsWith("progress-")) {
                bar.removeAttribute(item);
                bar.setAttribute("class", `progress progress-${((percent / 10) * 10).toFixed(0)}plus candystripe candystripe-animate abex-progress`);
            }
        }
    }
}
export { updateProgressBar };
