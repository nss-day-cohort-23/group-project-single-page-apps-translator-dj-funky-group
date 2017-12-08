"use strict";
let speaker = window.speechSynthesis;
let speech = new SpeechSynthesisUtterance();
let voices;
speech.voiceURI = 'native';
speech.volume = 1; // 0 to 1
speech.rate = 0.7; // 0.1 to 10
speech.pitch = 1; //0 to 2

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

