"use strict";
const translate = require("./translator.js");
const dom = require("./DOMinput.js");
const speaker = require("./speaker.js");
const output = document.getElementById('translatedOutput');

let buttonDiv = document.getElementById("buttons");
let translateBtn = document.getElementById("translateBtn");
let listenButton = document.getElementById("listenBtn");

const listener = () => {

  buttonDiv.addEventListener("click", () => {
    let text = dom.textInput();
    let opt = dom.getLanguage();
    let translation = translate(text, opt);
    if (event.target.id === "translateBtn"){
      output.innerHTML = translation;
    } else if (event.target.id === "listenBtn"){
      speaker(translation);
    }
  });
};


module.exports = listener;
