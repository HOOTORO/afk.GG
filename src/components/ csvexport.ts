export const exportToCsv = (
  filename: string,
  rows: string[][],
  headers?: string[]
): void => {
  if (!rows || !rows.length) {
    return;
  }
  const separator: string = ",";

  const keys: string[] = Object.keys(rows[0]);

  let columHeaders: string[];

  if (headers) {
    columHeaders = headers;
  } else {
    columHeaders = keys;
  }
  const csvContent =
    "sep=,\n" +
    columHeaders.join(separator) +
    "\n" +
    rows
      .map((row) => {
        return row.join(separator);
      })
      .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
