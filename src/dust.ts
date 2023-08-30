import { AfkArena, Period } from "./model/constants.js";

const f = document.getElementById("dust-input") as HTMLFormElement,
  shopRefresh = document.getElementById("a") as HTMLInputElement,
  monthlyCard = document.getElementById("c") as HTMLInputElement,
  fastRewards = document.getElementById("d") as HTMLInputElement,
  checks = Object.values(document.querySelectorAll("input[type='checkbox']"));

window.onload = CountDust;
f.oninput = lo;

function lo(val: InputEvent) {
  const tg = val.target as HTMLInputElement;
  if (tg.type.startsWith("check")) {
    tg.checked ? tg.setAttribute("checked", "") : tg.removeAttribute("checked");
  } else {
    tg.setAttribute("value", tg.value);
  }
  CountDust(val);
}
function CountDust(e: Event | InputEvent) {
  const out = document.getElementById("total") as HTMLOutputElement;
  let total: number = AfkArena.dustInc();

  total += (shopRefresh.valueAsNumber + 1) * AfkArena.storeDust();

  checks.forEach((cbx: HTMLInputElement) => {
    if (cbx.checked && cbx.id.startsWith("Misty")) {
      total += AfkArena.mistyValley();
    }
    if (cbx.checked && cbx.id.startsWith("Store")) {
      total += (shopRefresh.valueAsNumber + 1) * AfkArena.storeDiDeal();
    }
  });

  total += AfkArena.subsChest() * monthlyCard.valueAsNumber;
  total += (fastRewards.valueAsNumber + 1) * AfkArena.fastRewards();

  const day = `День <div>${(total * Period.day).toFixed(2)}</div>`,
    week = `Неделя <div>${(total * Period.week).toFixed(2)}</div>`,
    month = `Месяц<div>${(total * Period.month).toFixed(2)}</div>`,
    lvlv = `Прирост уровня<div> ${(
      (total * Period.month) /
      AfkArena.levelup
    ).toFixed(2)}/месяц</div>`;

  out.innerHTML = `<div>${day}</div><div>${week}</div><div>${month}</div><div>${lvlv}</div>`;
}
export { CountDust, lo };

//function drawForm(){
//  const numInputs = [
//    {t: "number", id: "a", n: "a", v:"0", m: 99, ic: `/assets/icons/s/refresh.png`},
//    {t: "number", id: "c", n: "c", v:"0", m: 4, ic: `/assets/icons/s/mc.png`},
//    {t: "number", id: "d", n: "d", v:"0", m: 20, ic: `/assets/icons/s/fr.png`},
//  ]
//  const cbInputs = [
//    {t: "checkbox", id: "a", n: "a", v:"0", m: 99, ic: `/assets/icons/s/dust-store.png`},
//    {t: "checkbox", id: "c", n: "c", v:"0", m: 4},
//    {t: "number", id: "d", n: "d", v:"0", m: 20, ic: `/assets/icons/s/fr.png`},
//  ]
//  const input = createInput("input", ``, `/assets/ae/ranks/icon_level${x}.png`, {
//    min: "0",
//    max: "40",
//    value: expeditor.towns[x] ? expeditor.towns[x].toString() : "0",
//    class: `town tier-${x}`,
//  })
//  const fieldSet = createElementN()
//}