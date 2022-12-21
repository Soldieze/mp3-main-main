function barprog() {
  var timer = setInterval(function () {
    document.querySelector("#prog").value =
      (audio.currentTime / audio.duration) * 100;
  }, 1000);

  // stop the setInterval when song ended
  audio.addEventListener("ended", function () {
    clearInterval(timer);
  });
}

export { barprog };
