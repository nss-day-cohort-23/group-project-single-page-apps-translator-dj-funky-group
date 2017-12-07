"use strict";

function textInput () {
  let userInput = document.getElementById("textInput").value.toLowerCase().trim();
  return userInput;
}

function getLanguage () {
  let selectedLanguage = document.getElementById("langOption").value;
  return selectedLanguage;
}

module.exports = { textInput, getLanguage };
