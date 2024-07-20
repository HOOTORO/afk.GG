import { verb } from "../model/constants.js";
import { updateResourceBox } from "./output.js";
var elTag;
(function (elTag) {
    elTag["Input"] = "input";
    elTag["Div"] = "div";
    elTag["Span"] = "span";
    elTag["Label"] = "label";
    elTag["Select"] = "select";
    elTag["Option"] = "option";
    elTag["Form"] = "form";
    elTag["Img"] = "img";
})(elTag || (elTag = {}));
var elProp;
(function (elProp) {
    elProp["Id"] = "id";
    elProp["Class"] = "class";
    elProp["For"] = "for";
    elProp["Alt"] = "alt";
    elProp["Src"] = "src";
    elProp["Width"] = "width";
    elProp["Style"] = "style";
    elProp["Type"] = "type";
})(elProp || (elProp = {}));
var Input;
(function (Input) {
    Input["Number"] = "number";
    Input["Text"] = "text";
    Input["CheckBox"] = "checkbox";
    Input["Datetime"] = "datetime-local";
})(Input || (Input = {}));
export const log = (x) => {
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
    $("rangeValue").html(value + " weeks");
    $(this).attr("value", value?.toString());
    populateStorage("rangeValue", value);
    updateResourceBox(user.income, parseInt(value));
}
function createSelectList(name, options) {
    const list = document.createElement("select");
    list.id = name;
    for (const opt of options) {
        list.appendChild(newEl("option", { value: opt.toString() }, opt.toString()));
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
function createInput(fieldType, attrs) {
    attrs["type"] = fieldType;
    return newEl("input", { ...attrs });
}
function savedObj(str, def) {
    if (storedValue(str)) {
        return Object.assign(def, JSON.parse(storedValue(str).toString()));
    }
    return def;
}
export { newEl, newBtn, createInput, createSelectList, generateAFKResObj, hasEmpty as isEmpty, populateStorage, rangeSlide, savedObj, setApp, storedValue, weekLabels, fetchData, buttonWrapInput, elTag, Input, elProp, };
function newEl(tag, props, inner) {
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
function newBtn(text, c, id) {
    if (!text) {
        text = id;
    }
    return newEl("button", {
        type: "button",
        class: `md-button ${c}`,
    }, text);
}
function storedValue(inputId, value) {
    if (value >= 0 || value) {
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
function hasEmpty(obj) {
    return (Object.keys(obj).length === 0 &&
        Object.values(obj).some((x) => x === null || x === 0 || x === undefined));
}
export function safeSum(n) {
    if (n.length > 0 && !hasEmpty(n)) {
        return n.reduce((a, b) => a + b, 0);
    }
    else {
        return 0;
    }
}
async function fetchData(assetsPath) {
    const data = await fetch(`/assets/${assetsPath}`);
    const str = await data.text();
    return JSON.parse(str);
}
function buttonWrapInput(el, update) {
    let input = el;
    const wrap = newEl("div", { class: "number-container" }), incBtn = newBtn("<", `desc ${el.className}`), descBtn = newBtn(">", `inc ${el.className}`);
    wrap.appendChild(incBtn);
    wrap.appendChild(el);
    wrap.appendChild(descBtn);
    wrap.addEventListener("click", (e) => {
        if (e.target instanceof HTMLButtonElement) {
            if (e.target.className.includes("desc") && input.valueAsNumber >= 0) {
                input.stepDown();
            }
            else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQsSUFBSyxLQVdKO0FBWEQsV0FBSyxLQUFLO0lBQ1Isd0JBQWUsQ0FBQTtJQUNmLG9CQUFXLENBQUE7SUFFWCxzQkFBYSxDQUFBO0lBQ2Isd0JBQWUsQ0FBQTtJQUNmLDBCQUFpQixDQUFBO0lBRWpCLDBCQUFpQixDQUFBO0lBQ2pCLHNCQUFhLENBQUE7SUFDYixvQkFBVyxDQUFBO0FBQ2IsQ0FBQyxFQVhJLEtBQUssS0FBTCxLQUFLLFFBV1Q7QUFFRCxJQUFLLE1BU0o7QUFURCxXQUFLLE1BQU07SUFDVCxtQkFBUyxDQUFBO0lBQ1QseUJBQWUsQ0FBQTtJQUNmLHFCQUFXLENBQUE7SUFDWCxxQkFBVyxDQUFBO0lBQ1gscUJBQVcsQ0FBQTtJQUNYLHlCQUFlLENBQUE7SUFDZix5QkFBZSxDQUFBO0lBQ2YsdUJBQWEsQ0FBQTtBQUNmLENBQUMsRUFUSSxNQUFNLEtBQU4sTUFBTSxRQVNWO0FBQ0QsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ1IsMEJBQWlCLENBQUE7SUFDakIsc0JBQWEsQ0FBQTtJQUNiLDhCQUFxQixDQUFBO0lBQ3JCLG9DQUEyQixDQUFBO0FBQzdCLENBQUMsRUFMSSxLQUFLLEtBQUwsS0FBSyxRQUtUO0FBQ0QsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7SUFDL0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLFNBQVMsaUJBQWlCLENBQUMs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QWlCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNwRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnJlcywgdmVyYiB9IGZyb20gXCIuLi9tb2RlbC9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IEJhc2VSZXNRdHksIFVzZXIgfSBmcm9tIFwiLi4vbW9kZWwvdHlwZXMuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVJlc291cmNlQm94IH0gZnJvbSBcIi4vb3V0cHV0LmpzXCI7XG5cbmVudW0gZWxUYWcge1xuICBJbnB1dCA9IFwiaW5wdXRcIixcbiAgRGl2ID0gXCJkaXZcIixcblxuICBTcGFuID0gXCJzcGFuXCIsXG4gIExhYmVsID0gXCJsYWJlbFwiLFxuICBTZWxlY3QgPSBcInNlbGVjdFwiLFxuXG4gIE9wdGlvbiA9IFwib3B0aW9uXCIsXG4gIEZvcm0gPSBcImZvcm1cIixcbiAgSW1nID0gXCJpbWdcIixcbn1cblxuZW51bSBlbFByb3Age1xuICBJZCA9IFwiaWRcIixcbiAgQ2xhc3MgPSBcImNsYXNzXCIsXG4gIEZvciA9IFwiZm9yXCIsXG4gIEFsdCA9IFwiYWx0XCIsXG4gIFNyYyA9IFwic3JjXCIsXG4gIFdpZHRoID0gXCJ3aWR0aFwiLFxuICBTdHlsZSA9IFwic3R5bGVcIixcbiAgVHlwZSA9IFwidHlwZVwiLFxufVxuZW51bSBJbnB1dCB7XG4gIE51bWJlciA9IFwibnVtYmVyXCIsXG4gIFRleHQgPSBcInRleHRcIixcbiAgQ2hlY2tCb3ggPSBcImNoZWNrYm94XCIsXG4gIERhdGV0aW1lID0gXCJkYXRldGltZS1sb2NhbFwiLFxufVxuZXhwb3J0IGNvbnN0IGxvZyA9ICh4OiBzdHJpbmcpID0+IHtcbiAgaWYgKHZlcmIpIHtcbiAgICBjb25zb2xlLmxvZyh4KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBRktSZXNPYmooeDogc3RyaW5nKSB7XG4gIGNvbnN0IGdpZCA9IHgudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csIFwiLVwiKSxcbiAgICBzaG9ydCA9IHhcbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHYuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHYudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcbiAgY29uc3QgYnI6IEJhc2VSZXNRdHkgPSB7XG4gICAgdHlwZTogZ2lkIGFzIGJyZXMsXG4gICAgbGFiZWw6IHNob3J0LFxuICAgIGltZzogYC4uL2Fzc2V0cy9pY29ucy9zLyR7c2hvcnR9LnBuZ2AsXG4gICAgYW1vdW50OiAwLFxuICB9O1xuICByZXR1cm4gYnI7XG59XG5cbmZ1bmN0aW9uIHNldEFwcChrZXk6IHN0cmluZykge1xuICBjb25zdCBzdG9yZWRWYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAkKGAjJHtrZXl9IG9wdGlvblt2YWx1ZT1cIiR7c3RvcmVkVmFsfVwiXWApLmZpcnN0KCkuYXR0cihcInNlbGVjdGVkXCIsIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIHNldEFwcChrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdlZWtMYWJlbHMobjogbnVtYmVyLCBzdG9wczogeyBuOiBudW1iZXI7IGRlc2M6IHN0cmluZyB9W10pIHtcbiAgbGV0IGh0bWw6IHN0cmluZyA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykge1xuICAgIGlmIChzdG9wcy5zb21lKCh2KSA9PiB2Lm4gPT09IGkpKSB7XG4gICAgICBodG1sICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtpLnRvU3RyaW5nKCl9XCIgbGFiZWw9XCIke1xuICAgICAgICBzdG9wcy5maW5kKCh2KSA9PiB2Lm4gPT09IGkpPy5kZXNjXG4gICAgICB9XCI+PC9vcHRpb24+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aS50b1N0cmluZygpfVwiIGxhYmVsPVwiXCI+PC9vcHRpb24+YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGh0bWw7XG59XG5cbmZ1bmN0aW9uIHJhbmdlU2xpZGUodmFsdWU6IHN0cmluZywgdXNlcjogVXNlcikge1xuICAkKFwicmFuZ2VWYWx1ZVwiKS5odG1sKHZhbHVlICsgXCIgd2Vla3NcIik7XG4gICQodGhpcykuYXR0cihcInZhbHVlXCIsIHZhbHVlPy50b1N0cmluZygpKTtcbiAgcG9wdWxhdGVTdG9yYWdlKFwicmFuZ2VWYWx1ZVwiLCB2YWx1ZSk7XG4gIHVwZGF0ZVJlc291cmNlQm94KHVzZXIuaW5jb21lLCBwYXJzZUludCh2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RMaXN0KG5hbWU6IHN0cmluZywgb3B0aW9uczogc3RyaW5nW10gfCBudW1iZXJbXSkge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgbGlzdC5pZCA9IG5hbWU7XG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBsaXN0LmFwcGVuZENoaWxkKFxuICAgICAgbmV3RWwoXCJvcHRpb25cIiwgeyB2YWx1ZTogb3B0LnRvU3RyaW5nKCkgfSwgb3B0LnRvU3RyaW5nKCkpXG4gICAgKTtcbiAgfVxuICBjb25zdCBsb2NhbFZhbCA9IHN0b3JlZFZhbHVlKG5hbWUpO1xuICBpZiAobG9jYWxWYWwgJiYgb3B0aW9ucy5maW5kSW5kZXgoKHgpID0+IHggPT09IGxvY2FsVmFsKSAhPT0gLTEpIHtcbiAgICBsaXN0Lm9wdGlvbnMuaXRlbShvcHRpb25zLmZpbmRJbmRleCgoeCkgPT4geCA9PT0gbG9jYWxWYWwpKS5zZWxlY3RlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC5vcHRpb25zLml0ZW0oMCkuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KGZpZWxkVHlwZTogSW5wdXQsIGF0dHJzPzogeyBbazogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgYXR0cnNbXCJ0eXBlXCJdID0gZmllbGRUeXBlO1xuXG4gIHJldHVybiBuZXdFbChcImlucHV0XCIsIHsgLi4uYXR0cnMgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVkT2JqKHN0cjogc3RyaW5nLCBkZWY6IGFueSkge1xuICBpZiAoc3RvcmVkVmFsdWUoc3RyKSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZiwgSlNPTi5wYXJzZShzdG9yZWRWYWx1ZShzdHIpLnRvU3RyaW5nKCkpKTtcbiAgfVxuICByZXR1cm4gZGVmO1xufVxuXG5leHBvcnQge1xuICBuZXdFbCxcbiAgbmV3QnRuLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlU2VsZWN0TGlzdCxcbiAgZ2VuZXJhdGVBRktSZXNPYmosXG4gIGhhc0VtcHR5IGFzIGlzRW1wdHksXG4gIHBvcHVsYXRlU3RvcmFnZSxcbiAgcmFuZ2VTbGlkZSxcbiAgc2F2ZWRPYmosXG4gIHNldEFwcCxcbiAgc3RvcmVkVmFsdWUsXG4gIHdlZWtMYWJlbHMsXG4gIGZldGNoRGF0YSxcbiAgYnV0dG9uV3JhcElucHV0LFxuICBlbFRhZyxcbiAgSW5wdXQsXG4gIGVsUHJvcCxcbn07XG5cbmZ1bmN0aW9uIG5ld0VsKHRhZzogc3RyaW5nLCBwcm9wcz86IHsgW2s6IHN0cmluZ106IHN0cmluZyB9LCBpbm5lcj86IHN0cmluZykge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChwcm9wcykge1xuICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBkb2Muc2V0QXR0cmlidXRlKGtbMF0sIGtbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbm5lcikge1xuICAgIGRvYy5pbm5lckhUTUwgPSBpbm5lcjtcbiAgfVxuICByZXR1cm4gZG9jO1xufVxuXG5mdW5jdGlvbiBuZXdCdG4odGV4dD86IHN0cmluZywgYz86IHN0cmluZywgaWQ/OiBzdHJpbmcpIHtcbiAgaWYgKCF0ZXh0KSB7XG4gICAgdGV4dCA9IGlkO1xuICB9XG4gIHJldHVybiBuZXdFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBjbGFzczogYG1kLWJ1dHRvbiAke2N9YCxcbiAgICAgIC8vIGlkOiBpZCxcbiAgICB9LFxuICAgIHRleHRcbiAgKTtcbn1cblxuZnVuY3Rpb24gc3RvcmVkVmFsdWUoaW5wdXRJZDogc3RyaW5nLCB2YWx1ZT86IGFueSk6IGJvb2xlYW4gfCBzdHJpbmcge1xuICBpZiAodmFsdWUgPj0gMCB8fCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdHIgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbnB1dElkLCBzdHIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBzYXZlIGVycm9yICR7ZX1gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgdiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlucHV0SWQpO1xuICByZXR1cm4gdiA/IHYgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFzRW1wdHkob2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDAgJiZcbiAgICBPYmplY3QudmFsdWVzKG9iaikuc29tZSgoeCkgPT4geCA9PT0gbnVsbCB8fCB4ID09PSAwIHx8IHggPT09IHVuZGVmaW5lZClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVTdW0objogbnVtYmVyW10pIHtcbiAgaWYgKG4ubGVuZ3RoID4gMCAmJiAhaGFzRW1wdHkobikpIHtcbiAgICByZXR1cm4gbi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShhc3NldHNQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAvYXNzZXRzLyR7YXNzZXRzUGF0aH1gKTtcbiAgY29uc3Qgc3RyID0gYXdhaXQgZGF0YS50ZXh0KCk7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbldyYXBJbnB1dChlbDogSFRNTEVsZW1lbnQsIHVwZGF0ZTogKHk6IG51bWJlcikgPT4gdm9pZCkge1xuICBsZXQgaW5wdXQgPSBlbCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0IHdyYXAgPSBuZXdFbChcImRpdlwiLCB7IGNsYXNzOiBcIm51bWJlci1jb250YWluZXJcIiB9KSxcbiAgICAvLyBpbmNCdG4gPSBuZXdCdG4oXCLil4DvuI9cIiwgYGRlc2MgJHtlbC5jbGFzc05hbWV9YCksXG4gICAgaW5jQnRuID0gbmV3QnRuKFwiPFwiLCBgZGVzYyAke2VsLmNsYXNzTmFtZX1gKSxcbiAgICAvLyBkZXNjQnRuID0gbmV3QnRuKFwi4pa277iPXCIsIGBpbmMgJHtlbC5jbGFzc05hbWV9YCk7XG4gICAgZGVzY0J0biA9IG5ld0J0bihcIj5cIiwgYGluYyAke2VsLmNsYXNzTmFtZX1gKTtcbiAgd3JhcC5hcHBlbmRDaGlsZChpbmNCdG4pO1xuICB3cmFwLmFwcGVuZENoaWxkKGVsKTtcbiAgd3JhcC5hcHBlbmRDaGlsZChkZXNjQnRuKTtcbiAgd3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImRlc2NcIikgJiYgaW5wdXQudmFsdWVBc051bWJlciA+PSAwKSB7XG4gICAgICAgIGlucHV0LnN0ZXBEb3duKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5zdGVwVXAoKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZShpbnB1dC52YWx1ZUFzTnVtYmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgdXBkYXRlKGlucHV0LnZhbHVlQXNOdW1iZXIpO1xuICB9KTtcbiAgcmV0dXJuIHdyYXA7XG59XG4iXX0=