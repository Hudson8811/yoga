/**
 *  Функция инициализации слайдеров на странице музыка. Нужна для удобной повторной инициализации после смены таба
 *
 * @param  {} tabJq jquery элемент открываемого таба. Если инициализация первичная, можно передать false
 */
function instaSlidersInit(tabJq) {

	var instaSlider;
	if (tabJq !== false) {
		instaSlider = tabJq.find('.js-insta-slider:not(.slick-slider)');
	} else {
		instaSlider = $('.js-insta-slider');
	}
	if (instaSlider.length > 0) {
		instaSlider.slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: slickSpeedMain,
			touchMove: false,
			pauseOnHover: false,
			prevArrow: '<div class="customized-arrow insta-slider-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			nextArrow: '<div class="customized-arrow insta-slider-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			arrows: true,
			dots: false,
			responsive: [{
				breakpoint: 1150,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 749,
				settings: {
					slidesToShow: 1,
					variableWidth: true
				}
			}]
		});
	}
}
function musicPageSlidersInit(tabJq) {

	var releaseSlider;
	if (tabJq !== false) {
		releaseSlider = tabJq.find('.js-release-slider:not(.slick-slider)');
	} else {
		releaseSlider = $('.js-release-slider');
	}

	if (releaseSlider.length > 0) {
		releaseSlider.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: slickSpeedMain * 3,
			touchMove: false,


			touchMove: false,
			pauseOnHover: false,
			prevArrow: '<div class="customized-arrow release-slider-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			nextArrow: '<div class="customized-arrow release-slider-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			arrows: true,
			dots: true,
			responsive: [{
				breakpoint: 1150,
				settings: {
					speed: slickSpeedMain * 2,
				}
			}, {
				breakpoint: 749,
				settings: {
					speed: slickSpeedMain,
					variableWidth: true
				}
			}]
		});
	}


	var albumsSlider;
	if (tabJq !== false) {
		albumsSlider = tabJq.find('.js-albums-slider:not(.slick-slider)');
	} else {
		albumsSlider = $('.js-albums-slider').not('.slick-initialized');
	}
	if (albumsSlider.length > 0) {
		albumsSlider.slick({
			infinite: true,
			speed: slickSpeedMain * 3,
			touchMove: false,
			pauseOnHover: false,
			prevArrow: '<div class="customized-arrow albums-section-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			nextArrow: '<div class="customized-arrow albums-section-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			arrows: true,
			dots: false,
			slidesToScroll: 2,
			slidesToShow: 2,
			variableWidth: true,
			responsive: [{
				breakpoint: 1150,
				settings: {
					speed: slickSpeedMain,
					arrows: false,
					dots: false,
					slidesToScroll: 2,
					slidesToShow: 2,
					variableWidth: true
				}
			}, {
				breakpoint: 749,
				settings: {
					speed: slickSpeedMain,
					slidesToScroll: 1,
					slidesToShow: 1,
					arrows: false,
					dots: false,
					variableWidth: true
				}
			}]
		});
	}
	/* Инициализация инста слайдера перенесена в функцию instaSlidersInit ибо его в первый раз надо инициализировать с задержкой*/
}
/**
 * ОТключаем слайдеры со страницы музыка
 *
 * @param  {} tabJq jquery элемент открываемого таба. Если отключаем безотносительно таба, то можно передать false
 */
function musicPageSlidersDisable(tabJq) {
	var sliders;
	if (tabJq !== false) {
		sliders = tabJq.find('.js-release-slider.slick-slider, .js-albums-slider.slick-slider, .js-insta-slider.slick-slider');
	} else {
		sliders = $('.js-release-slider.slick-slider, .js-albums-slider.slick-slider, .js-insta-slider.slick-slider');
	}
	sliders.slick('unslick');
}

var $docEl = $('body'),
	$wrap = $('.main'),
	scrollTop;

$.lockBody = function () {
	/*if (window.pageYOffset) {
		scrollTop = window.pageYOffset;

		$wrap.css({
			position: 'relative',
			top: -(scrollTop)
		});
	}*/

	$docEl.css({
		//height: "100%",
		overflow: "hidden"
	});
}

$.unlockBody = function () {
	$docEl.css({
		height: "",
		overflow: ""
	});

	/*$wrap.css({
		position: '',
		top: ''
	});

	window.scrollTo(0, scrollTop);
	window.setTimeout(function () {
		scrollTop = null;
	}, 10);*/
}

function closeAlbumModal() {
	setTimeout(function () {
		$('body').removeClass('body-open-album-modal');
		setTimeout(function () {
			$.unlockBody();
			$('body').css('margin-right', '');
			$('#music-modal-bg').removeClass('music-modal-bg--z1000');
			$('#site-header').css({
				opacity: '1'});
		}, 650);
		setTimeout(function () {
			$('#music-modal-bg .component-hide-block-wrap--open').removeClass('component-hide-block-wrap--open')
				.find('.component-hide-block').css({
					WebkitTransition: 'max-height 0s linear, height 0s linear',
					MozTransition: 'max-height 0s linear, height 0s linear',
					MsTransition: 'max-height 0s linear, height 0s linear',
					OTransition: 'max-height 0s linear, height 0s linear',
					transition: 'max-height 0s linear, height 0s linear'
				});
			$('#music-modal-bg .js-component-hide-unwrap').removeClass('kspc-twpah-unwrap--hide');

			setTimeout(function () {
				$('#music-modal-bg .component-hide-block').css({
					WebkitTransition: '',
					MozTransition: '',
					MsTransition: '',
					OTransition: '',
					transition: ''
				});
			}, 300);
		}, 300);
	}, 50);


}

function openAlbumModal() {
	$('#music-modal-bg').addClass('music-modal-bg--z1000');
	$('#site-header').css('opacity', '0');
	$.lockBody();
	$('body').css('margin-right', scrollBarWidth + 'px');
	setTimeout(function () {
		$('body').addClass('body-open-album-modal');
	}, 200);

}
var scrollBarWidth;
function calcScrollBarWidth() {
	// создадим элемент с прокруткой
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	// мы должны вставить элемент в документ, иначе размеры будут равны 0
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	scrollBarWidth = scrollWidth;
}

$(document).ready(function () {
	calcScrollBarWidth();
	$('body').on('click', '.js-component-hide-unwrap', function () {
		$(this).addClass('kspc-twpah-unwrap--hide').closest('.component-hide-block-wrap').addClass('component-hide-block-wrap--open');
	});

	musicPageSlidersInit(false);

	setTimeout(function () {
		instaSlidersInit(false);
	}, 2500);


	$('body').on('click', '.js-open-album-modal,[href="#js-open-album-modal"]', function (e) {
		e.preventDefault();


		$('#music-modal__pic img').attr('src', $(this).attr('data-image-src'));
		$('#music-modal-bg').css('background-image', 'url(' + $(this).attr('data-image-src') + ')');



		$('#music-modal__title').html($(this).attr('data-title'));

		$('#music-modal__description-container').html($(this).closest('.release-slide, .albums-slide').find('.js-open-album-modal-hidden').find('.open-album-modal-hidden__description').html());
		$('#music-modal-services').html($(this).closest('.release-slide, .albums-slide').find('.js-open-album-modal-hidden').find('.open-album-modal-hidden__socials').html());

		let moreX = $(this).data('moreX');
		if (moreX){
			$('#music-modal .kspc-twpah-unwrap').removeClass().addClass('kspc-twpah-unwrap js-component-hide-unwrap '+moreX);
		}

		openAlbumModal();
	});

	$('#music-modal-bg').click(function (e) {
		if (e.target.id === 'music-modal-bg' || e.target.parentElement.id === 'music-modal-bg') {
			e.preventDefault();
			closeAlbumModal();

		}
	});
	$('.music-modal-close').click(function (e) {
		e.preventDefault();
		closeAlbumModal();
	});
	/*$('#music-modal-bg').click(function (e) {
			e.preventDefault();
			closeAlbumModal();
		}).children()
		.click(function (e) { // вешаем на потомков
			e.stopPropagation(); // предотвращаем всплытие
		});*/


});