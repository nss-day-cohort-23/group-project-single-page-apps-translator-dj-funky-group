"use strict";

function rand() {
  let num = Math.round(Math.random()*10);
  console.log(num);
  return num;
}
module.exports = rand;
