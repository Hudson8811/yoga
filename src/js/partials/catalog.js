$(document).ready(function () {
	let itemsCE = $('.ce-i');
	if (itemsCE.length){
		function initCalcCE(){
			let itemsCE = $('.ce-i');
			itemsCE.each(function (){
				let ce = $(this);
				let ceImage = ce.find('.ce-i__img');
				let ceImageHeight = ceImage.outerHeight();
				let ceHeight = ce.find('.ce-i__left').innerHeight();
				if (ceHeight > ceImageHeight){
					let ceText = ce.find('.ce-i__text');
					let ceMoreHtml = '<div class="ce-i__more"><span>... </span><a href="javascript:;">Развернуть</a></div>';
					if (ceText.length){
						let ceTextHeight = ceText.outerHeight();
						let diffHeight = ceHeight - ceImageHeight;
						let maxHeight = ceTextHeight - diffHeight;
						let lineHeight = parseFloat(ce.find('p, li').css('line-height'));
						let calcHeight = 0;
						let elemsCount = 0;
						ce.find('.ce-i__text > *').each(function (){
							let elem = $(this);
							let elemHeight = elem.outerHeight();
							if (elemsCount > 0){
								let marginTop = parseFloat(elem.css('margin-top'));
								if (marginTop + calcHeight + lineHeight >= maxHeight){
									return false;
								} else {
									calcHeight += marginTop;
								}
							}
							if (maxHeight - calcHeight >= lineHeight){
								switch (elem.prop("tagName")){
									case 'UL':
										if (calcHeight + elemHeight > maxHeight){
											let lis = elem.find('li');
											let lisCount = 0;
											lis.each(function (){
												let li = $(this);
												let liHeight = li.outerHeight();
												if (lisCount > 0){
													let liMarginTop = parseFloat(li.css('margin-top'));
													if (calcHeight + liMarginTop > maxHeight || maxHeight - calcHeight - liMarginTop < lineHeight){
														return false;
													} else {
														calcHeight += liMarginTop;
													}
												}
												if (calcHeight + liHeight > maxHeight){
													let countRows = ((maxHeight-calcHeight)/lineHeight|0);
													calcHeight += lineHeight*countRows;
													return false;
												} else {
													calcHeight += liHeight;
												}
												lisCount++;
											});
											return false;
										} else {
											calcHeight += elemHeight;
										}
										break;
									default:
										if (calcHeight + elemHeight > maxHeight){
											let countRows = ((maxHeight-calcHeight)/lineHeight|0);
											calcHeight += lineHeight*countRows;
											return false;
										} else {
											calcHeight += elemHeight;
										}
								}

								elemsCount++;
							} else{
								return false;
							}
						});

						ceText.css({
							'max-height': calcHeight+'px'
						}).addClass('maxed').append(ceMoreHtml);
					}
				}
			});
		}
		function removeCalcCE(){
			let itemsCE = $('.ce-i');
			itemsCE.each(function (){
				let ce = $(this);
				ce.find('.ce-i__text').removeClass('maxed').css('max-height', '');
				ce.find('.ce-i__more').remove();
			});
		}

		initCalcCE();

		$(window).resize(function (){
			removeCalcCE();
			initCalcCE();
		});

		$(document).on('click','.ce-i__more',function (){
			$(this).parent().css({'max-height': '10000px'})
			$(this).remove();
		});
	}
});