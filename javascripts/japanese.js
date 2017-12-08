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
