


$(document).ready(function () {
	$('.js-kspc-qa .kspc-qa-item__top').click(function () {
		$item = $(this).closest('.kspc-qa-item');
		if ($item.hasClass('kspc-qa-item--open')) {

			$item.removeClass('kspc-qa-item--open').siblings('');
			var content = $item.find('.kspc-qa-item__content');
			content.slideUp(600, function () {
				content.attr('style', '');
			});
		} else {
			$('.kspc-qa-item--open').removeClass('kspc-qa-item--open').find('.kspc-qa-item__content').slideUp(600, function () {
				$(this).attr('style', '');
			});
			$item.addClass('kspc-qa-item--open');
			var content = $item.find('.kspc-qa-item__content');

			content.slideDown(600, function () {});

		}
	});



	$('body').on('click', '.js-review-unwrap', function () {
		$(this).addClass('kspc-twpah-unwrap--hide').closest('.reviews-item__text').addClass('reviews-item__text--open');
	});




});

