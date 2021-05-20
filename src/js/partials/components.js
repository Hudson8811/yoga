"use strict";

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}
	return obj;
}

class ClickOrSwipeListener {
	//Функция, которая отрабатывает при длинном клике
	onLongClickTimerEnd(e) {
		this.longClick = true;
	} //Функция, которая отрабатывает при коротком клике

	onFastClick() {
		this.callOnFastClick(this.eventMD);
	} //Функция, которая отрабатывает при свайпе

	onSwipe() {
		this.callOnSwipe(this.eventMD);
	}

	onMousedown(eMD) {
		this.timer_id = setTimeout(
			function (eMD) {
				this.onLongClickTimerEnd(eMD);
			}.bind(this),
			this.maxDurationOfFastClick
		);
		this.oldX = eMD.pageX;
		this.oldY = eMD.pageY;
		this.eventMD = eMD;
	}

	onMouseup(eMU) {
		clearTimeout(this.timer_id);

		if (
			Math.abs(this.oldX - eMU.pageX) > 20 ||
			Math.abs(this.oldY - eMU.pageY) > 20
		) {
			this.onSwipe(this.eventMD);
			return;
		}

		if (!this.longClick) {
			this.onFastClick();
		} else {
			this.callOnLongClick(this.eventMD);
		}

		this.longClick = false;
	}
	/**
	 * Конструктор обработчика
	 *
	 * В функции возвращается event события mouseDown
	 *
	 * @param  {string} selector jquery селектор блока, по которому отслеживаем клик
	 * @param  {function} callOnFastClick функция, которая будет вызвана при быстром клике
	 * @param  {function} callOnLongClick функция, которая будет вызвана при продолжительном клике
	 * @param  {function} callOnSwipe функция, которая будет вызвана при продолжительном свайпе
	 * @param  {string} parentSelector jquery селектор родителя, в котором осуществляется отслеживание таких блоков $(parentSelector).on...(default ='body')
	 * @param  {int} maxDurationOfFastClick максимальная длительность клика, считающегося быстрым(в мс). default=500)
	 */

	constructor(
		selector,
		callOnFastClick,
		callOnLongClick,
		callOnSwipe,
		parentSelector,
		maxDurationOfFastClick
	) {
		_defineProperty(this, "timer_id", void 0);

		_defineProperty(this, "longClick", void 0);

		_defineProperty(this, "callOnFastClick", void 0);

		_defineProperty(this, "callOnLongClick", void 0);

		_defineProperty(this, "callOnSwipe", void 0);

		_defineProperty(this, "maxDurationOfFastClick", void 0);

		_defineProperty(this, "oldX", void 0);

		_defineProperty(this, "oldY", void 0);

		_defineProperty(this, "eventMD", void 0);

		if (typeof parentSelector === "undefined") {
			parentSelector = "body";
		} else {}

		if (typeof maxDurationOfFastClick === "undefined") {
			this.maxDurationOfFastClick = 500;
		} else {
			this.maxDurationOfFastClick = maxDurationOfFastClick;
		}

		this.timer_id = 0; //переменная, хранящая ID таймера

		this.longClick = false; //переменная, хранящая информацию о том, отработал ли длинный клик

		this.callOnFastClick = callOnFastClick;
		this.callOnLongClick = callOnLongClick;
		this.callOnSwipe = callOnSwipe; //При нажатии кнопки мыши инициилизируем таймер с задержкой 1000 мс

		$(parentSelector).on(
			"mousedown",
			selector,
			function (event) {
				this.onMousedown(event);
			}.bind(this)
		); //При отпускании кнопки мыши отменяем таймер и выполняем действие быстрого клика (если длинный клик не отработал)

		$(parentSelector).on(
			"mouseup",
			selector,
			function (event) {
				this.onMouseup(event);
			}.bind(this)
		);
	}
}