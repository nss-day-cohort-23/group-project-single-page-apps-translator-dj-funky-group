"use strict";

const greek = require("./greek");
const japanese = require("./japanese");
const dutch = require("./dutch");
const french = require("./french");

const languages = {
  greek: greek,
  japanese: japanese,
  dutch: dutch,
  french: french
};

const translate = (text, opt) => {
  let arr = text.split(' ');
  let translatedArr = arr.map( word => {
    return languages[opt](word);
  });

  let completedStr = translatedArr.join(" ");
  completedStr = completedStr.charAt(0).toUpperCase() + completedStr.slice(1);
  let wordCheck = translatedArr.indexOf(undefined);
  let stringToPrint = wordCheck !== -1 ? "We speak American here." : completedStr;
  return stringToPrint;
};




module.exports = translate;
