import { rewards } from "../components/dataloader.js";
import { generateAFKResObj, rangeSlide, savedObj, storedValue, } from "../components/helper.js";
import { AbexHelper, relicLeveling, townTypes } from "./afk.js";
import { AbEx, AfkArena, ValueModes, allRes, sheetId, } from "./constants.js";
class DustChest {
    amount;
    hours;
    constructor(qty, type) {
        this.amount = qty;
        this.hours = type;
    }
    dust() {
        return this.amount * this.hours * AfkArena.dustInc();
    }
}
class BaseResource {
    type;
    label;
    img;
}
class BaseResQty extends BaseResource {
    amount;
}
class User {
    spreadSheetId;
    leaderboard;
    income;
    constructor(gSheetId = sheetId) {
        this.spreadSheetId = gSheetId;
        this.leaderboard = [];
        this.income = allRes.map((v) => generateAFKResObj(v));
    }
    set reward(val) {
        if (!val)
            return;
        const existingResult = this.leaderboard.find((x) => x.mode === val?.mode);
        if (!existingResult) {
            this.leaderboard.push(val);
        }
        else {
            existingResult.rank = val.rank;
            existingResult.rewards = val?.rewards;
        }
    }
    loadLocal() {
        this.leaderboard = ValueModes.emuns().map((x) => {
            const val = localStorage.getItem(x.id);
            return {
                mode: x.table,
                rank: val,
                rewards: rewards.find((v) => v.mode === ValueModes.gMode(x.id))
                    ?.rewards,
            };
        });
        if (this.leaderboard) {
            const rang = localStorage.getItem("rangeValue");
            if (!rang) {
                return;
            }
            $("input.range").attr("value", rang);
            rangeSlide(rang, this);
            this.calc();
        }
    }
    calc() {
        this.income = allRes.map((v) => generateAFKResObj(v));
        this.leaderboard.forEach((x) => {
            x?.rewards?.forEach((r) => {
                const ex = this.income.findIndex((k) => k.type === r.type);
                if (ex > -1) {
                    this.income[ex].amount += r.amount;
                }
            });
        });
    }
}
class Militia {
    baseIncome;
    _viewers;
    constructor(plebs) {
        this.viewers = plebs;
        this.baseIncome = 4;
    }
    set viewers(n) {
        this._viewers = n;
    }
    get viewers() {
        return this._viewers;
    }
    actualIncome() {
        return (this.baseIncome +
            (this.baseIncome * this.viewers * AbEx.viewerMultiplier) / 100);
    }
    starIncome() {
        return this.actualIncome() / AbEx.starFasterRecoveryMod;
    }
    star() {
        return new Expeditor(this, true);
    }
    regular() {
        return new Expeditor(this, false);
    }
}
class Expeditor {
    _essence = 0;
    _stamina = 0;
    _towns;
    _bag;
    _relic;
    guild;
    starStatus;
    constructor(militia, star, food = 0) {
        this.guild = militia;
        this.starStatus = star;
        this._towns = savedObj("towns", { 5: 0, 6: 0, 7: 0, 8: 0 });
        this._essence = savedObj("ess", 0);
        this._relic = savedObj("relic", {
            equip: {
                might: AbexHelper.defaultRelics("might"),
                fort: AbexHelper.defaultRelics("fort"),
                mage: AbexHelper.defaultRelics("mage"),
                support: AbexHelper.defaultRelics("support"),
                celerity: AbexHelper.defaultRelics("celerity"),
            },
            goal: {
                might: AbexHelper.defaultRelics("might"),
                fort: AbexHelper.defaultRelics("fort"),
                mage: AbexHelper.defaultRelics("mage"),
                support: AbexHelper.defaultRelics("support"),
                celerity: AbexHelper.defaultRelics("celerity"),
            },
        });
        this._bag = savedObj("bag", []);
    }
    set towns(town) {
        this._towns[town[0]] = town[1];
        storedValue("towns", JSON.stringify(this.towns));
    }
    get towns() {
        return this._towns;
    }
    set essence(n) {
        let num = Number(n);
        if (!Number.isFinite(num)) {
            this._essence = 0;
            return;
        }
        this._essence = num;
        storedValue("ess", n);
    }
    get essence() {
        return this._essence;
    }
    set bag(x) {
        this._bag[x[0]] = x[1];
        storedValue("bag", JSON.stringify(this._bag));
    }
    set relic(r) {
        this._relic = r;
        storedValue("relic", JSON.stringify(this._relic));
    }
    get relic() {
        return this._relic;
    }
    lookBag(id) {
        return this._bag[id];
    }
    income() {
        return this.starStatus
            ? this.guild.starIncome()
            : this.guild.actualIncome();
    }
    totalFood() {
        return this._stamina + AbEx.hoursLeft() * this.income();
    }
    EPH() {
        return Object.entries(this.towns).map((x) => townTypes[parseInt(x[0])].garrisoned * x[1]);
    }
    NextLevelRelic(branch, position, goal = false) {
        const type = goal ? "goal" : "equip", current = this._relic[type][branch][position], goalForCurrent = this._relic.goal[branch][position], lowestTier = goal
            ? AbexHelper.tier(this._relic.equip[branch][position])
            : 10, tier = AbexHelper.tier(current) < 50
            ? AbexHelper.tier(current) + 10
            : lowestTier;
        const nextId = relicLeveling[branch][tier][position];
        this._relic[type][branch][position] = nextId;
        if (nextId > goalForCurrent) {
            this._relic.goal[branch][position] = nextId;
        }
        storedValue("relic", JSON.stringify(this._relic));
        return this._relic[type][branch][position];
    }
    RepresentYourSelf() {
        const ess = this.EPH().reduce((a, b) => a + b);
        let reLeft = [];
        for (const [k, v] of Object.entries(this.relic.equip)) {
            for (let i = 0; i < v.length; i++) {
                const element = v[i];
                let goalRelic = this.relic.goal[k][i];
                while (element < goalRelic) {
                    reLeft.push(goalRelic);
                    goalRelic = AbexHelper.lowerTierRelic(k, goalRelic);
                }
            }
        }
        let totalEssRequired = this._essence * -1;
        if (reLeft && reLeft.length > 1) {
            totalEssRequired += reLeft
                .map((x) => AbexHelper.relicPrice(x))
                .reduce((a, b) => a + b);
        }
        else {
            totalEssRequired = 0;
        }
        console.log(reLeft);
        const timeleft = (totalEssRequired / ess).toFixed(2);
        if (!isEmpty(this._bag)) {
            const bago = this.proceedBag(reLeft);
            return [ess, totalEssRequired, timeleft, bago[0], bago[1], bago[2]];
        }
        else
            return [ess, totalEssRequired, timeleft, "", "", ""];
    }
    proceedBag(need) {
        if (isEmpty(this._bag)) {
            console.log("Bag is empty");
        }
        const bagRelics = safeReduceSum(Object.values(this._bag)), keys = Object.keys(this._bag)?.filter((x, i) => this._bag[i] !== null && this._bag[i] > 0);
        console.log(bagRelics);
        console.log(keys);
        const relicsToSell = keys
            .filter((x) => !need.includes(parseInt(x)))
            ?.map((x) => AbexHelper.relicPrice(parseInt(x)) * 0.4);
        const have = keys.filter((x) => need.includes(parseInt(x)));
        return [keys.join("|"), have, safeReduceSum(relicsToSell)];
    }
}
export { BaseResQty, BaseResource, DustChest, Expeditor, Militia, User, };
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function safeReduceSum(n) {
    if (!isEmpty(n)) {
        console.log("yes");
        return n.reduce((a, b) => a + b);
    }
}
