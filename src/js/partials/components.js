//допилить обработку, где буду отслеживать смещение мыши на max n пикселей, и тогда это быстрый свайп

class СustomClickWorker {
	timer_id;
	longClick;
	callOnFastClick;
	callOnLongClick;
	maxDurationOfFastClick;
	//Функция, которая отрабатывает при длинном клике
	onLongClick() {
		this.longClick = true;
		console.log('longClick0');
		this.callOnLongClick();

	}

	//Функция, которая отрабатывает при коротком клике
	onFastClick() {
		this.callOnFastClick();
	}


	onMousedown() {
		console.log('mousedown0');
		this.timer_id = setTimeout((function (event) {
			this.onLongClick( /*event*/ );
		}).bind(this), 1000);
		console.log(this.timer_id);
		console.log('mousedown1');
	}
	onMouseup() {
		clearTimeout(this.timer_id);
		if (!this.longClick) {
			this.onFastClick();
		}
		this.longClick = false;
	}
	/**
	 * Конструктор обработчика
	 *
	 * @param  {string} selector jquery селектор блока, по которому отслеживаем клик
	 * @param  {function} callOnFastClick функция, которая будет вызвана при быстром клике(до 1000 мс)
	 * @param  {function} callOnLongClick функция, которая будет вызвана при продолжительном клике кл)ике
	 * @param  {string} parentSelector jquery селектор перeд $(parentSelector).on...(по умолчанию ='body')
	 */
	constructor(selector, callOnFastClick, callOnLongClick, parentSelector, maxDurationOfFastClick) {

		if (typeof (parentSelector) === 'undefined') {
			parentSelector = 'body';
		}
		if (typeof (maxDurationOfFastClick) === 'undefined') {
			maxDurationOfFastClick = 300;
		}
		this.timer_id = 0; //переменная, хранящая ID таймера
		this.longClick = false; //переменная, хранящая информацию о том, отработал ли длинный клик
		this.callOnFastClick = callOnFastClick;
		this.callOnLongClick = callOnLongClick;

		//При нажатии кнопки мыши инициилизируем таймер с задержкой 1000 мс
		$(parentSelector).on('mousedown', selector, (function (event) {
			this.onMousedown( /*event*/ );
		}).bind(this));

		//При отпускании кнопки мыши отменяем таймер и выполняем действие быстрого клика (если длинный клик не отработал)
		$(parentSelector).on('mouseup', selector, (function (event) {
			this.onMouseup( /*event*/ );
		}).bind(this));
		console.log('init');
		console.log(this);
		console.log(this.onFastClick);
	}


}



$(document).ready(function () {
	myCustomClickWorker1 = new СustomClickWorker('.ksquote-content', function () {
		console.log('shortClick!!!!!!!!!!!!!!!');
	}, function () {
		console.log('longClick!!!!!!!!!!!!!!!');
	});

});