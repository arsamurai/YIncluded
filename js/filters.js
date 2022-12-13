$(document).ready(function () {
  let filters = {};

  $(".filterCheckBox").on("change", function () {
    let filterName = $(this).attr("data-filter-name");
    let filterValue = $(this).attr("data-filter-value");

    if ($(this).is(":checked")) {
      $("a[data-filter-" + filterName + '="' + filterValue + '"]')
        .css("display", "block");
    } else {
      $("a[data-filter-" + filterName + '="' + filterValue + '"]')
        .css("display", "none");
    }
  });
});
