"use strict";
const translate = require("./translator.js");
const dom = require("./DOMinput.js");
const output = document.getElementById('translatedOutput');

let translateBtn = document.getElementById("translateBtn");

const listener = () => {
  translateBtn.addEventListener("click", () => {
    let text = dom.textInput();
    let opt = dom.getLanguage();
    let translation = translate(text, opt);
    output.innerHTML = translation+'<br>';
    output.innerHTML += " <img src='images/" + opt + ".jpg' width='45px' height='45px'>";
    }
  );
};

module.exports = listener;
