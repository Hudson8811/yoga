
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});

	//console.log(1);
	var shScrolled=false;
	var topBtnShow=false;

	$(window).scroll(function(){
		//console.log(window.scrollY);
		if(window.scrollY>30){
			if(!shScrolled){
				$('.site-header:not(.site-header--static)').addClass('sh-fixed sh-scrolled');
				shScrolled=true;
			}
		}
		else{
			if(shScrolled){
				$('.site-header:not(.site-header--static)').removeClass('sh-fixed sh-scrolled');
				shScrolled=false;
			}
		}

		if(window.scrollY>window.innerHeight){
			if(!topBtnShow){
				$('#top-btn').addClass('top-btn--show');
				topBtnShow=true;
			}
		}
		else{
			if(topBtnShow){
				$('#top-btn').removeClass('top-btn--show');
				topBtnShow=false;
			}
		}

	});
});