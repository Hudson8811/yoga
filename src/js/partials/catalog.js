$(document).ready(function () {
	let itemsCE = $('.ce-i');
	if (itemsCE.length){
		itemsCE.each(function (){
			let ce = $(this);
			let ceImage = ce.find('.ce-i__img');
			let ceImageHeight = ceImage.outerHeight();
			let ceHeight = ce.innerHeight();
			if (ceHeight > ceImageHeight){
				let ceText = ce.find('.ce-i__text');
				if (ceText.length){
					let ceTextHeight = ceText.outerHeight();
					let diffHeight = ceHeight - ceImageHeight;
					let maxHeight = ceTextHeight - diffHeight;
					let lineHeight = parseFloat(ce.find('p, li').css('line-height'));
					let fontSize = parseFloat(ceText.css('font-size'));
					let calcHeight = 0;
					let elemsCount = 0;
					ce.find('.ce-i__text > *').each(function (){
						let elem = $(this);
						let elemHeight = elem.outerHeight();
						calcHeight += elemHeight;
						console.log(calcHeight,maxHeight);
						if (elemsCount > 0){
							switch (elem.prop("tagName")){
								case 'UL':
									console.log( 'UL' );
									break;
								default:
									console.log( "*" );
							}
						}

						elemsCount++;
					});

					ceText.css({
						'max-height': maxHeight+'px'
					})
				}
			}
		});
	}
});