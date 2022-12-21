import { playlist } from "./playlist.js";
import { sliderManager } from "./slider.js";
import { audioManager } from "./audio.js";
import { volumeManager } from "./volume.js";
import { timeManager } from "./time.js";
import { barprog } from "./barprog.js";


globalThis.state = 0;
globalThis.playlist = playlist;
globalThis.state = state;
console.log(playlist[state].cover);
globalThis.nextbut = document.querySelector(".fa-forward");
globalThis.prevbut = document.querySelector(".fa-backward");
globalThis.playbut = document.querySelector(".fa-play");
globalThis.timeText = document.querySelector("#timeText");
globalThis.slider = document.querySelector("#imgDisc");
globalThis.range = document.querySelector("#volume");

globalThis.audio = new Audio(playlist[state].mp3);
globalThis.mc = new Hammer(slider);
globalThis.mcVolume = new Hammer(range);



sliderManager("init");
audioManager("init");
timeManager("init");
barprog();
nextbut.addEventListener("click", function () {
  if (state < playlist.length - 1) {
    state++;
  } else {
    state = 0;
  }
  sliderManager("next");
  audioManager("next");
  timeManager("init")
});

prevbut.addEventListener("click", function () {
  if (state > 0) {
    state--;
  } else {
    state = playlist.length;
  }
  sliderManager("prev");
  audioManager("prev");
  timeManager("init")
});

playbut.addEventListener("click", function () {
  function audio() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  audioManager("playPause");
});

volumeButton.addEventListener("change", function () {
  console.dir(volumeButton.value);
  volumeManager("range");
});
mcVolume.on("panright", function () {
  console.log("panright");
  volumeManager("panright")
});
mcVolume.on("panleft", function () {
  console.log("panleft");
  volumeManager("panleft")
});


barprog.addEventListener("mousedown", ()=>{
  timeManager("changeRange");
})