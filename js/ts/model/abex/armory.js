class Armory {
    equipped;
    wanted;
    constructor() {
        this.equipped = {
            warrior: { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10 },
            tank: { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10 },
            celerity: { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10 },
            mage: { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10 },
            support: { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10 },
        };
        this.wanted = this.equipped;
    }
    up(b, s, want) {
        if (this.equipped[b][s] < 50) {
            this.equipped[b][s] = this.equipped[b][s] + 10;
        }
        else {
            this.equipped[b][s] = 10;
        }
    }
}
