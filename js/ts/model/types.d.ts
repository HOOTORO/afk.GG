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
export { BaseResQty, BaseResource, DustChest, Gsheet, RankReward };
//# sourceMappingURL=types.d.ts.map