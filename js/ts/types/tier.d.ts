export declare enum tier {
    EMPTY = 0,
    COMMON = 1,
    RARE = 2,
    ELITE = 3,
    LEGENDARY = 4,
    MYTHIC = 5
}
export declare class Tier {
    id: tier;
    constructor(id: tier);
    color: () => "white" | "blue" | "magenta" | "yellow" | "red";
    html(): HTMLElement;
}
//# sourceMappingURL=tier.d.ts.map