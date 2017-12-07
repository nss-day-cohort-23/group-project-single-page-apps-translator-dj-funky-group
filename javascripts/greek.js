"use strict";
console.log("linked");

let greek = {happy: "Eftychismeno", new: "to neo", year: "etos" };
// turn string of user entry into array, each word will then be passed into this function to create translated string
function getGreekWord (word) {
    return greek[word];
}

module.exports=getGreekWord;