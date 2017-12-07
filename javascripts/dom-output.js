"use strict";
//pull in translated text from translator module
const translator = require("./translator");

//reference DOM element to ouput translation
const output = document.getElementById('translatedOutput');

function outputTranslation(translation) {
    output.innerHTML = translation;
}

function printTranslation() {
    let string = translator.translate();//translate() = w/e we call translator function
    outputTranslation(string);
} 

module.export = { printTranslation };

