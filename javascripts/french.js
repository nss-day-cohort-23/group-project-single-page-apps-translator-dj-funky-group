"use strict";

const frenchWords = {
  happy: "bonne",
  new: "nouveau",
  year: "année"
};

const translateToFrench = word => {
  return frenchWords[word];
};

module.exports = {translateToFrench};
