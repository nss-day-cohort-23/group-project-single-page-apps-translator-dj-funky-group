"use strict";

let dutchWords = {
  happy: "gelukkig",
  new: "nieuwe",
  year: "jaar",
  merry: "vrolijk",
  christmas: "kerstfeest",
  easter: "Pasen",
  fourth: "vierde",
  of: "van",
  july: "juli",
  thanksgiving: "dankzegging",
  where: "waar",
  is: "is",
  the: "de",
  bathroom: "badkamer",
  fat: "dikke",
  tuesday: "dinsdag",
};

const getDutch = function(word) {
  return dutchWords[word];
};

module.exports = getDutch;
