$(document).ready(function () {

	// Burger
  $("#burger").on("click", function () {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });

	// Filter
  $("#filter-btn").on("click", function () {
    $(".filter").addClass("active");
  });

  $("#filter-close").on("click", function () {
    $(".filter").removeClass("active");
  });

	$('.projects__filter-item').on("click", function() {
		$('.projects__filter-item').removeClass("active");
		$(this).addClass("active");
	});


	// Tabs
  $(".tabs__item").on("click", function (e) {
    e.preventDefault();

    $(".tabs__item").removeClass("tabs__item-active");
    $(".tabs__block").removeClass("tabs__block-active");

    $(this).addClass("tabs__item-active");
    $($(this).attr("href")).addClass("tabs__block-active");
  });

	// Slider
  $("#gallery__slider").slick({ infinite: false });
  $("#events__slider").slick({ infinite: false });
  $("#network__team-slider").slick({
    infinite: false,
    slidesToShow: 4,
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
});
