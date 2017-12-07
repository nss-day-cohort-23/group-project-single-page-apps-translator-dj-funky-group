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
  console.log(translatedArr);
  return translatedArr.join(" ");
};


module.exports = translate;
