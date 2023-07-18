var based;
(function (based) {
    based["STR"] = "str";
    based["AGI"] = "agi";
    based["INT"] = "int";
})(based || (based = {}));
var classes;
(function (classes) {
    classes["RANGER"] = "ranger";
    classes["TANK"] = "tank";
    classes["MAGE"] = "mage";
    classes["SUPPORT"] = "support";
    classes["WARRIOR"] = "warrior";
})(classes || (classes = {}));
var races;
(function (races) {
    races["GB"] = "graveborn";
    races["CEL"] = "celestial";
    races["LB"] = "lightbearer";
    races["WD"] = "wilder";
    races["ML"] = "mauler";
    races["HP"] = "hypogenian";
    races["DM"] = "dimensional";
})(races || (races = {}));
export const treeBranches = ["might", "tank", "mage", "ranger", "support"];
var Furn;
(function (Furn) {
    Furn[Furn["F0"] = 1] = "F0";
    Furn[Furn["F3"] = 2] = "F3";
    Furn[Furn["F9"] = 3] = "F9";
})(Furn || (Furn = {}));
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
    { name: "Kalene", short: "Kale", icon: "/afk.GG/assets/portraits/Karen.jpg" },
    { name: "Mehira", short: "LUST", icon: "/afk.GG/assets/portraits/LUST.jpg" },
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
    {
        name: "Theshku",
        short: "Snak",
        icon: "/afk.GG/assets/portraits/SnakeMan.jpg",
    },
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
];
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
        0: 1,
        1: 1,
        2: 4,
        3: 2,
        4: 8,
        5: 8,
        6: 4,
        7: 2,
        8: 2,
        9: 2,
        10: 2,
        11: 2,
    },
];
