"use strict";
// Private variable to store Dutch words 
const dutchWords = { happy: "gelukkig", new: "nieuwe", year: "jaar" };

//code that grabs the correct Dutch word and returns it
const getDutch = function (word) {
    return dutchWords[word];
};

module.export = { getDutch };
