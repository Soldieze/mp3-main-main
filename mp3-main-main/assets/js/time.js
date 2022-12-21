//fonction trouvée sur : https://stackoverflow.com/questions/59554776/how-to-convert-total-time-into-minutes-for-custom-audio-player

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let timeForSeconds = time - minutes * 60; // seconds without counted minutes
  let seconds = Math.floor(timeForSeconds);
  /*   let secondsReadable = seconds > 9 ? seconds : 0${seconds}  */ // To change 2:2 into 2:02
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}: ${seconds}`;
}

function timeManager(timeState) {
  switch (timeState) {
    case "init":
      setTimeout(function () {
        console.log("timeManager init");
        timeText.innerHTML = "0: 00 / " + formatTime(audio.duration);
        setInterval(() => {
          // if(audio.paused === false) le ! inverse ma Boolean
          if (!audio.paused) {
            timeText.innerHTML =
              formatTime(audio.currentTime) +
              " / " +
              formatTime(audio.duration);
              
          }
        }, 1000);
      }, 500);
      break;

    case "changeRange":
      audio.pause();
      barprog.addEventListener("mouseup", () => {
        audio.currentTime= (barprog.value*audio.duration)*100;
        audio.play()
      });

      break;

    default:
      break;
  }
}
export { timeManager };
