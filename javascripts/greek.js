"use strict";

let greek = {
  happy: "eftychisméno",
  new: "to néo",
  year: "étos",
  merry: "kalá",
  christmas: "Christoúgenna",
  easter: "Páscha",
  fourth: "tétartos",
  of: "του",
  july: "Ioúlios",
  thanksgiving: "efcharistía",
  where: "που",
  is: "είναι",
  the: "o",
  bathroom: "toualéta",
  fat: "líges",
  tuesday: "méres"
};

function getGreekWord(word) {
  return greek[word];
}

module.exports = getGreekWord;
