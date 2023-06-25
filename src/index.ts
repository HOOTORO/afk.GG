const L = (x) => {
    if (verb) {
        console.log(x);
    }
};

class User {
    spreadSheetId: string;
    leaderboard: RankReward[];
    income: BaseResQty[];

    constructor(sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY") {
        this.spreadSheetId = sheetId;
        this.leaderboard = [];
        this.income = allRes.map((v) => generateAFKResObj(v));
    }
    set reward(val: RankReward) {
        if (!val) return;
        const existingResult = this.leaderboard.find(
            (x) => x.mode === val?.mode
        );
        if (!existingResult) {
            this.leaderboard.push(val);
        } else {
            existingResult.rank = val.rank;
            existingResult.rewards = val?.rewards;
        }
    }

    calc(): void {
        this.income = allRes.map((v) => generateAFKResObj(v));
        this.leaderboard.forEach((x) => {
            x.rewards.forEach((r) => {
                const ex = this.income.findIndex((k) => k.type === r.type);
                if (ex > -1) {
                    this.income[ex].amount += r.amount;
                }
            });
        });
    }
}

L(`[Extended log] => ${verb}`);
L(`Looking for entry tag...`);
const app = document.getElementById("app");
let rewards: RankReward[] = [];
const user: User = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser(user);
startApp();
setTimeout(() => L(rewards), 2000);

function initUser(u: User) {
    L(`Init user...`);
    for (let inputField of userFields) {
        if (!localStorage.getItem(inputField.name)) {
            const selected = $(inputField.name).find(":selected").get(0);
            populateStorage(inputField.name, selected?.innerText);
        } else {
            setApp(inputField.name);
        }
    }
    return u;
}

function startApp() {
    L("launch app...");
    drawInputs().catch((x) => L(`Promise rejected => ${x}`));
    L("app started");
}

async function drawInputs() {
    let inputForm = domElWithProperties("form", [{ n: "id", v: "a-form" }]);

    modeRewards().forEach((x) => {
        const mode = sources.find((s) => s.tableName === x.mode);
        x.table
            .then((t) => {
                const container = domElWithProperties("div", [
                        { n: "class", v: "select-container" },
                    ]),
                    label = document.createElement("h4"),
                    s = makeSelect(mode.id, columnData(0, t));

                label.innerText = mode.label;
                container.appendChild(s);
                container.insertBefore(label, s);
                inputForm.append(container);
                loadRewards(x.mode, t).forEach((r) =>
                    rewards.push({
                        mode: x.mode,
                        rank: r.rank,
                        rewards: r.rewards.filter((h) => h.amount > 0),
                    })
                );
            })
            .then(() => app.appendChild(inputForm))
            .catch((x) => L(`Promise rejected${x}`))
            .finally(() => {
                L(`Inputs done`);
            });
    });
    setTimeout(() => app.appendChild(makeOut()), 2000);
}
