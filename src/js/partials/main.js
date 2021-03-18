$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");
	if ($('.js-home-slider').length > 0) {
		$('.js-home-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			//autoplaySpeed: 2000,
			infinite: true,
			arrows: false,
			dots: true,
			fade: true,
			pauseOnHover: false
		});
	}
	if ($('.js-hm-events-slider').length > 0) {
		$('.js-hm-events-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			//autoplay: true,
			//autoplaySpeed: 2000,
			infinite: true,
			arrows: true,
			dots: true,
			//fade: true,
			pauseOnHover: false,
			prevArrow: '<div class="hm-events-arrow hm-events-arrow--prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"></path></svg></div>',
			nextArrow: '<div class="hm-events-arrow hm-events-arrow--next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6363 11.8128L1.80825 21.6513C1.63548 21.8448 1.40798 21.9658 1.1643 21.9938C0.920633 22.0217 0.675783 21.9549 0.471259 21.8047L0.313966 21.6513L0.176336 21.476C0.0613737 21.2848 -3.58412e-06 21.0598 -3.54495e-06 20.8296C-3.50577e-06 20.5994 0.0613738 20.3744 0.176336 20.1832L0.313966 20.0079C0.356759 19.9457 0.410226 19.8935 0.471259 19.8545L7.6674 11.8128C7.86431 11.5912 7.97477 11.292 7.97477 10.9801C7.97477 10.6683 7.86431 10.369 7.6674 10.1475L0.471262 2.06193L0.31397 1.90854C0.175245 1.71168 0.0998399 1.46862 0.09984 1.21831C0.09984 0.968002 0.175245 0.72494 0.31397 0.528083L0.4516 0.352787L0.608893 0.199401C0.783489 0.0693911 0.988759 1.77744e-07 1.19874 2.15492e-07C1.40873 2.5324e-07 1.61399 0.0693913 1.78859 0.199401L1.94588 0.352787L10.0464 9.35864L10.7739 10.1913C10.9417 10.4298 11.0209 10.7309 10.9953 11.0326C10.9697 11.3343 10.8412 11.6136 10.6363 11.8128Z" fill="#AFB4BF"></path></svg></div>',
			responsive: [{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}




	my_songs = [{
			"name": "Казачья",
			"artist": "Игорь растеряев",
			"album": "Звонарь",
			"url": "img/song/track2.mp3",
			"cover_art_url": "img/mlinks/1.jpg",
			"orig_link": "https://itunes.com/1.mp3",
			"meta_duration": "2:55"
		}, {
			"name": "ASATO MA SAT GAMAYA",
			"artist": "Ever New Joy",
			"album": "Album Name",
			"url": "img/song/track1.mp3",
			"cover_art_url": "img/track1-cover.jpg",
			"orig_link": "https://itunes.com/2.mp3",
			"meta_duration": "3:17"
		},
		{
			"name": "Русская дорога.",
			"artist": "Игорь растеряев",
			"album": "Звонарь",
			"url": "img/song/track3.mp3",
			"cover_art_url": "img/mlinks/2.jpg",
			"orig_link": "https://itunes.com/3.mp3",
			"meta_duration": "3:00"
		}, {
			"name": "Казачья2",
			"artist": "Игорь растеряев",
			"album": "Звонарь",
			"url": "img/song/track2.mp3",
			"cover_art_url": "img/mlinks/1.jpg",
			"orig_link": "https://itunes.com/1.mp3",
			"meta_duration": "2:55"
		}, {
			"name": "ASATO MA SAT GAMAY2",
			"artist": "Ever New Joy",
			"album": "Album Name",
			"url": "img/song/track1.mp3",
			"cover_art_url": "img/track1-cover.jpg",
			"orig_link": "https://itunes.com/2.mp3",
			"meta_duration": "3:17"
		},
		{
			"name": "Русская дорога2",
			"artist": "Игорь растеряев",
			"album": "Звонарь",
			"url": "img/song/track3.mp3",
			"cover_art_url": "img/mlinks/2.jpg",
			"orig_link": "https://itunes.com/3.mp3",
			"meta_duration": "3:00"
		}
	];


	var playlist = '';
	my_songs.forEach(function (currentValue, index) {
		playlist += '<div class="musicpl-playlist-item amplitude-song-container amplitude-play-pause amplitude-paused amplitude-active-song-container" data-amplitude-song-index="' + index + '"><div class="music-player-mainctrl music-player-mainctrl--playlist"><div class="music-player-mainctrl__pause"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1V11.3C1.9796 11.5451 1.86293 11.7722 1.67552 11.9315C1.4881 12.0908 1.24521 12.1694 1 12.15C0.755385 12.1667 0.513917 12.0872 0.3271 11.9284C0.140283 11.7696 0.0229043 11.5441 0 11.3V1C0.0229043 0.755886 0.140283 0.530383 0.3271 0.371588C0.513917 0.212794 0.755385 0.133278 1 0.15C1.24521 0.130639 1.4881 0.209208 1.67552 0.368511C1.86293 0.527814 1.9796 0.754876 2 1Z" fill="#25378D"/><path d="M8.02 1V11.3C8.02 11.5652 7.91464 11.8196 7.72711 12.0071C7.53957 12.1946 7.28522 12.3 7.02 12.3C6.75478 12.3 6.50043 12.1946 6.31289 12.0071C6.12536 11.8196 6.02 11.5652 6.02 11.3V1C6.02 0.734784 6.12536 0.48043 6.31289 0.292893C6.50043 0.105357 6.75478 0 7.02 0C7.28522 0 7.53957 0.105357 7.72711 0.292893C7.91464 0.48043 8.02 0.734784 8.02 1Z" fill="#25378D"/></svg></div><div class="music-player-mainctrl__play"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99944 5.70019L0.799439 0.700188C0.723555 0.651369 0.636271 0.623135 0.54617 0.618264C0.45607 0.613392 0.366252 0.632051 0.285546 0.672404C0.20484 0.712757 0.136022 0.773416 0.0858583 0.848419C0.0356951 0.923423 0.00591196 1.01019 -0.000563662 1.10019L-0.000565481 11.0002C0.00292167 11.0932 0.0291258 11.1839 0.0757551 11.2644C0.122385 11.345 0.188023 11.4129 0.266936 11.4622C0.34585 11.5115 0.435638 11.5408 0.528461 11.5474C0.621283 11.554 0.71432 11.5378 0.799438 11.5002L7.99944 6.50019C8.06767 6.45809 8.124 6.39924 8.16307 6.32922C8.20215 6.25921 8.22266 6.18037 8.22266 6.10019C8.22266 6.02001 8.20215 5.94117 8.16307 5.87116C8.124 5.80114 8.06767 5.74229 7.99944 5.70019Z" fill="#25378D"/></svg></div></div><div class="custom-audio-playlist__song">' + currentValue['name'] + '</div><div class="custom-audio-playlist__duration">' + currentValue['meta_duration'] + '</div></div>';
	});
	$('.music-player__playlist').append(playlist);



	var soundRS = $('.js-song-progress-slider').rangeslider({
		rangeClass: 'rangeslider soundRS',
		disabledClass: 'rangeslider--disabled soundRS--disabled',
		horizontalClass: 'rangeslider--horizontal soundRS--horizontal',
		verticalClass: 'rangeslider--vertical soundRS--vertical',
		fillClass: 'rangeslider__fill soundRS__fill',
		handleClass: 'rangeslider__handle soundRS__handle',
		polyfill: false,

		onSlide: function (position, value) {
			Amplitude.setSongPlayedPercentage(value)
		},
	});


	var soundRS__progressContainer = $('.soundRS__progress-container');
	var soundRS__fill = $('.soundRS__fill');
	var soundRS__handle = $('.soundRS__handle');

	function changeOrigLink() {
		var idx = Amplitude.getActiveIndex();
		console.log('idx' + idx);
		$('#song-orig-link').attr('href', my_songs[idx]['orig_link']);
	}


	function actualizePlaylist() {
		var idx = Amplitude.getActiveIndex();
		$('.musicpl-playlist-item[data-amplitude-song-index="' + idx + '"]')
			.addClass('amplitude-playing').removeClass('amplitude-paused')
			.siblings('.amplitude-playing')
			.addClass('amplitude-paused').removeClass('amplitude-playing');
	}

	function pausePlaylist() {
		var idx = Amplitude.getActiveIndex();
		$('.musicpl-playlist-item.amplitude-playing').addClass('amplitude-paused').removeClass('amplitude-playing');
	}

	Amplitude.init({
		"songs": my_songs,
		"volume": 100,
		//debug: true,
		callbacks: {
			timeupdate: function () {
				var w = soundRS__progressContainer.width();
				var percentage = Amplitude.getSongPlayedPercentage();
				soundRS__fill.css('width', w / 100 * percentage + 'px');
				soundRS__handle.css('left', 'calc(' + percentage + '% - 0px)');
				//console.log(Amplitude.getSongPlayedPercentage());
			},
			initialized: function () {
				changeOrigLink();
				pausePlaylist();
			},
			song_change: function () {
				changeOrigLink();
				actualizePlaylist();
			},
			stop: function () {
				pausePlaylist();
			},
			pause: function () {
				pausePlaylist();
			},
			play: function () {
				actualizePlaylist();
			}
		}
	});

	var volume_orientation = (window.matchMedia("(min-width: 1351px)").matches) ? 'horizontal' : 'vertical';
	$('.volumeRS-wrap').addClass((window.matchMedia("(min-width: 1351px)").matches) ? 'volumeRS-wrap--horizontal' : 'volumeRS-wrap--vertical');
	var mpVolumeRS_inp = $('.js-volume-slider');
	var mpVolumeRS = mpVolumeRS_inp.rangeslider({
			rangeClass: 'rangeslider volumeRS',
			disabledClass: 'rangeslider--disabled volumeRS--disabled',
			horizontalClass: 'rangeslider--horizontal volumeRS--horizontal',
			verticalClass: 'rangeslider--vertical volumeRS--vertical',
			fillClass: 'rangeslider__fill volumeRS__fill',
			handleClass: 'rangeslider__handle volumeRS__handle',
			orientation: volume_orientation,
			polyfill: false,
			onInit: function () {
				//$(this).rangeslider('update', true);
			}
		})
		.on('input', function () {
			Amplitude.setVolume(this.value);
		});


	$('.musicpl-bottom-controls__volume').click(function () {
		$(this).toggleClass('musicpl-bottom-controls__volume--active');
	});
	$('.volumeRS-wrap').click(function (e) {
		e.stopPropagation(); // предотвращаем всплытие
	}).children().click(function (e) {
		e.stopPropagation(); // предотвращаем всплытие
	});
	$('.volumeRS-wrap').on('mouseleave', function () {
		$(this).parent().removeClass('musicpl-bottom-controls__volume--active');
	});

	mpVolumeRS_inp.rangeslider('update', true);
	setTimeout(function () {
		mpVolumeRS_inp.rangeslider('update', true);
	}, 1000);
	setTimeout(function () {
		mpVolumeRS_inp.rangeslider('update', true);
	}, 2000);


	$('.musicpl-bottom-controls__playlist').click(function () {
		$("#music-player").toggleClass('music-player--playlist-on');
	});
	/*function soundRSevent() {
	};
	setInterval(soundRSevent, 1000);*/

	/*mpVolumeRS.rangeslider({orientation: 'horizontal'});
	mpVolumeRS.rangeslider({orientation: 'horizontal'});
	mpVolumeRS.rangeslider({orientation: 'horizontal'});
	mpVolumeRS.rangeslider({orientation: 'horizontal'});
	mpVolumeRS.rangeslider({orientation: 'horizontal'});*/

	//$("#js-song-progress-slider").rangeslider('update', true);
	Amplitude.setRepeat(true);
	Amplitude.pause();

	$('input, div, progress').on('progress', function () {
		console.log($(this).val());
	});

	/*
		$('.music-player__playlist .custom-audio-playlist__duration').each(function (index, element) {
			console.log(Amplitude.getSongDuration(index));
		});*/
	/*
	//Shows the playlist
	document.getElementsByClassName('show-playlist')[0].addEventListener('click', function () {
		document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
		document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
		document.getElementById('white-player-playlist-container').style.display = "block";
	});

	//Hides the playlist
	document.getElementsByClassName('close-playlist')[0].addEventListener('click', function () {
		document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
		document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
		document.getElementById('white-player-playlist-container').style.display = "none";
	});

*/

	$('.quotes-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});
	$('.hm-feedback-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		prevArrow: '<div class="hm-feedback__arrow hm-feedback__arrow-prev"><img src="../img/hm-feedback/arrow-prev.svg"></div>',
		nextArrow: '<div class="hm-feedback__arrow hm-feedback__arrow-next"><img src="../img/hm-feedback/arrow-next.svg"></div>',
	});
	$('.js-slnewsw-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		prevArrow: '<div class="slnewsw-arrow slnewsw-arrow--prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54416 27.5 0.500001 21.4558 0.500001 14C0.500002 6.54415 6.54416 0.499998 14 0.499999C21.4558 0.499999 27.5 6.54416 27.5 14Z" fill="white" stroke="#AFB4BF"/><path d="M10.1984 13.0936L15.0137 8.17435C15.1079 8.07759 15.232 8.01709 15.3649 8.00311C15.4978 7.98913 15.6314 8.02254 15.7429 8.09766L15.8287 8.17435L15.9038 8.262C15.9665 8.35761 16 8.47011 16 8.5852C16 8.70029 15.9665 8.81279 15.9038 8.9084L15.8287 8.99605C15.8054 9.02717 15.7762 9.05324 15.7429 9.07274L11.8178 13.0936C11.7104 13.2044 11.6501 13.354 11.6501 13.5099C11.6501 13.6659 11.7104 13.8155 11.8178 13.9263L15.7429 17.969L15.8287 18.0457C15.9044 18.1442 15.9455 18.2657 15.9455 18.3908C15.9455 18.516 15.9044 18.6375 15.8287 18.736L15.7537 18.8236L15.6679 18.9003C15.5726 18.9653 15.4607 19 15.3461 19C15.2316 19 15.1196 18.9653 15.0244 18.9003L14.9386 18.8236L10.5201 14.3207L10.1233 13.9044C10.0318 13.7851 9.98861 13.6345 10.0026 13.4837C10.0165 13.3328 10.0866 13.1932 10.1984 13.0936Z" fill="#AFB4BF"/></svg></div>',
		nextArrow: '<div class="slnewsw-arrow slnewsw-arrow--next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.499998 14.001C0.499999 6.54513 6.54416 0.500978 14 0.500979C21.4558 0.50098 27.5 6.54514 27.5 14.001C27.5 21.4568 21.4558 27.501 14 27.501C6.54415 27.501 0.499996 21.4568 0.499998 14.001Z" fill="white" stroke="#AFB4BF"/><path d="M17.8016 14.9074L12.9863 19.8266C12.8921 19.9234 12.768 19.9839 12.6351 19.9979C12.5022 20.0118 12.3686 19.9784 12.2571 19.9033L12.1713 19.8266L12.0962 19.739C12.0335 19.6434 12 19.5309 12 19.4158C12 19.3007 12.0335 19.1882 12.0962 19.0926L12.1713 19.0049C12.1946 18.9738 12.2238 18.9477 12.2571 18.9282L16.1822 14.9074C16.2896 14.7966 16.3499 14.647 16.3499 14.491C16.3499 14.3351 16.2896 14.1855 16.1822 14.0747L12.2571 10.0319L12.1713 9.95525C12.0956 9.85682 12.0545 9.73529 12.0545 9.61013C12.0545 9.48498 12.0956 9.36345 12.1713 9.26502L12.2463 9.17737L12.3321 9.10068C12.4274 9.03567 12.5393 9.00098 12.6539 9.00098C12.7684 9.00098 12.8804 9.03567 12.9756 9.10068L13.0614 9.17737L17.4799 13.6803L17.8767 14.0966C17.9682 14.2159 18.0114 14.3664 17.9974 14.5173C17.9835 14.6681 17.9134 14.8078 17.8016 14.9074Z" fill="#AFB4BF"/></svg></div>',
	});



	$('.sfoo-col__title').click(function () {
		if ((window.matchMedia("(max-width: 1150px)").matches)) {
			$this = $(this);
			$this.toggleClass('sfoo-col__title--open');
			var list = $this.next();
			list.slideToggle(300, function () {
				if (!$this.hasClass('sfoo-col__title--open')) {
					list.attr('style', '');
				}
			});
		}
	});
});