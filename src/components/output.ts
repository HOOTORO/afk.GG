type AfkResource = {
    id: string;
    label: string;
};

function makeOut() {
    const out = document.createElement("div");
    out.className = "out";

    const output = document.createElement("output");
    output.name = "Total Income";
    output.setAttribute("for", "a-form");
    output.id = "result";
    output.innerHTML += xh;


    resources.forEach((el) => {
        const rr = resultRow(el);
        output.appendChild(rr);
    });
    out.appendChild(output);
    return out;
}

function resultRow(nl: AfkResource) {
    const res = document.createElement("span");
    res.id = nl.id;
    res.appendChild(getResImg(nl.id));
    return res;
}

function updateOutput(x:number) {
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
        const lab = document.createElement("label");
        lab.setAttribute("for", element);
        lab.innerText = (output[element]*x).toString();
        $(`#result > #${element}`).prepend(lab);
        $(`#result > #${element}`).children("label").remove();
        document.getElementById(element).appendChild(lab);
    }
}


function getResImg(name: string) {
    const img = document.createElement("img");
    img.src = `../../assets/icons/s/${name}.png`;
    img.width = 24;
    return img
}