import { bres } from "../constants.js";
import { BaseResQty, User, prop } from "../types.js";
import { updateResourceBox } from "./output.js";

function generateAFKResObj(x: string) {
  const gid = x.toLowerCase().replace(/ /g, "-"),
    short = x
      .split(" ")
      .map((v, i) => {
        if (i > 0) {
          return v.charAt(0).toLowerCase();
        } else {
          return v.toLowerCase().substring(0, 4);
        }
      })
      .join("");
  const br: BaseResQty = {
    type: gid as bres,
    label: short,
    img: `../assets/icons/s/${short}.png`,
    amount: 0,
  };
  return br;
}

function setApp(key: string) {
  const storedVal = localStorage.getItem(key);
  $(`#${key} option[value="${storedVal}"]`).first().attr("selected", "");
}

function populateStorage(key: string, value: string) {
  if (key && value) {
    localStorage.setItem(key, value);
    setApp(key);
  }
}

function chainDomElement(tags: string[]) {
  let parentEl = document.createElement(tags[0]);
  tags.forEach((tag) => parentEl.appendChild(document.createElement(tag)));
  return parentEl;
}

function domElWithProperties(tag: string, props: prop[]) {
  const doc = document.createElement(tag);
  props.forEach((v) => doc.setAttribute(v.n, v.v));
  return doc;
}
function weekLabels(n: number, stops: { n: number; desc: string }[]) {
  let html: string = "";
  for (let i = 1; i <= n; i++) {
    if (stops.some((v) => v.n === i)) {
      html += `<option value="${i.toString()}" label="${
        stops.find((v) => v.n === i)?.desc
      }"></option>`;
    } else {
      html += `<option value="${i.toString()}" label=""></option>`;
    }
  }
  return html;
}

function rangeSlide(value: string, user: User) {
  document.getElementById("rangeValue").innerHTML = value + " weeks";
  $(this).attr("value", value?.toString());
  populateStorage("rangeValue", value);
  updateResourceBox(user.income, parseInt(value));
}

function radioGroups(
  opts: { id: number; res: { type: string; amount: number }[] }[]
) {
  const container = document.createElement("div");
  container.id = "mv";
  for (let row of opts) {
    const form = document.createElement("form"),
      wrap = document.createElement("div");

    form.id = `misty-row-${row.id}`;
    wrap.className = "misty-group";
    for (let choice of row.res) {
      const input = `<input type="radio" id="misty-ch-${row.id}-${choice.type}" name="selector">
                            <label for="misty-ch-${row.id}-${choice.type}">
                                ${choice.amount}
                                <img src="../assets/icons/s/${choice.type}.png" width="24"></label>
                            </label>`;
      wrap.innerHTML += input;
    }
    container.appendChild(form.appendChild(wrap));
  }
  return container;
}
function makeSelect(name: string, options: string[] | number[]) {
  const list = document.createElement("select");
  list.id = name;
  const storedValue = localStorage.getItem(list.id);
  for (let i = 0; i < options.length; i++) {
    const element = options[i];
    let opt = document.createElement("option");
    opt.innerText = element.toString();
    opt.setAttribute("value", element.toString());
    if ((storedValue && storedValue === element) || (!storedValue && i === 0)) {
      opt.setAttribute("selected", "");
    }
    list.appendChild(opt);
  }

  return list;
}

const radio = `
<form>
 <div class="misty-group">
<input type="radio" id="option-one" name="selector"><label for="option-one">One</label>
   <input type="radio" id="option-two" name="selector"><label for="option-two">Two</label>
   <input type="radio" id="option-three" name="selector"><label for="option-three"><img src="https://uberstrategist.com/wp-content/uploads/2023/04/unnamed-20.png" width="24"></label>
  </div>
   </form>
<form>
   <div class="misty-group">
<input type="radio" id="option-one1" name="selector"><label for="option-one1">One</label>
     <input type="radio" id="option-two1" name="selector"><label for="option-two1">Two</label>
     <input type="radio" id="option-three1" name="selector"><label for="option-three1"><img src="https://uberstrategist.com/wp-content/uploads/2023/04/unnamed-20.png" width="24"></label>
  </div>
   </form>

`;

function numIn(
  name: string,
  id: string,
  min?: number,
  max?: number,
  size?: number,
  icon?: string,
  width?: number
) {
  const lb = domElWithProperties("label", [{ n: "for", v: `${id}` }]);
  const img = `<img alt="${name}" src="${icon}" width="${width}">`;
  lb.innerHTML = img;
  return domElWithProperties("input", [
    { n: "type", v: "number" },
    { n: "value", v: "0" },
    { n: "min", v: `${min}` },
    { n: "max", v: `${max}` },
    { n: "name", v: `${name}` },
    { n: "size", v: `${size}` },
    { n: "id", v: `${id}` },
  ]).appendChild(lb);
}

export {
  chainDomElement,
  domElWithProperties,
  generateAFKResObj,
  makeSelect,
  populateStorage,
  radioGroups,
  rangeSlide,
  setApp,
  weekLabels,
  numIn,
};
