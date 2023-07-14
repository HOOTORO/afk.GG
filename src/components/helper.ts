import { bres, verb } from "../constants.js";
import { BaseResQty, User } from "../types.js";
import { updateResourceBox } from "./output.js";
export const xLog = (x: string) => {
  if (verb) {
    console.log(x);
  }
};

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
function createSelectList(name: string, options: string[] | number[]) {
  const list = document.createElement("select");
  list.id = name;
  for (const opt of options) {
    list.appendChild(
      createElementN("option", { value: opt.toString() }, opt.toString())
    );
  }
  const localVal = storedValue(name);
  if (localVal && options.findIndex((x) => x === localVal) !== -1) {
    list.options.item(options.findIndex((x) => x === localVal)).selected = true;
  } else {
    // $(list).first().attr("selected");
    list.options.item(0).setAttribute("selected", "");
  }
  return list;
}

function createInput(
  t = "text",
  label = `Provide ${t}`,
  img?: string,
  attrs?: tagAttr
) {
  const labelE = createElementN("label");
  labelE.innerHTML = label;
  if (attrs && attrs["id"]) {
    labelE.setAttribute("for", attrs["id"]);
    labelE.setAttribute("id", `${attrs["id"]}__label`);
  }
  if (img) {
    labelE.appendChild(createElementN("img", { src: img }));
  }
  if (!attrs) {
    attrs = {};
  }

  attrs["type"] = t;
  const val = storedValue(attrs["id"]);
  if (val) {
    attrs["value"] = val.toString();
  }
  labelE.appendChild(createElementN("input", attrs));
  return labelE;
}

export {
  chainDomElement,
  createElementN,
  createInput,
  createSelectList,
  generateAFKResObj,
  populateStorage,
  radioGroups,
  rangeSlide,
  setApp,
  weekLabels,
};

function createElementN(tag: string, props?: tagAttr, inner?: string) {
  const doc = document.createElement(tag);
  if (props) {
    Object.entries(props).forEach((k) => {
      doc.setAttribute(k[0], k[1]);
    });
  }
  if (inner) {
    doc.innerHTML = inner;
  }
  return doc;
}

type tagAttr = { [k: string]: string };

function chainDomElement(tags: string[]) {
  let parentEl = document.createElement(tags[0]);
  tags.forEach((tag) => parentEl.appendChild(document.createElement(tag)));
  return parentEl;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function storedValue(inputId: string, value?: any): boolean | string {
  if (value) {
    try {
      localStorage.setItem(inputId, value);
    } catch (e) {
      console.log(`save error ${e}`);
      return false;
    }
    return true;
  }
  const v = localStorage.getItem(inputId);
  return v ? v : false;
}
