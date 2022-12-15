$(document).ready(function () {
  $(".filterCheckBox").on("click", function () {
    let filterValue = $(this).attr("data-filter-value");
		
    if (filterValue != 1) {
			$('.gallery__album').css("display", "none");
      $('a[data-filter-project-id="' + filterValue + '"]')
        .css("display", "block");
    } else {
      $('.gallery__album').css("display", "block");
    }
  });
});
