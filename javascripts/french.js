"use strict";

let frenchWords = {
  "happy": "bonne",
  "new": "nouveau",
  "year": "année"
};

const french = function(word) {
  return frenchWords[word];
};

module.exports = french;
