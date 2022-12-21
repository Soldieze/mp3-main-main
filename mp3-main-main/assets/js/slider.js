function transition (direction) {
  const sliderImg = document.querySelector("#imgDisc img");
  ;
  const sliderTitle = document.querySelector("#title h2");
  const sliderArtiste = document.querySelector("#artiste h2");
  const newSliderImg = document.createElement("img");
      newSliderImg.src=playlist[state].cover;
      sliderTitle.innerHTML = playlist[state].titre;
      sliderArtiste.innerHTML = playlist[state].artiste;
      newSliderImg.style.position="absolute";
      newSliderImg.style.zIndex="1";
      sliderImg.style.zIndex="2";

      slider.append(newSliderImg);
      sliderImg.style.transition="all 1s";

      sliderImg.style.transform="translateX("+direction+"200%)";

      // redonner src du state actuel a sliderImg
      setTimeout(function(){
        sliderImg.src=playlist[state].cover
        sliderImg.style.transition="none"
        sliderImg.style.transform="translate(-50%, -50%)";

        newSliderImg.remove()
      }, 500)
}
function sliderManager(sliderState) {
  const sliderImg = document.querySelector("#imgDisc img");
  const slider = document.querySelector("#imgDisc");
  const sliderTitle = document.querySelector("#title h2");
  const sliderArtiste = document.querySelector("#artiste h2");
  console.dir(sliderImg);

  setTimeout(() => {
    let imgHeight = (slider.clientWidth * sliderImg.clientHeight) / sliderImg.clientWidth;
    console.log(document.querySelector("#imgDisc img").clientHeight);
    console.log(imgHeight);
    slider.style.height = imgHeight+"px"
  }, 100);

  switch (sliderState) {
    case "init":
      sliderImg.src = playlist[state].cover;
      sliderTitle.innerHTML = playlist[state].titre;
      sliderArtiste.innerHTML = playlist[state].artiste;
      break;
    case "next":
      transition("+")
      break
      
    case "prev":
      transition("-")
    default:
      break;
  }
  console.log("sliderManager");

  console.log("sliderManager");

  console.log("sliderManager");
}

export { sliderManager };
