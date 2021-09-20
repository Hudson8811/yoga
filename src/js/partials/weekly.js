//вынес в additional.js

document.addEventListener("DOMContentLoaded", () => {
	jQuery('.part-wsidebar__sidebar ').theiaStickySidebar({
		additionalMarginTop: 30,
		additionalMarginBottom: -30,
	});

	$('body').on('click','.js-weekly-event__unwrap-tablet', function(){
		$(this).addClass('weekly-event__unwrap-tablet--hidden').siblings('.js-text-wrapped').find('.js-text-unwrapper').click();
	});



});
