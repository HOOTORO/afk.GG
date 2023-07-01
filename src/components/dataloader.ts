// Data types
interface RankReward {
    mode: string;
    rank: string;
    rewards: BaseResQty[];
}
class BaseResource {
    type: `${bres}`;
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
            table: fetchTableData(x as string),
        };
    });
}

function loadRewards(gm: GameMode, gt: Gsheet) {
    return gt.rows.map((v) => {
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
        return { rank: rank, rewards: pairs };
    });
}
