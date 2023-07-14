type Pet = { n: string; lvl?: number };
type Hero = { name: string; asc?: Ascension; si?: Sig; fu?: Furn; eng?: Engrv };

type Ascension =
  | "E"
  | "E+"
  | "L"
  | "L+"
  | "M"
  | "M+"
  | "A"
  | "A*"
  | "A**"
  | "A***"
  | "A****"
  | "A*****";
type Furn = "0F" | "3F" | "9F";
type Sig = "+20" | "+30";

type Engrv = "E30" | "E60" | "E80";

export class Team {
  [index: number]: Hero;
  pet: Pet;
  target?: string;
  _len: number;
  damage: [number, string?][];
  constructor(team: Hero[], p?: Pet, t?: string) {
    this.pet = p;
    this.target = t;
    this._len = team.length;
    team.forEach((v, i) => {
      this[i] = v;
    });
  }

  // x - hero position from 1 to 5 only
  setHero(x: number, h: Hero) {
    if (x < 6) {
      this[x] = h;
      this._len = x;
    } else {
      console.log("Hero position out  of range");
    }
  }

  makeAttack(dmg: number, c?: string) {
    if (this.damage === undefined) {
      this.damage = [];
    }
    this.damage.push([dmg, c]);
  }
  removeHero(position: number) {
    this[position] = null;
    this._len--;
  }

  Heroes() {
    let i = 0;
    let result: Hero[] = [];
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

const aBelka = new Team(
  [Heroes.ABelinda, Heroes.Palma, Heroes.Rosa, Heroes.Daimon, Heroes.Edwin],
  Beasts.Tali,
  "Test Clawlossus"
  // 11400,
  // 11450,
  // 10564,
  // 9031,
  // 9131,
  // 10335,
  // 9708,
  // 11352
);

const RemBo = new Team(
  [Heroes.Antandra, Heroes.Rem, Heroes.ASose, Heroes.Twins, Heroes.Mortas],
  Beasts.Lion
  // "Test Clawlossus",
  // 10439,
  // 9298,
  // 9956,
  // 9281,
  // 9190,
  // 9119,
  // 9677
);

const Anateam = new Team(
  [Heroes.Nastya, Heroes.Joan, Heroes.Cap, Heroes.Saru, Heroes.Estra],
  Beasts.Owl,
  "Test Clawlossus"
  // 6530
);

const Trash = new Team(
  [Heroes.Trish, Heroes.Nevanty, Heroes.Alb, Heroes.Baden, Heroes.Tasi],
  Beasts.Moth,
  "Test Clawlossus"
  // 6028,
  // 4593,
  // 5500
);

aBelka.makeAttack(11487, "bel no boots, daemon no gl no helm");
aBelka.makeAttack(9087);
aBelka.makeAttack(10754);
aBelka.makeAttack(10287);
aBelka.makeAttack(10927);
aBelka.makeAttack(10317);
aBelka.makeAttack(11329);
aBelka.makeAttack(9132);
aBelka.makeAttack(10133);

console.log(aBelka);

export { Ascension, Beasts, Engrv, Furn, Hero, Heroes, Pet, Sig };
