"use strict";
// Private variable to store Dutch words 
const dutchWords = {
    happy: "Gelukkig", 
    new: "Nieuwe", 
    year: "Jaar", 
    merry: "Vrolijk",
    christmas: "Kerstmis" 
};

//code that grabs the correct Dutch word and returns it
const getDutch = function (word) {
    return dutchWords[word];
};


module.exports = { getDutch };
