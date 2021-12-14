$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  var typed = new Typed(".element", {
    string: ["john doe", "a Devoloper", "a Desingner", "a Businessman"],
    smartBackspace: true,
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  //progress bars
  var waypoint = new Waypoint({
    element: document.getElementById("basic-waypoint"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAtteibute("style", "width:100%; transition:1s all");
      p[1].setAtteibute("style", "width:95%; transition:1.5s all");
      p[2].setAtteibute("style", "width:85%; transition:1.7s all");
      p[3].setAtteibute("style", "width:99%; transition:2s all");
      p[4].setAtteibute("style", "width:85%; transition:2.3s all");
      p[5].setAtteibute("style", "width:95%; transition:2.5s all");
    },
    offset: "90%",
  });
});
