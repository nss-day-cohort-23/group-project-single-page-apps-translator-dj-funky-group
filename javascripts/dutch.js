"use strict";
const dutchWords = { happy: "gelukkig", new: "nieuwe", year: "jaar" };

const getDutch = function (word) {
    return dutchWords[word];
};

module.exports = getDutch;
