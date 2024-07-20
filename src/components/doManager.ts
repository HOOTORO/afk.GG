import {iconSize} from "../model/constants.js";
import {prop} from "../model/types.js";
import {elProp, elTag } from "./helper.js";

function createElem(t: string, attr?: prop | prop[], ch?: elTag[]) {
  const doc = document.createElement(t);
  if (Array.isArray(attr) && attr.length > 0) {
    for (const a of attr) {
      doc.setAttribute(a.n, a.v);
    }
  } else if (attr && "n" in attr) {
    doc.setAttribute(attr.n, attr.v);
  }
  if (Array.isArray(ch) && ch.length > 0) {
    for (const c of ch) {
      doc.appendChild(document.createElement(c));
    }
  }
  return doc;
}

function genId(s: string) {
  return s.toLowerCase().replaceAll(" ", "-");
}

function buildElement(el: elTag, properties?: prop[], labelText?: string) {
  const container = createElem(elTag.Div);
  const doc = document.createElement(el);
  container.appendChild(doc);
  if (properties && properties.length > 0) {
    for (const p of properties) {
      const fn = processSpecialProp(p);
      fn(doc);
    }
    container.appendChild(doc);
    if (labelText) {
      container.setAttribute(elProp.Class, "labeled-container");
      let label = createElem(elTag.Span);
      label.innerText = labelText;
      container.insertBefore(label, container.firstChild);
    }
    return container;
  }
}

function buildProperty(k: string, val: string) {
  return {n: k, v: val} as prop;
}

function processSpecialProp(p: prop) {
  let r = p.n === "icon";
  if (r) {
    return (y: HTMLElement) => {
      const img = createElem(elTag.Img, [
        buildProperty(elProp.Alt, p.n),
        buildProperty(elProp.Src, p.v),
        buildProperty(elProp.Width, iconSize.toString()),
      ]);
      y.parentNode.insertBefore(img, y);
    };
  } else {
    return (y: HTMLElement) => {
      y.setAttribute(p.n, p.v);
    };
  }
}

export {
  elProp,
  buildElement,
  buildProperty,
  createElem,
  genId,
};
