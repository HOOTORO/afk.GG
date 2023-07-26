import { createElementN } from "../components/helper.js";
import { Hero } from "./teams.js";
import {
  BagRelic,
  CoreSlot,
  Relic,
  relicLvl,
  resourceIncome,
} from "./types.js";

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
enum stored {
  BAG = "bag",
  RELIC = "relic",
  ESS = "essence",
  TOWN = "towns",
  SLOT = "relic-slots",
}
enum Branch {
  WAR = "might",
  FORT = "fort",
  MAG = "mage",
  RAN = "celerity",
  SUP = "support",
}

const relBase = 18;

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

const relics: Relic[] = JSON.parse(
  `
[
  {
    "recipe": [0],
    "id": 1,
    "cost": 2100,
    "name": "1106",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1106.png"
  },
  {
    "recipe": [0],
    "id": 2,
    "cost": 2220,
    "name": "1206",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1206.png"
  },
  {
    "recipe": [0],
    "id": 3,
    "cost": 1500,
    "name": "1306",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1306.png"
  },
  {
    "recipe": [0],
    "id": 4,
    "cost": 1140,
    "name": "1406",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1406.png"
  },
  {
    "recipe": [0],
    "id": 5,
    "cost": 2400,
    "name": "1506",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1506.png"
  },
  {
    "recipe": [0],
    "id": 6,
    "cost": 1980,
    "name": "2104",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_2104.png"
  },
  {
    "recipe": [0],
    "id": 7,
    "cost": 2880,
    "name": "1105",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1105.png"
  },
  {
    "recipe": [0],
    "id": 8,
    "cost": 2760,
    "name": "1201",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1201.png"
  },
  {
    "recipe": [0],
    "id": 9,
    "cost": 1620,
    "name": "1202",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1202.png"
  },
  {
    "recipe": [0],
    "id": 10,
    "cost": 2160,
    "name": "1203",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1203.png"
  },
  {
    "recipe": [0],
    "id": 11,
    "cost": 1680,
    "name": "1204",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1204.png"
  },
  {
    "recipe": [0],
    "id": 12,
    "cost": 1200,
    "name": "1205",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1205.png"
  },
  {
    "recipe": [0],
    "id": 13,
    "cost": 2400,
    "name": "1304",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1304.png"
  },
  {
    "recipe": [0],
    "id": 14,
    "cost": 2820,
    "name": "1305",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1305.png"
  },
  {
    "recipe": [0],
    "id": 15,
    "cost": 1140,
    "name": "1404",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1404.png"
  },
  {
    "recipe": [0],
    "id": 16,
    "cost": 1800,
    "name": "1405",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1405.png"
  },
  {
    "recipe": [0],
    "id": 17,
    "cost": 1560,
    "name": "1504",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1504.png"
  },
  {
    "recipe": [0],
    "id": 18,
    "cost": 2160,
    "name": "1505",
    "icon": "/afk.GG/assets/ae/relic/10/bg_relic_1-relic_1505.png"
  },
  {
    "recipe": [1, 1],
    "id": 19,
    "cost": 1500,
    "name": "1106 - Eye of Valor",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1106.png"
  },
  {
    "recipe": [2, 2],
    "id": 20,
    "cost": 1380,
    "name": "1206 - Eye of Determination",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1206.png"
  },
  {
    "recipe": [3, 3],
    "id": 21,
    "cost": 1860,
    "name": "1306- ",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1306.png"
  },
  {
    "recipe": [4, 4],
    "id": 22,
    "cost": 1320,
    "name": "1406",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1406.png"
  },
  {
    "recipe": [5, 5],
    "id": 23,
    "cost": 1020,
    "name": "1506",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_1506.png"
  },
  {
    "recipe": [6, 12, 15],
    "id": 24,
    "cost": 900,
    "name": "2104",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2104.png"
  },
  {
    "recipe": [7, 13, 10],
    "id": 25,
    "cost": 360,
    "name": "2105",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2105.png"
  },
  {
    "recipe": [8, 10, 18],
    "id": 26,
    "cost": 120,
    "name": "2201",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2201.png"
  },
  {
    "recipe": [9, 9],
    "id": 27,
    "cost": 1680,
    "name": "2202",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2202.png"
  },
  {
    "recipe": [13, 10],
    "id": 28,
    "cost": 1210,
    "name": "2203",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2203.png"
  },
  {
    "recipe": [11, 18],
    "id": 29,
    "cost": 2760,
    "name": "2204",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2204.png"
  },
  {
    "recipe": [6, 12],
    "id": 30,
    "cost": 2040,
    "name": "2205",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2205.png"
  },
  {
    "recipe": [13, 18],
    "id": 31,
    "cost": 2040,
    "name": "2304",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2304.png"
  },
  {
    "recipe": [14, 15],
    "id": 32,
    "cost": 3240,
    "name": "2305",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2305.png"
  },
  {
    "recipe": [15, 15, 15],
    "id": 33,
    "cost": 540,
    "name": "2404",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2404.png"
  },
  {
    "recipe": [16, 16, 17],
    "id": 34,
    "cost": 1440,
    "name": "2405",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2405.png"
  },
  {
    "recipe": [17, 17, 16],
    "id": 35,
    "cost": 1680,
    "name": "2504",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2504.png"
  },
  {
    "recipe": [18, 15, 11],
    "id": 36,
    "cost": 1020,
    "name": "2505",
    "icon": "/afk.GG/assets/ae/relic/20/bg_relic_2-relic_2505.png"
  },
  {
    "recipe": [19, 19],
    "id": 37,
    "cost": 2400,
    "name": "1106",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1106.png"
  },
  {
    "recipe": [20, 20],
    "id": 38,
    "cost": 2160,
    "name": "1206",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1206.png"
  },
  {
    "recipe": [21, 21],
    "id": 39,
    "cost": 2280,
    "name": "1306",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1306.png"
  },
  {
    "recipe": [22, 22],
    "id": 40,
    "cost": 5040,
    "name": "1406",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1406.png"
  },
  {
    "recipe": [23, 23],
    "id": 41,
    "cost": 3960,
    "name": "1506",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_1506.png"
  },
  {
    "recipe": [24, 30],
    "id": 42,
    "cost": 3060,
    "name": "3104",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3104.png"
  },
  {
    "recipe": [25, 27, 36],
    "id": 43,
    "cost": 4080,
    "name": "3105",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3105.png"
  },
  {
    "recipe": [26, 26, 28],
    "id": 44,
    "cost": 1430,
    "name": "3201",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3201.png"
  },
  {
    "recipe": [27, 29],
    "id": 45,
    "cost": 2880,
    "name": "3202",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3202.png"
  },
  {
    "recipe": [28, 26, 9],
    "id": 46,
    "cost": 1740,
    "name": "3203",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3203.png"
  },
  {
    "recipe": [29, 29, 36],
    "id": 47,
    "cost": 4200,
    "name": "3204",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3204.png"
  },
  {
    "recipe": [24, 30],
    "id": 48,
    "cost": 5760,
    "name": "3205",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3205.png"
  },
  {
    "recipe": [31, 28, 33],
    "id": 49,
    "cost": 2270,
    "name": "3304",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3304.png"
  },
  {
    "recipe": [32, 36],
    "id": 50,
    "cost": 9600,
    "name": "3305",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3305.png"
  },
  {
    "recipe": [33, 33, 33],
    "id": 51,
    "cost": 1320,
    "name": "3404",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3404.png"
  },
  {
    "recipe": [34, 22],
    "id": 52,
    "cost": 6120,
    "name": "3405",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3405.png"
  },
  {
    "recipe": [35, 34, 16],
    "id": 53,
    "cost": 4440,
    "name": "3504",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3504.png"
  },
  {
    "recipe": [36, 25],
    "id": 54,
    "cost": 4200,
    "name": "3505",
    "icon": "/afk.GG/assets/ae/relic/30/bg_relic_3-relic_3505.png"
  },
  {
    "recipe": [37, 37, 37],
    "id": 55,
    "cost": 24600,
    "name": "1106",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1106.png"
  },
  {
    "recipe": [38, 38, 38],
    "id": 56,
    "cost": 24600,
    "name": "1206",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1206.png"
  },
  {
    "recipe": [39, 39, 39],
    "id": 57,
    "cost": 36000,
    "name": "1306",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1306.png"
  },
  {
    "recipe": [40, 40, 40],
    "id": 58,
    "cost": 25200,
    "name": "1406",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1406.png"
  },
  {
    "recipe": [41, 41, 41],
    "id": 59,
    "cost": 25200,
    "name": "1506",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_1506.png"
  },
  {
    "recipe": [42, 48, 51],
    "id": 60,
    "cost": 9600,
    "name": "4104",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4104.png"
  },
  {
    "recipe": [43, 45, 54, 50],
    "id": 61,
    "cost": 12000,
    "name": "4105",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4105.png"
  },
  {
    "recipe": [46, 46, 44, 44],
    "id": 62,
    "cost": 2400,
    "name": "4201",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4201.png"
  },
  {
    "recipe": [45, 47],
    "id": 63,
    "cost": 15000,
    "name": "4202",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4202.png"
  },
  {
    "recipe": [46, 46, 44, 26],
    "id": 64,
    "cost": 2400,
    "name": "4203",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4203.png"
  },
  {
    "recipe": [47, 47, 54],
    "id": 65,
    "cost": 31200,
    "name": "4204",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4204.png"
  },
  {
    "recipe": [48, 42, 51],
    "id": 66,
    "cost": 12600,
    "name": "4205",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4205.png"
  },
  {
    "recipe": [49, 46, 51],
    "id": 67,
    "cost": 16800,
    "name": "4304",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4304.png"
  },
  {
    "recipe": [50, 54, 49],
    "id": 68,
    "cost": 30600,
    "name": "4305",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4305.png"
  },
  {
    "recipe": [51, 51, 53],
    "id": 69,
    "cost": 10200,
    "name": "4404",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4404.png"
  },
  {
    "recipe": [52, 40, 47],
    "id": 70,
    "cost": 15000,
    "name": "4405",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4405.png"
  },
  {
    "recipe": [53, 52, 42, 35],
    "id": 71,
    "cost": 18000,
    "name": "4504",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4504.png"
  },
  {
    "recipe": [50, 43, 54],
    "id": 72,
    "cost": 17400,
    "name": "4505",
    "icon": "/afk.GG/assets/ae/relic/40/bg_relic_4-relic_4505.png"
  },
  {
    "recipe": [55, 55, 55],
    "id": 73,
    "cost": 156000,
    "name": "1106",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1106.png"
  },
  {
    "recipe": [56, 56, 56],
    "id": 74,
    "cost": 132000,
    "name": "1206",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1206.png"
  },
  {
    "recipe": [57, 57, 57],
    "id": 75,
    "cost": 114000,
    "name": "1306",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1306.png"
  },
  {
    "recipe": [58, 58, 58],
    "id": 76,
    "cost": 96000,
    "name": "1406",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1406.png"
  },
  {
    "recipe": [59, 59, 59],
    "id": 77,
    "cost": 132000,
    "name": "1506",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_1506.png"
  },
  {
    "recipe": [60, 66, 69],
    "id": 78,
    "cost": 21600,
    "name": "5104",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5104.png"
  },
  {
    "recipe": [61, 63, 72, 68],
    "id": 79,
    "cost": 58200,
    "name": "5105",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5105.png"
  },
  {
    "recipe": [62, 62, 64, 64],
    "id": 80,
    "cost": 48000,
    "name": "5201",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5201.png"
  },
  {
    "recipe": [65, 63],
    "id": 81,
    "cost": 61200,
    "name": "5202",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5202.png"
  },
  {
    "recipe": [64, 64, 62, 44],
    "id": 82,
    "cost": 50400,
    "name": "5203",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5203.png"
  },
  {
    "recipe": [65, 72],
    "id": 83,
    "cost": 75000,
    "name": "5204",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5204.png"
  },
  {
    "recipe": [66, 60, 69],
    "id": 84,
    "cost": 69600,
    "name": "5205",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5205.png"
  },
  {
    "recipe": [67, 64, 69],
    "id": 85,
    "cost": 100200,
    "name": "5304",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5304.png"
  },
  {
    "recipe": [68, 72, 67],
    "id": 86,
    "cost": 159600,
    "name": "5305",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5305.png"
  },
  {
    "recipe": [69, 71, 66],
    "id": 87,
    "cost": 5400,
    "name": "5404",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5404.png"
  },
  {
    "recipe": [70, 65, 65],
    "id": 88,
    "cost": 36000,
    "name": "5405",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5405.png"
  },
  {
    "recipe": [70, 71, 53, 60],
    "id": 89,
    "cost": 51000,
    "name": "5504",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5504.png"
  },
  {
    "recipe": [72, 68, 61],
    "id": 90,
    "cost": 9000,
    "name": "5505",
    "icon": "/afk.GG/assets/ae/relic/50/bg_relic_5-relic_5505.png"
  }
]
  `
);

const baseRelics: {
  readonly [index: string]: readonly number[];
} = JSON.parse(`
{
  "celerity": [12, 6, 11, 13, 14, 3],
  "fort": [8, 9, 10, 11, 12, 2],
  "mage": [14, 9, 13, 15, 16, 4],
  "might": [10, 12, 11, 6, 7, 1],
  "support": [14, 15, 9, 17, 18, 5]
}

`);

const townTypes: Record<number, resourceIncome> = {
  5: { baseEPH: 200, garrisoned: 240, dropTier: 3, dropTime: 206800 },
  6: { baseEPH: 240, garrisoned: 288, dropTier: 3, dropTime: 172333 },
  7: { baseEPH: 280, garrisoned: 336, dropTier: 4, dropTime: 612000 },
  8: { baseEPH: 320, garrisoned: 383, dropTier: 4, dropTime: 535500 },
};

export {
  Beasts,
  Branch,
  Heroes,
  RelicManager,
  Renderer,
  TierManager as Tier,
  based,
  classes,
  defaults,
  races,
  baseRelics as relicLeveling,
  stored,
  townTypes,
};

class TierManager {
  static next(id: number) {
    const nextTier = id + relBase > 90 ? id - 4 * relBase : id + relBase;
    return RelicManager.getById(nextTier);
  }

  static relics(lvl: relicLvl) {
    return relics.filter((x) => x.id / relBase + 1 === lvl);
  }
  static nextLevel(cs: CoreSlot): void {
    cs.equipped = this.next(cs.equipped.id);
    cs.level = cs.level > 4 ? 1 : <relicLvl>(cs.level + 1);
    if (cs.goal.id < cs.equipped.id) {
      cs.goal = cs.equipped;
    }
  }
  static nextGoal(cs: CoreSlot) {
    cs.goal =
      cs.goal.id / relBase > 4 ? cs.equipped : TierManager.next(cs.goal.id);
    return cs.goal;
  }
}
class RelicManager {
  static consistOf(r: Relic, depth?: relicLvl) {
    return r.recipe.map((x) => this.getById(x));
  }
  static price(rel: Relic): number {
    if (rel.id > relBase) {
      return (
        rel.cost +
        rel.recipe
          .map((x) => this.price(this.getById(x)))
          .reduce((a, b) => a + b)
      );
    } else {
      return rel.cost;
    }
  }
  static getById(n: number) {
    return relics.find((x) => x.id === n);
  }
}

class Renderer {
  static relicInput(containerName: string, rels: BagRelic[]) {
    const div = createElementN("div", { class: containerName });
    rels.forEach((x) => {
      const el = createElementN(
        "span",
        {},
        `
      <img src=${x.icon} alt=${x.name} width=52></img>
      <code><u>id</u>: ${x.id}</code>
      <code><strong>price</strong>:<br> ${RelicManager.price(x)}</code>
      <code><em>recipe</em>: ${x.recipe.join("/")}</code>
      <input type="number" class="${containerName}-item-${x.id}" min=0 value="${
          x.qty
        }">
      `
      );
      div.appendChild(el);
    });
    return div;
  }
  static imgArray(imgLinks: string[], w: number) {
    return imgLinks.map((s) => `<img src="${s}" width=${w}>`).join("");
  }
}

class defaults {
  static emptyBag() {
    return relics.map((rel) => {
      const bred = <BagRelic>rel;
      bred.qty = 0;
      return bred;
    });
  }
  static aeTowns() {
    return { 5: 0, 6: 0, 7: 0, 8: 0 };
  }

  static baseSlots() {
    return Object.entries(baseRelics)
      .map((b) =>
        b[1].map((r, i) => {
          return {
            slotId: `${b[0]}-${i}`,
            equipped: RelicManager.getById(r),
            goal: RelicManager.getById(r),
            level: 1,
          };
        })
      )
      .flat();
  }
}
