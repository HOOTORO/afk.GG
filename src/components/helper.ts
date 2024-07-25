import { elProp, elTag, Input, verb } from "../model/constants.js";
// import sanitizeHtml from "";
export const log = (x: any) => {
  if (verb) {
    console.log(x);
  }
};

export { hasEmpty, populateStorage, savedObj, setApp, buttonWrapInput };

//! ///////////////////
//! HTML Generators //
//! /////////////////

export function newIn(fieldType: Input, attrs?: { [k: string]: string }) {
  attrs["type"] = fieldType;
  return newEl("input", { ...attrs });
}

export function newEl(
  tag: string,
  props?: { [k: string]: string },
  inner?: string
) {
  const doc = document.createElement(tag);
  if (props) {
    Object.entries(props).forEach((k) => {
      if (k[1] != undefined) {
        doc.setAttribute(k[0], k[1]);
      }
    });
  }
  if (inner) {
    doc.innerHTML = inner;
  }
  return doc;
}

export function newBtn(text?: string, c?: string, id?: string) {
  let attrs: { [x: string]: string } = {};
  attrs[elProp.Type] = "button";
  if (c) {
    attrs[elProp.Class] = c;
  }
  if (id) {
    attrs[elProp.Id] = id;
  }
  return newEl(elTag.Button, attrs, text);
}
function buttonWrapInput(el: HTMLElement, update: (y: number) => void) {
  let input = el as HTMLInputElement;
  const wrap = newEl("div", { class: "number-input" }),
    // incBtn = newBtn("◀️", `desc ${el.className}`),
    incBtn = newBtn("<", `desc ${el.className}`),
    // descBtn = newBtn("▶️", `inc ${el.className}`);
    descBtn = newBtn(">", `inc ${el.className}`);

  wrap.appendChild(incBtn);
  wrap.appendChild(el);
  wrap.appendChild(descBtn);
  wrap.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.className.includes("desc")) {
        if (input.valueAsNumber > 0) {
          input.stepDown();
        }
      } else {
        input.stepUp();
      }
      update(input.valueAsNumber);
    }
  });

  return wrap;
}

//! ///////////////////
//! /// local data ///
//! /////////////////
export function storedValue(inputId: string, value?: any): boolean | string {
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

function savedObj<Type>(str: string, def: Type) {
  if (storedValue(str)) {
    return Object.assign(def, JSON.parse(storedValue(str).toString()));
  }
  return def;
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

//! ///////////////////
//! // utility func //
//! /////////////////

function hasEmpty(obj: Record<string, any>): boolean {
  return (
    Object.keys(obj).length === 0 &&
    Object.values(obj).some((x) => x === null || x === 0 || x === undefined)
  );
}

export function safeSum(n: number[]) {
  if (n.length > 0 && !hasEmpty(n)) {
    return n.reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
}

export async function fetchData(assetsPath: string) {
  const data = await fetch(`/assets/${assetsPath}`);
  const str = await data.text();
  return JSON.parse(str);
}
