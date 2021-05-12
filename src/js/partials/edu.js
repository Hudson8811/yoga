$(document).ready(function () {
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

  if ($(window).width() < 750){
		tabsList.swipe(swipeOptions);
		initSwipe = true;
  }

  $(window).resize(function (){
		if ($(window).width() < 750){
			if (!initSwipe){
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

	$('.page-tabs__item').on('click',function (){
		event.preventDefault();
		if (!$(this).hasClass('page-tabs__item--active') && !changeTab){
			var index = $(this).index();
			if ($(window).width() < 750){
				currentTab = index;
				if (currentTab === 0){
					addLeftPad = 0
				} else  if (currentTab < totalTabs-1) {
					addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth())/2 - parseInt(tabsList.css('padding-left'))) * -1;
				} else {
					addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth()) - parseInt(tabsList.css('padding-left'))*2) * -1;
				}
				selectTab(currentTab,speed);
			} else {
				selectTab(index,speed);
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
			if (currentTab === 0){
				addLeftPad = 0
			} else {
				addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth())/2 - parseInt(tabsList.css('padding-left'))) * -1;
			}
			selectTab(currentTab,speed)
		}
	}

	function nextTab() {
		if (!changeTab) {
			currentTab = Math.min(currentTab + 1, totalTabs - 1);
			if (currentTab < totalTabs-1){
				addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth())/2 - parseInt(tabsList.css('padding-left'))) * -1;
			} else {
				addLeftPad = (($('.page-tabs-section__container').width() - $('.page-tabs__item').eq(currentTab).innerWidth()) - parseInt(tabsList.css('padding-left'))*2) * -1;
			}
			selectTab(currentTab,speed)
		}
	}

	function scrollTabs(tabIndex, duration,addDistance = 0) {
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


	function selectTab(index,speed = 0) {
		changeTab = true;
		if ( typeof getScrollContent == 'function' ) {
			getScrollContent(index);
		}
		tablineFunc(index);
		if ($(window).width() < 750){
			scrollTabs(index, speed);
		}
		$('.page-tabs__item').eq(index).addClass('page-tabs__item--active').siblings().removeClass('page-tabs__item--active');
		$('.page--tabs-blocks .page--tabs-blocks__tab').fadeOut(400).promise().done(function(){
			if (document.documentElement.scrollTop > $("#tabTop").offset().top +4) {
				$('html, body').animate({ scrollTop: $("#tabTop").offset().top +4 }, 0);
			}
			$('.page--tabs-blocks .page--tabs-blocks__tab').removeClass('page--tabs-blocks__tab--active');
			if ($('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').length > 0) {
				setTimeout(function () {
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick('unslick');
          setTimeout(function () {
            $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick({
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
            ;
          }, 25)
        }, 50);
      }
      $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).css({display: 'block',opacity: 0});

      setTimeout(function (){
        $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).animate({opacity: 1}, 300).promise().done(function(){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).addClass('page--tabs-blocks__tab--active');
          changeTab = false;
          changeLine = false;
          AOS.refresh();
        });
      },100)
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
        let addLeft = (containerWidth - width)/2;
        let padLeft = parseInt(tabsList.css('padding-left'));
        $('.page-tabs-section__container').animate({
          scrollLeft: left-(addLeft-padLeft)
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



  if (typeof ajaxTabs !== 'undefined' && ajaxTabs){
		let tabRequest = false;
		let currentPage = 1;
		let currentTabHtml = 0;

		$(window).on('resize scroll', function() {
			if ($('#music-preloader').length){
				if ($('#music-preloader').isInViewport()) {
					getScrollContent();
				}
			}
		});

		function getScrollContent(index){
			if (!tabRequest && typeof wpPageID !== 'undefined'){
				if (typeof index === 'number') {
					currentPage = 1;
					currentTabHtml = parseInt(index);
				}
				let tabContainer = $('.page--tabs-blocks .page--tabs-blocks__tab').eq(currentTabHtml);
				let data =  {action: 'music', id: wpPageID, tab: currentTabHtml, page : currentPage};
				$.ajax({
					url : '/wp-admin/admin-ajax.php',
					data : data,
					type : 'POST',
					dataType : 'html',
					beforeSend : function (){
						tabRequest = true;
						if (typeof index === 'number') {
							tabContainer.html('<div class="kspc-preloader"><span></span><span></span><span></span></div>');
						}
					},
					success : function( data ){
						if (data != ''){
							if (typeof index === 'number') {
								tabContainer.html(data);
							} else {
								if (currentTabHtml === 2){
									tabContainer.find('.kspc-phg__list').append(data);
								}
							}
							currentPage++;
						} else {
							$('.kspc-preloader').remove();
						}

						tabRequest = false;
					},
					error : function (data){
						tabRequest = false;
						console.log('ajax error');
					}
				});
			}
		}
	}

});



$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};