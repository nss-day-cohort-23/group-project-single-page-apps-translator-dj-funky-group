"use strict";

let text;
let lang;

let translateBtn = document.getElementById("translateBtn");
translateBtn.addEventListener("click", function () {
    text = textInput();
    lang = getLanguage();
    console.log(text);
    console.log(lang);
});

function textInput () {
    let userInput = document.getElementById("textInput").value.toLowerCase();
    return userInput;
}

function getLanguage () {
    let selectedLanguage = document.getElementById("langOption").value;
    return selectedLanguage;
}


module.exports = { text, lang };
