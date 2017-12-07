"use strict";

function speak(string) {
    let speaker = window.speechSynthesis;
    let voices = speaker.getVoices();
    let speech = new SpeechSynthesisUtterance();
    speech.voice = voices[2]; 
    speech.voiceURI = 'native';
    speech.volume = 1; // 0 to 1
    speech.rate = 0.5; // 0.1 to 10
    speech.pitch = 1; //0 to 2
    speech.text = string;
    speech.lang = 'en-US';
    console.log("the VOICE", speech.voice);
    speaker.speak(speech);
}

module.exports = speak;

