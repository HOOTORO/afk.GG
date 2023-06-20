// =>  <=
const rewards: ResourceReward[] = [];

function getRewards(source, rank) {
    return rewards.find((v) => v.rank === rank && v.source === source);
}

async function userInput() {
    let inputForm = document.createElement("form");
    inputForm.setAttribute("id", "a-form");
    sources.filter(v => v.display).forEach((k, v) => {
        const container = document.createElement("div")
        container.setAttribute("class","select-container")
        const label = document.createElement("h4")
        label.innerText = k.label
        fetchTableData(k.tableName)
            .then(raw => getHeaders(k.label, raw))
            .then(table => getOptions(table))
            .then(firstcolumn => makeSelect(k.id, firstcolumn))
            .then(select => container.appendChild(select))
            .then(x => container.insertBefore(label, x))
            .finally(() => L(k))
        inputForm.append(container)
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
