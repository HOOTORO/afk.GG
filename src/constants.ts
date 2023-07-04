import { DustChest } from "./types.js";

class Period {
  static hour = 1;
  static day = 24 * this.hour;
  static week = 7 * this.day;
  static month = 30 * this.day;
}

const iconSize = 38;

class AfkArena {
  static levelup = 44500;
  static dustInc() {
    const base = 1167 / Period.day,
      fos = base * 1.6 + 385 / Period.day;
    return base + fos;
  }
  static storeDust() {
    return 500 / Period.day;
  }
  static fastRewards() {
    return (this.dustInc() * 2) / Period.day;
  }
  static storeDiDeal() {
    return new DustChest(3, 8).dust() / Period.day;
  }
  static subsChest() {
    return new DustChest(2, 6).dust() / Period.day;
  }
  static dailyPile() {
    return new DustChest(1, 2).dust() / Period.day;
  }
  static mistyValley() {
    const base = new DustChest(12, 8);
    const firstReward = new DustChest(12, 8);
    return (base.dust() + firstReward.dust()) / Period.month;
  }
}

class ValueModes extends AfkArena {
  static rSources = [
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

  static emuns() {
    return this.rSources.map((x) => {
      return { id: x.id, table: x.tableName };
    });
  }

  static gMode(x: string) {
    const source = this.rSources.find(
      (y) => y.id === x || y.label === x || y.tableName === x
    );
    if (!source) {
      throw new Error("Unknown Source Mode");
    }
    return Object.values(GameMode).find(
      (y) => (y as string) === source.tableName
    );
  }
}
type gms = "CR" | "TS" | "NC";
type bres =
  | "dia"
  | "bait"
  | "redc"
  | "yells"
  | "emblcc"
  | "timee"
  | "stars"
  | "poe"
  | "dust"
  | "twise"
  | "mythfs"
  | "secrs";

const allRes = [
  "dia",
  "bait",
  "redc",
  "yells",
  "emblcc",
  "timee",
  "stars",
  "poe",
  "dust",
  "twise",
  "mythfs",
  "secrs",
];

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
        <input class="range" type="range" name="times" value="1" min="1" max="52"  list="values" />
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
const url = function (x: string) {
  return `${base}&sheet=${x}&tq=${query}`;
};

export {
  AfkArena,
  GameMode,
  allRes,
  base,
  bres,
  gms,
  iconSize,
  leftover,
  query,
  sheetId,
  url,
  userFields,
  verb,
  xh,
  Period,
  ValueModes,
};
