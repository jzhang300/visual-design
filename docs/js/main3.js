var initAudio = function() {
  var context = new AudioContext() || new webkitAudioContext(),
    request = new XMLHttpRequest();
  var analyser = context.createAnalyser();

  request.open("GET", "audio/we-got-the-love.mp3", true);
  request.responseType = "arraybuffer";
  request.onload = function() {
    context.decodeAudioData(request.response, onDecoded);
  };

  function onDecoded(buffer) {
    var bufferSource;
    var isPlaying = false;
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    var refresh = function() {
      if (isPlaying) {
        requestAnimationFrame(function() {
          analyser.getByteFrequencyData(frequencyData);
          refresh();
          for (var i = 0; i < frequencyData.length; i += 1) {
            var circle = document.querySelector("#Oval-" + i);

            if (circle !== null) {
              circle.setAttribute("r", frequencyData[i * 150] * 3);
            }
          }
        });
      }
    };

    var mediaOnClick = function() {
      var mediaButton = document.querySelector(".js-media");

      if (mediaButton.classList.contains("js-playing")) {
        bufferSource.disconnect(analyser);
        bufferSource.stop();
        setTimeout(function() {
          isPlaying = false;
          analyser.disconnect(context.destination);
        }, 1000);
      } else if (mediaButton.classList.contains("js-paused")) {
        bufferSource = context.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.connect(analyser, 0);
        analyser.connect(context.destination);
        bufferSource.start();
        isPlaying = true;
        refresh();
      }
      mediaButton.classList.toggle("js-paused");
      mediaButton.classList.toggle("js-playing");
    };

    var button = document.querySelector(".js-media");
    button.addEventListener("click", mediaOnClick);
  }

  request.send();
};

$(document).ready(function() {
  var parallax = function() {
    $(".top-nav").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (document.scrollingElement.scrollTop > 200) {
        $(this).addClass("top-nav_visible");
      } else {
        $(this).removeClass("top-nav_visible");
      }
    });
    $(".hero").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 200 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("hero_hidden");
      }
    });
    $(".section-about").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 400 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("section-about_hidden");
      }
    });
    $(".section-features").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 400 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("section-features_hidden");
      }
    });
    $(".section-find-playlist").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 300 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("section-find-playlist_hidden");
      }
    });
    $(".section-how-it-works").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 400 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("section-how-it-works_hidden");
      }
    });
  };
  $(window).scroll(parallax);
  parallax();
  initAudio();
});
