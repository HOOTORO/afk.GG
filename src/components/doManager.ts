import {iconSize} from "../model/constants.js";
import {prop} from "../model/types.js";

enum htmlTags {
  Input = "input",
  Div = "div",

  Span = "span",
  Label = "label",
  Select = "select",

  Option = "option",
  Form = "form",
  Img = "img",
}

enum tagAttrs {
  Id = "id",
  Class = "class",
  For = "for",
  Alt = "alt",
  Src = "src",
  Width = "width",
  Style = "style",
}

function createElem(t: string, attr?: prop | prop[], ch?: htmlTags[]) {
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

function buildElement(el: htmlTags, properties?: prop[], labelText?: string) {
  const container = createElem(htmlTags.Div);
  const doc = document.createElement(el);
  container.appendChild(doc);
  if (properties && properties.length > 0) {
    for (const p of properties) {
      const fn = processSpecialProp(p);
      fn(doc);
    }
    container.appendChild(doc);
    if (labelText) {
      container.setAttribute(tagAttrs.Class, "labeled-container");
      let label = createElem(htmlTags.Span);
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
      const img = createElem(htmlTags.Img, [
        buildProperty(tagAttrs.Alt, p.n),
        buildProperty(tagAttrs.Src, p.v),
        buildProperty(tagAttrs.Width, iconSize.toString()),
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
  htmlTags as DElem,
  tagAttrs as ElProps,
  buildElement,
  buildProperty,
  createElem,
  genId,
};
