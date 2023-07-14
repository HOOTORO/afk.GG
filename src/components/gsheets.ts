import { url } from "../model/constants.js";
import { Gsheet } from "../model/types.js";

async function fetchTableData(tableName: string): Promise<Gsheet> {
  const response = await fetch(url(tableName));
  const text = await response.text();
  //Remove additional text and extract only JSON:
  const json = JSON.parse(text.substring(47).slice(0, -2));
  let x: Gsheet = {
    cols: json.table.cols,
    rows: json.table.rows,
  };
  return x;
}

function headers(t: Gsheet) {
  return t.cols.map((x) => {
    return { id: CharIdToNumber(x.id), label: x.label };
  });
}

function columnData(n: number, t: Gsheet) {
  return t.rows.map((x) => x.c[n].v);
}

function CharIdToNumber(n: string) {
  const input = n.toUpperCase().charCodeAt(0),
    ACode = 65,
    ZCode = 90;

  if (input < ACode || input > ZCode) {
    throw new Error("Bad Character");
  }
  return input - ACode + 1;
}

function tableObjects(table: Gsheet) {
  return table.rows.map((el) => {
    return headers(table).map((h) => {
      return { obj: h.label, value: el.c[h.id].v };
    });
  });
}

export { columnData, fetchTableData, tableObjects };
