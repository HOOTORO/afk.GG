import { bres, verb } from "../model/constants.js";
import { BaseResQty, User } from "../model/types.js";
import { updateResourceBox } from "./output.js";

enum elTag {
  Input = "input",
  Div = "div",

  Span = "span",
  Label = "label",
  Select = "select",

  Option = "option",
  Form = "form",
  Img = "img",
}

enum elProp {
  Id = "id",
  Class = "class",
  For = "for",
  Alt = "alt",
  Src = "src",
  Width = "width",
  Style = "style",
  Type = "type",
}
enum Input {
  Number = "number",
  Text = "text",
  CheckBox = "checkbox",
  Datetime = "datetime-local",
}
export const log = (x: string) => {
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
  $("rangeValue").html(value + " weeks");
  $(this).attr("value", value?.toString());
  populateStorage("rangeValue", value);
  updateResourceBox(user.income, parseInt(value));
}

function createSelectList(name: string, options: string[] | number[]) {
  const list = document.createElement("select");
  list.id = name;
  for (const opt of options) {
    list.appendChild(
      newEl("option", { value: opt.toString() }, opt.toString())
    );
  }
  const localVal = storedValue(name);
  if (localVal && options.findIndex((x) => x === localVal) !== -1) {
    list.options.item(options.findIndex((x) => x === localVal)).selected = true;
  } else {
    list.options.item(0).setAttribute("selected", "");
  }
  return list;
}

function createInput(fieldType: Input, attrs?: { [k: string]: string }) {
  attrs["type"] = fieldType;

  return newEl("input", { ...attrs });
}

function savedObj(str: string, def: any) {
  if (storedValue(str)) {
    return Object.assign(def, JSON.parse(storedValue(str).toString()));
  }
  return def;
}

export {
  newEl,
  newBtn,
  createInput,
  createSelectList,
  generateAFKResObj,
  hasEmpty as isEmpty,
  populateStorage,
  rangeSlide,
  savedObj,
  setApp,
  storedValue,
  weekLabels,
  fetchData,
  buttonWrapInput,
  elTag,
  Input,
  elProp,
};

function newEl(tag: string, props?: { [k: string]: string }, inner?: string) {
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

function newBtn(text?: string, c?: string, id?: string) {
  if (!text) {
    text = id;
  }
  return newEl(
    "button",
    {
      type: "button",
      class: `md-button ${c}`,
      // id: id,
    },
    text
  );
}

function storedValue(inputId: string, value?: any): boolean | string {
  if (value >= 0 || value) {
    try {
      const str = JSON.stringify(value);
      localStorage.setItem(inputId, str);
    } catch (e) {
      console.log(`save error ${e}`);
      return false;
    }
    return true;
  }
  const v = localStorage.getItem(inputId);
  return v ? v : false;
}

function hasEmpty(obj: Record<string, any>): boolean {
  return (
    Object.keys(obj).length === 0 &&
    Object.values(obj).some((x) => x === null || x === 0 || x === undefined)
  );
}

export function safeSum(n: number[]) {
  if (!hasEmpty(n)) {
    return n.reduce((a, b) => a + b);
  }
}

async function fetchData(assetsPath: string) {
  const data = await fetch(`/assets/${assetsPath}`);
  const str = await data.text();
  return JSON.parse(str);
}

function buttonWrapInput(el: HTMLElement, update: (y: number) => void) {
  let input = el as HTMLInputElement;

  const wrap = newEl("div", { class: "number-container" }),
    // incBtn = newBtn("◀️", `desc ${el.className}`),
    incBtn = newBtn("<", `desc ${el.className}`),
    // descBtn = newBtn("▶️", `inc ${el.className}`);
    descBtn = newBtn(">", `inc ${el.className}`);
  wrap.appendChild(incBtn);
  wrap.appendChild(el);
  wrap.appendChild(descBtn);
  wrap.addEventListener("click", (e: MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.className.includes("desc") && input.valueAsNumber >= 0) {
        input.stepDown();
      } else {
        input.stepUp();
      }
      update(input.valueAsNumber);
    }
  });

  input.addEventListener("input", () => {
    update(input.valueAsNumber);
  });
  return wrap;
}
