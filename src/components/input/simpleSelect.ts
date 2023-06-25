function makeSelect(name: string, options: string[] | number[]) {
    const list = document.createElement("select");
    list.id = name;
    const storedValue = localStorage.getItem(list.id);
    for (let i = 0; i < options.length; i++) {
        const element = options[i];
        let opt = document.createElement("option");
        opt.innerText = element.toString();
        opt.setAttribute("value", element.toString());
        if (
            (storedValue && storedValue === element) ||
            (!storedValue && i === 0)
        ) {
            opt.setAttribute("selected", "");
        }
        list.appendChild(opt);
    }

    return list;
}

function setValFromLocalStore(m: string) {
    const storedValue = localStorage.getItem(m);
    const r = getRankRewards(gMode(m), storedValue);
    user.reward = {
        mode: gMode(m),
        rank: storedValue,
        rewards: r,
    } as RankReward;
}
