const desc = getMeta("description");
if (desc?.includes("@")) {
    const regex = /@(\w+)/g;
    let m;
    while ((m = regex.exec(desc)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
}
function getMeta(metaName) {
    const metals = document.getElementsByTagName("meta");
    for (const element of metals) {
        if (element.getAttribute("name") === metaName) {
            return element.getAttribute("content");
        }
    }
    return "";
}
