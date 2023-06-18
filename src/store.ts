function setApp() {
    console.log("SET APP");
    $(".select-menu > select")?.each(function () {
        const storedValue = localStorage.getItem(this.id);
        let select = $(this),
        menu = select.parent(),
        options = select.find("option");
        let selected: HTMLOptionElement,
        sindex = 0;

        options.each(function (index, element) {
            if (element.textContent === storedValue) {
                options.eq(index).attr("selected", "");
                sindex = index;
                selected = element;
            }
        });
        menu.css("--t", sindex * -38 + "px");
        updateOutput();
        console.log(`Value set for  ${this.id} => ${selected.textContent}`);
    });
}

function populateStorage() {
    console.log("POPULI STORAGE!!");
    console.log(this);
    $(".select-menu > select").each(function () {
        let select = $(this),
        selected = select.find(":selected").get(0);
        console.log(`${this.id}, ${selected.innerText}`);
        localStorage.setItem(this.id, selected.innerText);
    });
    setApp();
}