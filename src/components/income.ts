// =>  <=
const rewards: ResourceReward[] = [];

function getRewards(source, rank) {
    return rewards.find((v) => v.rank === rank && v.source === source);
}

async function userInput() {
    let inputForm = document.createElement("form");
    inputForm.setAttribute("id", "a-form");
    sources.filter(v => v.display).forEach((k, v) => {
        const label = document.createElement("label")
        label.setAttribute("for", k.id)
        label.innerText = k.label
        fetchTableData(k.tableName)
            .then(raw => getHeaders(k.label, raw))
            .then(table => getOptions(table))
            .then(firstcolumn => makeSelect(k.id, firstcolumn))
            .then(select => inputForm.appendChild(select))
            .then(x => inputForm.insertBefore(label, x))
            //            .then(select => console.log(select))
            .finally(() => l(k))
    });
    return inputForm;
}

function getOptions(table: GtableData) {
    let firstColumn: string[] = [];

    for (const element of table.rows) {
        const row = element;
        firstColumn.push(row.c[0].v);
    }
    return firstColumn;
}

function getHeaders(source: string, table: GtableData) {
    let columns: { id: number; label: string }[] = [];
    table.cols.forEach((element, index) => {
        columns.push({id: index, label: element.label});
    });
    table.rows.forEach((el) => {
        let r: ResourceReward = {
            source: source.toLowerCase().replace(" ", "-"), rank: el.c[0].v,
            bait: 0, reds: 0, sg: 0, tc: 0,
            dia: 0, yells: 0, poe: 0, dust: 0,
            juice: 0, mcard: 0, ss: 0,
        };
        const keys = Object.keys(r);
        columns.forEach((col) => {
            if (el.c[col.id] && keys.some((e) => e === col.label.toLowerCase())) {
                r[col.label.toLowerCase()] = el.c[col.id]?.v;
            }
        });
        rewards.push(r);
    });
    return table;
}

function timeRange() {
    let container = document.createElement("div")
    container.id = "time-range"
    let sliderValue = document.createElement("span")
    sliderValue.id = "rangeValue"
    sliderValue.innerText = "1"
    const slider = document.createElement("Input")
    setAttributes(slider, {
        "class": "range",
        "type": "range",
        "value": "1",
        "min": "1",
        "max": "48",
        "onChange": "rangeSlide(this.value)",
        "onmousemove": "rangeSlide(this.value)",

    })
    let x = container.appendChild(sliderValue)
    return x.appendChild(slider)
//    const options = [1, 2, 3, 4, 5, 6, 7, 8]
}

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value + " weeks";
    updateOutput(value)
}

const xh = `
    <div>
        <span id="rangeValue">1 week</span>
        <Input class="range" type="range" name "" value="1" min="1" max="52" onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)"></Input>
    </div>
`


function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}