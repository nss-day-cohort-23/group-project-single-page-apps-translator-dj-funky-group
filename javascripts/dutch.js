"use strict";
const dutchWords = { 
    happy: "Gelukkig", 
    new: "Nieuwe", 
    year: "Jaar",
    merry: "Vrolijk",
    christmas: "Kerstmis",
    holidays: "Vakantie",
    "season's": "Seizoenen",
    greetings: "Groeten"
 };

const getDutch = word => dutchWords[word];

module.exports = getDutch;
