import { GameMode } from "../model/constants.js";
import { Gsheet, RankReward } from "../model/types.js";
declare let rewards: RankReward[];
declare function getRewards(): RankReward[];
declare function modeRewards(): {
    mode: GameMode;
    table: Promise<Gsheet>;
}[];
declare function loadRewards(gm: GameMode, gt: Gsheet): RankReward[];
export { getRewards, loadRewards, modeRewards, rewards };
//# sourceMappingURL=dataloader.d.ts.map