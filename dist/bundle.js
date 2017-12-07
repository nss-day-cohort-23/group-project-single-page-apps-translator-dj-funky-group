(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function textInput () {
  let userInput = document.getElementById("textInput").value.toLowerCase();
  return userInput;
}

function getLanguage () {
  let selectedLanguage = document.getElementById("langOption").value;
  return selectedLanguage;
}

module.exports = { textInput, getLanguage };

},{}],2:[function(require,module,exports){
"use strict";
const dutchWords = { happy: "gelukkig", new: "nieuwe", year: "jaar" };

const getDutch = function (word) {
    return dutchWords[word];
};

module.exports = getDutch;

},{}],3:[function(require,module,exports){
"use strict";
const translate = require("./translator.js");
const dom = require("./DOMinput.js");
const speaker = require("./speaker.js");
const output = document.getElementById('translatedOutput');


let translateBtn = document.getElementById("translateBtn");
let listenButton = document.getElementById("listenBtn");

const listener = () => {
  translateBtn.addEventListener("click", () => {
    let text = dom.textInput();
    let opt = dom.getLanguage();
    let translation = translate(text, opt);
    output.innerHTML = translation;
    }
  );
// refactor to be event.target
  listenButton.addEventListener("click", () => {
    console.log("listen button clicked");
    let text = dom.textInput();
    let opt = dom.getLanguage();
    let translation = translate(text, opt);
    speaker(translation);
  });
};

module.exports = listener;

},{"./DOMinput.js":1,"./speaker.js":8,"./translator.js":9}],4:[function(require,module,exports){
"use strict";

let frenchWords = {
  "happy": "bonne",
  "new": "nouveau",
  "year": "année"
};

const french = function(word) {
  return frenchWords[word];
};

module.exports = french;

},{}],5:[function(require,module,exports){
"use strict";
console.log("linked");

let greek = {happy: "eftychismeno", new: "to neo", year: "etos" };

function getGreekWord (word) {
    return greek[word];
}

module.exports=getGreekWord;

},{}],6:[function(require,module,exports){
"use strict";

let japaneseKanji = {
    "happy": "ハッピー",
    "new": "ほやほや",
    "year": "とし"

};
const getJapaneseKanji = function (word) {
    return japaneseKanji[word];
};

module.exports = getJapaneseKanji;

},{}],7:[function(require,module,exports){
"use strict";

const events = require("./events.js");

events();

},{"./events.js":3}],8:[function(require,module,exports){
"use strict";
function speak(string) {
    let speaker= window.speechSynthesis;
    let speech = new SpeechSynthesisUtterance();
    let voices = speaker.getVoices();
    speech.voice = voices[10]; // Note: some voices don't support altering params
    speech.voiceURI = 'native';
    speech.volume = 1; // 0 to 1
    speech.rate = 0.5; // 0.1 to 10
    speech.pitch = 1; //0 to 2
    speech.text = string;
    speech.lang = 'en-US';
    speaker.speak(speech);
}

module.exports = speak;


},{}],9:[function(require,module,exports){
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
