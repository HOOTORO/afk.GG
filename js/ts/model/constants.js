import { DustChest } from "./types.js";
const relicEstimateTable = `
  <thead>
    <tr>
      <th align="center" width=30%>Expeditor</th>
      <th align="center">Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Income</td>
      <td align="center">$inc ess./h</td>
    </tr>
    <tr>
          <td align="center" colspan="2">GOAL</td>
    </tr>
    <tr>
      <td align="center">Components</td>
      <td align="center">$comp</td>
    </tr>        
    <tr>
      <td align="center">TIME TO<super>*</super></td>
      <td align="center">$tl h.</td>
    </tr>    
    <tr>
      <td align="center">Missing</td>
      <td align="center">$gc ess.</td>
    </tr>
    <tr>
      <td align="center" colspan="2">BAG</td>
    </tr>
      <tr>
        <td align="center">Items</td>
        <td align="center">$tg</td>
      </tr>
      <tr>
        <td align="center">KEEP✅ </td>
        <td align="left">$need</td>
      </tr>
      <tr>
        <td align="center">SELL♻️</td>
        <td align="right">$toSell</td>
      </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" colspan=2>
        <sup>*</sup>
          Resulting number takes into account 
          <br>
           [<strong>entered</strong> ess.| <strong>Income</strong> | <strong>SELL</strong> | town based avg. <strong>relic drop</strong><sup id="sp1"><a href="#fn1">1</a></sup>] 
      </td>
    </tr>
  </tfoot>
`;
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
        const base = 1167 / Period.day, fos = base * 1.6 + 385 / Period.day;
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
    static baseIncome = 4;
    static viewerMultiplier = 1.2;
    static starFasterRecoveryMod = 0.9;
    static start() {
        return new Date(2023, 6, 5, 0, 0, 0, 0);
    }
    static leftToStart() {
        return new Date(this.start().getTime() - this.now.getTime());
    }
    static left() {
        return new Date(this.start().getUTCFullYear(), this.start().getUTCMonth(), this.start().getUTCDate() + this.abexDurationDays, this.start().getUTCHours(), this.start().getUTCMinutes());
    }
    static silentHoursIn() {
        return new Date(this.left().getUTCFullYear(), this.left().getUTCMonth(), this.left().getUTCDate() - this.silentDay, this.left().getUTCHours(), this.left().getUTCMinutes());
    }
    static hoursLeft() {
        return ((this.silentHoursIn().getTime() - this.now.getTime()) / 1000 / 60 / 60);
    }
    static actualIncome(viewers, star) {
        const recoveryBonus = (viewers * this.viewerMultiplier) / 100;
        let res = this.baseIncome + this.baseIncome * recoveryBonus;
        if (star) {
            res = res / this.starFasterRecoveryMod;
        }
        return res;
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
    static emuns() {
        return this.rSources.map((x) => {
            return { id: x.id, table: x.tableName };
        });
    }
    static gMode(x) {
        const source = this.rSources.find((y) => y.id === x || y.label === x || y.tableName === x);
        if (!source) {
            throw new Error("Unknown Source Mode");
        }
        return Object.values(GameMode).find((y) => y === source.tableName);
    }
}
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
var GameMode;
(function (GameMode) {
    GameMode["CR"] = "CR";
    GameMode["TS"] = "TS";
    GameMode["NC"] = "NC";
    GameMode["all"] = "all";
})(GameMode || (GameMode = {}));
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
];
const sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const query = encodeURIComponent("Select *");
const url = function (x) {
    return `${base}&sheet=${x}&tq=${query}`;
};
export { AbEx, AfkArena, Boss, GameMode, Period, ValueModes, allRes, base, iconSize, leftover, query, relicEstimateTable, sheetId, url, userFields, verb, xh, };
