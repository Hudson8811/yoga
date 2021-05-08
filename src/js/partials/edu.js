$(document).ready(function () {
  changeTab = false;
  changeLine = false;
  $('.page-tabs__item').on('click',function (){
    event.preventDefault();
    if (!$(this).hasClass('page-tabs__item--active') && !changeTab){
      changeTab = true;
      $(this).addClass('page-tabs__item--active').siblings().removeClass('page-tabs__item--active');
      var index = $(this).index();
      $('.page--tabs-blocks .page--tabs-blocks__tab').fadeOut(400).promise().done(function(){
        $('.page--tabs-blocks .page--tabs-blocks__tab').removeClass('page--tabs-blocks__tab--active');
        setTimeout(function (){
            $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick('resize');
        },10);
        setTimeout(function (){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick('resize');
        },25);
        setTimeout(function (){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick('resize');
        },50);
        setTimeout(function (){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick('resize');
        },100);
        setTimeout(function (){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick('resize');
        },200);
        setTimeout(function (){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).find('.js-kspc-slider').slick('resize');
        },400);
        $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).css({display: 'block',opacity: 0});
        setTimeout(function (){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).animate({opacity: 1}, 400).promise().done(function(){
            $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).addClass('page--tabs-blocks__tab--active');
            changeTab = false;
            changeLine = false;
            AOS.refresh();
          });
        },100)
      });
    }
  })

  const targetLint = document.querySelector(".page-tabs__line");
  const tabLinks = document.querySelectorAll(".page-tabs__item");

  function tablineFunc() {
    if (!this.classList.contains("active") && !changeLine) {
      changeLine = true;
      for (let i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i].classList.contains("active")) {
          tabLinks[i].classList.remove("active");
        }
      }

      this.classList.add("active");

      const width = this.getBoundingClientRect().width;
      const left = this.offsetLeft;

      targetLint.style.width = `${width}px`;
      targetLint.style.left = `${left}px`;
      targetLint.style.transform = "none";

      let containerWidth = $('.page-tabs-section__container').width();
      let addLeft = (containerWidth - width)/2;
      let padLeft = parseInt($('.page-tabs').css('padding-left'));
      $('.page-tabs-section__container').animate({
        scrollLeft: left-(addLeft-padLeft)
      }, 400);
    }
  }

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", tablineFunc);
  }

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
});
