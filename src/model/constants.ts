import { DustChest } from "./types.js";
export enum elTag {
  Input = "input",
  Div = "div",

  Span = "span",
  Label = "label",
  Select = "select",

  Option = "option",
  Form = "form",
  Img = "img",
  tr = "tr",
  td = "td",
  th = "th",
  Table = "table",
  Thead = "thead",
  Tbody = "tbody",
  Button = "button",
  Output = "output",
}

export enum elProp {
  Id = "id",
  Class = "class",
  For = "for",
  Alt = "alt",
  Src = "src",
  Width = "width",
  Style = "style",
  Type = "type",
}
export enum Input {
  Number = "number",
  Text = "text",
  CheckBox = "checkbox",
  Datetime = "datetime-local",
}
export const RelicBase = 18;
export const AbExSellModifier = 0.4;

export const aeIcons = {
  stam: "https://i.imgur.com/n5WOzSZ.png",
  coin: "https://i.imgur.com/Gw216PZ.png",
  ess: "https://i.imgur.com/Gw216PZ.png",
};

const relicEstimateTable = `
  <thead>
    <tr>
      <th align="center" colspan=4>Expeditor Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align=center>Income</td>
      <td align=center> <img src=${aeIcons.coin} width=20></td>
      <td align=center>Relic Type</td>
      <td align=center>Drop Timers</td>
    </tr>
    <tr>
      <td align=center><b>[ $tw settlements ]</b></td>
      <td align=center>$inc</td>
      <td align=center>$tier</td>
      <td align=center>$drop</td>
    </tr>
    <tr>
          <td align=center colspan=4>GOAL</td>
    </tr>
    <tr>
      <td colspan=2>Remain</td>
      <td colspan=1><img src=${aeIcons.coin} width=20 style="margin-left:20px"></td>
      <td colspan=1>TIME</td>
    </tr>        
    <tr>
       <td colspan=2></td>
       <td colspan=1>$gc</td>
      <td colspan=1>$tl</td>
    </tr>    
    <tr>
      <td align=center colspan=4>BAG</td>
    </tr>
      <tr>
        <td align=center colspan=1>KEEP</td>
        <td align=center colspan=3>$tg</td>
      </tr>

      <tr>
        <td align=center colspan=1>SELL♻️</td>
        <td align=right colspan=3>$toSell</td>
      </tr>
  </tbody>

`;

// const FlawlessDroplets = {
//       E: 1,
//       "E+": 1,
//       L: 4,
//       "L+": 2,
//       M: 8,
//       "M+": 8,
//       A: 4,
//       A1: 2,
//       A2: 2,
//       A3: 2,
//       A4: 2,
//       A5: 2,
//     };
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

class AbEx {
  static now = new Date();
  static abexDurationDays = 19;
  static silentDay = 1;
  static spectatorMod = 1.2;
  static sodFastenMod = 0.9;
  static startD = new Date();

  static start() {
    return new Date();
  }

  static left() {
    return new Date(
      this.startD.getUTCFullYear(),
      this.startD.getUTCMonth(),
      this.startD.getUTCDate() + this.abexDurationDays,
      this.startD.getUTCHours(),
      this.startD.getUTCMinutes()
    );
  }

  static silentHoursIn() {
    return new Date(
      this.startD.getUTCFullYear(),
      this.startD.getUTCMonth(),
      this.startD.getUTCDate() - this.silentDay,
      this.startD.getUTCHours(),
      this.startD.getUTCMinutes()
    );
  }

  static hoursLeft() {
    return (
      (this.silentHoursIn().getTime() - this.now.getTime()) / 1000 / 60 / 60
    );
  }
}

class Boss {
  static foodCost = 48;
  static retry = 4;
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
  CR = "CR",
  TS = "TS",
  NC = "NC",
  all = "all",
}

const verb = true;

const sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const query = encodeURIComponent("Select *");
const url = function (x: string) {
  return `${base}&sheet=${x}&tq=${query}`;
};

export {
  AbEx,
  AfkArena,
  Boss,
  GameMode,
  Period,
  ValueModes,
  allRes,
  base,
  bres,
  iconSize,
  query,
  relicEstimateTable,
  sheetId,
  url,
  verb,
};
