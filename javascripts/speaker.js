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

