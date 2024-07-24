import { bres } from "./constants.js";
type hours = 2 | 6 | 8 | 24;
interface Gsheet {
    cols: Array<{
        id: string;
        label: string;
        type: string;
    }>;
    rows: Array<{
        c: Array<{
            v: string;
            f: string;
        }>;
    }>;
}
interface RankReward {
    mode: string;
    rank: string;
    rewards: BaseResQty[];
}
declare class DustChest {
    amount: number;
    hours: hours;
    constructor(qty: number, type: hours);
    dust(): number;
}
declare class BaseResource {
    type: `${bres}`;
    label: string;
    img: string;
}
declare class BaseResQty extends BaseResource {
    amount: number;
}
declare class User {
    spreadSheetId: string;
    leaderboard: RankReward[];
    income: BaseResQty[];
    constructor(gSheetId?: string);
    set reward(val: RankReward);
    loadLocal(): void;
    calc(): void;
}
export { BaseResQty, BaseResource, DustChest, Gsheet, RankReward, User };
//# sourceMappingURL=types.d.ts.map