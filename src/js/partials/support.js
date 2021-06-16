
function openSupportModal(e) {
	var $this = $(e.target).closest('.support-block-card');
	var $modal = $('#support-modal');

	$modal.find('.support-modal-top__name').html($this.find('.support-block-card__title').html());
	$modal.find('.support-modal-top__price').html($this.find('.support-block-card__price').html());
	$modal.find('.cnumber-input__inp').val($this.find('.cnumber-input__inp').val());
	$modal.attr('data-card-id',$this.attr('id'));



	$.fancybox.open({
		src: '#support-modal',
		type: 'inline',
		opts: {
			//speed: 600,
			//transitionDuration: 700,
			backFocus: false,
			buttons: ['close'],
			btnTpl: {
				close: '<button data-fancybox-close class="custom-fancybox-close" title="{{CLOSE}}">' +
					'<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0205078" y="1.43506" width="2" height="36" rx="1" transform="rotate(-45 0.0205078 1.43506)" fill="#AFB4BF"/><rect x="1.43555" y="26.8909" width="2" height="36" rx="1" transform="rotate(-135 1.43555 26.8909)" fill="#AFB4BF"/></svg>' +
					"</button>"

			},
			baseClass: 'fancybox-support-modal',
			touch : false,

			afterShow: function (instance, slide) {

			}
		}


	});

}


$(document).ready(function () {
	$('.js-open-support-modal').click(function (e) {
		e.preventDefault();
		openSupportModal(e);
	});

});