function validateField($this) {
	var reg_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	currentValid = true;

	switch ($this.attr('data-validate-type')) {
		case 'non-empty':
			if ($this.val().length > 0) {
			}
			else {
				currentValid = false;
			}
			break;
		case 'email':
			if ($this.val().length > 0 && $this.val().match(reg_email)) {
			}
			else {
				currentValid = false;
			}
			break;
		default:
			break;
	}
	if (currentValid) {
		$this.closest('.music-form-item').removeClass('music-form-item--invalid');
	} else {
		$this.closest('.music-form-item').addClass('music-form-item--invalid');
		valid = false;
	}
	return currentValid;

}




$(document).ready(function () {
	var validateForms = $('.js-need-validate').closest('form');

	validateForms.on('submit', function (e) {
		e.preventDefault()
		var valid = true;
		var form = $(e.target);

		var inputs = form.find('.js-need-validate');
		inputs.each(function () {
			$this = $(this);

			if (!validateField($this)) {
				valid = false;
			}

		});

		if (valid) {
			e.target.submit()
		}
		else {

		}
	});


	$('body').on('keyup change', '.music-form-item--invalid .js-need-validate', function () {
		validateField($(this));
	});


});