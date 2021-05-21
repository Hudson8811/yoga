$(document).ready(function () {
	if ($('.slicky-top').length) {
		$(".slicky-top").sticky({
			topSpacing: 0,
			zIndex: 998
		});
	}

	changeTab = false;
	changeLine = false;

	var currentTab = $('.page-tabs__item--active').index();
	var totalTabs = $('.page-tabs__item').length;
	var speed = 300;
	var addLeftPad = 0;
	var tabsList = $(".page-tabs");;
	var initSwipe = false;

	var swipeOptions = {
		triggerOnTouchEnd: true,
		swipeStatus: swipeStatus,
		allowPageScroll: "vertical",
		threshold: 75
	};

	if ($(window).width() < 750) {
		tabsList.swipe(swipeOptions);
		initSwipe = true;
	}

	$(window).resize(function () {
		if ($(window).width() < 750) {
			if (!initSwipe) {
				tabsList.swipe(swipeOptions);
				initSwipe = true;
			}
		} else {
			if (initSwipe) {
				tabsList.swipe("destroy");
				tabsList.attr("style", "");
				initSwipe = false;
			}
		}
	})

	$('.page-tabs__item').on('click', function () {
		event.preventDefault();
		if (!$(this).hasClass('page-tabs__item--active') && !changeTab) {
			var index = $(this).index();
			if ($(window).width() < 750) {
				currentTab = index;
				if (currentTab === 0) {
					addLeftPad = 0
				} else if (currentTab < totalTabs - 1) {
					addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth()) / 2 - parseInt(tabsList.css('padding-left'))) * -1;
				} else {
					addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth()) - parseInt(tabsList.css('padding-left')) * 2) * -1;
				}
				selectTab(currentTab, speed);
			} else {
				selectTab(index, speed);
			}
		}
	})

	function swipeStatus(event, phase, direction, distance) {
		if (phase == "move" && (direction == "left" || direction == "right")) {
			var duration = 0;
			/*if (direction == "left") {
				scrollTabs(currentTab, duration,distance);
			} else if (direction == "right") {
				scrollTabs(currentTab, duration,distance*-1);
			}
		} else if (phase == "cancel") {
			scrollTabs(currentTab, speed);*/
		} else if (phase == "end") {
			if (direction == "right") {
				previousTab();
			} else if (direction == "left") {
				nextTab();
			}
		}
	}

	function previousTab() {
		if (!changeTab) {
			currentTab = Math.max(currentTab - 1, 0);
			if (currentTab === 0) {
				addLeftPad = 0
			} else {
				addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth()) / 2 - parseInt(tabsList.css('padding-left'))) * -1;
			}
			selectTab(currentTab, speed)
		}
	}

	function nextTab() {
		if (!changeTab) {
			currentTab = Math.min(currentTab + 1, totalTabs - 1);
			if (currentTab < totalTabs - 1) {
				addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth()) / 2 - parseInt(tabsList.css('padding-left'))) * -1;
			} else {
				addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth()) - parseInt(tabsList.css('padding-left')) * 2) * -1;
			}
			selectTab(currentTab, speed)
		}
	}

	function scrollTabs(tabIndex, duration, addDistance = 0) {
		let distance = 0;
		for (var i = 0; i < tabIndex; i++) {
			distance += $('.page-tabs__item').eq(i).innerWidth();
		}
		distance += addDistance;
		distance += addLeftPad;

		tabsList.css("transition-duration", (duration / 1000).toFixed(1) + "s");
		var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
		tabsList.css("transform", "translate(" + value + "px,0)");
	}


	function selectTab(index, speed = 0) {
		changeTab = true;
		if (typeof getScrollContent == 'function') {
			getScrollContent(index);
		}
		tablineFunc(index);
		if ($(window).width() < 750) {
			scrollTabs(index, speed);
		}
		$('.page-tabs__item').eq(index).addClass('page-tabs__item--active').siblings().removeClass('page-tabs__item--active');

		//
		var commonTabs = $('.js-common-tab');
		if (commonTabs.length > 0) {
			//commonTabs.filter(':not(.common-tab--' + (index + 1) + ')').removeClass('common-tab--active');
			var commonTabsNeedActive = commonTabs.filter('.common-tab--' + (index + 1));


			commonTabs.filter(':not(.common-tab--' + (index + 1) + ')').fadeOut(400).promise().done(function () {

				commonTabs.filter(':not(.common-tab--' + (index + 1) + ')').removeClass('common-tab--active');

				commonTabsNeedActive.css({
					display: 'block',
					opacity: 0
				});

				setTimeout(function () {
					commonTabsNeedActive.animate({
						opacity: 1
					}, 300).promise().done(function () {
						commonTabsNeedActive.addClass('common-tab--active');
					});
				}, 100)
			});

		}

		//


		$('.page--tabs-blocks .page--tabs-blocks__tab').fadeOut(400).promise().done(function () {
			if (document.documentElement.scrollTop > $("#tabTop").offset().top + 10) {
				setTimeout(function () {
					window.scrollTo(0, $("#tabTop").offset().top + 10);
				}, 10);
				//$('html, body').animate({ scrollTop: $("#tabTop").offset().top +10 }, 0);
			}
			$('.page--tabs-blocks .page--tabs-blocks__tab').removeClass('page--tabs-blocks__tab--active');

			var newTab = $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index); //открываемая вкладка


			setTimeout(function () {

				if (newTab.find('.js-kspc-slider').length > 0) {
					newTab.find('.js-kspc-slider.slick-slider').slick('unslick');
				}
				setTimeout(function () {
					kspcSlidersInit(newTab);
				}, 150);
			}, 50);



			setTimeout(function () {
				musicPageSlidersDisable($('.page--tabs-blocks .page--tabs-blocks__tab').eq(index));

				setTimeout(function () {
					musicPageSlidersInit($('.page--tabs-blocks .page--tabs-blocks__tab').eq(index));
					instaSlidersInit($('.page--tabs-blocks .page--tabs-blocks__tab').eq(index));
				}, 150)
			}, 50);
			setTimeout(function () {
				if (newTab.find('.js-jarallax-1').length > 0) {
					newTab.find('.js-jarallax-1').jarallax('destroy');
					setTimeout(function () {
						newTab.find('.js-jarallax-1').jarallax({
							speed: 0.6,
							imgWidth: 1920,
							imgHeight: 1862
						})
					}, 150);

				}
			}, 150);


			$('.aos-init').removeClass('aos-init aos-animate');
			setTimeout(function (){
				AOS.init({
					disable: function () {
						return (window.matchMedia("(max-width: 749px)").matches);
					},
					startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
					initClassName: 'aos-init', // class applied after initialization
					animatedClassName: 'aos-animate', // class applied on animation
					useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
					disableMutationObserver: false, // disables automatic mutations' detections (advanced)
					debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
					throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
					offset: 120, // offset (in px) from the original trigger point
					delay: 0, // values from 0 to 3000, with step 50ms
					duration: 1000, // values from 0 to 3000, with step 50ms
					easing: 'ease', // default easing for AOS animations
					once: true, // whether animation should happen only once - while scrolling down
					mirror: false, // whether elements should animate out while scrolling past them
					anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
				});
				AOS.refresh();
			},100)

			setTimeout(function (){
				AOS.refresh();
			},1000)
			setTimeout(function (){
				AOS.refresh();
			},2000)

			//console.log('----------------------------');
			$('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).css({
				display: 'block',
				opacity: 0
			});



			setTimeout(function () {
				$('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).animate({
					opacity: 1
				}, 300).promise().done(function () {
					$('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).addClass('page--tabs-blocks__tab--active');
					changeTab = false;
					changeLine = false;
				});
			}, 100)
		});

	}



	const targetLint = document.querySelector(".page-tabs__line");
	const tabLinks = document.querySelectorAll(".page-tabs__item");

	function tablineFunc(index) {
		if (!tabLinks[index].classList.contains("active") && !changeLine) {
			changeLine = true;
			for (let i = 0; i < tabLinks.length; i++) {
				if (tabLinks[i].classList.contains("active")) {
					tabLinks[i].classList.remove("active");
				}
			}

			tabLinks[index].classList.add("active");

			const width = tabLinks[index].getBoundingClientRect().width;
			const left = tabLinks[index].offsetLeft;

			targetLint.style.width = `${width}px`;
			targetLint.style.left = `${left}px`;
			targetLint.style.transform = "none";

			if ($(window).width() > 750) {
				let containerWidth = $('.page-tabs-section__container').width();
				let addLeft = (containerWidth - width) / 2;
				let padLeft = parseInt(tabsList.css('padding-left'));
				$('.page-tabs-section__container').animate({
					scrollLeft: left - (addLeft - padLeft)
				}, 400);
			}
		}
	}

	/*for (let i = 0; i < tabLinks.length; i++) {
	  tabLinks[i].addEventListener("click", );
	}*/

	function tabresizeFunc() {
		const active = document.querySelector(".page-tabs__item.active");

		if (active) {
			const left = active.offsetLeft;
			const width = active.getBoundingClientRect().width;

			targetLint.style.left = `${left}px`;
			targetLint.style.width = `${width}px`;
		}
	}
	tabresizeFunc();
	window.addEventListener("resize", tabresizeFunc);



	if (typeof ajaxTabs !== 'undefined' && ajaxTabs) {
		let tabRequest = false;
		let currentPage = 1;
		let currentTabHtml = 0;
		let galleryImages = [];
		let loaderProcess = 0;
		let loadedCount = [];
		let imagesBlock = 0;
		let mode = 'start';

		$(window).on('resize scroll', function () {
			if ($('#music-preloader').length) {
				if ($('#music-preloader').isInViewport()) {
					getScrollContent();
				}
			}
		});


		function getScrollContent(index) {
			if (!tabRequest && typeof wpPageID !== 'undefined') {
				if (typeof index === 'number') {
					dataType = 'json';
					currentPage = 1;
					currentTabHtml = parseInt(index);
					galleryImages = [];
					loaderProcess = 0;
					loadedCount = [];
					imagesBlock = 0;
					mode = 'start';
					if (index === 0) dataType = 'html';
				}
				let tabContainer = $('.page--tabs-blocks .page--tabs-blocks__tab').eq(currentTabHtml);

				let data = {
					action: 'music',
					id: wpPageID,
					tab: currentTabHtml,
					page: currentPage,
					imagesBlock: imagesBlock,
					mode: mode
				};
				if (typeof galleryImages[imagesBlock] === 'undefined' || galleryImages[imagesBlock].length < 1)
					$.ajax({
						url: '/wp-admin/admin-ajax.php',
						data: data,
						type: 'POST',
						dataType: dataType,
						beforeSend: function () {
							tabRequest = true;
							if (typeof index === 'number') {
								if (index !== 3 && index !== 0)
									tabContainer.html('<div style="height: 100vh; max-height: 100vh;"></div>');
								setTimeout(function () {
									tabContainer.siblings('.page--tabs-blocks__tab:not(.page--tabs-4):not(.page--tabs-1)').html('<div style="height: 100vh; max-height: 100vh;"></div>');
								}, 400);
							}
						},
						success: function (data) {
							if (data) {
								/*if (currentTabHtml === 0) {
									tabContainer.html(data);
									setTimeout(function () {
										AOS.init({
											disable: false,
											debounceDelay: 50,
											throttleDelay: 99,
											offset: 50,
											delay: 0,
											duration: 1000,
											easing: 'ease',
											once: true,
											mirror: false,
											anchorPlacement: 'top-bottom',
										});
									}, 50);
								}*/
								if (currentTabHtml === 1) {
									if (typeof index === 'number') {
										tabContainer.html(data[0]);
									} else {
										tabContainer.find('.artimaster-posts').append(data[0]);
									}
									mode = data[1];
									tippy(document.querySelectorAll('.js-share'), tippySettings);
									setTimeout(function () {
										AOS.init({
											disable: false,
											debounceDelay: 50,
											throttleDelay: 99,
											offset: 50,
											delay: 0,
											duration: 1000,
											easing: 'ease',
											once: true,
											mirror: false,
											anchorPlacement: 'top-bottom',
										});
									}, 50);
								}
								if (currentTabHtml === 2) {
									if (typeof index === 'number') {
										tabContainer.html(data[0]);
									} else {
										if (mode !== 'newblock') {
											tabContainer.find('.kspc-phg__list[data-block="' + imagesBlock + '"]').append(data[0]);
										} else {
											tabContainer.find('.kspc-phg__block:last').after(data[0]);
										}
									}
									imagesBlock = parseInt(data[2]);
									mode = data[3];
									if (mode === 'newblock') currentPage = 0;
									if (typeof galleryImages[imagesBlock] === 'undefined') galleryImages[imagesBlock] = [];
									galleryImages[imagesBlock].push.apply(galleryImages[imagesBlock], data[1])
									imageLoader(imagesBlock);
								}
								currentPage++;
							} else {
								$('.kspc-preloader').remove();
							}

							tabRequest = false;
						},
						error: function (data) {
							tabRequest = false;
							console.log('no json');
							$('.kspc-preloader').remove();
						}
					});
			}
		}

		function imageLoader(iblock) {
			if (galleryImages[iblock].length && loaderProcess < 9) {
				loaderProcess++;
				let imageSrc = galleryImages[iblock][0];
				galleryImages[iblock].shift();
				let imgHtml = '<img src="' + imageSrc + '" alt="" data-block="' + iblock + '">';
				$('.kspc-phg__add').append(imgHtml);
			}
		}


		document.addEventListener(
			'load',
			function (event) {
				var elm = event.target;
				if (elm.nodeName.toLowerCase() === 'img' && $(elm).closest('.kspc-phg__add').length) {
					let iblock = $(elm).data('block');
					let conteiner = $('.kspc-phg__list[data-block="' + iblock + '"] .kspc-phg__item:not(.loaded):first');
					$(elm).appendTo(conteiner);
					conteiner.addClass('loaded');
					loaderProcess--;
					if (typeof loadedCount[iblock] === 'undefined') loadedCount[iblock] = 0;
					loadedCount[iblock]++;
					if (loadedCount[iblock] >= 9 || galleryImages[iblock].length === 0) {
						$('.kspc-phg__list[data-block="' + iblock + '"] .kspc-phg__item.loaded').css({
							display: 'block'
						}).attr('data-aos', 'fade');
						setTimeout(function () {
							AOS.init({
								disable: false,
								debounceDelay: 50,
								throttleDelay: 99,
								offset: 0,
								delay: 0,
								duration: 1000,
								easing: 'ease',
								once: true,
								mirror: false,
								anchorPlacement: 'top-bottom',
							});
						}, 50);
						loadedCount[iblock] = 0;
					}
					imageLoader(iblock);
				}
			},
			true
		);
	}

});



$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};