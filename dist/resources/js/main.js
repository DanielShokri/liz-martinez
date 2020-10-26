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
      singleItem: true,
      onInitialized: function () {
        if ($(".owl-item.active video", this.$element).length) {
          $(".owl-item.active video", this.$element)[0].play();
          owl.trigger("stop.owl.autoplay");
          $(".owl-item.active video", this.$element).on("ended", function () {
            $(".owl-item.active video", this.$element)[0].play();
          });
        }
      },
      onTranslated: function () {
        if ($(".owl-item.active video", this.$element).length) {
          $(".owl-item.active video", this.$element)[0].play();
          owl.trigger("stop.owl.autoplay");
          $(".owl-item.active video", this.$element).on("ended", function () {
            $(".owl-item.active video", this.$element)[0].play();
          });
        }
      },
      responsive: {
        375: {
          items: 1,
          nav: false,
        },
      },
    });
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
