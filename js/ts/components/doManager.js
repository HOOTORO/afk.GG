import { iconSize } from "../constants.js";
var htmlTags;
(function (htmlTags) {
    htmlTags["Input"] = "input";
    htmlTags["Div"] = "div";
    htmlTags["Span"] = "span";
    htmlTags["Label"] = "label";
    htmlTags["Select"] = "select";
    htmlTags["Option"] = "option";
    htmlTags["Form"] = "form";
    htmlTags["Img"] = "img";
})(htmlTags || (htmlTags = {}));
var tagAttrs;
(function (tagAttrs) {
    tagAttrs["Id"] = "id";
    tagAttrs["Class"] = "class";
    tagAttrs["For"] = "for";
    tagAttrs["Alt"] = "alt";
    tagAttrs["Src"] = "src";
    tagAttrs["Width"] = "width";
    tagAttrs["Style"] = "style";
})(tagAttrs || (tagAttrs = {}));
function createElem(t, attr, ch) {
    const doc = document.createElement(t);
    if (Array.isArray(attr) && attr.length > 0) {
        for (const a of attr) {
            doc.setAttribute(a.n, a.v);
        }
    }
    else if (attr && "n" in attr) {
        doc.setAttribute(attr.n, attr.v);
    }
    if (Array.isArray(ch) && ch.length > 0) {
        for (const c of ch) {
            doc.appendChild(document.createElement(c));
        }
    }
    return doc;
}
function createWithLabel(t, id, lb) {
    const label = createElem(htmlTags.Label, [buildProperty(tagAttrs.For, id)]);
    label.innerText = lb;
    return createElem(t, [buildProperty(tagAttrs.Id, id)]).appendChild(label);
}
function genId(s) {
    return s.toLowerCase().replaceAll(" ", "-");
}
function buildElement(el, properties, labelText) {
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
function buildProperty(k, val) {
    return { n: k, v: val };
}
function processSpecialProp(p) {
    let r = p.n === "icon";
    if (r) {
        return (y) => {
            const img = createElem(htmlTags.Img, [
                buildProperty(tagAttrs.Alt, p.n),
                buildProperty(tagAttrs.Src, p.v),
                buildProperty(tagAttrs.Width, iconSize.toString()),
            ]);
            y.parentNode.insertBefore(img, y);
        };
    }
    else {
        return (y) => {
            y.setAttribute(p.n, p.v);
        };
    }
}
export { buildElement, buildProperty };
export { createElem, tagAttrs as ElProps, htmlTags as DElem, createWithLabel, genId, };
