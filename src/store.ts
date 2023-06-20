function setApp(key) {
    const storedVal = localStorage.getItem(key);
    $(`#${key} *`).filter(function () {
        return $(this).text().toLowerCase().indexOf(storedVal) > -1
    }).attr("selected", "selected")
    L(`[L.Store]|> Value set for  ${key} => ${storedVal}`);
}

function populateStorage(key, value) {
    L("[L.Store]|> save data to local store");
    if (key && value) {
        localStorage.setItem(key, value);
        setApp(key);
    }
}

