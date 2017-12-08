"use strict";

function speak(string, opt){
    let speaker = window.speechSynthesis;
    let voices = speaker.getVoices();
    let speech = new SpeechSynthesisUtterance();

    switch (opt) {
        case "dutch":
            speech.voice = voices[41]; // dutch accent
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

    speech.voiceURI = 'native';
    speech.volume = 1; // 0 to 1
    speech.rate = 0.5; // 0.1 to 10
    speech.pitch = 1; //0 to 2
    speech.text = string;
    console.log("the VOICE", speech.voice);
    console.log("the LANG", speech.lang);
    speaker.speak(speech);
}

module.exports = speak;

