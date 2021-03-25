
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});

	console.log(1);
	var shScrolled=false;

	$(window).scroll(function(){
		console.log(window.scrollY);
		if(window.scrollY>30){
			if(!shScrolled){
				$('.site-header').addClass('sh-fixed sh-scrolled');
				shScrolled=true;
			}
		}
		else{
			if(shScrolled){
				$('.site-header').removeClass('sh-fixed sh-scrolled');
				shScrolled=false;
			}
		}
	});
});