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
const Beasts = [
    {
        name: "Rock Lizard",
        short: "Rick",
    },
    {
        name: "Talismane",
        short: "Tal",
    },
    {
        name: "Moth",
        short: "Mo",
    },
    {
        name: "Fox Fatale",
        short: "Fox",
    },
    {
        name: "Winged Lion",
        short: "Lion",
    },
    {
        name: "Flutter Owl",
        short: "Owl",
    },
    {
        name: "Seal",
        short: "Sel",
    },
    {
        name: "Souflee",
        short: "Cake",
    },
    {
        name: "Deer",
        short: "Dir",
    },
    {
        name: "Blade Lizard",
        short: "Blade",
    },
    {
        name: "Red Fat",
        short: "RFat",
    },
    {
        name: "White Snow Fat",
        short: "WFat",
    },
    {
        name: "Vesperio",
        short: "Vesp",
    },
];
const Heroes = [
    {
        name: "Awk.Belinda",
        short: "ABel",
    },
    {
        name: "Palmer",
        short: "Pal",
    },
    {
        name: "Rosaline",
        short: "Rosa",
    },
    {
        name: "Daimon",
        short: "Dima",
    },
    {
        name: "Edwin",
        short: "Ed",
    },
    {
        name: "Rem",
        short: "Rem",
    },
    {
        name: "Antandra",
        short: "Anta",
    },
    {
        name: "Awk.Solise",
        short: "ASsose",
    },
    {
        name: "Ellaja & Laija",
        short: "Twins",
    },
    {
        name: "Mortas",
        short: "Mort",
    },
    {
        name: "Grezhul",
        short: "Grez",
    },
    {
        name: "Trisha",
        short: "Trsh",
    },
    {
        name: "Albedo",
        short: "Alb",
    },
    {
        name: "Tasi",
        short: "SHTazi",
    },
    {
        name: "Awk.Safiya",
        short: "ASafy",
    },
    {
        name: "Zolrath",
        short: "Zol",
    },
    {
        name: "Baden",
        short: "Bad",
    },
    {
        name: "Awk.Baden",
        short: "ABad",
    },
    {
        name: "Awk.Athalia",
        short: "A.At",
    },
    {
        name: "Anasta",
        short: "Ana",
    },
    {
        name: "Silas",
        short: "Sil",
    },
    {
        name: "Hodgkin",
        short: "Cap",
    },
    {
        name: "Nevanti",
        short: "Neva",
    },
    {
        name: "Estrilda",
        short: "Est",
    },
    {
        name: "Joan of D'Arc",
        short: "Jon",
    },
    {
        name: "Saurus",
        short: "Saru",
    },
    {
        name: "Veithael",
        short: "Vite",
    },
    {
        name: "Daemia",
        short: "Dam",
    },
    {
        name: "Maetria",
        short: "Mae",
    },
];
export { Beasts, Heroes };
