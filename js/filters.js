$(document).ready(function () {
  let filters = {};

  $(".filterCheckBox").on("change", function () {
    let filterName = $(this).attr("data-filter-name");
    let filterValue = $(this).attr("data-filter-value");

    if ($(this).is(":checked")) {
      // filters[filterName] = filterValue
      $("a[data-filter-" + filterName + '="' + filterValue + '"]')
        .parent()
        .css("display", "grid");
    } else {
      // delete filters[filterName]
      $("a[data-filter-" + filterName + '="' + filterValue + '"]')
        .parent()
        .css("display", "none");
    }
  });
});
