"use strict";
console.log("linked");

let greek = {happy: "eftychismeno", new: "to neo", year: "etos" };

function getGreekWord (word) {
    return greek[word];
}

module.exports=getGreekWord;
