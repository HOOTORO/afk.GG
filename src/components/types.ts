interface GtableData {
    cols: Array<{ id: string; label: string; type: string }>;
    rows: Array<{ c: Array<{ v: string; f: string }> }>;
}

type AfkMode = {id: string; label:string; tableName: string; period: number; display: boolean}

type ResourceReward = {
    source: string; rank: string; dia?: number; bait?: number; reds?: number; yells?: number;
    tc?: number; sg?: number; poe?: number; dust?: number; juice?: number; mcard?: number;
    ss?: number;
};

type AfkResource = {
    id: string;
    label: string;
};
