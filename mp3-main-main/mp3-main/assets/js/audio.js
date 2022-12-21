function audioManager(audioState){
    const playPauseIcon = document.querySelector("#cont i:nth-child(2)");
    console.dir(playPauseIcon);
    switch (audioState) {
        case "init":
            
          break;

        case "playPause":
            console.log(audio.pause);
            if(audio.paused){
                audio.play()
                playPauseIcon.classList.toggle("fa-play")
                playPauseIcon.classList.toggle("fa-pause")
            } else {
                audio.pause()
                playPauseIcon.classList.toggle("fa-play")
                playPauseIcon.classList.toggle("fa-pause")
            }
            break;
        case "next":
            if(audio.paused){
                audio = new Audio(playlist[state].mp3)
            }else{
                audio.pause()
                audio = new Audio(playlist[state].mp3)
                audio.play()
            }

          break;
          
        case "prev":
            break;
        default:
          break;
      }
}
export{audioManager}