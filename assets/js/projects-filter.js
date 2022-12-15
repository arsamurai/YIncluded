$(document).ready(function () {
  $(".filterCheckBox").on("click", function () {
    let filterValue = $(this).attr("data-filter-value");
		
		// Если filterValue равно 1 (тобиж all, то я показываю все, если не 1, то уже в зависимости от filterValue)
    if (filterValue != 1) {
			$('.projects-page__item').css("display", "none");
      $('div[data-filter-project-id="' + filterValue + '"]')
        .css("display", "flex");
    } else {
      $('.projects-page__item').css("display", "flex");
    }
  });
});
