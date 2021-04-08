var slickSpeedMain = 700;
$(document).ready(function () {

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
			prevArrow: '<div class="hm-events-arrow hm-events-arrow--prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"></path></svg></div>',
			nextArrow: '<div class="hm-events-arrow hm-events-arrow--next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"></path></svg></div>',
			responsive: [{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: slickSpeedMain * 2,
				}
			}, {
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: slickSpeedMain
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
			breakpoint: 750,
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
		prevArrow: '<div class="hm-feedback__arrow hm-feedback__arrow--prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"></path></svg></div>',
		nextArrow: '<div class="hm-feedback__arrow hm-feedback__arrow--next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"></path></svg></div>',


		responsive: [{
			breakpoint: 1150,
			settings: {
				speed: slickSpeedMain * 2,
			}
		}, {
			breakpoint: 750,
			settings: {
				speed: slickSpeedMain
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

				list.slideDown(600, function () {});

			}
		}
	});



	var tippyIsShow = false;
	tippyTitle = "Поделиться"; //Не забыть сделать мультиязычным
	tippy(document.querySelectorAll('.js-share'), {
		theme: 'custom-share',

		content(reference) {
			return ('<div class="share-tip__inner"><div class="share-tip__title">' + tippyTitle + '</div><div class="share-tip__links"> ' +
				'  <a href="http://www.facebook.com/sharer.php?u=' + encodeURI(reference.getAttribute('data-url')) + '&title=' + encodeURI(reference.getAttribute('data-title')) + '&description=' + encodeURI(reference.getAttribute('data-description')) + '&picture=' + encodeURI(reference.getAttribute('data-picture')) + '" onclick="window.open(this.href, this.title, \'toolbar=0, status=0, width=548, height=325\'); return false" target="_parent"  class="share-tip__link share-tip__link--fb"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.26367 9.68701L9.72852 6.63232H6.77344V4.64014C6.77344 3.77686 7.17188 2.97998 8.5 2.97998H9.86133V0.356934C9.86133 0.356934 8.63281 0.124512 7.4707 0.124512C5.04688 0.124512 3.45312 1.61865 3.45312 4.2749V6.63232H0.730469V9.68701H3.45312V17.1245H6.77344V9.68701H9.26367Z" fill="#6974A9"/></svg></a> ' +

				'<a  href="http://vkontakte.ru/share.php?url=' + encodeURI(reference.getAttribute('data-url')) + '&title=' + encodeURI(reference.getAttribute('data-title')) + '&description=' + encodeURI(reference.getAttribute('data-description')) + '&image=' + encodeURI(reference.getAttribute('data-picture')) + '&noparse=true" onclick="window.open(this.href, this.title, \'toolbar=0, status=0, width=548, height=325\'); return false" title="VK" target="_parent"  class="share-tip__link  share-tip__link--vk"><svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0957 1.04248C18.1953 0.644043 18.0957 0.312012 17.498 0.312012H15.5391C15.041 0.312012 14.8086 0.577637 14.6758 0.876465C14.6758 0.876465 13.6797 3.30029 12.2852 4.89404C11.8203 5.32568 11.6211 5.4917 11.3555 5.4917C11.2559 5.4917 11.0566 5.32568 11.0566 4.92725V1.04248C11.0566 0.544434 10.9238 0.312012 10.4922 0.312012H7.4375C7.10547 0.312012 6.93945 0.544434 6.93945 0.776855C6.93945 1.2417 7.63672 1.34131 7.70312 2.66943V5.55811C7.70312 6.18896 7.60352 6.32178 7.33789 6.32178C6.67383 6.32178 5.08008 3.86475 4.11719 1.07568C3.91797 0.544434 3.71875 0.312012 3.2207 0.312012H1.26172C0.730469 0.312012 0.597656 0.577637 0.597656 0.876465C0.597656 1.40771 1.26172 3.96436 3.68555 7.38428C5.3125 9.7085 7.60352 10.937 9.66211 10.937C10.8906 10.937 11.0566 10.6714 11.0566 10.2065C11.0566 7.98193 10.957 7.74951 11.5547 7.74951C11.8535 7.74951 12.3516 7.91553 13.5137 9.04443C14.8418 10.3726 15.0742 10.937 15.8047 10.937H17.7637C18.3281 10.937 18.5938 10.6714 18.4277 10.1069C18.0625 8.97803 15.5723 6.5874 15.4395 6.42139C15.1406 6.05615 15.2402 5.89014 15.4395 5.55811C15.4395 5.55811 17.8301 2.17139 18.0957 1.04248Z" fill="#6974A9"/></svg></a>' +

				'  <a href="https://telegram.me/share/url?url=' + encodeURI(reference.getAttribute('data-url')) + '&text=' + encodeURI(reference.getAttribute('data-title')) + '" onclick="window.open(this.href, this.title, \'toolbar=0, status=0, width=548, height=325\'); return false" target="_parent"  class="share-tip__link share-tip__link--tg"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6797 1.72998C16.8906 0.745605 16.3281 0.358887 15.6953 0.60498L1.70312 5.98389C0.753906 6.37061 0.789062 6.89795 1.5625 7.14404L5.11328 8.23389L13.4102 3.03076C13.7969 2.74951 14.1836 2.92529 13.8672 3.17139L7.15234 9.21826L6.90625 12.9097C7.29297 12.9097 7.43359 12.769 7.64453 12.5581L9.36719 10.8706L12.9883 13.5425C13.6562 13.9292 14.1484 13.7183 14.3242 12.9448L16.6797 1.72998Z" fill="#6974A9"/></svg></a> ' +

				'  <a href="https://wa.me/?text=' + encodeURI(reference.getAttribute('data-url')) + '" onclick="window.open(this.href, this.title, \'toolbar=0, status=0, width=548, height=325\'); return false" target="_parent"  class="share-tip__link share-tip__link--wp"><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8125 3.59326C15.8906 1.62451 13.2656 0.499512 10.4531 0.499512C4.73438 0.499512 0.046875 5.18701 0.046875 10.9058C0.046875 12.7808 0.5625 14.562 1.45312 16.1089L0 21.4995L5.48438 20.0933C7.03125 20.8901 8.71875 21.3589 10.4531 21.3589C16.2188 21.3589 21 16.6714 21 10.9526C21 8.14014 19.7812 5.56201 17.8125 3.59326ZM10.4531 19.5776C8.90625 19.5776 7.40625 19.1558 6.04688 18.3589L5.76562 18.1714L2.48438 19.062L3.375 15.8745L3.14062 15.5464C2.29688 14.1401 1.82812 12.5464 1.82812 10.9058C1.82812 6.17139 5.71875 2.28076 10.5 2.28076C12.7969 2.28076 14.9531 3.17139 16.5938 4.81201C18.2344 6.45264 19.2188 8.60889 19.2188 10.9526C19.2188 15.687 15.2344 19.5776 10.4531 19.5776ZM15.2344 13.1089C14.9531 12.9683 13.6875 12.3589 13.4531 12.2651C13.2188 12.1714 13.0312 12.1245 12.8438 12.4058C12.7031 12.6401 12.1875 13.2495 12.0469 13.437C11.8594 13.5776 11.7188 13.6245 11.4844 13.4839C9.9375 12.7339 8.95312 12.1245 7.92188 10.3901C7.64062 9.92139 8.20312 9.96826 8.67188 8.98389C8.76562 8.79639 8.71875 8.65576 8.67188 8.51514C8.625 8.37451 8.0625 7.10889 7.875 6.59326C7.64062 6.07764 7.45312 6.12451 7.26562 6.12451C7.125 6.12451 6.9375 6.12451 6.79688 6.12451C6.60938 6.12451 6.32812 6.17139 6.09375 6.45264C5.85938 6.73389 5.20312 7.34326 5.20312 8.60889C5.20312 9.92139 6.09375 11.1401 6.23438 11.3276C6.375 11.4683 8.0625 14.0933 10.6875 15.2183C12.3281 15.9683 12.9844 16.0151 13.8281 15.8745C14.2969 15.8276 15.3281 15.2651 15.5625 14.6558C15.7969 14.0464 15.7969 13.5308 15.7031 13.437C15.6562 13.2964 15.4688 13.2495 15.2344 13.1089Z" fill="#6974A9"/></svg></a> ' + '</div></div>');
		},




		allowHTML: true,
		interactive: true,
		//delay: [100, 9999999],
		placement: 'bottom',
		delay: [0, 500],
		boundary: 'viewport',
		trigger: 'click',
		//sticky: true,
		//hideOnClick: false,
		offset: [0, 15],
		appendTo: $('body')[0],
		moveTransition: 'transform 0.2s ease-out',
		popperOptions: {
			placement: 'bottom',
			modifiers: [{
				name: 'flip',
				options: {
					fallbackPlacements: [],
				},
			}],
		},
		onShown(instance) {
			tippyIsShow = true;
		},
		onHidden(instance) {
			tippyIsShow = false;
		},
	});

	// hide popovers on scroll
	window.addEventListener('scroll', () => {
		if (tippyIsShow) {
			tippy.hideAll();
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
		prevArrow: '<div class="maslider-arrow maslider-arrow--prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.67121 7.67588L2.03952 13.6669C1.92931 13.7847 1.78418 13.8584 1.62873 13.8754C1.47329 13.8924 1.31709 13.8518 1.18662 13.7603L1.08628 13.6669L0.998476 13.5601C0.925139 13.4437 0.885984 13.3067 0.885984 13.1665C0.885984 13.0263 0.925139 12.8893 0.998477 12.7729L1.08628 12.6662C1.11357 12.6283 1.14768 12.5965 1.18662 12.5728L5.77725 7.67588C5.90287 7.54096 5.97334 7.35874 5.97334 7.16884C5.97334 6.97895 5.90287 6.79673 5.77725 6.66181L1.18662 1.73824L1.08628 1.64484C0.997781 1.52497 0.949677 1.37696 0.949677 1.22454C0.949677 1.07212 0.997781 0.924107 1.08628 0.804234L1.17408 0.69749L1.27442 0.604088C1.3858 0.524921 1.51675 0.482666 1.6507 0.482666C1.78466 0.482666 1.9156 0.524921 2.02698 0.604088L2.12732 0.69749L7.29493 6.18146L7.759 6.68849C7.86601 6.83373 7.91655 7.0171 7.90021 7.20081C7.88388 7.38452 7.80191 7.55456 7.67121 7.67588V7.67588Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="maslider-arrow maslider-arrow--next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.67121 7.67588L2.03952 13.6669C1.92931 13.7847 1.78418 13.8584 1.62873 13.8754C1.47329 13.8924 1.31709 13.8518 1.18662 13.7603L1.08628 13.6669L0.998476 13.5601C0.925139 13.4437 0.885984 13.3067 0.885984 13.1665C0.885984 13.0263 0.925139 12.8893 0.998477 12.7729L1.08628 12.6662C1.11357 12.6283 1.14768 12.5965 1.18662 12.5728L5.77725 7.67588C5.90287 7.54096 5.97334 7.35874 5.97334 7.16884C5.97334 6.97895 5.90287 6.79673 5.77725 6.66181L1.18662 1.73824L1.08628 1.64484C0.997781 1.52497 0.949677 1.37696 0.949677 1.22454C0.949677 1.07212 0.997781 0.924107 1.08628 0.804234L1.17408 0.69749L1.27442 0.604088C1.3858 0.524921 1.51675 0.482666 1.6507 0.482666C1.78466 0.482666 1.9156 0.524921 2.02698 0.604088L2.12732 0.69749L7.29493 6.18146L7.759 6.68849C7.86601 6.83373 7.91655 7.0171 7.90021 7.20081C7.88388 7.38452 7.80191 7.55456 7.67121 7.67588V7.67588Z" fill="#AFB4BF"/></svg></div>',
	});





	$('.js-jarallax-1').jarallax({
		speed: 0.6,
		imgWidth: 1920,
		imgHeight: 1862
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


	$('.article-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		speed: slickSpeedMain,
		touchMove: false,
		prevArrow: '<div class="article-arrow article-arrow--prev"><svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.311766 8.85281L7.87866 0.803123C8.02675 0.644781 8.22175 0.545784 8.43061 0.522913C8.63947 0.50004 8.84935 0.554701 9.02465 0.677628L9.15947 0.803123L9.27744 0.946547C9.37598 1.10301 9.42859 1.28709 9.42859 1.47543C9.42859 1.66376 9.37598 1.84784 9.27744 2.0043L9.15947 2.14773C9.12279 2.19865 9.07697 2.24131 9.02465 2.27322L2.85654 8.85281C2.68775 9.03409 2.59307 9.27893 2.59307 9.53408C2.59307 9.78923 2.68775 10.0341 2.85654 10.2153L9.02465 16.8308L9.15947 16.9563C9.27838 17.1174 9.34301 17.3162 9.34301 17.521C9.34301 17.7258 9.27838 17.9247 9.15947 18.0858L9.0415 18.2292L8.90668 18.3547C8.75703 18.461 8.58108 18.5178 8.4011 18.5178C8.22111 18.5178 8.04517 18.461 7.89551 18.3547L7.76069 18.2292L0.817348 10.8608L0.193797 10.1795C0.0500266 9.98435 -0.0178854 9.73796 0.0040634 9.49112C0.0260122 9.24429 0.136148 9.01582 0.311766 8.85281Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="article-arrow article-arrow--next"><svg width="10" height="19" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"/></svg></div>',
	});

	$('.category-slider').slick({
		infinite: true,
		// slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		variableWidth: true,
		speed: slickSpeedMain,
		touchMove: false,
		prevArrow: '<div class="article-arrow article-arrow--prev"><svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.311766 8.85281L7.87866 0.803123C8.02675 0.644781 8.22175 0.545784 8.43061 0.522913C8.63947 0.50004 8.84935 0.554701 9.02465 0.677628L9.15947 0.803123L9.27744 0.946547C9.37598 1.10301 9.42859 1.28709 9.42859 1.47543C9.42859 1.66376 9.37598 1.84784 9.27744 2.0043L9.15947 2.14773C9.12279 2.19865 9.07697 2.24131 9.02465 2.27322L2.85654 8.85281C2.68775 9.03409 2.59307 9.27893 2.59307 9.53408C2.59307 9.78923 2.68775 10.0341 2.85654 10.2153L9.02465 16.8308L9.15947 16.9563C9.27838 17.1174 9.34301 17.3162 9.34301 17.521C9.34301 17.7258 9.27838 17.9247 9.15947 18.0858L9.0415 18.2292L8.90668 18.3547C8.75703 18.461 8.58108 18.5178 8.4011 18.5178C8.22111 18.5178 8.04517 18.461 7.89551 18.3547L7.76069 18.2292L0.817348 10.8608L0.193797 10.1795C0.0500266 9.98435 -0.0178854 9.73796 0.0040634 9.49112C0.0260122 9.24429 0.136148 9.01582 0.311766 8.85281Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="article-arrow article-arrow--next"><svg width="10" height="19" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"/></svg></div>',
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
	setTimeout(function () {
		AOS.refresh();
	}, 2000)
	setTimeout(function () {
		AOS.refresh();
	}, 5000)
	setTimeout(function () {
		AOS.refresh();
	}, 10000)
});