function makeOut() {

    const out = document.createElement("div"),
        output = document.createElement("output"),
        datalist = xh + weekLabels(52,
            [{n: 1, desc: "↑ нед."},
                {n: 2, desc: "↑ ~1 мес.   "},
                {n: 26, desc: "↑ полгода"},
                {n: 52, desc: "1 год ↑"}
            ]) + leftover

    out.className = "out";
    output.name = "Total Income";
    output.setAttribute("for", "a-form");
    output.id = "result";
    output.innerHTML += datalist;
    resources.forEach((el) => {
        const resContainer = document.createElement("div")
        resContainer.className = "inc-res"
        const rr = resultRow(el);
        resContainer.appendChild(getResImg(el.id))
        resContainer.appendChild(rr);
        output.appendChild(resContainer);
    });
    out.appendChild(output);
    return out;
}

function resultRow(nl: AfkResource) {
    const res = document.createElement("span");
    res.id = nl.id;
    return res;
}

function updateOutput(x: number) {
    let output: ResourceReward = {
        source: "out",
        rank: "total",
        bait: 0, reds: 0, sg: 0, tc: 0,
        dia: 0, yells: 0, poe: 0, dust: 0,
        juice: 0, mcard: 0, ss: 0,
    };

    const resKeys = Object.keys(output).filter(
        (value, index) => value && index > 1
    );

    $("select").each(function () {
        const rank = localStorage.getItem(this.id);
        const rews = getRewards(this.id, rank);
        for (const element of resKeys) {
            if (rews[element]) {
                output[element] += rews[element];
            }
        }
    });
    for (const element of resKeys) {
        L(`[UPD.OUT]|> ${element} val. -> ${output[element]}`)
        $("#" + element).text((output[element] * x).toString());

    }
}

function getResImg(name: string) {
    const img = document.createElement("img");
    img.src = `../../assets/icons/s/${name}.png`;
    img.width = 24;
    return img
}