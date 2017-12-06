"use strict";
//pull in translated text from translator module
const translator = require("./translator");

//reference DOM element to ouput translation
const output = document.getElementById('translatedOutput');

function outputTranslation(translation){
    output.innerHTML = translation;
}

function printTranslation(){
    outputTranslation(translator.translate());
} 
