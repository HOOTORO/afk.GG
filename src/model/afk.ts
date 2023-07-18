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
const enum Ascension {
  E,
  Ex,
  L,
  Lex,
  M,
  Mex,
  A,
  A1,
  A2,
  A3,
  A4,
  A5,
}
enum Furn {
  F0 = 1,
  F3,
  F9,
}
type Sig = "+20" | "+30";

type Engrv = "E30" | "E60" | "E80";
export { Beasts, Heroes, based, classes, races };

const Heroes = [
  { name: "Eorin", short: "Ale", icon: "/afk.GG/assets/portraits/Alen.jpg" },
  {
    name: "Haelus",
    short: "Helus",
    icon: "/afk.GG/assets/portraits/Artisan.jpg",
  },
  {
    name: "Morael",
    short: "Mora",
    icon: "/afk.GG/assets/portraits/AstroM.jpg",
  },
  { name: "Audrae", short: "Aud", icon: "/afk.GG/assets/portraits/AstroR.jpg" },
  {
    name: "Mishka",
    short: "Mish",
    icon: "/afk.GG/assets/portraits/BDruid.jpg",
  },
  { name: "Scarlett", short: "Scar", icon: "/afk.GG/assets/portraits/BM.jpg" },
  { name: "Ezizh", short: "Ezh", icon: "/afk.GG/assets/portraits/Bane.jpg" },
  { name: "Warek", short: "Wark", icon: "/afk.GG/assets/portraits/Bear.jpg" },
  {
    name: "Palmer",
    short: "Palm",
    icon: "/afk.GG/assets/portraits/Bishop.jpg",
  },
  {
    name: "Lorsan",
    short: "Lors",
    icon: "/afk.GG/assets/portraits/BunnyMaster.jpg",
  },
  {
    name: "Treznor",
    short: "Trez",
    icon: "/afk.GG/assets/portraits/CKnight.jpg",
  },
  {
    name: "Captain",
    short: "Cap",
    icon: "/afk.GG/assets/portraits/Captain.jpg",
  },
  {
    name: "CanisaRuke",
    short: "CnR",
    icon: "/afk.GG/assets/portraits/Chimera.jpg",
  },
  {
    name: "Sasaki",
    short: "Sas",
    icon: "/afk.GG/assets/portraits/CurseCarrier.jpg",
  },
  { name: "Grezhul", short: "Grez", icon: "/afk.GG/assets/portraits/DK.jpg" },
  { name: "Daimon", short: "Daim", icon: "/afk.GG/assets/portraits/DKid.jpg" },
  { name: "Zolrath", short: "Zol", icon: "/afk.GG/assets/portraits/DT.jpg" },
  // { name: "Ainz", short: "Ainz", icon: "/afk.GG/assets/portraits/Anz.jpg" },
  // { name: "Arthur", short: "Art", icon: "/afk.GG/assets/portraits/Arthur.jpg" },
  // {
  //   name: "Babayaga",
  //   short: "Melusi",
  //   icon: "/afk.GG/assets/portraits/Babayaga.jpg",
  // },
  // {
  //   name: "Ferael",
  //   short: "Fera",
  //   icon: "/afk.GG/assets/portraits/BoneArcher.jpg",
  // },
  // { name: "Thorne", short: "Thoe", icon: "/afk.GG/assets/portraits/Bones.jpg" },
  // {
  //   name: "Fawkes",
  //   short: "Fawk",
  //   icon: "/afk.GG/assets/portraits/DevilHunter.jpg",
  // },
  // {
  //   name: "Kaz",
  //   short: "Kaz",
  //   icon: "/afk.GG/assets/portraits/CatAssassin.jpg",
  // },
  // {
  //   name: "Morrow",
  //   short: "Mrrw",
  //   icon: "/afk.GG/assets/portraits/DevilMage.jpg",
  // },
  {
    name: "Oku",
    short: "Ok",
    icon: "/afk.GG/assets/portraits/DruidMaster.jpg",
  },
  {
    name: "Eironn",
    short: "Eirn",
    icon: "/afk.GG/assets/portraits/ElfSaber.jpg",
  },
  { name: "Framton", short: "Frmt", icon: "/afk.GG/assets/portraits/FP.jpg" },
  { name: "Mezoth", short: "Mez", icon: "/afk.GG/assets/portraits/Fat.jpg" },
  { name: "Astar", short: "Astr", icon: "/afk.GG/assets/portraits/FlameE.jpg" },
  {
    name: "Nevanthi",
    short: "Neva",
    icon: "/afk.GG/assets/portraits/Flora.jpg",
  },
  {
    name: "Satrana",
    short: "Satr",
    icon: "/afk.GG/assets/portraits/FoxMagician.jpg",
  },
  { name: "Mortas", short: "Mort", icon: "/afk.GG/assets/portraits/GD.jpg" },
  { name: "Hendrik", short: "Hend", icon: "/afk.GG/assets/portraits/GK.jpg" },
  { name: "Heralt", short: "Her", icon: "/afk.GG/assets/portraits/GOR.jpg" },
  {
    name: "Baden",
    short: "Bad",
    icon: "/afk.GG/assets/portraits/GhostSaber.jpg",
  },
  { name: "Athalia", short: "Atha", icon: "/afk.GG/assets/portraits/GodA.jpg" },
  // { name: "Titus", short: "Tit", icon: "/afk.GG/assets/portraits/Golem.jpg" },
  // { name: "Walker", short: "Walk", icon: "/afk.GG/assets/portraits/Gunner.jpg" },
  // { name: "Ezio", short: "Ezio", icon: "/afk.GG/assets/portraits/Ezio.jpg" },
  // { name: "Fane", short: "Fane", icon: "/afk.GG/assets/portraits/Gaoler.jpg" },
  // {
  //   name: "Leofrik",
  //   short: "Leof",
  //   icon: "/afk.GG/assets/portraits/GentryD.jpg",
  // },
  // { name: "Vyloris", short: "Vylka", icon: "/afk.GG/assets/portraits/Hidan.jpg" },
  // {
  //   name: "Oscar",
  //   short: "Osc",
  //   icon: "/afk.GG/assets/portraits/HouseKeeper.jpg",
  // },
  // { name: "Khazard", short: "Khaz", icon: "/afk.GG/assets/portraits/IceD.jpg" },
  // { name: "JOKER", short: "JK.", icon: "/afk.GG/assets/portraits/JK.jpg" },
  { name: "Kalene", short: "Kale", icon: "/afk.GG/assets/portraits/Karen.jpg" },
  { name: "Mehira", short: "LUST", icon: "/afk.GG/assets/portraits/LUST.jpg" },
  // {
  //   name: "Gwyneth",
  //   short: "Gwy",
  //   icon: "/afk.GG/assets/portraits/Longbow.jpg",
  // },
  // { name: "Wu", short: "MK", icon: "/afk.GG/assets/portraits/MK.jpg" },
  {
    name: "Awk.Belinda",
    short: "ABel",
    icon: "/afk.GG/assets/portraits/HFP.jpg",
  },
  { name: "Mulan", short: "Mul", icon: "/afk.GG/assets/portraits/HML.jpg" },
  { name: "JoanDark", short: "JoDa", icon: "/afk.GG/assets/portraits/JOA.jpg" },
  { name: "LDV", short: "LDV", icon: "/afk.GG/assets/portraits/LDV.jpg" },
  { name: "Zikis", short: "Zik", icon: "/afk.GG/assets/portraits/LazyD.jpg" },
  {
    name: "Brutus",
    short: "Bru",
    icon: "/afk.GG/assets/portraits/LionJugg.jpg",
  },
  {
    name: "Saurus",
    short: "Saru",
    icon: "/afk.GG/assets/portraits/Lizard.jpg",
  },
  { name: "Skregg", short: "Skre", icon: "/afk.GG/assets/portraits/Mag.jpg" },
  { name: "Maid", short: "Maid", icon: "/afk.GG/assets/portraits/Maid.jpg" },
  {
    name: "Veithael",
    short: "Veit",
    icon: "/afk.GG/assets/portraits/Mars.jpg",
  },
  {
    name: "Rowan",
    short: "Row",
    icon: "/afk.GG/assets/portraits/Merchant.jpg",
  },
  {
    name: "Merlin",
    short: "Mrln",
    icon: "/afk.GG/assets/portraits/Merlin.jpg",
  },
  {
    name: "Cecilia",
    short: "Ceci",
    icon: "/afk.GG/assets/portraits/NunAssassin.jpg",
  },
  { name: "Drez", short: "Drz", icon: "/afk.GG/assets/portraits/OA.jpg" },
  { name: "Vurk", short: "Vrk", icon: "/afk.GG/assets/portraits/Mouse.jpg" },
  { name: "Oden", short: "Oden", icon: "/afk.GG/assets/portraits/Mystic.jpg" },
  // { name: "Safiya", short: "Saf", icon: "/afk.GG/assets/portraits/NOD.jpg" },
  // { name: "Solise", short: "Sose", icon: "/afk.GG/assets/portraits/NT.jpg" },
  // {
  //   name: "Nakoruru",
  //   short: "Nak",
  //   icon: "/afk.GG/assets/portraits/Nakoruru.jpg",
  // },
  // { name: "Lucius", short: "Luciu", icon: "/afk.GG/assets/portraits/OK.jpg" },
  // {
  //   name: "Aniki",
  //   short: "Anik",
  //   icon: "/afk.GG/assets/portraits/OrcLeader.jpg",
  // },
  // { name: "POP", short: "POP", icon: "/afk.GG/assets/portraits/POP.jpg" },
  // {
  //   name: "AnusPatronus",
  //   short: "Ans",
  //   icon: "/afk.GG/assets/portraits/Patronus.jpg",
  // },
  // { name: "Belinda", short: "Bel", icon: "/afk.GG/assets/portraits/Priest.jpg" },
  // { name: "Pudge", short: "Nara", icon: "/afk.GG/assets/portraits/Pudge.jpg" },
  // {
  //   name: "Kelthur",
  //   short: "Kel",
  //   icon: "/afk.GG/assets/portraits/Revenger.jpg",
  // },
  // {
  //   name: "Awk.Ezizh",
  //   short: "AEzh",
  //   icon: "/afk.GG/assets/portraits/SBane.jpg",
  // },
  {
    name: "Anasta",
    short: "Ana",
    icon: "/afk.GG/assets/portraits/OrcMaster.jpg",
  },
  { name: "Lyca", short: "Lyca", icon: "/afk.GG/assets/portraits/POM.jpg" },
  {
    name: "Theowyn",
    short: "Teo",
    icon: "/afk.GG/assets/portraits/Phantom.jpg",
  },
  {
    name: "Talene",
    short: "Tale",
    icon: "/afk.GG/assets/portraits/Phoenix.jpg",
  },
  {
    name: "Peggy",
    short: "Peg",
    icon: "/afk.GG/assets/portraits/Princess.jpg",
  },
  { name: "Puck", short: "Tasi", icon: "/afk.GG/assets/portraits/Puck.jpg" },
  { name: "QUEEN", short: "Que", icon: "/afk.GG/assets/portraits/QN.jpg" },
  {
    name: "Awk.Baden",
    short: "ABad",
    icon: "/afk.GG/assets/portraits/SBD.jpg",
  },
  {
    name: "Awk.Brutus",
    short: "ABru",
    icon: "/afk.GG/assets/portraits/SLK.jpg",
  },
  { name: "Thoran", short: "Thorn", icon: "/afk.GG/assets/portraits/SNK.jpg" },
  {
    name: "Awk.Talene",
    short: "ATale",
    icon: "/afk.GG/assets/portraits/SPhoenix.jpg",
  },
  {
    name: "Izold",
    short: "Izo",
    icon: "/afk.GG/assets/portraits/SciMonster.jpg",
  },
  { name: "Alaro", short: "Alr", icon: "/afk.GG/assets/portraits/Scout.jpg" },
  { name: "Desira", short: "Desi", icon: "/afk.GG/assets/portraits/Siren.jpg" },
  { name: "Sonia", short: "Soni", icon: "/afk.GG/assets/portraits/Sonia.jpg" },
  { name: "Flora", short: "Flo", icon: "/afk.GG/assets/portraits/Spring.jpg" },
  // { name: "Pipa", short: "Pip", icon: "/afk.GG/assets/portraits/SSR.jpg" },
  {
    name: "Theshku",
    short: "Snak",
    icon: "/afk.GG/assets/portraits/SnakeMan.jpg",
  },
  // { name: "Granit", short: "Gran", icon: "/afk.GG/assets/portraits/Stone.jpg" },
  // { name: "Ulmus", short: "Wood", icon: "/afk.GG/assets/portraits/TD.jpg" },
  // { name: "Seirus", short: "Seir", icon: "/afk.GG/assets/portraits/TH.jpg" },
  // {
  //   name: "Kren",
  //   short: "Kren",
  //   icon: "/afk.GG/assets/portraits/TechMouse.jpg",
  // },
  // { name: "Zaphrael", short: "Tho", icon: "/afk.GG/assets/portraits/Thor.jpg" },
  // { name: "Hasos", short: "Tro", icon: "/afk.GG/assets/portraits/Troll.jpg" },
  // { name: "UKYO", short: "UKY", icon: "/afk.GG/assets/portraits/UKYO.jpg" },
  // {
  //   name: "Respen",
  //   short: "Resp",
  //   icon: "/afk.GG/assets/portraits/WindMan.jpg",
  // },
  // { name: "Rigby", short: "Beer", icon: "/afk.GG/assets/portraits/Wino.jpg" },
  // {
  //   name: "Izabella",
  //   short: "Iza",
  //   icon: "/afk.GG/assets/portraits/Wizard.jpg",
  // },
  // { name: "Taidus", short: "Tide", icon: "/afk.GG/assets/portraits/Wolf.jpg" },
  // {
  //   name: "Nemora",
  //   short: "Yea",
  //   icon: "/afk.GG/assets/portraits/Yeanling.jpg",
  // },
  // { name: "Shemira", short: "Shem", icon: "/afk.GG/assets/portraits/nDP.jpg" },
  {
    name: "Thane",
    short: "Than",
    icon: "/afk.GG/assets/portraits/SwordMaster.jpg",
  },
  { name: "Lucretia", short: "Lucr", icon: "/afk.GG/assets/portraits/THW.jpg" },
  { name: "Tamrus", short: "Tmrus", icon: "/afk.GG/assets/portraits/TSL.jpg" },
  { name: "Orthos", short: "Orts", icon: "/afk.GG/assets/portraits/TimeG.jpg" },
  {
    name: "Raku",
    short: "Rak",
    icon: "/afk.GG/assets/portraits/TricRacoon.jpg",
  },
  { name: "Gorvo", short: "Grv", icon: "/afk.GG/assets/portraits/Turtle.jpg" },
  { name: "Twins", short: "Twin", icon: "/afk.GG/assets/portraits/TwinsB.jpg" },
  { name: "Silas", short: "Sils", icon: "/afk.GG/assets/portraits/UDD.jpg" },
  {
    name: "Estrilda",
    short: "Estr",
    icon: "/afk.GG/assets/portraits/Uhlan.jpg",
  },
  {
    name: "Antandra",
    short: "Anta",
    icon: "/afk.GG/assets/portraits/Valkyrie.jpg",
  },
  { name: "Numisu", short: "Num.", icon: "/afk.GG/assets/portraits/WD.jpg" },
  {
    name: "Awk.Solise",
    short: "ASose",
    icon: "/afk.GG/assets/portraits/WNT.jpg",
  },
  {
    name: "Skriath",
    short: "Skri",
    icon: "/afk.GG/assets/portraits/Wildkin.jpg",
  },
  {
    name: "Awk.Thane",
    short: "AThan",
    icon: "/afk.GG/assets/portraits/WindSM.jpg",
  },
  {
    name: "Alna",
    short: "Alna",
    icon: "/afk.GG/assets/portraits/WinterL.jpg",
  },
  { name: "Yenn", short: "YeNFr", icon: "/afk.GG/assets/portraits/YNF.jpg" },
  { name: "Albedo", short: "Alb", icon: "/afk.GG/assets/portraits/Yalbed.jpg" },
  { name: "Raine", short: "Rai", icon: "/afk.GG/assets/portraits/nBH.jpg" },
  { name: "Edwin", short: "Ed", icon: "/afk.GG/assets/portraits/edwin.jpg" },
  {
    name: "Awk.Athalia",
    short: "AAtha",
    icon: "/afk.GG/assets/portraits/athalia_aw.jpg",
  },
  {
    name: "Crassio",
    short: "Cras",
    icon: "/afk.GG/assets/portraits/crassio.jpg",
  },
  { name: "Daemia", short: "Dae", icon: "/afk.GG/assets/portraits/daemia.jpg" },
  { name: "Rem", short: "Rem", icon: "/afk.GG/assets/portraits/rem.jpg" },
  {
    name: "Ginneas",
    short: "Gin",
    icon: "/afk.GG/assets/portraits/ginneas.jpg",
  },
  {
    name: "Maetria",
    short: "Emi",
    icon: "/afk.GG/assets/portraits/maetria_aw.jpg",
  },
  {
    name: "Olgath",
    short: "Olga",
    icon: "/afk.GG/assets/portraits/olgath.jpg",
  },
  {
    name: "Trishea",
    short: "Trish",
    icon: "/afk.GG/assets/portraits/trishea.jpg",
  },
] as Hero[];

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

type asc = keyof typeof Ascension;
type DuraTears = { [key: number]: number };

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
