function setApp() {
    l("set from localstore")
    $("select")?.each(function () {
        const storedValue = localStorage.getItem(this.id);
        let select = $(this),
            options = select.find("option");
        let selected: HTMLOptionElement,
            sindex = 0;

        options.each(function (index, element) {
            if (element.textContent === storedValue) {
                options.eq(index).attr("selected", "selected")
                sindex = index;
                selected = element;
            }
        });
        const x:number = document.getElementById("rangeValue").innerText.split(" ").at(0) as unknown as number
        updateOutput(x);
        console.log(`Value set for  ${this.id} => ${selected.textContent}`);
    });
}

function populateStorage() {
    l("save data to local store");
    $("select").each(function () {
        let select = $(this),
            selected = select.find(":selected").get(0);
        localStorage.setItem(this.id, selected.innerText);
    });
    setApp();
}