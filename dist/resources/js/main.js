$(document).ready(function () {
  var owl = $("#owl-demo")
    .on("initialized.owl.carousel changed.owl.carousel", function (e) {
      if (!e.namespace) {
        return;
      }

      const carousel = e.relatedTarget;
      const counter = carousel.relative(carousel.current()) + 1;
      $(".slider-counter").text(
        "0" + counter + "/" + 0 + carousel.items().length
      );
    })
    .owlCarousel({
      navigation: false, // Show next and prev buttons
      loop: true,
      slideSpeed: 500,
      paginationSpeed: 600,
      // center: false,
      items: 1,
      stagePadding: 0,
      responsiveClass: true,
      merge: true,
      video: true,
      dots: false,
      dotsContainer: "#carousel-custom-dots",
      singleItem: true,
      onChanged: function (e) {
        const lizDots = document.querySelectorAll(".liz-dots");
        const index = e.relatedTarget.relative(e.relatedTarget.current());
        if (typeof index !== "undefined") {
          console.log("index", index);
          for (let i = 0; i < lizDots.length; i++) {
            lizDots[i].style.backgroundColor = 'white';
          }
          lizDots[index].style.backgroundColor = 'black';
        }
      },
      responsive: {
        375: {
          items: 1,
          nav: false,
        },
      },
    });

  function callback(e) {}
  jQuery(".custom-dots-liz").on("click", "li", function (e) {
    owl.trigger("to.owl.carousel", [jQuery(this).index(), 200]);
  });
  if ($(".owl-item.active video", this.$element).length) {
    return;
  } else
    $(".owl-item").click(function () {
      owl.trigger("next.owl.carousel");
    });
});

// Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Video controller

const ctrlVideo = document.getElementById("video");
const playBtn = document.querySelector(".play-btn");
if (ctrlVideo) {
  $(".play-btn").click(function () {
    ctrlVideo.play();
    $(".play-btn").addClass("hide-video-btn");
  });
}
if (ctrlVideo) {
  ctrlVideo.addEventListener("timeupdate", () => {
    if (ctrlVideo.ended) {
      $(".play-btn").removeClass("hide-video-btn");
    }
  });
}
