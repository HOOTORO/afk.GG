import { verb } from "../model/constants.js";
import { updateResourceBox } from "./output.js";
export const qLog = (x) => {
    if (verb) {
        console.log(x);
    }
};
function generateAFKResObj(x) {
    const gid = x.toLowerCase().replace(/ /g, "-"), short = x
        .split(" ")
        .map((v, i) => {
        if (i > 0) {
            return v.charAt(0).toLowerCase();
        }
        else {
            return v.toLowerCase().substring(0, 4);
        }
    })
        .join("");
    const br = {
        type: gid,
        label: short,
        img: `../assets/icons/s/${short}.png`,
        amount: 0,
    };
    return br;
}
function setApp(key) {
    const storedVal = localStorage.getItem(key);
    $(`#${key} option[value="${storedVal}"]`).first().attr("selected", "");
}
function populateStorage(key, value) {
    if (key && value) {
        localStorage.setItem(key, value);
        setApp(key);
    }
}
function weekLabels(n, stops) {
    let html = "";
    for (let i = 1; i <= n; i++) {
        if (stops.some((v) => v.n === i)) {
            html += `<option value="${i.toString()}" label="${stops.find((v) => v.n === i)?.desc}"></option>`;
        }
        else {
            html += `<option value="${i.toString()}" label=""></option>`;
        }
    }
    return html;
}
function rangeSlide(value, user) {
    document.getElementById("rangeValue").innerHTML = value + " weeks";
    $(this).attr("value", value?.toString());
    populateStorage("rangeValue", value);
    updateResourceBox(user.income, parseInt(value));
}
function createSelectList(name, options) {
    const list = document.createElement("select");
    list.id = name;
    for (const opt of options) {
        list.appendChild(createElementN("option", { value: opt.toString() }, opt.toString()));
    }
    const localVal = storedValue(name);
    if (localVal && options.findIndex((x) => x === localVal) !== -1) {
        list.options.item(options.findIndex((x) => x === localVal)).selected = true;
    }
    else {
        list.options.item(0).setAttribute("selected", "");
    }
    return list;
}
function createInput(t = "text", label = `Provide ${t}`, img, attrs, parent) {
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
    if (parent) {
        parent.appendChild(createElementN("input", attrs));
        parent.appendChild(labelE);
        return parent;
    }
    else {
        labelE.appendChild(createElementN("input", attrs));
        return labelE;
    }
}
function savedObj(str, def) {
    if (storedValue(str)) {
        return JSON.parse(storedValue(str).toString());
    }
    return def;
}
export { createElementN, createInput, createSelectList, difference, generateAFKResObj, isEmpty, isDefault, populateStorage, rangeSlide, safeReduceSum, savedObj, setApp, storedValue, weekLabels, fetchData, buttonWrapInput };
function createElementN(tag, props, inner) {
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
function storedValue(inputId, value) {
    if (value) {
        try {
            const str = JSON.stringify(value);
            localStorage.setItem(inputId, str);
        }
        catch (e) {
            console.log(`save error ${e}`);
            return false;
        }
        return true;
    }
    const v = localStorage.getItem(inputId);
    return v ? v : false;
}
function isEmpty(obj) {
    return (Object.keys(obj).length === 0 &&
        Object.values(obj).every((x) => x === null || x === 0));
}
function isDefault(obj) {
    return Object.values(obj).every((x) => x === null || x === 0);
}
function safeReduceSum(n) {
    if (!isEmpty(n)) {
        return n.reduce((a, b) => a + b);
    }
}
function difference(a, b) {
    return [
        ...b.reduce((acc, v) => acc.set(v, (acc.get(v) || 0) - 1), a.reduce((acc, v) => acc.set(v, (acc.get(v) || 0) + 1), new Map())),
    ].reduce((acc, [v, count]) => acc.concat(Array(Math.abs(count)).fill(v)), []);
}
async function fetchData(assetpath) {
    const data = await fetch(`/afk.GG/assets/${assetpath}`);
    const str = await data.text();
    return JSON.parse(str);
}
function buttonWrapInput(el, update) {
    const inputContainer = createElementN("div", { class: "number-container" });
    inputContainer.appendChild(createElementN("button", { type: "button", class: `btn desc ${el.className}` }, "<|"));
    inputContainer.appendChild(el);
    inputContainer.appendChild(createElementN("button", { type: "button", class: `btn inc ${el.className}` }, "|>"));
    inputContainer.addEventListener("click", (e) => {
        if (e.target instanceof HTMLButtonElement) {
            const inpt = e.target.parentElement.querySelector("input");
            if (e.target.className.search("inc") > -1) {
                inpt.value = (parseInt(inpt.value) + 1).toString();
            }
            else {
                inpt.value = (parseInt(inpt.value) - 1).toString();
            }
            update(parseInt(inpt.value));
        }
    });
    return inputContainer;
}
