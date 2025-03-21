$(document).ready(function () {
  $(".buttons-wrap button").click(function () {
    var xyz = $(this).addClass(".selected-color");
    if (xyz.hasClass("selected-color")) {
        xyz.removeClass("selected-color");
    } else {
        $(".buttons-wrap button").removeClass("slow");
        $(".buttons-wrap button").removeClass("selected-color");
        xyz.addClass("selected-color");
    }
  });

  
});


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

