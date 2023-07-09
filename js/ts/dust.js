import { AfkArena, Period } from "./constants.js";
const f = document.getElementById("dust-input"), shopRefresh = document.getElementById("a"), monthlyCard = document.getElementById("c"), fastRewards = document.getElementById("d"), checks = Object.values(document.querySelectorAll("input[type='checkbox']"));
window.onload = CountDust;
f.oninput = lo;
function lo(val) {
    const tg = val.target;
    if (tg.type.startsWith("check")) {
        tg.checked ? tg.setAttribute("checked", "") : tg.removeAttribute("checked");
    }
    else {
        tg.setAttribute("value", tg.value);
    }
    CountDust(val);
}
function CountDust(e) {
    const out = document.getElementById("total");
    let total = AfkArena.dustInc();
    total += (shopRefresh.valueAsNumber + 1) * AfkArena.storeDust();
    checks.forEach((cbx) => {
        if (cbx.checked && cbx.id.startsWith("Misty")) {
            total += AfkArena.mistyValley();
        }
        if (cbx.checked && cbx.id.startsWith("Store")) {
            total += (shopRefresh.valueAsNumber + 1) * AfkArena.storeDiDeal();
        }
    });
    total += AfkArena.subsChest() * monthlyCard.valueAsNumber;
    total += (fastRewards.valueAsNumber + 1) * AfkArena.fastRewards();
    const day = `День <div>${(total * Period.day).toFixed(2)}</div>`, week = `Неделя <div>${(total * Period.week).toFixed(2)}</div>`, month = `Месяц<div>${(total * Period.month).toFixed(2)}</div>`, lvlv = `Прирост уровня<div> ${((total * Period.month) /
        AfkArena.levelup).toFixed(2)}/месяц</div>`;
    out.innerHTML = `<div>${day}</div><div>${week}</div><div>${month}</div><div>${lvlv}</div>`;
}
export { CountDust, lo };
