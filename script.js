$(document).ready(function () {
  // Add scrollspy to <body>
  $("body").scrollspy({ target: ".navbar", offset: 50 });

  // Add smooth scrolling on all links inside the navbar
  $("#photoXNavbar a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar p-2");
      $(".nav-menu").removeClass("p-5");
    } else {
      $(".nav-menu").addClass("p-5");
      $(".nav-menu").removeClass("custom-navbar p-2");
    }
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 700) {
      $(".camera-img").addClass("camera-img-animation");
      $(".camera-text").addClass("camera-text-animation");
    } else {
      $(".camera-img").removeClass("camera-img-animation");
      $(".camera-text").removeClass("camera-text-animation");
    }
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    let pricingCardElements = $(".pricing-card");
    let animationClasses = [
      "pricing-card-monthly",
      "pricing-card-unlimited",
      "pricing-card-annual",
    ];
    if (position >= 4000) {
      $(".pricing-card").each(function (index) {
        $(this).addClass(animationClasses[index]);
      });
    } else {
      $(".pricing-card").each(function (index) {
        $(this).removeClass(animationClasses[index]);
      });
    }
  });

  $(".gallery-list-item").click(function () {
    let value = $(this).attr("data-filter");
    if (value === "all") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + value)
        .hide(300);
      $(".filter")
        .filter("." + value)
        .show(300);
    }
  });

  $(".carousel").carousel({
    interval: 2000000000,
    ride: true,
  });
});
