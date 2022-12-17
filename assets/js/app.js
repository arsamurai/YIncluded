$(document).ready(function () {
  // Burger
  $("#burger").on("click", function () {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });

  // Filter
  $("#filter-btn").on("click", function () {
    $(".filter").addClass("active");
    $(".spec__filter").addClass("active");
  });

  $("#filter-close").on("click", function () {
    $(".filter").removeClass("active");
    $(".spec__filter").removeClass("active");
  });

  $(".spec__filter-item").on("click", function () {
    $(".spec__filter").removeClass("active");
    $(".spec__filter-item").removeClass("active");
    $(this).addClass("active");
  });

  // Contact-Us modal
  $("#contact-us-link").on("click", function () {
    $("#contact-us").addClass("active");
    $("#sidebar").removeClass("active");
  });
  $(".form__nav-back").on("click", function () {
    $("#contact-us").removeClass("active");
  });
  $(document).on("click", function (e) {
    if ($("#contact-us").is(e.target)) $("#contact-us").removeClass("active");
  });

  // Tabs
  $(".tabs__item").on("click", function (e) {
    e.preventDefault();

    $(".tabs__item").removeClass("tabs__item-active");
    $(".tabs__block").removeClass("tabs__block-active");

    $(this).addClass("tabs__item-active");
    $($(this).attr("href")).addClass("tabs__block-active");
  });

  // Sliders
  $("#album-page__slider").slick({ infinite: false });
  $("#gallery__slider").slick({ infinite: false });
  $("#gallery-page__slider").slick({ infinite: false });
  $("#events__slider").slick({ infinite: false });

  // Network team slider

  let slidesShow = $("[data-person]").length > 3 ? 4 : 2;

  function slicky() {
    $("#network__team-slider").not('.slick-initialized').slick({
      infinite: false,
      slidesToShow: slidesShow,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: "unslick",
        },
      ],
    });
  }

	const windowWidth = $(window).width();

	$(window).resize(function() {
		if (windowWidth > "768") {
			slicky();
    }
	});

	slicky();

});
