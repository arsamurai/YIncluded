$(document).ready(function () {
  $(".filterCheckBox").on("click", function () {
    let filterValue = $(this).attr("data-filter-value");
		
    if (filterValue != 1) {
			$('.news-page__item').css("display", "none");
      $('div[data-filter-project-id="' + filterValue + '"]')
        .css("display", "flex");
    } else {
      $('.news-page__item').css("display", "flex");
    }
  });
});
