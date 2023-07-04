import { allRes, iconSize, leftover, xh } from "../constants.js";
import { BaseResQty } from "../types.js";
import { weekLabels, domElWithProperties } from "./helper.js";

function makeOut() {
  const out = document.createElement("div"),
    output = document.createElement("output"),
    datalist =
      xh +
      weekLabels(52, [
        { n: 1, desc: "↑ нед." },
        { n: 2, desc: "↑ ~1 мес.   " },
        { n: 26, desc: "↑ полгода" },
        { n: 52, desc: "1 год ↑" },
      ]) +
      leftover;

  out.className = "out";
  output.name = "Total Income";
  output.setAttribute("for", "a-form");
  output.id = "result";
  output.innerHTML += datalist;
  drawResourceBox(output);
  out.appendChild(output);
  return out;
}

function drawResourceBox(parent: Element) {
  allRes.forEach((el: string) => {
    const resContainer = domElWithProperties("div", [
      { n: "class", v: "inc-res" },
    ]);
    const rr = domElWithProperties("span", [{ n: "id", v: el }]);
    resContainer.appendChild(getResImg(el));
    resContainer.appendChild(rr);
    parent.appendChild(resContainer);
  });
}

function getResImg(src: string) {
  const img = document.createElement("img");
  img.src = `/afk.GG/assets/icons/s/${src}.png`;
  img.width = iconSize;
  return img;
}

function updateResourceBox(gr: BaseResQty[], timeW = 1) {
  gr.filter((f) => f.amount > -1).forEach((x) => {
    document.getElementById(x.type).innerHTML = (x
      ? x.amount * timeW
      : 0) as unknown as string;
  });
}

export { drawResourceBox, getResImg, makeOut, updateResourceBox };
