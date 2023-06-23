// // import { leftover, xh } from "../constants";
// // import { afk } from "./dataloader";
// // import { domElWithProperties, weekLabels } from "./helper";

function makeOut() {
    const out = document.createElement("div"),
        output = document.createElement("output"),
        datalist =
            xh +
            weekLabels(52, [
                { n: 1, desc: "↑ нед." },
                { n: 2, desc: "↑ ~1 мес.   " },
                { n: 26, desc: "↑ полгода" },
                { n: 52, desc: "1 год ↑" },
            ]) +
            leftover;

    out.className = "out";
    output.name = "Total Income";
    output.setAttribute("for", "a-form");
    output.id = "result";
    output.innerHTML += datalist;
    drawResourceBox(output);
    out.appendChild(output);
    return out;
}

function drawResourceBox(parent) {
    initBaseResources();
    Object.values(AfkResrc).forEach((el) => {
        const re = resources[el as string];
        const resContainer = domElWithProperties("div", [
            { n: "class", v: "inc-res" },
        ]);
        const rr = domElWithProperties("span", [{ n: "id", v: re.type }]);
        resContainer.appendChild(getResImg(re.img));
        resContainer.appendChild(rr);
        parent.appendChild(resContainer);
    });
}

function updateUserRank(modeId: string, newRank: string) {
    user[gMode(modeId)].rank = newRank;
    user[gMode(modeId)].rewards = getRankRewards(gMode(modeId), newRank);
}
function getResImg(src: string) {
    const img = document.createElement("img");
    img.src = src;
    img.width = 24;
    return img;
}

function getRankRewards(gm: GameMode, rank: string) {
    return rewards[gm].find((v) => v.rank === rank).rewards;
}
function UserTotals(u: User) {
    Object.values(AfkResrc).forEach((v) => {
        const s = user.leaderboard[v as string].reward;
        LCD(`SSS: ${s}`);
    });

    // Object.keys(GameMode)..reduce((a, b) =>  user[a].amount + user[b].amount, 0 )
    // })) => {
    //         user[v].amount = u.scores
    //             .map((x) => x.rewards.find((r) => r.type === v).amount)
    //             .reduce((a, b) => a + b, 0);
    //         LCD(`${v}`);
    //         n.push(v);
    //     });
    // })

    // return n;
}

function updateResourceBox(gr: BaseResQty[]) {
    gr.forEach(
        (x) =>
            (document.getElementById(x.type).innerHTML =
                x.amount as unknown as string)
    );
}
