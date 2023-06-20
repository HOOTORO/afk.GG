const L = (x) => {
    if (verb) {
        console.log(x)
    }
}

const app = document.getElementById("app");
startApp();

for (let inputfield of userFields) {
    if (!localStorage.getItem(inputfield.name)) {
        const selected = $(inputfield.name).find(":selected").get(0)
        populateStorage(inputfield.name, selected.innerText);
    } else {
        setApp(inputfield.name);
    }
}




function startApp() {
    userInput()
        .then(u => app.appendChild(u))
        .then(() => app.appendChild(makeOut()))
        .finally(() => L("[MAIN]|> app started"));
//        .finally(() => $("#app").trigger("change", ["foo", "bar"]));
}

//app.onchange = populateStorage;

//function checkStorage() {
//    $("select").each(function () {
//        if (!localStorage.getItem(this.id)) {
//            populateStorage();
//        } else {
//            setApp();
//        }
//    });
//}
