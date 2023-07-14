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
const Beasts = {
    Rock: { n: "Rock Lizard" },
    Tali: { n: "Talismane" },
    Moth: { n: "Moth" },
    Fox: { n: "Fox Fatale" },
    Lion: { n: "Winged Lion" },
    Owl: { n: "Flutter Owl" },
    Seal: { n: "Seal" },
    Cake: { n: "Souflee" },
    Dee: { n: "Deer" },
    Bale: { n: "Blade Lizard" },
    RFatty: { n: "Red Fat" },
    WFatty: { n: "White Snow Fat" },
    Vesp: { n: "Vesperio" },
};
const Heroes = {
    ABelinda: {
        name: "Awk.Belinda",
    },
    Palma: {
        name: "Palmer",
    },
    Rosa: {
        name: "Rosaline",
    },
    Daimon: {
        name: "Daimon",
    },
    Edwin: {
        name: "Edwin",
    },
    Rem: {
        name: "Rem",
    },
    Antandra: { name: "Antandra" },
    ASose: { name: "Awk.Solise" },
    Twins: { name: "Ellaja & Laija" },
    Mortas: { name: "Mortas" },
    Grez: { name: "Grezhul" },
    Trish: { name: "Trisha" },
    Alb: { name: "Albedo" },
    Tasi: { name: "Tasi" },
    ASafi: { name: "Awk.Safiya" },
    Zol: { name: "Zolrath" },
    Baden: { name: "Baden" },
    ABad: { name: "Awk.Baden" },
    Pataly: { name: "Awk.Athalia" },
    Nastya: { name: "Anasta" },
    Silas: { name: "Silas" },
    Cap: { name: "Hodgkin" },
    Nevanty: { name: "Nevanti" },
    Estra: { name: "Estrilda" },
    Joan: { name: "Joan of D'Arc" },
    Saru: { name: "Saurus" },
    Vitek: { name: "Veithael" },
    Dami: { name: "Daemia" },
    Maetria: { name: "Maetria" },
};
export { Beasts, Heroes };
