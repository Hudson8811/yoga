var slickSpeedMain = 700;

function dataFancyInit() {
	$('[data-fancybox]').fancybox({
		speed: 600,
		transitionDuration: 700,
		backFocus: false,
		buttons: ['close'],
		slideShow: {
			autoStart: false,
			speed: 3000
		},
		btnTpl: {
			slideShow: '<button data-fancybox-play class="fancybox-custom-play-btn" title="Start slideshow"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="17.97" height="25.14" viewBox="0 0 17.97 25.14"><defs><style>.cls-1{fill:#afb4c0;}</style></defs><path class="cls-1" d="M432.53,438.85v23a1.08,1.08,0,0,0,1.71.87l15.82-11.5a1.08,1.08,0,0,0,0-1.74L434.24,438A1.07,1.07,0,0,0,432.53,438.85Z" transform="translate(-432.53 -437.77)"/></svg><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="16.04" height="26" viewBox="0 0 16.04 26"><defs><style>.cls-1{fill:#afb4c0;}</style></defs><path class="cls-1" d="M399.63,437.5a1,1,0,0,0-1,1v24a1,1,0,0,0,2,0v-24A1,1,0,0,0,399.63,437.5Z" transform="translate(-398.63 -437.5)"/><path class="cls-1" d="M413.67,437.5a1,1,0,0,0-1,1v24a1,1,0,0,0,2,0v-24A1,1,0,0,0,413.67,437.5Z" transform="translate(-398.63 -437.5)"/></svg></button>',
			close: '<button data-fancybox-close class="custom-fancybox-close" title="{{CLOSE}}">' +
				'<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0205078" y="1.43506" width="2" height="36" rx="1" transform="rotate(-45 0.0205078 1.43506)" fill="#AFB4BF"/><rect x="1.43555" y="26.8909" width="2" height="36" rx="1" transform="rotate(-135 1.43555 26.8909)" fill="#AFB4BF"/></svg>' +
				"</button>",
			arrowLeft:
				'<button data-fancybox-prev class="fancybox-custom-arrow fancybox-custom-arrow--prev" title="{{PREV}}">' +
				'<div><svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5032 19.2759L3.69361 34.7587C3.40378 35.0633 3.02213 35.2537 2.61335 35.2977C2.20458 35.3416 1.79383 35.2365 1.45073 35.0001L1.18686 34.7587L0.955981 34.4828C0.763125 34.1819 0.660156 33.8278 0.660156 33.4656C0.660156 33.1034 0.763125 32.7493 0.955981 32.4484L1.18686 32.1725C1.25865 32.0745 1.34834 31.9925 1.45073 31.9311L13.5227 19.2759C13.838 18.9192 14.013 18.4513 14.013 17.9656C14.013 17.4799 13.838 17.012 13.5227 16.6552L1.45073 4.06904L1.18686 3.68973C0.94851 3.38256 0.818431 2.99906 0.818431 2.60352C0.818431 2.20799 0.94851 1.82449 1.18686 1.51732L1.41775 1.24146L1.68162 1.00008C1.97451 0.795481 2.31886 0.686279 2.67112 0.686279C3.02338 0.686279 3.36773 0.795481 3.66063 1.00008L3.9245 1.24146L17.5137 15.4139L18.7341 16.7242C19.0079 17.1026 19.1361 17.5746 19.0934 18.047C19.0506 18.5194 18.84 18.9579 18.5032 19.2759Z" fill="#AFB4BF"/></svg></div>' +
				"</button>",


			arrowRight:
				'<button data-fancybox-next class="fancybox-custom-arrow fancybox-custom-arrow--next" title="{{NEXT}}">' +
				'<div><svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5032 19.2759L3.69361 34.7587C3.40378 35.0633 3.02213 35.2537 2.61335 35.2977C2.20458 35.3416 1.79383 35.2365 1.45073 35.0001L1.18686 34.7587L0.955981 34.4828C0.763125 34.1819 0.660156 33.8278 0.660156 33.4656C0.660156 33.1034 0.763125 32.7493 0.955981 32.4484L1.18686 32.1725C1.25865 32.0745 1.34834 31.9925 1.45073 31.9311L13.5227 19.2759C13.838 18.9192 14.013 18.4513 14.013 17.9656C14.013 17.4799 13.838 17.012 13.5227 16.6552L1.45073 4.06904L1.18686 3.68973C0.94851 3.38256 0.818431 2.99906 0.818431 2.60352C0.818431 2.20799 0.94851 1.82449 1.18686 1.51732L1.41775 1.24146L1.68162 1.00008C1.97451 0.795481 2.31886 0.686279 2.67112 0.686279C3.02338 0.686279 3.36773 0.795481 3.66063 1.00008L3.9245 1.24146L17.5137 15.4139L18.7341 16.7242C19.0079 17.1026 19.1361 17.5746 19.0934 18.047C19.0506 18.5194 18.84 18.9579 18.5032 19.2759Z" fill="#AFB4BF"/></svg></div>' +
				"</button>"
		},
		/*afterLoad: function (instance) {
			if (instance.$trigger.attr('ho-sideshow') !== undefined) {
				$('.fancybox-container').addClass('fancy-hide-sideshow');
			}
		},

		afterClose: function (instance) {
			$('.fancybox-container').removeClass('fancy-hide-sideshow');
		}*/
		afterShow: function (instance, slide) {
			if ($(slide.$slide[0]).hasClass('fancybox-slide--video')) {
				$(slide.$slide[0]).find('.fancybox-content').addClass('video-init');
			}
		}
	});

}




$(document).ready(function () {

	dataFancyInit();

	$(document).on('click', 'body [data-fancybox-with-slideshow]', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this);
		var group = $(this).attr('data-fancybox-with-slideshow');

		if (group !== undefined && group !== '') {
			group = '="' + group + '"';
		}
		else {
			group = '';
		}
		var items = $('[data-fancybox-with-slideshow' + group + ']');


		var itemsHrefs = [];
		items.each(function () {

			itemsHrefs.push({
				src: $(this).attr('href')
			});
		});



		//вызывается элемент галереи, соответствующий индексу слайда
		$.fancybox.open(group !== '' ? itemsHrefs : ([{ 'src': $(this).attr('href') }]), {
			speed: 600,
			transitionDuration: 700,
			backFocus: false,
			loop: (group !== '' ? true : false),
			buttons: group === '' ? ['close'] : ["slideShow", 'close'],
			index: group === '' ? false : $this.index('[data-fancybox-with-slideshow' + group + ']'),
			slideShow: {
				autoStart: false,
				speed: 3000
			},
			btnTpl: {
				slideShow: '<button data-fancybox-play class="fancybox-custom-play-btn" title="Start slideshow"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="17.97" height="25.14" viewBox="0 0 17.97 25.14"><defs><style>.cls-1{fill:#afb4c0;}</style></defs><path class="cls-1" d="M432.53,438.85v23a1.08,1.08,0,0,0,1.71.87l15.82-11.5a1.08,1.08,0,0,0,0-1.74L434.24,438A1.07,1.07,0,0,0,432.53,438.85Z" transform="translate(-432.53 -437.77)"/></svg><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="16.04" height="26" viewBox="0 0 16.04 26"><defs><style>.cls-1{fill:#afb4c0;}</style></defs><path class="cls-1" d="M399.63,437.5a1,1,0,0,0-1,1v24a1,1,0,0,0,2,0v-24A1,1,0,0,0,399.63,437.5Z" transform="translate(-398.63 -437.5)"/><path class="cls-1" d="M413.67,437.5a1,1,0,0,0-1,1v24a1,1,0,0,0,2,0v-24A1,1,0,0,0,413.67,437.5Z" transform="translate(-398.63 -437.5)"/></svg></button>',

				close: '<button data-fancybox-close class="custom-fancybox-close" title="{{CLOSE}}">' +
					'<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0205078" y="1.43506" width="2" height="36" rx="1" transform="rotate(-45 0.0205078 1.43506)" fill="#AFB4BF"/><rect x="1.43555" y="26.8909" width="2" height="36" rx="1" transform="rotate(-135 1.43555 26.8909)" fill="#AFB4BF"/></svg>' +
					"</button>",
				arrowLeft:
					'<button data-fancybox-prev class="fancybox-custom-arrow fancybox-custom-arrow--prev" title="{{PREV}}">' +
					'<div><svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5032 19.2759L3.69361 34.7587C3.40378 35.0633 3.02213 35.2537 2.61335 35.2977C2.20458 35.3416 1.79383 35.2365 1.45073 35.0001L1.18686 34.7587L0.955981 34.4828C0.763125 34.1819 0.660156 33.8278 0.660156 33.4656C0.660156 33.1034 0.763125 32.7493 0.955981 32.4484L1.18686 32.1725C1.25865 32.0745 1.34834 31.9925 1.45073 31.9311L13.5227 19.2759C13.838 18.9192 14.013 18.4513 14.013 17.9656C14.013 17.4799 13.838 17.012 13.5227 16.6552L1.45073 4.06904L1.18686 3.68973C0.94851 3.38256 0.818431 2.99906 0.818431 2.60352C0.818431 2.20799 0.94851 1.82449 1.18686 1.51732L1.41775 1.24146L1.68162 1.00008C1.97451 0.795481 2.31886 0.686279 2.67112 0.686279C3.02338 0.686279 3.36773 0.795481 3.66063 1.00008L3.9245 1.24146L17.5137 15.4139L18.7341 16.7242C19.0079 17.1026 19.1361 17.5746 19.0934 18.047C19.0506 18.5194 18.84 18.9579 18.5032 19.2759Z" fill="#AFB4BF"/></svg></div>' +
					"</button>",


				arrowRight:
					'<button data-fancybox-next class="fancybox-custom-arrow fancybox-custom-arrow--next" title="{{NEXT}}">' +
					'<div><svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5032 19.2759L3.69361 34.7587C3.40378 35.0633 3.02213 35.2537 2.61335 35.2977C2.20458 35.3416 1.79383 35.2365 1.45073 35.0001L1.18686 34.7587L0.955981 34.4828C0.763125 34.1819 0.660156 33.8278 0.660156 33.4656C0.660156 33.1034 0.763125 32.7493 0.955981 32.4484L1.18686 32.1725C1.25865 32.0745 1.34834 31.9925 1.45073 31.9311L13.5227 19.2759C13.838 18.9192 14.013 18.4513 14.013 17.9656C14.013 17.4799 13.838 17.012 13.5227 16.6552L1.45073 4.06904L1.18686 3.68973C0.94851 3.38256 0.818431 2.99906 0.818431 2.60352C0.818431 2.20799 0.94851 1.82449 1.18686 1.51732L1.41775 1.24146L1.68162 1.00008C1.97451 0.795481 2.31886 0.686279 2.67112 0.686279C3.02338 0.686279 3.36773 0.795481 3.66063 1.00008L3.9245 1.24146L17.5137 15.4139L18.7341 16.7242C19.0079 17.1026 19.1361 17.5746 19.0934 18.047C19.0506 18.5194 18.84 18.9579 18.5032 19.2759Z" fill="#AFB4BF"/></svg></div>' +
					"</button>"
			},
			afterShow: function (instance, slide) {
				//	instance.jumpTo($this.index('[data-fancybox-with-slideshow' + group + ']'), 0);
			},

			afterShow: function (instance, slide) {
				/*if ($(slide.$slide[0]).hasClass('fancybox-slide--video')) {
					$(slide.$slide[0]).find('.fancybox-content').addClass('video-init');
				}*/
			}
		}/*, slider.slick("slickCurrentSlide")*/);

	});

	autosize($('.js-textarea-autosize'));
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");
	if ($('.js-home-slider').length > 0) {
		$('.js-home-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
			infinite: true,
			arrows: false,
			dots: true,
			fade: true,
			speed: slickSpeedMain,
			touchMove: false,
			pauseOnHover: false
		});
	}
	if ($('.js-hm-events-slider').length > 0) {
		$('.js-hm-events-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			//autoplay: true,
			//autoplaySpeed: 2000,
			infinite: true,
			arrows: true,
			dots: true,
			speed: slickSpeedMain,
			touchMove: false,
			//fade: true,
			pauseOnHover: false,
			prevArrow: '<div class="customized-arrow hm-events-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			nextArrow: '<div class="customized-arrow hm-events-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			responsive: [{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: slickSpeedMain * 2,
				}
			}, {
				breakpoint: 749,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: slickSpeedMain,
					arrows: false,
					dots: false,
					variableWidth: true
				}
			}]
		});
	}



	$('.quotes-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		speed: slickSpeedMain * 3,
		touchMove: false,
		dots: true,
		responsive: [{
			breakpoint: 1150,
			settings: {
				speed: slickSpeedMain * 2,
			}
		}, {
			breakpoint: 749,
			settings: {
				speed: slickSpeedMain
			}
		}]
	});
	$('.hm-feedback-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		speed: slickSpeedMain * 3,
		touchMove: false,
		prevArrow: '<div class="customized-arrow hm-feedback__arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="customized-arrow hm-feedback__arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',


		responsive: [{
			breakpoint: 1150,
			settings: {
				speed: slickSpeedMain * 2,
			}
		}, {
			breakpoint: 749,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: slickSpeedMain,
				arrows: false,
				dots: false,
				variableWidth: true
			}
		}]
	});
	$('.js-slnewsw-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		speed: slickSpeedMain,
		touchMove: false,
		prevArrow: '<div class="slnewsw-arrow slnewsw-arrow--prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54416 27.5 0.500001 21.4558 0.500001 14C0.500002 6.54415 6.54416 0.499998 14 0.499999C21.4558 0.499999 27.5 6.54416 27.5 14Z" fill="white" stroke="#AFB4BF"/><path d="M10.1984 13.0936L15.0137 8.17435C15.1079 8.07759 15.232 8.01709 15.3649 8.00311C15.4978 7.98913 15.6314 8.02254 15.7429 8.09766L15.8287 8.17435L15.9038 8.262C15.9665 8.35761 16 8.47011 16 8.5852C16 8.70029 15.9665 8.81279 15.9038 8.9084L15.8287 8.99605C15.8054 9.02717 15.7762 9.05324 15.7429 9.07274L11.8178 13.0936C11.7104 13.2044 11.6501 13.354 11.6501 13.5099C11.6501 13.6659 11.7104 13.8155 11.8178 13.9263L15.7429 17.969L15.8287 18.0457C15.9044 18.1442 15.9455 18.2657 15.9455 18.3908C15.9455 18.516 15.9044 18.6375 15.8287 18.736L15.7537 18.8236L15.6679 18.9003C15.5726 18.9653 15.4607 19 15.3461 19C15.2316 19 15.1196 18.9653 15.0244 18.9003L14.9386 18.8236L10.5201 14.3207L10.1233 13.9044C10.0318 13.7851 9.98861 13.6345 10.0026 13.4837C10.0165 13.3328 10.0866 13.1932 10.1984 13.0936Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="slnewsw-arrow slnewsw-arrow--next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.499998 14.001C0.499999 6.54513 6.54416 0.500978 14 0.500979C21.4558 0.50098 27.5 6.54514 27.5 14.001C27.5 21.4568 21.4558 27.501 14 27.501C6.54415 27.501 0.499996 21.4568 0.499998 14.001Z" fill="white" stroke="#AFB4BF"/><path d="M17.8016 14.9074L12.9863 19.8266C12.8921 19.9234 12.768 19.9839 12.6351 19.9979C12.5022 20.0118 12.3686 19.9784 12.2571 19.9033L12.1713 19.8266L12.0962 19.739C12.0335 19.6434 12 19.5309 12 19.4158C12 19.3007 12.0335 19.1882 12.0962 19.0926L12.1713 19.0049C12.1946 18.9738 12.2238 18.9477 12.2571 18.9282L16.1822 14.9074C16.2896 14.7966 16.3499 14.647 16.3499 14.491C16.3499 14.3351 16.2896 14.1855 16.1822 14.0747L12.2571 10.0319L12.1713 9.95525C12.0956 9.85682 12.0545 9.73529 12.0545 9.61013C12.0545 9.48498 12.0956 9.36345 12.1713 9.26502L12.2463 9.17737L12.3321 9.10068C12.4274 9.03567 12.5393 9.00098 12.6539 9.00098C12.7684 9.00098 12.8804 9.03567 12.9756 9.10068L13.0614 9.17737L17.4799 13.6803L17.8750 14.0966C17.9682 14.2159 18.0114 14.3664 17.9974 14.5173C17.9835 14.6681 17.9134 14.8078 17.8016 14.9074Z" fill="#AFB4BF"/></svg></div>',
		responsive: [{
			breakpoint: 749,
			settings: {

				prevArrow: '<div class="customized-arrow slnewsw-arrow-mob customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
				nextArrow: '<div class="customized-arrow slnewsw-arrow-mob customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			}
		}]
	});



	$('.sfoo-col__title').click(function () {
		if ((window.matchMedia("(max-width: 1150px)").matches)) {
			$this = $(this);
			if ($this.hasClass('sfoo-col__title--open')) {

				$this.removeClass('sfoo-col__title--open').siblings('');
				var list = $this.next();
				list.slideUp(600, function () {
					list.attr('style', '');
				});
			} else {
				$('.sfoo-col__title--open').removeClass('sfoo-col__title--open').next().slideUp(600, function () {
					$(this).attr('style', '');
				});
				$this.addClass('sfoo-col__title--open');
				var list = $this.next();

				list.slideDown(600, function () { });

			}
		}
	});





	$('.js-maslider').slick({
		centred: true,
		infinite: true,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		speed: slickSpeedMain,
		touchMove: false,
		prevArrow: '<div class="maslider-arrow maslider-arrow--prev"><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.67121 8.18059L2.03952 14.3335C1.92931 14.4545 1.78418 14.5302 1.62873 14.5477C1.47329 14.5652 1.31709 14.5234 1.18662 14.4294L1.08628 14.3335L0.998476 14.2239C0.925139 14.1043 0.885984 13.9636 0.885984 13.8196C0.885984 13.6757 0.925139 13.535 0.998477 13.4154L1.08628 13.3057C1.11357 13.2668 1.14768 13.2342 1.18662 13.2098L5.77725 8.18059C5.90287 8.04202 5.97334 7.85488 5.97334 7.65985C5.97334 7.46482 5.90287 7.27768 5.77725 7.13911L1.18662 2.08248L1.08628 1.98656C0.997781 1.86344 0.949677 1.71143 0.949677 1.55489C0.949677 1.39835 0.997781 1.24634 1.08628 1.12323L1.17408 1.0136L1.27442 0.917672C1.3858 0.836365 1.51675 0.792969 1.6507 0.792969C1.78466 0.792969 1.9156 0.836365 2.02698 0.917673L2.12732 1.0136L7.29493 6.64578L7.759 7.16652C7.86601 7.31568 7.91655 7.50401 7.90021 7.69269C7.88388 7.88136 7.80191 8.056 7.67121 8.18059Z" fill="#AFB4BF"/></svg>		</div>',
		nextArrow: '<div class="maslider-arrow maslider-arrow--next"><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.67121 8.18059L2.03952 14.3335C1.92931 14.4545 1.78418 14.5302 1.62873 14.5477C1.47329 14.5652 1.31709 14.5234 1.18662 14.4294L1.08628 14.3335L0.998476 14.2239C0.925139 14.1043 0.885984 13.9636 0.885984 13.8196C0.885984 13.6757 0.925139 13.535 0.998477 13.4154L1.08628 13.3057C1.11357 13.2668 1.14768 13.2342 1.18662 13.2098L5.77725 8.18059C5.90287 8.04202 5.97334 7.85488 5.97334 7.65985C5.97334 7.46482 5.90287 7.27768 5.77725 7.13911L1.18662 2.08248L1.08628 1.98656C0.997781 1.86344 0.949677 1.71143 0.949677 1.55489C0.949677 1.39835 0.997781 1.24634 1.08628 1.12323L1.17408 1.0136L1.27442 0.917672C1.3858 0.836365 1.51675 0.792969 1.6507 0.792969C1.78466 0.792969 1.9156 0.836365 2.02698 0.917673L2.12732 1.0136L7.29493 6.64578L7.759 7.16652C7.86601 7.31568 7.91655 7.50401 7.90021 7.69269C7.88388 7.88136 7.80191 8.056 7.67121 8.18059Z" fill="#AFB4BF"/></svg>		</div>',
	});




	$('.js-jarallax-1').jarallax({
		speed: 0.6,
		imgWidth: 1920,
		imgHeight: 1862
	})




	$('.js-banner-jarallax-1').jarallax({
		speed: 0.6,
		imgSize: 'cover'
	})


	$(".js-top-btn").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});





	$(".js-top-btn").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});



	$('.js-article-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		speed: slickSpeedMain * 3,
		touchMove: false,
		prevArrow: '<div class="customized-arrow article-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="customized-arrow article-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
		responsive: [{
			breakpoint: 1150,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: false,
				speed: slickSpeedMain,
				/*,
									dots: false,*/
			}
		}
			/*,
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}*/
		]

	});


	$('.js-article-slider--videos').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		dots: true,
		speed: slickSpeedMain * 3,
		touchMove: false,
		prevArrow: '<div class="customized-arrow new-videos-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="customized-arrow new-videos-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
		responsive: [{
			breakpoint: 1150,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: false,
				speed: slickSpeedMain,
				/*,
									dots: false,*/
			}
		}
			/*,
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}*/
		]

	});


	$('.js-article-slider--videos-cat').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		speed: slickSpeedMain * 3,
		touchMove: false,
		prevArrow: '<div class="customized-arrow new-videos-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="customized-arrow new-videos-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
		responsive: [{
			breakpoint: 1150,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: false,
				speed: slickSpeedMain,
				/*,
									dots: false,*/
			}
		}]

	});
/*
	if ($('.js-hm-events-slider').length > 0) {
		$('.js-hm-events-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			//autoplay: true,
			//autoplaySpeed: 2000,
			infinite: true,
			arrows: true,
			dots: true,
			speed: slickSpeedMain,
			touchMove: false,
			//fade: true,
			pauseOnHover: false,
			prevArrow: '<div class="customized-arrow hm-events-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			nextArrow: '<div class="customized-arrow hm-events-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			responsive: [{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: slickSpeedMain * 2,
				}
			}, {
				breakpoint: 749,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: slickSpeedMain
				}
			}]
		});
	}

*/

	$('.js-category-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		variableWidth: false,
		speed: slickSpeedMain * 3,
		touchMove: false,
		prevArrow: '',
		nextArrow: '',
		responsive: [{
			breakpoint: 1150,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				speed: slickSpeedMain,
				arrows: false
				/*,
									dots: false,*/
			}
		}
			/*,
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}*/
		]
	});

	//страница отзывы, слайдер базирующийся на слайдере категорий
	$('.js-category-slider--comments').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		variableWidth: false,
		speed: slickSpeedMain * 3,
		touchMove: false,
		prevArrow: '',
		nextArrow: '',
		responsive: [{
			breakpoint: 1150,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				speed: slickSpeedMain,
				arrows: false
				/*,
									dots: false,*/
			}
		}
			/*,
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}*/
		]
	});


	$('.category-slider-arrow.customized-arrow--prev').on('click', function () {
		$('.js-category-slider, .js-category-slider--comments').slick('slickPrev');
	});
	$('.category-slider-arrow.customized-arrow--next').on('click', function () {
		$('.js-category-slider, .js-category-slider--comments').slick('slickNext');
	});





	$('.video-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		speed: slickSpeedMain,
		touchMove: false,
		prevArrow: '<div class="video-arrow video-arrow--prev"><svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.311766 8.85281L7.87866 0.803123C8.02675 0.644781 8.22175 0.545784 8.43061 0.522913C8.63947 0.50004 8.84935 0.554701 9.02465 0.677628L9.15947 0.803123L9.27744 0.946547C9.37598 1.10301 9.42859 1.28709 9.42859 1.47543C9.42859 1.66376 9.37598 1.84784 9.27744 2.0043L9.15947 2.14773C9.12279 2.19865 9.07697 2.24131 9.02465 2.27322L2.85654 8.85281C2.68775 9.03409 2.59307 9.27893 2.59307 9.53408C2.59307 9.78923 2.68775 10.0341 2.85654 10.2153L9.02465 16.8308L9.15947 16.9563C9.27838 17.1174 9.34301 17.3162 9.34301 17.521C9.34301 17.7258 9.27838 17.9247 9.15947 18.0858L9.0415 18.2292L8.90668 18.3547C8.75703 18.461 8.58108 18.5178 8.4011 18.5178C8.22111 18.5178 8.04517 18.461 7.89551 18.3547L7.76069 18.2292L0.817348 10.8608L0.193797 10.1795C0.0500266 9.98435 -0.0178854 9.73796 0.0040634 9.49112C0.0260122 9.24429 0.136148 9.01582 0.311766 8.85281Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="video-arrow video-arrow--next"><svg width="10" height="19" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"/></svg></div>',
		responsive: [{
			breakpoint: 1150,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				variableWidth: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]

	});


	function ytSlider() {
		$('.js-yt-slider:not(.slick-slider').slick({
			autoplay: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			speed: slickSpeedMain,
			touchMove: false,
			arrows: false
		});
	}

	if (window.matchMedia("(max-width: 749px)").matches) {
		ytSlider();
	}

	$(window).resize(function (e) {
		if (window.matchMedia("(max-width: 749px)").matches) {
			if (!$('.js-yt-slider').hasClass('slick-initialized')) {
				ytSlider();
			}

		} else {
			if ($('.js-yt-slider').hasClass('slick-initialized')) {
				$('.js-yt-slider').slick('unslick');
			}
		}
	});




	AOS.init({
		// Global settings:
		//disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		disable: function () {
			//return (window.matchMedia("(max-width: 1150px)").matches);
			return (window.matchMedia("(max-width: 749px)").matches);
		},
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});



	if ($('.js-cnumber-input').length > 0) {
		$('body').on('click', '.js-cnumber-input__minus', function (e) {
			e.preventDefault();
			if ($(this).closest('.support-block-card').length > 0) {

				var singlePrice = parseInt($(this).closest('.support-block-card').attr('data-single-price'));
				var inp = $(this).closest('.js-cnumber-input').find('.cnumber-input__inp');
				var val = parseInt(inp.val());
				inp.val(val > 1 ? val - 1 : 1);
				$(this).closest('.support-block-card').find('.support-block-card__price span').html((singlePrice * parseInt(inp.val())).toLocaleString('ru'));
			}
			else if ($(this).closest('.support-modal').length > 0) {
				var modal = $(this).closest('.support-modal');
				var card = $('#' + modal.attr('data-card-id'));

				var singlePrice = parseInt(card.attr('data-single-price'));

				var inp = modal.find('.cnumber-input__inp');
				var val = parseInt(inp.val());
				inp.val(val > 1 ? val - 1 : 1);

				modal.find('.support-modal-top__price span').html((singlePrice * parseInt(inp.val())).toLocaleString('ru'));

				card.find('.cnumber-input__inp').val(inp.val());
				card.find('.support-block-card__price span').html((singlePrice * parseInt(inp.val())).toLocaleString('ru'));


			}
			else {
				var inp = $(this).closest('.js-cnumber-input').find('.cnumber-input__inp');
				var val = parseInt(inp.val());
				inp.val(val > 1 ? val - 1 : 1);
			}
		})
		$('body').on('click', '.js-cnumber-input__plus', function (e) {
			e.preventDefault();
			if ($(this).closest('.support-block-card').length > 0) {
				var singlePrice = parseInt($(this).closest('.support-block-card').attr('data-single-price'));
				var inp = $(this).closest('.js-cnumber-input').find('.cnumber-input__inp');
				var val = parseInt(inp.val());
				inp.val(val + 1);
				$(this).closest('.support-block-card').find('.support-block-card__price span').html((singlePrice * parseInt(inp.val())).toLocaleString('ru'));
			}
			else if ($(this).closest('.support-modal').length > 0) {
				var modal = $(this).closest('.support-modal');
				var card = $('#' + modal.attr('data-card-id'));

				var singlePrice = parseInt(card.attr('data-single-price'));

				var inp = modal.find('.cnumber-input__inp');
				var val = parseInt(inp.val());
				inp.val(val + 1);

				modal.find('.support-modal-top__price span').html((singlePrice * parseInt(inp.val())).toLocaleString('ru'));

				card.find('.cnumber-input__inp').val(inp.val());
				card.find('.support-block-card__price span').html((singlePrice * parseInt(inp.val())).toLocaleString('ru'));

			}
			else {
				var inp = $(this).closest('.js-cnumber-input').find('.cnumber-input__inp');
				var val = parseInt(inp.val());
				inp.val(val + 1);
			}

		})
	}







	setTimeout(function () {
		AOS.refresh();
	}, 2000);
	setTimeout(function () {
		AOS.refresh();
	}, 5000);
	setTimeout(function () {
		AOS.refresh();
	}, 10000);

	$('.js-course-modal, a[href="#js-course-modal"]').click(function () {
		$.fancybox.open({
			src: '#course-modal',
			type: 'inline',
			opts: {
				//speed: 600,
				//transitionDuration: 700,
				backFocus: false,
				buttons: ['close'],
				btnTpl: {
					close: '<button data-fancybox-close class="custom-fancybox-close custom-fancybox-close--course-modal" title="{{CLOSE}}">' +
						'<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0205078" y="1.43506" width="2" height="36" rx="1" transform="rotate(-45 0.0205078 1.43506)" fill="#AFB4BF"/><rect x="1.43555" y="26.8909" width="2" height="36" rx="1" transform="rotate(-135 1.43555 26.8909)" fill="#AFB4BF"/></svg>' +
						"</button>"

				},
				baseClass: 'fancybox-support-modal fancybox-support-modal--course',
				touch: false,

				afterShow: function (instance, slide) {

				}
			}


		});
	});
});


function openThanksModal() {

	$.fancybox.open({
		src: '#thanks-modal',
		type: 'inline',
		opts: {
			//speed: 600,
			//transitionDuration: 700,
			backFocus: false,
			buttons: ['close'],
			btnTpl: {
				close: '<button data-fancybox-close class="custom-fancybox-close custom-fancybox-close--thanks" title="{{CLOSE}}">' +
					'<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0205078" y="1.43506" width="2" height="36" rx="1" transform="rotate(-45 0.0205078 1.43506)" fill="#AFB4BF"/><rect x="1.43555" y="26.8909" width="2" height="36" rx="1" transform="rotate(-135 1.43555 26.8909)" fill="#AFB4BF"/></svg>' +
					"</button>"

			},
			baseClass: 'fancybox-support-modal',
			touch: false,

			afterShow: function (instance, slide) {

			}
		}


	});
}