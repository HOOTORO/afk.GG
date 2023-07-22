import { Hero } from "./teams.js";

enum based {
  STR = "str",
  AGI = "agi",
  INT = "int",
}
enum classes {
  RANGER = "ranger",
  TANK = "tank",
  MAGE = "mage",
  SUPPORT = "support",
  WARRIOR = "warrior",
}

enum races {
  GB = "graveborn",
  CEL = "celestial",
  LB = "lightbearer",
  WD = "wilder",
  ML = "mauler",
  HP = "hypogenian",
  DM = "dimensional",
}
export const treeBranches = ["might", "tank", "mage", "ranger", "support"];

const Heroes = JSON.parse(
  `
  [
  {
    "name": "Eorin",
    "short": "Ale",
    "icon": "/afk.GG/assets/portraits/Alen.jpg"
  },
  {
    "name": "Haelus",
    "short": "Helus",
    "icon": "/afk.GG/assets/portraits/Artisan.jpg"
  },
  {
    "name": "Morael",
    "short": "Mora",
    "icon": "/afk.GG/assets/portraits/AstroM.jpg"
  },
  {
    "name": "Audrae",
    "short": "Aud",
    "icon": "/afk.GG/assets/portraits/AstroR.jpg"
  },
  {
    "name": "Mishka",
    "short": "Mish",
    "icon": "/afk.GG/assets/portraits/BDruid.jpg"
  },
  {
    "name": "Scarlett",
    "short": "Scar",
    "icon": "/afk.GG/assets/portraits/BM.jpg"
  },
  {
    "name": "Ezizh",
    "short": "Ezh",
    "icon": "/afk.GG/assets/portraits/Bane.jpg"
  },
  {
    "name": "Warek",
    "short": "Wark",
    "icon": "/afk.GG/assets/portraits/Bear.jpg"
  },
  {
    "name": "Palmer",
    "short": "Palm",
    "icon": "/afk.GG/assets/portraits/Bishop.jpg"
  },
  {
    "name": "Lorsan",
    "short": "Lors",
    "icon": "/afk.GG/assets/portraits/BunnyMaster.jpg"
  },
  {
    "name": "Treznor",
    "short": "Trez",
    "icon": "/afk.GG/assets/portraits/CKnight.jpg"
  },
  {
    "name": "Captain",
    "short": "Cap",
    "icon": "/afk.GG/assets/portraits/Captain.jpg"
  },
  {
    "name": "CanisaRuke",
    "short": "CnR",
    "icon": "/afk.GG/assets/portraits/Chimera.jpg"
  },
  {
    "name": "Sasaki",
    "short": "Sas",
    "icon": "/afk.GG/assets/portraits/CurseCarrier.jpg"
  },
  {
    "name": "Grezhul",
    "short": "Grez",
    "icon": "/afk.GG/assets/portraits/DK.jpg"
  },
  {
    "name": "Daimon",
    "short": "Daim",
    "icon": "/afk.GG/assets/portraits/DKid.jpg"
  },
  {
    "name": "Zolrath",
    "short": "Zol",
    "icon": "/afk.GG/assets/portraits/DT.jpg"
  },
  {
    "name": "Ainz",
    "short": "Ainz",
    "icon": "/afk.GG/assets/portraits/Anz.jpg"
  },
  {
    "name": "Arthur",
    "short": "Art",
    "icon": "/afk.GG/assets/portraits/Arthur.jpg"
  },
  {
    "name": "Babayaga",
    "short": "Melusi",
    "icon": "/afk.GG/assets/portraits/Babayaga.jpg"
  },
  {
    "name": "Ferael",
    "short": "Fera",
    "icon": "/afk.GG/assets/portraits/BoneArcher.jpg"
  },
  {
    "name": "Thorne",
    "short": "Thoe",
    "icon": "/afk.GG/assets/portraits/Bones.jpg"
  },
  {
    "name": "Fawkes",
    "short": "Fawk",
    "icon": "/afk.GG/assets/portraits/DevilHunter.jpg"
  },
  {
    "name": "Kaz",
    "short": "Kaz",
    "icon": "/afk.GG/assets/portraits/CatAssassin.jpg"
  },
  {
    "name": "Morrow",
    "short": "Mrrw",
    "icon": "/afk.GG/assets/portraits/DevilMage.jpg"
  },
  {
    "name": "Oku",
    "short": "Ok",
    "icon": "/afk.GG/assets/portraits/DruidMaster.jpg"
  },
  {
    "name": "Eironn",
    "short": "Eirn",
    "icon": "/afk.GG/assets/portraits/ElfSaber.jpg"
  },
  {
    "name": "Framton",
    "short": "Frmt",
    "icon": "/afk.GG/assets/portraits/FP.jpg"
  },
  {
    "name": "Mezoth",
    "short": "Mez",
    "icon": "/afk.GG/assets/portraits/Fat.jpg"
  },
  {
    "name": "Astar",
    "short": "Astr",
    "icon": "/afk.GG/assets/portraits/FlameE.jpg"
  },
  {
    "name": "Nevanthi",
    "short": "Neva",
    "icon": "/afk.GG/assets/portraits/Flora.jpg"
  },
  {
    "name": "Satrana",
    "short": "Satr",
    "icon": "/afk.GG/assets/portraits/FoxMagician.jpg"
  },
  {
    "name": "Mortas",
    "short": "Mort",
    "icon": "/afk.GG/assets/portraits/GD.jpg"
  },
  {
    "name": "Hendrik",
    "short": "Hend",
    "icon": "/afk.GG/assets/portraits/GK.jpg"
  },
  {
    "name": "Heralt",
    "short": "Her",
    "icon": "/afk.GG/assets/portraits/GOR.jpg"
  },
  {
    "name": "Baden",
    "short": "Bad",
    "icon": "/afk.GG/assets/portraits/GhostSaber.jpg"
  },
  {
    "name": "Athalia",
    "short": "Atha",
    "icon": "/afk.GG/assets/portraits/GodA.jpg"
  },
  {
    "name": "Titus",
    "short": "Tit",
    "icon": "/afk.GG/assets/portraits/Golem.jpg"
  },
  {
    "name": "Walker",
    "short": "Walk",
    "icon": "/afk.GG/assets/portraits/Gunner.jpg"
  },
  {
    "name": "Ezio",
    "short": "Ezio",
    "icon": "/afk.GG/assets/portraits/Ezio.jpg"
  },
  {
    "name": "Fane",
    "short": "Fane",
    "icon": "/afk.GG/assets/portraits/Gaoler.jpg"
  },
  {
    "name": "Leofrik",
    "short": "Leof",
    "icon": "/afk.GG/assets/portraits/GentryD.jpg"
  },
  {
    "name": "Vyloris",
    "short": "Vylka",
    "icon": "/afk.GG/assets/portraits/Hidan.jpg"
  },
  {
    "name": "Oscar",
    "short": "Osc",
    "icon": "/afk.GG/assets/portraits/HouseKeeper.jpg"
  },
  {
    "name": "Khazard",
    "short": "Khaz",
    "icon": "/afk.GG/assets/portraits/IceD.jpg"
  },
  {
    "name": "JOKER",
    "short": "JK.",
    "icon": "/afk.GG/assets/portraits/JK.jpg"
  },
  {
    "name": "Kalene",
    "short": "Kale",
    "icon": "/afk.GG/assets/portraits/Karen.jpg"
  },
  {
    "name": "Mehira",
    "short": "LUST",
    "icon": "/afk.GG/assets/portraits/LUST.jpg"
  },
  {
    "name": "Gwyneth",
    "short": "Gwy",
    "icon": "/afk.GG/assets/portraits/Longbow.jpg"
  },
  { "name": "Wu", "short": "MK", "icon": "/afk.GG/assets/portraits/MK.jpg" },
  {
    "name": "Awk.Belinda",
    "short": "ABel",
    "icon": "/afk.GG/assets/portraits/HFP.jpg"
  },
  {
    "name": "Mulan",
    "short": "Mul",
    "icon": "/afk.GG/assets/portraits/HML.jpg"
  },
  {
    "name": "JoanDark",
    "short": "JoDa",
    "icon": "/afk.GG/assets/portraits/JOA.jpg"
  },
  { "name": "LDV", "short": "LDV", "icon": "/afk.GG/assets/portraits/LDV.jpg" },
  {
    "name": "Zikis",
    "short": "Zik",
    "icon": "/afk.GG/assets/portraits/LazyD.jpg"
  },
  {
    "name": "Brutus",
    "short": "Bru",
    "icon": "/afk.GG/assets/portraits/LionJugg.jpg"
  },
  {
    "name": "Saurus",
    "short": "Saru",
    "icon": "/afk.GG/assets/portraits/Lizard.jpg"
  },
  {
    "name": "Skregg",
    "short": "Skre",
    "icon": "/afk.GG/assets/portraits/Mag.jpg"
  },
  {
    "name": "Maid",
    "short": "Maid",
    "icon": "/afk.GG/assets/portraits/Maid.jpg"
  },
  {
    "name": "Veithael",
    "short": "Veit",
    "icon": "/afk.GG/assets/portraits/Mars.jpg"
  },
  {
    "name": "Rowan",
    "short": "Row",
    "icon": "/afk.GG/assets/portraits/Merchant.jpg"
  },
  {
    "name": "Merlin",
    "short": "Mrln",
    "icon": "/afk.GG/assets/portraits/Merlin.jpg"
  },
  {
    "name": "Cecilia",
    "short": "Ceci",
    "icon": "/afk.GG/assets/portraits/NunAssassin.jpg"
  },
  { "name": "Drez", "short": "Drz", "icon": "/afk.GG/assets/portraits/OA.jpg" },
  {
    "name": "Vurk",
    "short": "Vrk",
    "icon": "/afk.GG/assets/portraits/Mouse.jpg"
  },
  {
    "name": "Oden",
    "short": "Oden",
    "icon": "/afk.GG/assets/portraits/Mystic.jpg"
  },
  {
    "name": "Safiya",
    "short": "Saf",
    "icon": "/afk.GG/assets/portraits/NOD.jpg"
  },
  {
    "name": "Solise",
    "short": "Sose",
    "icon": "/afk.GG/assets/portraits/NT.jpg"
  },
  {
    "name": "Nakoruru",
    "short": "Nak",
    "icon": "/afk.GG/assets/portraits/Nakoruru.jpg"
  },
  {
    "name": "Lucius",
    "short": "Luciu",
    "icon": "/afk.GG/assets/portraits/OK.jpg"
  },
  {
    "name": "Aniki",
    "short": "Anik",
    "icon": "/afk.GG/assets/portraits/OrcLeader.jpg"
  },
  { "name": "POP", "short": "POP", "icon": "/afk.GG/assets/portraits/POP.jpg" },
  {
    "name": "AnusPatronus",
    "short": "Ans",
    "icon": "/afk.GG/assets/portraits/Patronus.jpg"
  },
  {
    "name": "Belinda",
    "short": "Bel",
    "icon": "/afk.GG/assets/portraits/Priest.jpg"
  },
  {
    "name": "Pudge",
    "short": "Nara",
    "icon": "/afk.GG/assets/portraits/Pudge.jpg"
  },
  {
    "name": "Kelthur",
    "short": "Kel",
    "icon": "/afk.GG/assets/portraits/Revenger.jpg"
  },
  {
    "name": "Awk.Ezizh",
    "short": "AEzh",
    "icon": "/afk.GG/assets/portraits/SBane.jpg"
  },
  {
    "name": "Anasta",
    "short": "Ana",
    "icon": "/afk.GG/assets/portraits/OrcMaster.jpg"
  },
  {
    "name": "Lyca",
    "short": "Lyca",
    "icon": "/afk.GG/assets/portraits/POM.jpg"
  },
  {
    "name": "Theowyn",
    "short": "Teo",
    "icon": "/afk.GG/assets/portraits/Phantom.jpg"
  },
  {
    "name": "Talene",
    "short": "Tale",
    "icon": "/afk.GG/assets/portraits/Phoenix.jpg"
  },
  {
    "name": "Peggy",
    "short": "Peg",
    "icon": "/afk.GG/assets/portraits/Princess.jpg"
  },
  {
    "name": "Puck",
    "short": "Tasi",
    "icon": "/afk.GG/assets/portraits/Puck.jpg"
  },
  {
    "name": "QUEEN",
    "short": "Que",
    "icon": "/afk.GG/assets/portraits/QN.jpg"
  },
  {
    "name": "Awk.Baden",
    "short": "ABad",
    "icon": "/afk.GG/assets/portraits/SBD.jpg"
  },
  {
    "name": "Awk.Brutus",
    "short": "ABru",
    "icon": "/afk.GG/assets/portraits/SLK.jpg"
  },
  {
    "name": "Thoran",
    "short": "Thorn",
    "icon": "/afk.GG/assets/portraits/SNK.jpg"
  },
  {
    "name": "Awk.Talene",
    "short": "ATale",
    "icon": "/afk.GG/assets/portraits/SPhoenix.jpg"
  },
  {
    "name": "Izold",
    "short": "Izo",
    "icon": "/afk.GG/assets/portraits/SciMonster.jpg"
  },
  {
    "name": "Alaro",
    "short": "Alr",
    "icon": "/afk.GG/assets/portraits/Scout.jpg"
  },
  {
    "name": "Desira",
    "short": "Desi",
    "icon": "/afk.GG/assets/portraits/Siren.jpg"
  },
  {
    "name": "Sonia",
    "short": "Soni",
    "icon": "/afk.GG/assets/portraits/Sonia.jpg"
  },
  {
    "name": "Flora",
    "short": "Flo",
    "icon": "/afk.GG/assets/portraits/Spring.jpg"
  },
  {
    "name": "Pipa",
    "short": "Pip",
    "icon": "/afk.GG/assets/portraits/SSR.jpg"
  },
  {
    "name": "Theshku",
    "short": "Snak",
    "icon": "/afk.GG/assets/portraits/SnakeMan.jpg"
  },
  {
    "name": "Granit",
    "short": "Gran",
    "icon": "/afk.GG/assets/portraits/Stone.jpg"
  },
  {
    "name": "Ulmus",
    "short": "Wood",
    "icon": "/afk.GG/assets/portraits/TD.jpg"
  },
  {
    "name": "Seirus",
    "short": "Seir",
    "icon": "/afk.GG/assets/portraits/TH.jpg"
  },
  {
    "name": "Kren",
    "short": "Kren",
    "icon": "/afk.GG/assets/portraits/TechMouse.jpg"
  },
  {
    "name": "Zaphrael",
    "short": "Tho",
    "icon": "/afk.GG/assets/portraits/Thor.jpg"
  },
  {
    "name": "Hasos",
    "short": "Tro",
    "icon": "/afk.GG/assets/portraits/Troll.jpg"
  },
  {
    "name": "UKYO",
    "short": "UKY",
    "icon": "/afk.GG/assets/portraits/UKYO.jpg"
  },
  {
    "name": "Respen",
    "short": "Resp",
    "icon": "/afk.GG/assets/portraits/WindMan.jpg"
  },
  {
    "name": "Rigby",
    "short": "Beer",
    "icon": "/afk.GG/assets/portraits/Wino.jpg"
  },
  {
    "name": "Izabella",
    "short": "Iza",
    "icon": "/afk.GG/assets/portraits/Wizard.jpg"
  },
  {
    "name": "Taidus",
    "short": "Tide",
    "icon": "/afk.GG/assets/portraits/Wolf.jpg"
  },
  {
    "name": "Nemora",
    "short": "Yea",
    "icon": "/afk.GG/assets/portraits/Yeanling.jpg"
  },
  {
    "name": "Shemira",
    "short": "Shem",
    "icon": "/afk.GG/assets/portraits/nDP.jpg"
  },
  {
    "name": "Thane",
    "short": "Than",
    "icon": "/afk.GG/assets/portraits/SwordMaster.jpg"
  },
  {
    "name": "Lucretia",
    "short": "Lucr",
    "icon": "/afk.GG/assets/portraits/THW.jpg"
  },
  {
    "name": "Tamrus",
    "short": "Tmrus",
    "icon": "/afk.GG/assets/portraits/TSL.jpg"
  },
  {
    "name": "Orthos",
    "short": "Orts",
    "icon": "/afk.GG/assets/portraits/TimeG.jpg"
  },
  {
    "name": "Raku",
    "short": "Rak",
    "icon": "/afk.GG/assets/portraits/TricRacoon.jpg"
  },
  {
    "name": "Gorvo",
    "short": "Grv",
    "icon": "/afk.GG/assets/portraits/Turtle.jpg"
  },
  {
    "name": "Twins",
    "short": "Twin",
    "icon": "/afk.GG/assets/portraits/TwinsB.jpg"
  },
  {
    "name": "Silas",
    "short": "Sils",
    "icon": "/afk.GG/assets/portraits/UDD.jpg"
  },
  {
    "name": "Estrilda",
    "short": "Estr",
    "icon": "/afk.GG/assets/portraits/Uhlan.jpg"
  },
  {
    "name": "Antandra",
    "short": "Anta",
    "icon": "/afk.GG/assets/portraits/Valkyrie.jpg"
  },
  {
    "name": "Numisu",
    "short": "Num.",
    "icon": "/afk.GG/assets/portraits/WD.jpg"
  },
  {
    "name": "Awk.Solise",
    "short": "ASose",
    "icon": "/afk.GG/assets/portraits/WNT.jpg"
  },
  {
    "name": "Skriath",
    "short": "Skri",
    "icon": "/afk.GG/assets/portraits/Wildkin.jpg"
  },
  {
    "name": "Awk.Thane",
    "short": "AThan",
    "icon": "/afk.GG/assets/portraits/WindSM.jpg"
  },
  {
    "name": "Alna",
    "short": "Alna",
    "icon": "/afk.GG/assets/portraits/WinterL.jpg"
  },
  {
    "name": "Yenn",
    "short": "YeNFr",
    "icon": "/afk.GG/assets/portraits/YNF.jpg"
  },
  {
    "name": "Albedo",
    "short": "Alb",
    "icon": "/afk.GG/assets/portraits/Yalbed.jpg"
  },
  {
    "name": "Raine",
    "short": "Rai",
    "icon": "/afk.GG/assets/portraits/nBH.jpg"
  },
  {
    "name": "Edwin",
    "short": "Ed",
    "icon": "/afk.GG/assets/portraits/edwin.jpg"
  },
  {
    "name": "Awk.Athalia",
    "short": "AAtha",
    "icon": "/afk.GG/assets/portraits/athalia_aw.jpg"
  },
  {
    "name": "Crassio",
    "short": "Cras",
    "icon": "/afk.GG/assets/portraits/crassio.jpg"
  },
  {
    "name": "Daemia",
    "short": "Dae",
    "icon": "/afk.GG/assets/portraits/daemia.jpg"
  },
  { "name": "Rem", "short": "Rem", "icon": "/afk.GG/assets/portraits/rem.jpg" },
  {
    "name": "Ginneas",
    "short": "Gin",
    "icon": "/afk.GG/assets/portraits/ginneas.jpg"
  },
  {
    "name": "Maetria",
    "short": "Emi",
    "icon": "/afk.GG/assets/portraits/maetria_aw.jpg"
  },
  {
    "name": "Olgath",
    "short": "Olga",
    "icon": "/afk.GG/assets/portraits/olgath.jpg"
  },
  {
    "name": "Trishea",
    "short": "Trish",
    "icon": "/afk.GG/assets/portraits/trishea.jpg"
  }
]
  `
) as Hero[];

const Beasts = [
  {
    name: "Rock Lizard",
    short: "Rock",
    icon: "/afk.GG/assets/portraits/pet/pet_6008.png",
  },
  {
    name: "Talismane",
    short: "Tali",
    icon: "/afk.GG/assets/portraits/pet/pet_6012.png",
  },
  {
    name: "Moth",
    short: "Mot",
    icon: "/afk.GG/assets/portraits/pet/phantasmoth.png",
  },
  {
    name: "Fox Fatale",
    short: "FoxF",
    icon: "/afk.GG/assets/portraits/pet/fox_fatale.png",
  },
  {
    name: "Winged Lion",
    short: "Lion",
    icon: "/afk.GG/assets/portraits/pet/pet_6007.png",
  },
  {
    name: "Flutter Owl",
    short: "FOwl",
    icon: "/afk.GG/assets/portraits/pet/pet_6011.png",
  },
  {
    name: "Seal",
    short: "Seal",
    icon: "/afk.GG/assets/portraits/pet/slumber_seal.png",
  },
  {
    name: "Souflee",
    short: "Cake",
    icon: "/afk.GG/assets/portraits/pet/savage_souffle.png",
  },
  {
    name: "Deer",
    short: "Dir",
    icon: "/afk.GG/assets/portraits/pet/pet_6010.png",
  },
  {
    name: "Blade Lizard",
    short: "Blade",
    icon: "/afk.GG/assets/portraits/pet/pet_6006.png",
  },
  {
    name: "Red Fat",
    short: "RFat",
    icon: "/afk.GG/assets/portraits/pet/pet_6005.png",
  },
  {
    name: "White Snow Fat",
    short: "WFat",
    icon: "/afk.GG/assets/portraits/pet/pet_6004.png",
  },
  {
    name: "Vesperio",
    short: "Vesp",
    icon: "/afk.GG/assets/portraits/pet/pet_6009.png",
  },
];

const FlawlessDroplets = [
  {
    0: 1, // e
    1: 1, // e+
    2: 4, // L
    3: 2,
    4: 8, // M
    5: 8,
    6: 4, // A
    7: 2,
    8: 2,
    9: 2,
    10: 2,
    11: 2,
  },
];

type Relic = {
  id: number;
  name: string;
  tier: number;
  icon: string;
  cost: number;
  recipe: number[];
};

type relicLvl = 1 | 2 | 3 | 4 | 5;
const relicType = ["might", "fort", "celerity", "mage", "support"];
const relics: [
  {
    id: number;
    name: string;
    tier: number;
    icon: string;
    cost: number;
    recipe: number[];
  }
] = JSON.parse(
  `
  [
  {
    "id": 1,
    "name": "1205",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1205.png",
    "cost": 1200,
    "recipe": [0]
  },
  {
    "id": 3,
    "name": "1106",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1106.png",
    "cost": 2100,
    "recipe": [0]
  },
  {
    "id": 9,
    "name": "1201",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1201.png",
    "cost": 2760,
    "recipe": [0]
  },
  {
    "id": 7,
    "name": "1202",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1202.png",
    "cost": 1620,
    "recipe": [0]
  },
  {
    "id": 6,
    "name": "1203",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1203.png",
    "cost": 2160,
    "recipe": [0]
  },
  {
    "id": 5,
    "name": "1204",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1204.png",
    "cost": 1680,
    "recipe": [0]
  },
  {
    "id": 4,
    "name": "1105",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1105.png",
    "cost": 2880,
    "recipe": [0]
  },
  {
    "id": 8,
    "name": "1206",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1206.png",
    "cost": 2220,
    "recipe": [0]
  },
  {
    "id": 2,
    "name": "2104",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_2104.png",
    "cost": 1980,
    "recipe": [0]
  },
  {
    "id": 10,
    "name": "1304",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1304.png",
    "cost": 2400,
    "recipe": [0]
  },
  {
    "id": 12,
    "name": "1305",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1305.png",
    "cost": 2820,
    "recipe": [0]
  },
  {
    "id": 11,
    "name": "1306",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1306.png",
    "cost": 1500,
    "recipe": [0]
  },
  {
    "id": 13,
    "name": "1404",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1404.png",
    "cost": 1140,
    "recipe": [0]
  },
  {
    "id": 15,
    "name": "1405",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1405.png",
    "cost": 1800,
    "recipe": [0]
  },
  {
    "id": 14,
    "name": "1406",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1406.png",
    "cost": 1980,
    "recipe": [0]
  },
  {
    "id": 16,
    "name": "1504",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1504.png",
    "cost": 1560,
    "recipe": [0]
  },
  {
    "id": 18,
    "name": "1505",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1505.png",
    "cost": 2160,
    "recipe": [0]
  },
  {
    "id": 17,
    "name": "1506",
    "tier": 10,
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1506.png",
    "cost": 2400,
    "recipe": [0]
  },
  {
    "id": 19,
    "name": "1106 - Eye of Valor",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1106.png",
    "cost": 1500,
    "recipe": [3, 3]
  },
  {
    "id": 20,
    "name": "1206 - Eye of Determination",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1206.png",
    "cost": 1380,
    "recipe": [8, 8]
  },
  {
    "id": 21,
    "name": "1306- ",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1306.png",
    "cost": 1860,
    "recipe": [11, 11]
  },
  {
    "id": 22,
    "name": "1406",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1406.png",
    "cost": 1320,
    "recipe": [14, 14]
  },
  {
    "id": 23,
    "name": "1506",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1506.png",
    "cost": 1020,
    "recipe": [17, 17]
  },
  {
    "id": 24,
    "name": "2104",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2104.png",
    "cost": 900,
    "recipe": [2, 1, 13]
  },
  {
    "id": 25,
    "name": "2105",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2105.png",
    "cost": 360,
    "recipe": [4, 6, 10]
  },
  {
    "id": 26,
    "name": "2201",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2201.png",
    "cost": 120,
    "recipe": [9, 6, 18]
  },
  {
    "id": 27,
    "name": "2202",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2202.png",
    "cost": 1680,
    "recipe": [7, 7]
  },
  {
    "id": 28,
    "name": "2203",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2203.png",
    "cost": 1210,
    "recipe": [6, 10]
  },
  {
    "id": 29,
    "name": "2204",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2204.png",
    "cost": 2760,
    "recipe": [5, 18]
  },
  {
    "id": 30,
    "name": "2205",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2205.png",
    "cost": 2040,
    "recipe": [1, 2]
  },
  {
    "id": 31,
    "name": "2304",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2304.png",
    "cost": 2040,
    "recipe": [10, 18]
  },
  {
    "id": 32,
    "name": "2305",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2305.png",
    "cost": 3240,
    "recipe": [12, 13]
  },
  {
    "id": 33,
    "name": "2404",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2404.png",
    "cost": 540,
    "recipe": [13, 13, 13]
  },
  {
    "id": 34,
    "name": "2405",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2405.png",
    "cost": 1440,
    "recipe": [15, 15, 16]
  },
  {
    "id": 35,
    "name": "2504",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2504.png",
    "cost": 1680,
    "recipe": [16, 16, 15]
  },
  {
    "id": 36,
    "name": "2505",
    "tier": 20,
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2505.png",
    "cost": 1020,
    "recipe": [18, 13, 5]
  },
  {
    "id": 37,
    "name": "1106",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1106.png",
    "cost": 2400,
    "recipe": [19, 19]
  },
  {
    "id": 38,
    "name": "1206",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1206.png",
    "cost": 2160,
    "recipe": [20, 20]
  },
  {
    "id": 39,
    "name": "1306",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1306.png",
    "cost": 2280,
    "recipe": [21, 21]
  },
  {
    "id": 40,
    "name": "1406",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1406.png",
    "cost": 5040,
    "recipe": [22, 22]
  },
  {
    "id": 41,
    "name": "1506",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1506.png",
    "cost": 3960,
    "recipe": [23, 23]
  },
  {
    "id": 42,
    "name": "3104",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3104.png",
    "cost": 3060,
    "recipe": [24, 30]
  },
  {
    "id": 43,
    "name": "3105",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3105.png",
    "cost": 4080,
    "recipe": [25, 27, 36]
  },
  {
    "id": 44,
    "name": "3201",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3201.png",
    "cost": 1430,
    "recipe": [26, 26, 28]
  },
  {
    "id": 45,
    "name": "3202",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3202.png",
    "cost": 2880,
    "recipe": [27, 29]
  },
  {
    "id": 46,
    "name": "3203",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3203.png",
    "cost": 1740,
    "recipe": [28, 26, 9]
  },
  {
    "id": 47,
    "name": "3204",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3204.png",
    "cost": 4200,
    "recipe": [29, 29, 36]
  },
  {
    "id": 48,
    "name": "3205",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3205.png",
    "cost": 5760,
    "recipe": [24, 30]
  },
  {
    "id": 49,
    "name": "3304",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3304.png",
    "cost": 2270,
    "recipe": [31, 28, 33]
  },
  {
    "id": 50,
    "name": "3305",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3305.png",
    "cost": 9600,
    "recipe": [32, 36]
  },
  {
    "id": 51,
    "name": "3404",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3404.png",
    "cost": 1320,
    "recipe": [33, 33, 33]
  },
  {
    "id": 52,
    "name": "3405",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3405.png",
    "cost": 6120,
    "recipe": [34, 22]
  },
  {
    "id": 53,
    "name": "3504",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3504.png",
    "cost": 4440,
    "recipe": [35, 34, 16]
  },
  {
    "id": 54,
    "name": "3505",
    "tier": 30,
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3505.png",
    "cost": 4200,
    "recipe": [36, 25]
  },
  {
    "id": 55,
    "name": "1106",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1106.png",
    "cost": 24600,
    "recipe": [37, 37, 37]
  },
  {
    "id": 56,
    "name": "1206",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1206.png",
    "cost": 24600,
    "recipe": [38, 38, 38]
  },
  {
    "id": 57,
    "name": "1306",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1306.png",
    "cost": 36000,
    "recipe": [39, 39, 39]
  },
  {
    "id": 58,
    "name": "1406",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1406.png",
    "cost": 25200,
    "recipe": [40, 40, 40]
  },
  {
    "id": 59,
    "name": "1506",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1506.png",
    "cost": 25200,
    "recipe": [41, 41, 41]
  },
  {
    "id": 60,
    "name": "4104",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4104.png",
    "cost": 9600,
    "recipe": [42, 48, 51]
  },
  {
    "id": 61,
    "name": "4105",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4105.png",
    "cost": 12000,
    "recipe": [43, 45, 54, 50]
  },
  {
    "id": 62,
    "name": "4201",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4201.png",
    "cost": 2400,
    "recipe": [46, 46, 44, 44]
  },
  {
    "id": 63,
    "name": "4202",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4202.png",
    "cost": 15000,
    "recipe": [45, 47]
  },
  {
    "id": 64,
    "name": "4203",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4203.png",
    "cost": 2400,
    "recipe": [46, 46, 44, 26]
  },
  {
    "id": 65,
    "name": "4204",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4204.png",
    "cost": 31200,
    "recipe": [47, 47, 54]
  },
  {
    "id": 66,
    "name": "4205",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4205.png",
    "cost": 12600,
    "recipe": [48, 42, 51]
  },
  {
    "id": 67,
    "name": "4304",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4304.png",
    "cost": 16800,
    "recipe": [49, 49, 46, 51]
  },
  {
    "id": 68,
    "name": "4305",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4305.png",
    "cost": 30600,
    "recipe": [50, 54, 49]
  },
  {
    "id": 69,
    "name": "4404",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4404.png",
    "cost": 10200,
    "recipe": [51, 51, 53]
  },
  {
    "id": 70,
    "name": "4405",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4405.png",
    "cost": 15000,
    "recipe": [52, 40, 47]
  },
  {
    "id": 71,
    "name": "4504",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4504.png",
    "cost": 18000,
    "recipe": [53, 52, 42, 35]
  },
  {
    "id": 72,
    "name": "4505",
    "tier": 40,
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4505.png",
    "cost": 17400,
    "recipe": [50, 43, 54]
  },
  {
    "id": 73,
    "name": "1106",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1106.png",
    "cost": 156000,
    "recipe": [55, 55, 55]
  },
  {
    "id": 74,
    "name": "1206",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1206.png",
    "cost": 132000,
    "recipe": [56, 56, 56]
  },
  {
    "id": 75,
    "name": "1306",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1306.png",
    "cost": 114000,
    "recipe": [57, 57, 57]
  },
  {
    "id": 76,
    "name": "1406",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1406.png",
    "cost": 96000,
    "recipe": [58, 58, 58]
  },
  {
    "id": 77,
    "name": "1506",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1506.png",
    "cost": 132000,
    "recipe": [59, 59, 59]
  },
  {
    "id": 78,
    "name": "5104",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5104.png",
    "cost": 21600,
    "recipe": [60, 66, 69]
  },
  {
    "id": 79,
    "name": "5105",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5105.png",
    "cost": 58200,
    "recipe": [61, 63, 72, 68]
  },
  {
    "id": 80,
    "name": "5201",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5201.png",
    "cost": 48000,
    "recipe": [62, 62, 64, 64]
  },
  {
    "id": 81,
    "name": "5202",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5202.png",
    "cost": 61200,
    "recipe": [65, 63]
  },
  {
    "id": 82,
    "name": "5203",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5203.png",
    "cost": 50400,
    "recipe": [64, 64, 62, 44]
  },
  {
    "id": 83,
    "name": "5204",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5204.png",
    "cost": 75000,
    "recipe": [65, 72]
  },
  {
    "id": 84,
    "name": "5205",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5205.png",
    "cost": 69600,
    "recipe": [66, 60, 69]
  },
  {
    "id": 85,
    "name": "5304",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5304.png",
    "cost": 100200,
    "recipe": [67, 64, 69]
  },
  {
    "id": 86,
    "name": "5305",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5305.png",
    "cost": 159600,
    "recipe": [68, 72, 67]
  },
  {
    "id": 87,
    "name": "5404",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5404.png",
    "cost": 5400,
    "recipe": [69, 71, 66]
  },
  {
    "id": 88,
    "name": "5405",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5405.png",
    "cost": 36000,
    "recipe": [70, 65, 65]
  },
  {
    "id": 89,
    "name": "5504",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5504.png",
    "cost": 51000,
    "recipe": [70, 71, 53, 60]
  },
  {
    "id": 90,
    "name": "5505",
    "tier": 50,
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5505.png",
    "cost": 9000,
    "recipe": [72, 68, 61]
  }
]

  `
);

const relicLeveling: {
  readonly [index: string]: { readonly [inx: number]: readonly number[] };
} = JSON.parse(
  `
  {
  "might": {
    "10": [1, 2, 5, 6, 4, 3],
    "20": [24, 25, 28, 29, 30, 19],
    "30": [42, 43, 46, 47, 48, 37],
    "40": [60, 61, 64, 65, 66, 55],
    "50": [82, 84, 83, 78, 79, 73]
  },
  "fort": {
    "10": [7, 9, 1, 5, 6, 8],
    "20": [26, 27, 28, 29, 30, 20],
    "30": [44, 45, 46, 47, 48, 38],
    "40": [62, 63, 64, 65, 66, 56],
    "50": [80, 81, 82, 83, 84, 74]
  },
  "mage": {
    "10": [7, 13, 15, 10, 12, 14],
    "20": [33, 34, 31, 32, 27, 22],
    "30": [51, 45, 52, 49, 50, 40],
    "40": [68, 63, 67, 69, 70, 58],
    "50": [81, 87, 88, 85, 86, 76]
  },
  "support": {
    "10": [13, 16, 18, 7, 12, 17],
    "20": [35, 36, 33, 27, 32, 23],
    "30": [54, 45, 50, 53, 51, 41],
    "40": [68, 69, 63, 71, 72, 59],
    "50": [89, 90, 81, 86, 87, 77]
  },
  "celerity": {
    "10": [1, 2, 5, 10, 12, 11],
    "20": [30, 24, 29, 31, 32, 21],
    "30": [48, 42, 47, 49, 50, 39],
    "40": [66, 60, 65, 67, 68, 57],
    "50": [84, 78, 83, 85, 86, 75]
  }
}

  `
);

type resourceIncome = {
  baseEPH: number;
  garrisoned: number;
  dropTier: number;
  dropTime: number;
};

const townTypes: Record<number, resourceIncome> = {
  5: { baseEPH: 200, garrisoned: 240, dropTier: 30, dropTime: 206800 },
  6: { baseEPH: 240, garrisoned: 288, dropTier: 30, dropTime: 172333 },
  7: { baseEPH: 280, garrisoned: 336, dropTier: 40, dropTime: 612000 },
  8: { baseEPH: 320, garrisoned: 383, dropTier: 40, dropTime: 535500 },
};

export {
  AbexHelper,
  Beasts,
  Heroes,
  Relic,
  based,
  classes,
  races,
  relicLeveling,
  relicType,
  relics,
  resourceIncome,
  townTypes,
};

class AbexHelper {
  static tier(id: number) {
    const tier = relics.find((x) => x.id === id)?.tier;
    return tier;
  }
  static defaultRelics(branch: string) {
    Object.entries(relicLeveling[branch]).map((x) => {});
    return relicLeveling[branch][10].map((x) => x);
  }

  static lowerTierRelic(branch: string, id: number) {
    const current = this.tier(id),
      position = relicLeveling[branch][current].findIndex((x) => x === id);
    return relicLeveling[branch][current - 10][position];
  }
  static relicPrice(id: number): number {
    const rel = relics.find((x) => x.id === id);
    if (id <= 18) {
      return rel.cost;
    } else {
      return (
        rel.cost +
        rel.recipe.map((x) => this.relicPrice(x)).reduce((a, b) => a + b)
      );
    }
  }
  static nextTier(current: number, goal = false) {
    if (goal) {
      switch (current) {
        case 50:
          return;

        default:
          break;
      }
    }
  }
}
