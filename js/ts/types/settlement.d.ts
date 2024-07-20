import { IconizedInput } from "./abex-resource.js";
import { Tier } from "./tier.js";
export declare class Settlement extends IconizedInput {
    essencePerHour: number;
    yield: number;
    dropTier: number;
    dropTime: number;
    constructor(id: number, icon: string, name: string, essencePerHour: number, yld: number, dropTier: number, dropTime: number);
    EPH(): number;
    RelicDrop(): number;
    ConvertedDropEssValue(avgPrice: number, wantedQuantity: number): number;
    Tier(): Tier;
    htmlInfo(): HTMLElement;
}
//# sourceMappingURL=settlement.d.ts.map