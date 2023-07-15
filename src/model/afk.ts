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

enum Ascension {
  E = 1,
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
export { Heroes, Beasts, based, classes, races };

const Heroes = [
  { name: "Eorin", short: "Ale", icon: "/afk.GG/assets/portraits/Alen.jpg" },
  { name: "Ainz", short: "Anz", icon: "/afk.GG/assets/portraits/Anz.jpg" },
  { name: "Arthur", short: "Art", icon: "/afk.GG/assets/portraits/Arthur.jpg" },
  {
    name: "Haelus",
    short: "Art",
    icon: "/afk.GG/assets/portraits/Artisan.jpg",
  },
  { name: "Morael", short: "Ast", icon: "/afk.GG/assets/portraits/AstroM.jpg" },
  { name: "Audrae", short: "Ast", icon: "/afk.GG/assets/portraits/AstroR.jpg" },
  { name: "Mishka", short: "BDr", icon: "/afk.GG/assets/portraits/BDruid.jpg" },
  { name: "Scarlett", short: "BM.", icon: "/afk.GG/assets/portraits/BM.jpg" },
  {
    name: "Babayaga",
    short: "Bab",
    icon: "/afk.GG/assets/portraits/Babayaga.jpg",
  },
  { name: "Ezizh", short: "Ban", icon: "/afk.GG/assets/portraits/Bane.jpg" },
  { name: "Warek", short: "Bea", icon: "/afk.GG/assets/portraits/Bear.jpg" },
  { name: "Palmer", short: "Bis", icon: "/afk.GG/assets/portraits/Bishop.jpg" },
  {
    name: "Ferael",
    short: "Bon",
    icon: "/afk.GG/assets/portraits/BoneArcher.jpg",
  },
  { name: "Thorne", short: "Bon", icon: "/afk.GG/assets/portraits/Bones.jpg" },
  {
    name: "Lorsan",
    short: "Bun",
    icon: "/afk.GG/assets/portraits/BunnyMaster.jpg",
  },
  {
    name: "Treznor",
    short: "CKn",
    icon: "/afk.GG/assets/portraits/CKnight.jpg",
  },
  {
    name: "Captain",
    short: "Cap",
    icon: "/afk.GG/assets/portraits/Captain.jpg",
  },
  {
    name: "Kaz",
    short: "Cat",
    icon: "/afk.GG/assets/portraits/CatAssassin.jpg",
  },
  {
    name: "CanisaRuke",
    short: "CR",
    icon: "/afk.GG/assets/portraits/Chimera.jpg",
  },
  { name: "Eluard", short: "Cle", icon: "/afk.GG/assets/portraits/Clergy.jpg" },
  {
    name: "Thali",
    short: "Cra",
    icon: "/afk.GG/assets/portraits/CrazyFox.jpg",
  },
  {
    name: "Sasaki",
    short: "Cur",
    icon: "/afk.GG/assets/portraits/CurseCarrier.jpg",
  },
  { name: "Grezhul", short: "DK.", icon: "/afk.GG/assets/portraits/DK.jpg" },
  { name: "Daimon", short: "DKi", icon: "/afk.GG/assets/portraits/DKid.jpg" },
  { name: "Zolrath", short: "DT.", icon: "/afk.GG/assets/portraits/DT.jpg" },
  {
    name: "Fawkes",
    short: "Dev",
    icon: "/afk.GG/assets/portraits/DevilHunter.jpg",
  },
  {
    name: "Morrow",
    short: "Dev",
    icon: "/afk.GG/assets/portraits/DevilMage.jpg",
  },
  {
    name: "Oku",
    short: "Dru",
    icon: "/afk.GG/assets/portraits/DruidMaster.jpg",
  },
  {
    name: "Eironn",
    short: "Elf",
    icon: "/afk.GG/assets/portraits/ElfSaber.jpg",
  },
  { name: "Ezio", short: "Ezi", icon: "/afk.GG/assets/portraits/Ezio.jpg" },
  { name: "Framton", short: "FP.", icon: "/afk.GG/assets/portraits/FP.jpg" },
  { name: "Mezoth", short: "Fat", icon: "/afk.GG/assets/portraits/Fat.jpg" },
  { name: "Astar", short: "Fla", icon: "/afk.GG/assets/portraits/FlameE.jpg" },
  {
    name: "Nevanthi",
    short: "Flo",
    icon: "/afk.GG/assets/portraits/Flora.jpg",
  },
  {
    name: "Satrana",
    short: "Fox",
    icon: "/afk.GG/assets/portraits/FoxMagician.jpg",
  },
  { name: "Mortas", short: "GD.", icon: "/afk.GG/assets/portraits/GD.jpg" },
  { name: "Hendrik", short: "GK.", icon: "/afk.GG/assets/portraits/GK.jpg" },
  { name: "Heralt", short: "GOR", icon: "/afk.GG/assets/portraits/GOR.jpg" },
  { name: "Fane", short: "Gao", icon: "/afk.GG/assets/portraits/Gaoler.jpg" },
  {
    name: "Leofrik",
    short: "Gen",
    icon: "/afk.GG/assets/portraits/GentryD.jpg",
  },
  {
    name: "Baden",
    short: "Gho",
    icon: "/afk.GG/assets/portraits/GhostSaber.jpg",
  },
  { name: "Athalia", short: "God", icon: "/afk.GG/assets/portraits/GodA.jpg" },
  { name: "Titus", short: "Gol", icon: "/afk.GG/assets/portraits/Golem.jpg" },
  { name: "Walker", short: "Gun", icon: "/afk.GG/assets/portraits/Gunner.jpg" },
  {
    name: "Awk.Belinda",
    short: "HFP",
    icon: "/afk.GG/assets/portraits/HFP.jpg",
  },
  { name: "Mulan", short: "HML", icon: "/afk.GG/assets/portraits/HML.jpg" },
  { name: "Vyloris", short: "Hid", icon: "/afk.GG/assets/portraits/Hidan.jpg" },
  {
    name: "Oscar",
    short: "Hou",
    icon: "/afk.GG/assets/portraits/HouseKeeper.jpg",
  },
  { name: "Khazard", short: "Ice", icon: "/afk.GG/assets/portraits/IceD.jpg" },
  { name: "JOKER", short: "JK.", icon: "/afk.GG/assets/portraits/JK.jpg" },
  { name: "JoanDark", short: "JOA", icon: "/afk.GG/assets/portraits/JOA.jpg" },
  { name: "Kalene", short: "Kar", icon: "/afk.GG/assets/portraits/Karen.jpg" },
  { name: "LDV", short: "LDV", icon: "/afk.GG/assets/portraits/LDV.jpg" },
  { name: "Mehira", short: "LUST", icon: "/afk.GG/assets/portraits/LUST.jpg" },
  { name: "Zikis", short: "Laz", icon: "/afk.GG/assets/portraits/LazyD.jpg" },
  {
    name: "Brutus",
    short: "Lio",
    icon: "/afk.GG/assets/portraits/LionJugg.jpg",
  },
  {
    name: "Saurus",
    short: "Saru",
    icon: "/afk.GG/assets/portraits/Lizard.jpg",
  },
  {
    name: "Gwyneth",
    short: "Lon",
    icon: "/afk.GG/assets/portraits/Longbow.jpg",
  },
  { name: "Wu", short: "MK.", icon: "/afk.GG/assets/portraits/MK.jpg" },
  { name: "Skregg", short: "Mag", icon: "/afk.GG/assets/portraits/Mag.jpg" },
  { name: "Maid", short: "Mai", icon: "/afk.GG/assets/portraits/Maid.jpg" },
  { name: "Veithael", short: "Mar", icon: "/afk.GG/assets/portraits/Mars.jpg" },
  {
    name: "Rowan",
    short: "Mer",
    icon: "/afk.GG/assets/portraits/Merchant.jpg",
  },
  { name: "Merlin", short: "Mer", icon: "/afk.GG/assets/portraits/Merlin.jpg" },
  { name: "Vurk", short: "Mou", icon: "/afk.GG/assets/portraits/Mouse.jpg" },
  { name: "Oden", short: "Mys", icon: "/afk.GG/assets/portraits/Mystic.jpg" },
  { name: "Safiya", short: "NOD", icon: "/afk.GG/assets/portraits/NOD.jpg" },
  { name: "Solise", short: "NT.", icon: "/afk.GG/assets/portraits/NT.jpg" },
  {
    name: "Nakoruru",
    short: "Nak",
    icon: "/afk.GG/assets/portraits/Nakoruru.jpg",
  },
  {
    name: "Cecilia",
    short: "Nun",
    icon: "/afk.GG/assets/portraits/NunAssassin.jpg",
  },
  { name: "Drez", short: "OA.", icon: "/afk.GG/assets/portraits/OA.jpg" },
  { name: "Lucius", short: "OK.", icon: "/afk.GG/assets/portraits/OK.jpg" },
  {
    name: "Aniki",
    short: "Orc",
    icon: "/afk.GG/assets/portraits/OrcLeader.jpg",
  },
  {
    name: "Anasta",
    short: "Orc",
    icon: "/afk.GG/assets/portraits/OrcMaster.jpg",
  },
  { name: "Lyca", short: "POM", icon: "/afk.GG/assets/portraits/POM.jpg" },
  { name: "POP", short: "POP", icon: "/afk.GG/assets/portraits/POP.jpg" },
  {
    name: "AnusPatronus",
    short: "Pat",
    icon: "/afk.GG/assets/portraits/Patronus.jpg",
  },
  {
    name: "Theowyn",
    short: "Pha",
    icon: "/afk.GG/assets/portraits/Phantom.jpg",
  },
  {
    name: "Talene",
    short: "Pho",
    icon: "/afk.GG/assets/portraits/Phoenix.jpg",
  },
  { name: "Priest", short: "Pri", icon: "/afk.GG/assets/portraits/Priest.jpg" },
  {
    name: "Peggy",
    short: "Pri",
    icon: "/afk.GG/assets/portraits/Princess.jpg",
  },
  { name: "Puck", short: "Puc", icon: "/afk.GG/assets/portraits/Puck.jpg" },
  { name: "Pudge", short: "Pud", icon: "/afk.GG/assets/portraits/Pudge.jpg" },
  { name: "QUEEN", short: "QN.", icon: "/afk.GG/assets/portraits/QN.jpg" },
  {
    name: "Kelthur",
    short: "Rev",
    icon: "/afk.GG/assets/portraits/Revenger.jpg",
  },
  { name: "Awk.Baden", short: "SBD", icon: "/afk.GG/assets/portraits/SBD.jpg" },
  {
    name: "Awk.Ezizh",
    short: "SBa",
    icon: "/afk.GG/assets/portraits/SBane.jpg",
  },
  {
    name: "Awk.Brutus",
    short: "SLK",
    icon: "/afk.GG/assets/portraits/SLK.jpg",
  },
  { name: "Thoran", short: "SNK", icon: "/afk.GG/assets/portraits/SNK.jpg" },
  {
    name: "Awk.Talene",
    short: "SPh",
    icon: "/afk.GG/assets/portraits/SPhoenix.jpg",
  },
  { name: "Pipa", short: "SSR", icon: "/afk.GG/assets/portraits/SSR.jpg" },
  {
    name: "Izold",
    short: "Sci",
    icon: "/afk.GG/assets/portraits/SciMonster.jpg",
  },
  { name: "Alaro", short: "Sco", icon: "/afk.GG/assets/portraits/Scout.jpg" },
  { name: "Desira", short: "Sir", icon: "/afk.GG/assets/portraits/Siren.jpg" },
  {
    name: "Theshku",
    short: "Sna",
    icon: "/afk.GG/assets/portraits/SnakeMan.jpg",
  },
  { name: "Sonia", short: "Son", icon: "/afk.GG/assets/portraits/Sonia.jpg" },
  { name: "Flora", short: "Spr", icon: "/afk.GG/assets/portraits/Spring.jpg" },
  { name: "Granit", short: "Sto", icon: "/afk.GG/assets/portraits/Stone.jpg" },
  {
    name: "Thane",
    short: "Swo",
    icon: "/afk.GG/assets/portraits/SwordMaster.jpg",
  },
  { name: "Ulmus", short: "TD.", icon: "/afk.GG/assets/portraits/TD.jpg" },
  { name: "Seirus", short: "TH.", icon: "/afk.GG/assets/portraits/TH.jpg" },
  { name: "Lucretia", short: "THW", icon: "/afk.GG/assets/portraits/THW.jpg" },
  { name: "Tamrus", short: "TSL", icon: "/afk.GG/assets/portraits/TSL.jpg" },
  {
    name: "Kren",
    short: "Tec",
    icon: "/afk.GG/assets/portraits/TechMouse.jpg",
  },
  { name: "Zaphrael", short: "Tho", icon: "/afk.GG/assets/portraits/Thor.jpg" },
  { name: "Orthos", short: "Tim", icon: "/afk.GG/assets/portraits/TimeG.jpg" },
  {
    name: "Raku",
    short: "Tri",
    icon: "/afk.GG/assets/portraits/TricRacoon.jpg",
  },
  { name: "Hasos", short: "Tro", icon: "/afk.GG/assets/portraits/Troll.jpg" },
  { name: "Gorvo", short: "Tur", icon: "/afk.GG/assets/portraits/Turtle.jpg" },
  { name: "Twins", short: "Twi", icon: "/afk.GG/assets/portraits/TwinsB.jpg" },
  { name: "Silas", short: "UDD", icon: "/afk.GG/assets/portraits/UDD.jpg" },
  { name: "UKYO", short: "UKY", icon: "/afk.GG/assets/portraits/UKYO.jpg" },
  {
    name: "Estrilda",
    short: "Uhl",
    icon: "/afk.GG/assets/portraits/Uhlan.jpg",
  },
  {
    name: "Antandra",
    short: "Val",
    icon: "/afk.GG/assets/portraits/Valkyrie.jpg",
  },
  { name: "Numisu", short: "WD.", icon: "/afk.GG/assets/portraits/WD.jpg" },
  {
    name: "Awk.Solise",
    short: "WNT",
    icon: "/afk.GG/assets/portraits/WNT.jpg",
  },
  {
    name: "Skriath",
    short: "Wil",
    icon: "/afk.GG/assets/portraits/Wildkin.jpg",
  },
  {
    name: "Respen",
    short: "Win",
    icon: "/afk.GG/assets/portraits/WindMan.jpg",
  },
  {
    name: "Awk.Thane",
    short: "Win",
    icon: "/afk.GG/assets/portraits/WindSM.jpg",
  },
  { name: "Rigby", short: "Win", icon: "/afk.GG/assets/portraits/Wino.jpg" },
  {
    name: "Alna",
    short: "Win",
    icon: "/afk.GG/assets/portraits/WinterL.jpg",
  },
  {
    name: "Izabella",
    short: "Wiz",
    icon: "/afk.GG/assets/portraits/Wizard.jpg",
  },
  { name: "Taidus", short: "Wol", icon: "/afk.GG/assets/portraits/Wolf.jpg" },
  { name: "Yenn", short: "YNF", icon: "/afk.GG/assets/portraits/YNF.jpg" },
  { name: "Albedo", short: "Yal", icon: "/afk.GG/assets/portraits/Yalbed.jpg" },
  {
    name: "Nemora",
    short: "Yea",
    icon: "/afk.GG/assets/portraits/Yeanling.jpg",
  },
  { name: "Raine", short: "nBH", icon: "/afk.GG/assets/portraits/nBH.jpg" },
  { name: "Shemira", short: "nDP", icon: "/afk.GG/assets/portraits/nDP.jpg" },
] as Hero[];

const Beasts = [
  {
    name: "Rock Lizard",
    short: "Rick",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6008.png",
  },
  {
    name: "Talismane",
    short: "Tal",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6012.png",
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
    icon: "/afk.GG/assets/.other_icons/pet/pet_6007.png",
  },
  {
    name: "Flutter Owl",
    short: "Owl",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6011.png",
  },
  {
    name: "Seal",
    short: "Sel",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6004.png",
  },
  {
    name: "Souflee",
    short: "Cake",
  },
  {
    name: "Deer",
    short: "Dir",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6010.png",
  },
  {
    name: "Blade Lizard",
    short: "Blade",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6006.png",
  },
  {
    name: "Red Fat",
    short: "RFat",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6005.png",
  },
  {
    name: "White Snow Fat",
    short: "WFat",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6004.png",
  },
  {
    name: "Vesperio",
    short: "Vesp",
    icon: "/afk.GG/assets/.other_icons/pet/pet_6009.png",
  },
];
