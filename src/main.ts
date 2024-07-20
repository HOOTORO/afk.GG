import { populateStorage, log, setApp } from "./components/helper.js";
import { runRankedIncome } from "./income.js";
import { Locations } from "./util/locations.js";
import { userFields } from "./model/constants.js";
import { User } from "./model/types.js";

const location = window.location.pathname;
const user: User = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser();
console.log("Loca: %s", location);
// Open a SQLite database, stored in the file db.sqlite

switch (location) {
  case Locations.income:
    runRankedIncome();
  default:
    console.log("nothing to do here");
}

function initUser() {
  log(`Init user...`);
  for (let inputField of userFields) {
    if (!localStorage.getItem(inputField.name)) {
      const selected = $(inputField.name).find(":selected").get(0);
      populateStorage(inputField.name, selected?.innerText);
    } else {
      setApp(inputField.name);
    }
  }
}

export { initUser, user };
