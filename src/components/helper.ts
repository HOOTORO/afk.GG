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

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function weekLabels(n:number, stops: {n:number; desc:string}[]){
    let html:string = ""
    for (let i=1; i<=n; i++){
        L(stops.some(v => v.n === i))
        if (stops.some(v => v.n === i)) {
            html += `<option value="${i.toString()}" label="${stops.find(v=>v.n === i)?.desc}"></option>`
        } else {
        html += `<option value="${i.toString()}" label=\"\"></option>`
        }
    }
    return html
}

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value + " weeks";
    $(this).attr("value", value.toString())
    populateStorage("rangeValue", value)
    updateOutput(value)
}