$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");
	$('.js-home-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		//autoplaySpeed: 2000,
		infinite: true,
		arrows: false,
		dots: true,
		fade: true,
		pauseOnHover: false
	});
});