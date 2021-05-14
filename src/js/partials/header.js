$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});

	//console.log(1);
	var headerStatus = 'default'; // default  |  fixed  |  absolute_before_header2
	var shScrolled = false;
	var topBtnShow = false;
	var mainHeaderH = $('#site-header').height();
	var hasHeader2 = $('#js-header-2').length > 0;
	var header2TopInStatic;
	var header2pev;

	if (hasHeader2) {
		header2pev = $('#js-header-2').prev();
		header2TopInStatic = header2pev.offset().top + header2pev.height();
	}

	$(window).on('resize', function () {
		mainHeaderH = $('#site-header').height();
		if (hasHeader2) {
			//header2pev = $('#js-header-2').prev();
			header2TopInStatic = header2pev.offset().top + header2pev.height();
		}
	});

	$('#js-header-2').prev().offset();

	$(window).scroll(function () {
		/* Кнопка вверх */
		if (window.scrollY > window.innerHeight) {
			if (!topBtnShow) {
				$('#top-btn').addClass('top-btn--show');
				topBtnShow = true;
			}
		} else {
			if (topBtnShow) {
				$('#top-btn').removeClass('top-btn--show');
				topBtnShow = false;
			}
		}

		if (!hasHeader2) { //Header только один, обрабатываем стандартную ситуацию
			if (window.scrollY > 30) {
				if (!shScrolled) {
					$('#site-header:not(.site-header--static)').addClass('sh-fixed sh-scrolled');
					shScrolled = true;
				}
			} else {
				if (shScrolled) {
					$('#site-header:not(.site-header--static)').removeClass('sh-fixed sh-scrolled');
					shScrolled = false;
				}
			}
		} else { //Есть дополнительная плавающая шапка с position sticky

			/*switch (headerStatus) {
				case 'default':
					break;
				case 'fixed':
					break;
				case 'absolute_before_header2':
					break;
			}*/

			if (window.scrollY > 30) {
				if (window.scrollY>= header2TopInStatic-mainHeaderH) {
					if (headerStatus !== 'absolute_before_header2') {
						//$('#site-header').removeClass('sh-scrolled');
						$('#site-header').attr('style', 'position: absolute !important; top: ' + Math.ceil(header2TopInStatic-mainHeaderH+1) + 'px !important');
						headerStatus = 'absolute_before_header2';
					}



				} else {
					if (headerStatus !== 'fixed') {
						$('#site-header').css({
							'position': '',
							'top': ''
						})
						$('#site-header').addClass('sh-fixed sh-scrolled');
						headerStatus = 'fixed';
					}
				}

			} else {
				if (headerStatus !== 'default') {
					$('#site-header').css({
						'position': '',
						'top': ''
					})
					$('#site-header').removeClass('sh-fixed sh-scrolled');
					headerStatus = 'default';
				}
			}


		}

	});
});