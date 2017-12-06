"use strict";

const domInput= require('./DOMinput');
// dom input needs to export a function that gets the string

function splitSentence(){
    let string = "domInput.functionName";
    let words = string.split(" ");
    return words;
}

module.exports = splitSentence;