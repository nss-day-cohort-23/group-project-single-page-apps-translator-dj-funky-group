"use strict";
const translate = require("./translator.js");
const dom = require("./DOMinput.js");
const speaker = require("./speaker.js");
const output = document.getElementById('translatedOutput');


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
// refactor to be event.target
  listenButton.addEventListener("click", () => {
    console.log("listen button clicked");
    let text = dom.textInput();
    let opt = dom.getLanguage();
    let translation = translate(text, opt);
    speaker(translation);
  });
};

module.exports = listener;
