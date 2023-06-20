async function fetchTableData(tableName: string): Promise<GtableData> {
    const response = await fetch(url(tableName));
    const text = await response.text();
    //Remove additional text and extract only JSON:
    const json = JSON.parse(text.substring(47).slice(0, -2));
    let x: GtableData = {
        cols: json.table.cols,
        rows: json.table.rows,
    };
    app.dispatchEvent(tLoadedEvent)
    return x;
}
