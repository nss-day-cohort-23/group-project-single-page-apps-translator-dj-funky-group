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

