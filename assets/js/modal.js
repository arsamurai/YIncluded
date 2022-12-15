$(document).ready(function () {
  let mobile = false;

  function windowSize() {
    if ($(window).width() <= "991") {
      mobile = true;
    } else {
      mobile = false;
    }
  }

  $(window).resize(windowSize);
  $(window).on("load resize", windowSize);

  $(".team__item").on("click", function (e) {
    if (!mobile) {
      e.preventDefault();
      $(".network__person").addClass("active");
    }
  });

  $(".lecturers__item").on("click", function (e) {
    if (!mobile) {
      console.log("sdsd");
      e.preventDefault();
      $(".network__person").addClass("active");
    }
  });

  $(document).on("click", function (e) {
    if ($(".network__person").is(e.target))
      $(".network__person").removeClass("active");
  });
});
