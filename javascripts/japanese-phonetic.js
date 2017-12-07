"use strict";

const japanesePhonetic = {
    "happy": "happii",
    "new": "hoyahoya",
    "year": "toshi"
};

const getJapanesePhonetic = function (word) {
    return japanesePhonetic[word];
};

module.exports = getJapanesePhonetic;