"use strict";
const translate = require("./translator.js");
const dom = require("./DOMinput.js");
const output = document.getElementById('translatedOutput');
const speaker = require("./speaker.js");

let translateBtn = document.getElementById("translateBtn");
let listenButton = document.getElementById("listenBtn");

const listener = () => {
  translateBtn.addEventListener("click", () => {
    let text = dom.textInput();
    let opt = dom.getLanguage();
    let translation = translate(text, opt);
    output.innerHTML = translation;
    }
  );

  listenButton.addEventListener("click", () => {
    speaker();
  });
};

module.exports = listener;
