import { playlist } from "./playlist.js";
import { sliderManager } from "./slider.js";
import { audioManager } from "./audio.js";

globalThis.state = 0;
globalThis.playlist = playlist;
globalThis.state = state;
console.log(playlist[state].cover);
globalThis.nextbut = document.querySelector(".fa-forward");
globalThis.prevbut = document.querySelector(".fa-backward");
globalThis.playbut = document.querySelector(".fa-play")
globalThis.audio = new Audio(playlist[state].mp3)


sliderManager("init");
audioManager("init")
nextbut.addEventListener("click", function () {
  if (state < playlist.length - 1) {
    state++;
  } else {
    state = 0;
  }
  sliderManager("next");
  audioManager("next")
});

prevbut.addEventListener("click", function () {
  if (state > 0) {
    state--;
  } else {
    state = playlist.length;
  }
  sliderManager("prev");
  audioManager("prev")
});



playbut.addEventListener("click", function(){
  
  function audio () {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
  };
  audioManager("playPause")
})