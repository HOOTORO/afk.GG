let app = document.getElementById("app");
startApp();
//window.onload = function () {
//    startApp();
//};


function startApp() {
    userInput()
        .then(u => app.appendChild(u))
        .then(() => app.appendChild(makeOut()))
        .finally(() => console.log("app started"));
//        .finally(() => $("#app").trigger("change", ["foo", "bar"]));
}

app.onchange = populateStorage;

function checkStorage() {
    $("select").each(function () {
        if (!localStorage.getItem(this.id)) {
            populateStorage();
        } else {
            setApp();
        }
    });
}

const l = (x) => {
    console.log(x)
}

app.onchange = (x) => {
    l(x);
}