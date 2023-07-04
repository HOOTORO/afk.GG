import { GameMode, ValueModes } from "../constants.js";
import { Gsheet, BaseResQty, RankReward } from "../types.js";
import { fetchTableData } from "./gsheets.js";

let rewards: RankReward[] = [];

function getRewards(): RankReward[] {
  return rewards;
}
function modeRewards() {
  const modes = [GameMode.CR, GameMode.TS, GameMode.NC];
  return modes.map((x) => {
    return {
      mode: x,
      table: fetchTableData(x as string),
    };
  });
}

function loadRewards(gm: GameMode, gt: Gsheet) {
  gt.rows.forEach((v) => {
    const rank = v.c[0].v,
      pairs = v.c
        .slice(1, v.c.length)
        // .filter((g) => (g && (g.v as unknown as number)) > 0)
        .map((v, i) => {
          const col1rank = gt.cols[i + 1].label,
            qty = v ? (v.v as unknown as number) : 0;
          return {
            type: col1rank,
            label: col1rank,
            img: `/afk.GG/assets/icons/s/${col1rank}.png`,
            amount: qty,
          } as BaseResQty;
        });
    rewards.push({ mode: ValueModes.gMode(gm), rank: rank, rewards: pairs });
  });
  return rewards;
}

export { loadRewards, modeRewards, getRewards, rewards };
