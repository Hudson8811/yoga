$(document).ready(function () {
  changeTab = false;
  $('.page-tabs__item').on('click',function (){
    event.preventDefault();
    if (!$(this).hasClass('page-tabs__item--active') && !changeTab){
      changeTab = true;
      $(this).addClass('page-tabs__item--active').siblings().removeClass('page-tabs__item--active');
      var index = $(this).index();
      $('.page--tabs-blocks .page--tabs-blocks__tab').fadeOut(400).promise().done(function(){
        $('.page--tabs-blocks .page--tabs-blocks__tab').removeClass('page--tabs-blocks__tab--active');
        $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).fadeIn(400).promise().done(function(){
          $('.page--tabs-blocks .page--tabs-blocks__tab').eq(index).addClass('page--tabs-blocks__tab--active');
          changeTab = false;
        });
      });
    }
  })
});
