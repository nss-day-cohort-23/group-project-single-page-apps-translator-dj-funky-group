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
  let translatedStr = translatedArr.join(" ");
  translatedStr = translatedStr.charAt(0).toUpperCase() + translatedStr.slice(1);
  return translatedStr;
};


module.exports = translate;
