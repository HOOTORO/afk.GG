
window.onload = function () {
    startApp();
};

let app = document.getElementById("app");
app.addEventListener(
    "BlackSelect",
    (e) => {
        console.log("Black FIRE!");
        console.log(e);
        renderBlack();
        checkStorage();
    },
    false
);

function startApp() {
    userInput()
        .then((u) => app.appendChild(u))
        .then(() => app.appendChild(makeOut()))
        .finally(() => console.log("app started"));
}

app.onchange = populateStorage;

function checkStorage() {
    $(".select-menu > select").each(function () {
        if (!localStorage.getItem(this.id)) {
            populateStorage();
        } else {
            setApp();
        }
    });
}
