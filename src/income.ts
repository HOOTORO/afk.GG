type ResourceReward = {
    source: string;
    rank: string;
    dia?: number;
    bait?: number;
    reds?: number;
    yells?: number;
    tc?: number;
    sg?: number;
    poe?: number;
    dust?: number;
    juice?: number;
    mcard?: number;
    ss?: number;
};
// =>  <=
const rewards: ResourceReward[] = [];

function getRewards(source, rank) {
    return rewards.find((v) => v.rank === rank && v.source === source);
}

async function userInput() {
    let inputForm = document.createElement("form");
    inputForm.setAttribute("class", "a-form");
    for (let tbl of sources.filter(value => value.display)) {
        await getSelectList(tbl)
            .then((h) => inputForm.appendChild(h))
            .finally(() => console.log("we re donr"))
    }
    return inputForm;
}

async function getSelectList(re:AfkMode) {
    const listName = document.createElement("h4");
    listName.textContent = re.label;
    fetchTableData(re.tableName)
        .then((tt) => getHeaders(re.label, tt))
        .then((t) => getOptions(t))
        .then((o) => listName.appendChild(makeBlackSelect(re.id, o)))
        .finally(() => app.dispatchEvent(blackEvent));
    return listName;
}

function getOptions(table: GtableData) {
    let firstColumn: string[] = [];

    for (const element of table.rows) {
        const row = element;
        //iterate through rows
        firstColumn.push(row.c[0].v);
        //rows would be accessed using the "row" variable assigned in the for loop
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
            source: source.toLowerCase().replace(" ", "-"),
            rank: el.c[0].v,
            bait: 0,
            reds: 0,
            sg: 0,
            tc: 0,
            dia: 0,
            yells: 0,
            poe: 0,
            dust: 0,
            juice: 0,
            mcard: 0,
            ss: 0,
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
