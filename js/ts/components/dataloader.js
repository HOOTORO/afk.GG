import { GameMode, ValueModes } from "../constants.js";
import { fetchTableData } from "./gsheets.js";
let rewards = [];
function getRewards() {
    return rewards;
}
function modeRewards() {
    const modes = [GameMode.CR, GameMode.TS, GameMode.NC];
    return modes.map((x) => {
        return {
            mode: x,
            table: fetchTableData(x),
        };
    });
}
function loadRewards(gm, gt) {
    gt.rows.forEach((v) => {
        const rank = v.c[0].v, pairs = v.c
            .slice(1, v.c.length)
            .map((v, i) => {
            const col1rank = gt.cols[i + 1].label, qty = v ? v.v : 0;
            return {
                type: col1rank,
                label: col1rank,
                img: `/afk.GG/assets/icons/s/${col1rank}.png`,
                amount: qty,
            };
        });
        rewards.push({ mode: ValueModes.gMode(gm), rank: rank, rewards: pairs });
    });
    return rewards;
}
export { loadRewards, modeRewards, getRewards, rewards };
