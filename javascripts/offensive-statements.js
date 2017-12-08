"use strict";

const greek = require("./greek");
const japanese = require("./japanese");
const dutch = require("./dutch");
const french = require("./french");

const offensiveStatements = {
    greek: "Greek offensive statement",
    japanese: "謹んで申し上げます、くたばれ、ボケ。", 
    dutch: "dutch offensive statement",
    french: "Nique ta mere!"
};

const translateOffensive = function(opt) {
    return offensiveStatements[opt];
};

module.exports = translateOffensive;
