import { Gsheet } from "../model/types.js";
declare function fetchTableData(tableName: string): Promise<Gsheet>;
declare function columnData(n: number, t: Gsheet): string[];
declare function tableObjects(table: Gsheet): {
    obj: string;
    value: string;
}[][];
export { columnData, fetchTableData, tableObjects };
//# sourceMappingURL=gsheets.d.ts.map