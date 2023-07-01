function generateAFKResObj(x) {
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
        type: gid,
        label: short,
        img: `/afk.GG/assets/icons/s/${short}.png`,
        amount: 0,
    };
    return br;
}

const gMode = (x) => {
    const source = sources.find(
        (y) => y.id === x || y.label === x || y.tableName === x
    );
    if (!source) {
        throw new Error("Unknown Source Mode");
    }
    return Object.values(GameMode).find(
        (y) => (y as string) === source.tableName
    );
};
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

function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
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

function rangeSlide(value) {
    document.getElementById("rangeValue").innerHTML = value + " weeks";
    $(this).attr("value", value.toString());
    populateStorage("rangeValue", value);
    updateResourceBox(user.income, value);
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
                                <img src="/afk.GG/assets/icons/s/${choice.type}.png" width="24"></label>
                            </label>`;
            wrap.innerHTML += input;
        }
        container.appendChild(form.appendChild(wrap));
    }
    return container;
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
