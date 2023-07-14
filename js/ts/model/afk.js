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
var Ascension;
(function (Ascension) {
    Ascension[Ascension["E"] = 1] = "E";
    Ascension[Ascension["Ex"] = 2] = "Ex";
    Ascension[Ascension["L"] = 3] = "L";
    Ascension[Ascension["Lex"] = 4] = "Lex";
    Ascension[Ascension["M"] = 5] = "M";
    Ascension[Ascension["Mex"] = 6] = "Mex";
    Ascension[Ascension["A"] = 7] = "A";
    Ascension[Ascension["A1"] = 8] = "A1";
    Ascension[Ascension["A2"] = 9] = "A2";
    Ascension[Ascension["A3"] = 10] = "A3";
    Ascension[Ascension["A4"] = 11] = "A4";
    Ascension[Ascension["A5"] = 12] = "A5";
})(Ascension || (Ascension = {}));
var Furn;
(function (Furn) {
    Furn[Furn["F0"] = 1] = "F0";
    Furn[Furn["F3"] = 2] = "F3";
    Furn[Furn["F9"] = 3] = "F9";
})(Furn || (Furn = {}));
export { based, classes, races };
