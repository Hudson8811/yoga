
function kspcSlidersInit(tabJq) {

	//console.log('kspcSLICK');
	var kaspcSlider;
	if (tabJq !== false) {
		kaspcSlider = tabJq.find('.js-kspc-slider:not(.slick-slider)');
	} else {
		kaspcSlider = $('.js-kspc-slider');
	}

	if (kaspcSlider.length > 0) {
		kaspcSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			//dots: true,
			speed: slickSpeedMain * 2,
			touchMove: false,
			pauseOnHover: false,
			prevArrow: '<div class="customized-arrow kspc-slider-arrow customized-arrow--prev"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			nextArrow: '<div class="customized-arrow kspc-slider-arrow customized-arrow--next"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8233 12.3152L2.36163 22.207C2.17645 22.4015 1.93262 22.5232 1.67146 22.5513C1.4103 22.5794 1.14788 22.5122 0.928673 22.3612L0.76009 22.207L0.612583 22.0307C0.48937 21.8385 0.423584 21.6122 0.423584 21.3808C0.423584 21.1494 0.48937 20.9232 0.612583 20.7309L0.76009 20.5547C0.805954 20.4921 0.863259 20.4397 0.928673 20.4004L8.64132 12.3152C8.84273 12.0873 8.95459 11.7884 8.95459 11.478C8.95459 11.1677 8.84273 10.8688 8.64132 10.6409L0.928673 2.59969L0.76009 2.35735C0.60781 2.1611 0.524704 1.91608 0.524704 1.66338C0.524704 1.41068 0.60781 1.16566 0.76009 0.969418L0.9076 0.793172L1.07618 0.638958C1.26331 0.508244 1.48331 0.438477 1.70837 0.438477C1.93342 0.438477 2.15342 0.508244 2.34055 0.638958L2.50914 0.793172L11.1911 9.84777L11.9708 10.6849C12.1458 10.9267 12.2277 11.2283 12.2004 11.5301C12.173 11.8319 12.0385 12.112 11.8233 12.3152Z" fill="#AFB4BF"/></svg></div>',
			responsive: [{
				breakpoint: 1150,
				settings: {
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 749,
				settings: {
					arrows: false,
					dots: true,
					speed: slickSpeedMain
				}
			}
			]
		});
	}
	//console.log('kspcSLICKEnd');
	AOS.refresh();
}


$(document).ready(function () {

	kspcSlidersInit(false);


	$('.js-kspc-twpah-unwrap').click(function () {
		$(this).addClass('kspc-twpah-unwrap--hide').closest('.kspc-twpah').addClass('kspc-twpah--open');
	});


	$('.js-simple-text-unwrap').click(function () {
		$(this).addClass('kspc-twpah-unwrap--hide').closest('.kspc-simple-text').addClass('kspc-simple-text--open');
	});




	function openFancyFromSlider(e) {
		var $this = $(e.target);
		if ($this.is('.slick-slide') || $this.closest('.slick-slide').length > 0) {

			var slider = $(e.target).closest('.js-kspc-slider');
			console.log('>0');

			var slides = slider.find('.js-open-fancy-slide:not(.slick-cloned)');


			var slidesHrefs = [];
			slides.each(function () {

				slidesHrefs.push({
					src: $(this).attr('data-href')
				});
			})


			//вызывается элемент галереи, соответствующий индексу слайда
			$.fancybox.open(slidesHrefs, {
				speed : 600,
				transitionDuration: 700,
				backFocus: false,
				loop: true,
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
				afterShow: function( instance, slide) {
					if ($(slide.$slide[0]).hasClass('fancybox-slide--video')){
						$(slide.$slide[0]).find('.fancybox-content').addClass('video-init');
					}
				}
			}, slider.slick("slickCurrentSlide"));

		}
	}




	myCustomClickWorker1 = new ClickOrSwipeListener('.js-kspc-slider', openFancyFromSlider, openFancyFromSlider, function () { });

});