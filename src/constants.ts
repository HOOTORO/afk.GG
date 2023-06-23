enum AfkResrc {
    Dia = "Dia",
    Bait = "Bait",
    Reds = "Red Core",
    Yells = "Yellow Shard",
    SI3 = "Emblem Choice Chest",
    TC = "Time Emblem",
    SG = "Stargazer Scroll",
    POE = "POE",
    Dust = "Dust",
    Juice = "Twisted Essence",
    FuCard = "Mythic Furniture Scroll",
    SecSpec = "Secret Spices",
}

enum GameMode {
    // CR = "Cursed Realm",
    CR = "CR",
    // TS = "Treasure Scramble",
    TS = "TS",
    // NC = "Nightmare Corridor",
    NC = "NC",
    all = "all",
}

const verb = true;

const xh = `
    <div>
        <span id="rangeValue">1 week</span>
        <input class="range" type="range" name="times" value="1" min="1" max="52" onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)" list="values" />
<datalist id="values">
`;
const leftover = `
</datalist>
    </div>
`;

const userFields = [
    { name: "cursed-realm", type: "select", src: "gsheet" },
    { name: "treasure-scramble", type: "select", src: "gsheet" },
    { name: "nightmare-corridor", type: "select", src: "gsheet" },
    //    {name: "afk", type: "bool", src: "gsheet"}
];

const sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const query = encodeURIComponent("Select *");
const url = function (x) {
    return `${base}&sheet=${x}&tq=${query}`;
};

const sources = [
    {
        id: "cursed-realm",
        label: "Cursed Realm",
        tableName: "CR",
        period: 7,
        display: true,
    },
    {
        id: "treasure-scramble",
        label: "Treasure Scramble",
        tableName: "TS",
        period: 7,
        display: true,
    },
    {
        id: "nightmare-corridor",
        label: "Nightmare Corridor",
        tableName: "NC",
        period: 7,
        display: true,
    },
    {
        id: "afk-income",
        label: "Base AFK Income",
        tableName: "AFK",
        period: 1 / 24,
        display: false,
    },
];
