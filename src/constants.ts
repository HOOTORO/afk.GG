const verb = true
const userFields = [
    {name: "cursed-realm", type: "select", src: "gsheet"},
    {name: "treasure-scramble", type: "select", src: "gsheet"},
    {name: "nightmare-corridor", type: "select", src: "gsheet"},
//    {name: "afk", type: "bool", src: "gsheet"}
];

const sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const query = encodeURIComponent("Select *");
const url = function (x) {
    return `${base}&sheet=${x}&tq=${query}`;
};

const resources = [
    {id: "bait", label: "Bait"},
    {id: "reds", label: "Red Cores"},
    {id: "tc", label: "Temple Card"},
    {id: "sg", label: "Stargazer Card"},
    {id: "dia", label: "Diamonds"},
    {id: "yells", label: "Yellow Shards"},
    {id: "poe", label: "POE"},
    {id: "dust", label: "Dust"},
    {id: "juice", label: "Twisted Essence"},
    {id: "mcard", label: "Furn. Card"},
    {id: "ss", label: "Secret Spices"}
];

const sources = [
    {id: "cursed-realm", label: "Cursed Realm", tableName: "CR", period: 7, display: true},
    {id: "treasure-scramble", label: "Treasure Scramble", tableName: "TS", period: 7, display: true},
    {id: "nightmare-corridor", label: "Nightmare Corridor", tableName: "NC", period: 7, display: true},
    {id: "afk-income", label: "Base AFK Income", tableName: "AFK", period: 1 / 24, display: false}
]