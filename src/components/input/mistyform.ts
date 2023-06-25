// import { Gsheet, fetchTableData } from "components/gsheets";

function mistyData() {
    fetchTableData("MV").then((v) => mistyResources(v));
    // .then((o) => mistyResources()
}
function mistyResources(t: Gsheet) {
    let options: any[] = [];
    for (let rdata of t.rows) {
        let res = { id: rdata.c[0], res: [] };
        for (let i = 1; i < rdata.c.length; i++) {
            res.res.push(rdata.c[i]?.v);
        }
        options.push(res);
    }
    return options;
}

async function prizeQty(elem: { n: number; res: string }) {
    const t = await fetchTableData("MV2");
    let col = t.cols.findIndex((v) => v.id);
    let qty = t.rows[elem.n].c[col].v;
    return qty;
    // then((t) => {
    // ).finally()
}
