"use strict"

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    voices.forEach((voice,i) => (voiceSelect.options[i]) = new Option(voice.name, i))
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value]
})

let button = document.getElementById("btn");
let textArea = document.getElementById("textArea");

button.addEventListener("click",function(){
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});

