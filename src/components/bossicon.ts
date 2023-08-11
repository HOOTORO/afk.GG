import { BossManager } from "../model/boss.js";
import { Preferences } from "../settings.js";

export function BossIcons(){
const table = document.querySelectorAll("td");

if (table.length > 0) {
  table.forEach((x) => {
    if (
      BossManager.bosses.findIndex((y) =>
        x.innerText.toLowerCase().startsWith(y.name)
      ) > -1
    ) {
      x.insertAdjacentHTML(
        "afterbegin",
        `<img src="${
          BossManager.bosses.find((b) =>
            x.innerText.toLowerCase().startsWith(b.name)
          ).icon
        }" width=${Preferences.BossIcon} style="margin-right: 20px">`
      );
      x.setAttribute("style", "display:flex;align-items: center;");
    }
  });
}
}
