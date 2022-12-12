$(document).ready(function () {

	$('#burger').on('click', function () {
		$('#sidebar').toggleClass('active')
		$(this).toggleClass('active')
	});

	$('#filter-btn').on('click', function () {
		$('.filter').addClass('active')
	});

	$('#filter-close').on('click', function () {
		$('.filter').removeClass('active')
	});

	$('.tabs__item').on("click", function (e) {
		e.preventDefault();
		
		$('.tabs__item').removeClass('tabs__item-active');
		$('.tabs__block').removeClass('tabs__block-active');

		$(this).addClass('tabs__item-active');
		$($(this).attr('href')).addClass('tabs__block-active');
	});

	$('#gallery__slider').slick({infinite: false});
	$('#events__slider').slick({infinite: false});
	
})