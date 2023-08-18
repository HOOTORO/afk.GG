import { abexApp } from "./abex/abex.js";
import { BossIcons } from "./components/bossicon.js";
import { populateStorage, qLog, setApp } from "./components/helper.js";
import { startApp } from "./income.js";
import { Locations } from "./locations.js";
import { userFields } from "./model/constants.js";
import { User } from "./model/types.js";
const location = window.location.pathname;
const user = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser();
switch (location) {
    case Locations.income:
        startApp();
    case Locations.modes:
        BossIcons();
    case Locations.abex:
        abexApp();
    default:
        console.log("nothing to do here");
}
function initUser() {
    qLog(`Init user...`);
    for (let inputField of userFields) {
        if (!localStorage.getItem(inputField.name)) {
            const selected = $(inputField.name).find(":selected").get(0);
            populateStorage(inputField.name, selected?.innerText);
        }
        else {
            setApp(inputField.name);
        }
    }
}
export { user };
