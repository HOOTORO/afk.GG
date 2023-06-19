window.onload = function () {
    startApp();
};

let app = document.getElementById("app")

function startApp() {
    userInput()
        .then(u => app.appendChild(u))
        .then(() => app.appendChild(makeOut()))
        .finally(() => console.log("app started"));
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