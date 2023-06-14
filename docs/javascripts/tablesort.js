"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// document$.subscribe(function () {
var tables = document.querySelectorAll("article table:not([class])");
tables.forEach(function (table) {
    new Tablesort(table);
});
