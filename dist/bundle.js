(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

let dutchWords = {
  happy: "gelukkig",
  new: "nieuwe",
  year: "jaar",
  merry: "vrolijk",
  christmas: "kerstfeest",
  easter: "Pasen",
  fourth: "vierde",
  of: "van",
  july: "juli",
  thanksgiving: "dankzegging",
  where: "waar",
  is: "is",
  the: "de",
  bathroom: "badkamer",
  fat: "dikke",
  tuesday: "dinsdag",
};

const getDutch = function(word) {
  return dutchWords[word];
};

module.exports = getDutch;

},{}],3:[function(require,module,exports){
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

},{"./DOMinput.js":1,"./offensive-statements.js":8,"./randomizer.js":9,"./speaker.js":10,"./translator.js":11}],4:[function(require,module,exports){
"use strict";

let frenchWords = {
  happy: "bonne",
  new: "nouveau",
  year: "année",
  merry: "joyeux",
  christmas: "Noël",
  easter: "Pâques",
  fourth: "quatre",
  of: "de",
  july: "juillet",
  thanksgiving: "action de grâces",
  where: "où",
  is: "est",
  the: "le",
  bathroom: "salle de bains",
  fat: "Gras",
  tuesday: "mardi"
};

const french = function(word) {
  return frenchWords[word];
};

module.exports = french;

},{}],5:[function(require,module,exports){
"use strict";

let greek = {
  happy: "eftychisméno",
  new: "to néo",
  year: "étos",
  merry: "kalá",
  christmas: "Christoúgenna",
  easter: "Páscha",
  fourth: "tétartos",
  of: "του",
  july: "Ioúlios",
  thanksgiving: "efcharistía",
  where: "που",
  is: "είναι",
  the: "o",
  bathroom: "toualéta",
  fat: "líges",
  tuesday: "méres"
};

function getGreekWord(word) {
  return greek[word];
}

module.exports = getGreekWord;

},{}],6:[function(require,module,exports){
"use strict";

let japaneseKanji = {
  happy: "ハッピー",
  new: "ほやほや",
  year: "とし",
  merry: "メリー",
  christmas: "クリスマス",
  easter: "イースター",
  fourth: "第4",
  of: "の",
  july: "7月",
  thanksgiving: "感謝祭",
  where: "どこで",
  is: "は",
  the: "その",
  bathroom: "バスルーム",
  fat: "脂肪",
  tuesday: "火曜日"

};
const getJapaneseKanji = function(word) {
  return japaneseKanji[word];
};

module.exports = getJapaneseKanji;

},{}],7:[function(require,module,exports){
"use strict";

const events = require("./events.js");

events();

},{"./events.js":3}],8:[function(require,module,exports){
"use strict";

const greek = require("./greek");
const japanese = require("./japanese");
const dutch = require("./dutch");
const french = require("./french");

const offensiveStatements = {
    greek: "Greek offensive statement",
    japanese: "謹んで申し上げます、くたばれ、ボケ。", 
    dutch: "dutch offensive statement",
    french: "Nique ta mere!"
};

const translateOffensive = function(opt) {
    return offensiveStatements[opt];
};

module.exports = translateOffensive;

},{"./dutch":2,"./french":4,"./greek":5,"./japanese":6}],9:[function(require,module,exports){
"use strict";

function rand() {
  let num = Math.round(Math.random()*10);
  console.log(num);
  return num;
}
module.exports = rand;

},{}],10:[function(require,module,exports){
"use strict";
let speaker = window.speechSynthesis;
let speech = new SpeechSynthesisUtterance();
let voices;
speech.voiceURI = 'native';
speech.volume = 1; // 0 to 1
speech.rate = 0.7; // 0.1 to 10
speech.pitch = 1; //0 to 2

// these voices are compatible with an older version of Google Chrome (61.0.3163.100)-- different browsers and newer versions have different voices and don't include a Greek accent
speaker.onvoiceschanged = function () {
    voices = speaker.getVoices();
   
};

function speak(string, opt){ 
    switch (opt) {
        case "dutch":
            speech.voice = voices[41];
            break;
        case "french":
            speech.voice = voices[37];
            break;
        case "greek":
            speech.voice = voices[26];
            break;
        case "japanese":
            speech.voice = voices[18];
            break;
        default:
            speech.voice = voices[48];
    }

    speech.text = string;
    console.log("the VOICE", speech.voice);
    speaker.speak(speech);
}
    


module.exports = speak;


},{}],11:[function(require,module,exports){
"use strict";

const greek = require("./greek");
const japanese = require("./japanese");
const dutch = require("./dutch");
const french = require("./french");

const languages = {
  greek: greek,
  japanese: japanese,
  dutch: dutch,
  french: french
};

const translate = (text, opt) => {
  let arr = text.split(' ');
  let translatedArr = arr.map( word => {
    return languages[opt](word);
  });

  let completedStr = translatedArr.join(" ");
  completedStr = completedStr.charAt(0).toUpperCase() + completedStr.slice(1);
  let wordCheck = translatedArr.indexOf(undefined);
  let stringToPrint = wordCheck !== -1 ? "We speak American here." : completedStr;
  return stringToPrint;
};




module.exports = translate;

},{"./dutch":2,"./french":4,"./greek":5,"./japanese":6}]},{},[7]);
