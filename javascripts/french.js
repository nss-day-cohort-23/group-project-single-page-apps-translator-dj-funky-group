"use strict";

let frenchWords = {
  happy: "bonne",
  new: "nouveau",
  year: "année",
  merry: "joyeux",
  christmas: "Noël",
  easter: "Pâques",
  fourth: "quatre",
  of: "de",
  july: "juillet",
  thanksgiving: "action de grâces",
  where: "où",
  is: "est",
  the: "le",
  bathroom: "salle de bains",
  fat: "Gras",
  tuesday: "mardi"
};

const french = function(word) {
  return frenchWords[word];
};

module.exports = french;
