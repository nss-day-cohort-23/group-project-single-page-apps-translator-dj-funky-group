"use strict";

let text;
let lang;

let translateBtn = document.getElementById("translateBtn");
translateBtn.addEventListener("click", function () {
    text = textInput();
    lang = getLanguage();
});

function textInput () {
    let userInput = document.getElementById("textInput").value;
    return userInput
}

function getLanguage () {
    let selectedLanguage = document.getElementById("langOption").value;
    return selectedLanguage
}


module.exports = { text, lang };
