$(document).ready(function() {
  var parallax = function() {
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
        this.getBoundingClientRect().top < 200 &&
        this.getBoundingClientRect().bottom > -200
      ) {
        $(this).removeClass("section-about_hidden");
      }
    });
    $(".section-features").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 200 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("section-features_hidden");
      }
    });
    $(".section-find-playlist").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 200 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("section-find-playlist_hidden");
      }
    });
    $(".section-how-it-works").each(function() {
      // reveal when scrolling down                 // reveal when scrolling up
      if (
        this.getBoundingClientRect().top < 200 &&
        this.getBoundingClientRect().top > -200
      ) {
        $(this).removeClass("section-how-it-works_hidden");
      }
    });
  };
  $(window).scroll(parallax);
  parallax();
});
