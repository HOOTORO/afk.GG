class HeroPortrait {
    name;
    based;
    gclass;
    faction;
    skills;
    constructor(name, base, gameclass, race) {
        this.based = base;
        this.name = name;
        this.gclass = gameclass;
        this.faction = race;
    }
}
export class Team {
    pet;
    target;
    _len;
    damage;
    constructor(team, p, t) {
        this.pet = p;
        this.target = t;
        this._len = team.length;
        team.forEach((v, i) => {
            this[i] = v;
        });
    }
    setHero(x, h) {
        if (x < 6) {
            this[x] = h;
            this._len = x;
        }
        else {
            console.log("Hero position out  of range");
        }
    }
    makeAttack(dmg, c) {
        if (this.damage === undefined) {
            this.damage = [];
        }
        this.damage.push([dmg, c]);
    }
    removeHero(position) {
        this[position] = null;
        this._len--;
    }
    Heroes() {
        let i = 0;
        let result = [];
        while (i < this._len) {
            i++;
            result.push(this[i]);
        }
        return result;
    }
}
