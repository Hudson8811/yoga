$(document).ready(function () {
	$('.sh-burger').click(function () {
		if ($(this).closest('.sh-burger-wrap-right').length > 0) {//мобилка

			if ($(this).hasClass('sh-burger--active')) {
				closeMobMenu();
				$('.sh-menu-wrap').removeClass('sh-menu-wrap--open');//на всякий случай если открыто - закроем десктопное меню

				/*$('html, body').css({
					'height': '',
					'width': '',
					'overflow': 'auto'
				});*/

			}
			else {

				$(this).addClass('sh-burger--active');
				$('.sh-mmenu-mobile').scrollTop(0);
				setTimeout(function(){
					$('.sh-mmenu-mobile').addClass('sh-mmenu-mobile--open');

				}, 70);

				/*$('html, body').css({
					'height': '100%',
					'width': '100%',
					'overflow': 'hidden'
				});*/
			}
			$('.sh-mmenu-mobile').css('max-height', (Math.max($(window).height(), window.innerHeight) - $('#site-header').height()));


		}
		else {//десктоп
			$(this).toggleClass('sh-burger--active');
			$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
		}

	});


	$(document).on('click', function (e) {
		if ($(e.target).closest(".sh-mmenu-mobile").length === 0 && $(e.target).closest(".sh-burger").length === 0) {
			$('.sh-burger').removeClass('sh-burger--active');
			$('.sh-menu-wrap').removeClass('sh-menu-wrap--open');

			closeMobMenu();
		}
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
				if (window.scrollY >= header2TopInStatic - mainHeaderH) {
					if (headerStatus !== 'absolute_before_header2') {
						//$('#site-header').removeClass('sh-scrolled');
						$('#site-header').attr('style', 'position: absolute !important; top: ' + Math.ceil(header2TopInStatic - mainHeaderH + 1) + 'px !important');
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


	$('.sh-mmenu-mobile__link:not(.sh-mmenu-mobile__link--no-link)').click(closeMobMenu);

	/*$(window).scroll(function () {
		$('.sh-mmenu-item').addClass('sh-mmenu-item--hide-fast').removeClass('sh-mmenu-item--active');
		setTimeout(function () {
			$('.sh-mmenu-item').removeClass('sh-mmenu-item--hide-fast');
		}, 250);

		$('.sh-mmenu-mobile').addClass('sh-mmenu-mobile--hide-fast');
		closeMobMenu();
		setTimeout(function () {
			$('.sh-mmenu-mobile').removeClass('sh-mmenu-mobile--hide-fast');
		}, 250);
	});*/
	//menu-worker

	$('#site-header').on('mouseleave', function () {
		$('.sh-mmenu-item').removeClass('sh-mmenu-item--active');
	})


	$('.js-sh-menu-link').on('mouseover', function () {
		if (window.matchMedia("screen and (min-width:1151px)").matches) {
			var $this = $(this);
			var menu = $('#sh-mmenu-item-' + $this.attr('data-id'));
			if (menu.hasClass('sh-mmenu-item--simple')) {
				menu.css('left', ($this.offset().left + 'px'));
			}

			else if (menu.hasClass('.sh-mmenu-item--centred')) {
				//menu.css('left', ($this.offset().left + 'px'));

			}

			var activetab = menu.find('.sh-mmenu-tabs__tab--active');

			if (activetab.length > 0) {
				menu.find('.sh-mmenu-tabs').height(activetab.height());
			}

			if (menu.siblings('.sh-mmenu-item--active').length === 0) {
				menu.addClass('sh-mmenu-item--active');

			}
			else {
				var otherLinks = $this.closest('.sh-menu-item').siblings('.sh-menu-item').find('.sh-menu-item__link');
				otherLinks.addClass('sh-menu-item__link--temp-lock');
				menu.siblings('.sh-mmenu-item--active').removeClass('sh-mmenu-item--active');

				setTimeout(function () {
					menu.addClass('sh-mmenu-item--active');
					otherLinks.removeClass('sh-menu-item__link--temp-lock');
				}, 270);
			}
		}
	});


	$('.js-sh-mmenu-tab-control').on('mouseover', function (e) {
		if (window.matchMedia("screen and (min-width:1151px)").matches && !($(this).hasClass('sh-mmenu-links__link--active'))) {
			$(this).addClass('sh-mmenu-links__link--active').siblings('.sh-mmenu-links__link--active').removeClass('sh-mmenu-links__link--active');
			var otherControls = $(this).siblings('.js-sh-mmenu-tab-control');
			var parent = $(this).closest('.sh-mmenu-item');
			var tabsContainer = parent.find('.sh-mmenu-tabs');
			var tabs = tabsContainer.find('.sh-mmenu-tabs__tab');

			otherControls.addClass('sh-mmenu-links__link--temp-lock');
			var newTab = tabs.eq(parseInt($(this).attr('data-tab-id')) - 1);
			newTab.siblings('.sh-mmenu-tabs__tab--active').removeClass('sh-mmenu-tabs__tab--active');

			setTimeout(function () {
				newTab.addClass('sh-mmenu-tabs__tab--active');
				otherControls.removeClass('sh-mmenu-links__link--temp-lock');

				tabsContainer.animate({
					height: newTab.height() + "px",
				}, {
					duration: 250,
					easing: "linear",
					complete: function () {
					},
					queue: false
				});
			}, 270);
		}
	});

	/////////////Mobile


	function closeMobMenu() {
		$('.sh-mmenu-mobile').removeClass('sh-mmenu-mobile--open');
		$('.sh-burger--active').removeClass('sh-burger--active');
		//$('.sh-mmenu-mobile__levels').css('height','auto');

		setTimeout(function () {
			$('.sh-mmenu-mobile__level--active').removeClass('sh-mmenu-mobile__level--active hide show');
			$('#sh-mmenu-mobile-l1').addClass('sh-mmenu-mobile__level--active');
		}, 400);
	}

	$('.js-sh-mmenu-mobile__open-sub').click(function (e) {
		e.preventDefault();
		var $this = $(this);
		var thisLvl = $(this).closest('.sh-mmenu-mobile__level');
		var container = $('.sh-mmenu-mobile__levels');
		//var startHeight  = thisLvl.height();
		//var targetHeight = 0;
		//container.css('height',startHeight)

		/*if (thisLvl.hasClass('sh-mmenu-mobile__level--1')) {
			targetHeight = $('#sh-mmenu-mobile-l2-' + $this.attr('data-id')).height();
		}
		else if (thisLvl.hasClass('sh-mmenu-mobile__level--2')) {
			targetHeight = $('#sh-mmenu-mobile-l3-' + $this.attr('data-id')).height();
		}*/
		$('.sh-mmenu-mobile__level').removeClass('sh-mmenu-mobile__level--active');

		/*setTimeout(function () {
			$('.sh-mmenu-mobile__level').removeClass('show').addClass('hide');
			if (thisLvl.hasClass('sh-mmenu-mobile__level--1')) {
				$('#sh-mmenu-mobile-l2-' + $this.attr('data-id')).removeClass('hide').addClass('show');
			}
			else if (thisLvl.hasClass('sh-mmenu-mobile__level--2')) {
				$('#sh-mmenu-mobile-l3-' + $this.attr('data-id')).removeClass('hide').addClass('show');
			}
		}, 500);*/

		setTimeout(function () {
			//container.css('height',targetHeight)
			if (thisLvl.hasClass('sh-mmenu-mobile__level--1')) {
				$('#sh-mmenu-mobile-l2-' + $this.attr('data-id')).addClass('sh-mmenu-mobile__level--active ');
			}
			else if (thisLvl.hasClass('sh-mmenu-mobile__level--2')) {
				$('#sh-mmenu-mobile-l3-' + $this.attr('data-id')).addClass('sh-mmenu-mobile__level--active ');
			}
		}, 400);
	})

	$('.js-sh-mmenu-mobile__open-prev-lvl').click(function (e) {
		e.preventDefault();
		var $this = $(this);
		var thisLvl = $(this).closest('.sh-mmenu-mobile__level');
		var container = $('.sh-mmenu-mobile__levels');
		/*var startHeight  = thisLvl.height();
		var targetHeight = 0;
		container.css('height',startHeight)

		if (thisLvl.hasClass('sh-mmenu-mobile__level--2')) {
			targetHeight = $('#sh-mmenu-mobile-l1').height();
		}
		else if (thisLvl.hasClass('sh-mmenu-mobile__level--3')) {
			targetHeight = $('#sh-mmenu-mobile-l2-' + $this.attr('data-id')).height();
		}

		console.log(targetHeight);*/

		$('.sh-mmenu-mobile__level').removeClass('sh-mmenu-mobile__level--active');

		/*setTimeout(function () {
			$('.sh-mmenu-mobile__level').removeClass('show').addClass('hide');
			if (thisLvl.hasClass('sh-mmenu-mobile__level--2')) {
				$('#sh-mmenu-mobile-l1').removeClass('hide').addClass('show');
			}
			else if (thisLvl.hasClass('sh-mmenu-mobile__level--3')) {
				$('#sh-mmenu-mobile-l2-' + $this.attr('data-id')).removeClass('hide').addClass('show');
			}
		}, 500);*/

		setTimeout(function () {
			///container.css('height',targetHeight);
			if (thisLvl.hasClass('sh-mmenu-mobile__level--2')) {
				$('#sh-mmenu-mobile-l1').addClass('sh-mmenu-mobile__level--active ');
			}
			else if (thisLvl.hasClass('sh-mmenu-mobile__level--3')) {
				$('#sh-mmenu-mobile-l2-' + $this.attr('data-id')).addClass('sh-mmenu-mobile__level--active ');
			}
		}, 400);
	})



	$(window).on('resize', function () {
		$('.sh-mmenu-mobile__levels').css('height', 'auto');
		$('.sh-mmenu-mobile').css('max-height', (Math.max($(window).height(), window.innerHeight) - $('#site-header').height()));
	})

});