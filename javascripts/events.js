"use strict";
const translate = require("./translator.js");
const dom = require("./DOMinput.js");
const speaker = require("./speaker.js");
const rand = require("./randomizer.js");
const offender = require("./offensive-statements.js");

const output = document.getElementById('translatedOutput');

let buttonDiv = document.getElementById("buttons");
let translateBtn = document.getElementById("translateBtn");
let listenButton = document.getElementById("listenBtn");

const listener = () => {

  buttonDiv.addEventListener("click", (event) => {
    let num = rand();
    let text = dom.textInput();
    let opt = dom.getLanguage();
    let realTranslation = translate(text, opt);
    let fakeTranslation = offender(opt);
    let translation = num <= 5 ? realTranslation : fakeTranslation;

    if (event.target.id === "listenBtn"){
      speaker(translation, opt);
    }
    output.innerHTML = translation+'<br>';
    output.innerHTML += " <img src='images/" + opt + ".jpg' width='45px' height='45px'>";
  });
};


module.exports = listener;
