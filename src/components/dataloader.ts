// import { GameMode } from "./../constants";
// import { AfkResrc, GameMode } from "../constants";
// import * as lo from "../log";
// import * as gs from "./gsheets";
// import { generateIdObj } from "./helper";

function initBaseResources(r: BaseResources) {
    LCD("Init Base Res");

    for (let r of Object.values(AfkResrc)) {
        const ir = generateAFKResObj(r);
        LCD(
            `<#>type  => ${ir.type}, label => ${ir.label}, image => ${ir.img} <#>`
        );
    }
    Object.values(AfkResrc).forEach((x) => {
        resources[x] = generateAFKResObj(x);
    });
}

type User = {
    sheetId?: string;
    leaderboard?: { [index: string]: RankReward }[];
    income?: BaseResQty[];
};

// Dicts
type BaseResources = {
    [index: string]: BaseResource;
};
type ModeRewards = {
    [key in keyof GameMode]?: RankReward[];
};

// Data types
type RankReward = {
    rank: string;
    rewards: BaseResQty[];
};
class BaseResource {
    type: string;
    label: string;
    img: string;
}
class BaseResQty extends BaseResource {
    amount: number;
}
function modeRewards() {
    const modes = [GameMode.CR, GameMode.TS, GameMode.NC];
    return modes.map((x) => {
        return {
            mode: x,
            table: fetchTableData(x as string), //.then((t) => tableObjects(t)),
        };
    });
}

function loadRewards(gm: GameMode, gt: Gsheet) {
    gt.rows.forEach((v) => {
        const r = v.c[0].v,
            pairs = v.c.slice(1, v.c.length).map((v, i) => {
                const bs = resources[gt.cols[i + 1].label] as BaseResource,
                    qty = v ? (v.v as unknown as number) : 0;
                return { type: bs, amount: qty };
            });

        rewards[gm].push({ rank: r, rewards: pairs });
    });
}
