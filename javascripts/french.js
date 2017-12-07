"use strict";

const frenchWords = {
  happy: "bonne",
  new: "nouveau",
  year: "année"
};

const french = word => {
  return frenchWords[word];
};

module.exports = {french};
