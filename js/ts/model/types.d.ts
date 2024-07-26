type hours = 2 | 6 | 8 | 24;
declare class DustChest {
    amount: number;
    hours: hours;
    constructor(qty: number, type: hours);
    dust(): number;
}
export { DustChest };
//# sourceMappingURL=types.d.ts.map