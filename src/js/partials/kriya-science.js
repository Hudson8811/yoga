
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
				backFocus: false,
				loop: true
			}, slider.slick("slickCurrentSlide"));

		}
	}




	myCustomClickWorker1 = new ClickOrSwipeListener('.js-kspc-slider', openFancyFromSlider, openFancyFromSlider, function () {});

});