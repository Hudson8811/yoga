
var plListScrollbar;

$(document).ready(function () {


	if (typeof my_albums !== 'undefined') {
		var activeAlbum = 0;
		function generatePlaylist(activeAlbum){
			let playlist = '';
			my_albums[activeAlbum].my_songs.forEach(function (currentValue, index) {
				playlist += '<div class="musicpl-playlist-item amplitude-song-container amplitude-play-pause amplitude-paused amplitude-active-song-container" data-amplitude-song-index="' + index + '"><div class="music-player-mainctrl music-player-mainctrl--playlist"><div class="music-player-mainctrl__pause"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1V11.3C1.9796 11.5451 1.86293 11.7722 1.67552 11.9315C1.4881 12.0908 1.24521 12.1694 1 12.15C0.755385 12.1667 0.513917 12.0872 0.3271 11.9284C0.140283 11.7696 0.0229043 11.5441 0 11.3V1C0.0229043 0.755886 0.140283 0.530383 0.3271 0.371588C0.513917 0.212794 0.755385 0.133278 1 0.15C1.24521 0.130639 1.4881 0.209208 1.67552 0.368511C1.86293 0.527814 1.9796 0.754876 2 1Z" fill="#25378D"/><path d="M8.02 1V11.3C8.02 11.5652 7.91464 11.8196 7.72711 12.0071C7.53957 12.1946 7.28522 12.3 7.02 12.3C6.75478 12.3 6.50043 12.1946 6.31289 12.0071C6.12536 11.8196 6.02 11.5652 6.02 11.3V1C6.02 0.734784 6.12536 0.48043 6.31289 0.292893C6.50043 0.105357 6.75478 0 7.02 0C7.28522 0 7.53957 0.105357 7.72711 0.292893C7.91464 0.48043 8.02 0.734784 8.02 1Z" fill="#25378D"/></svg></div><div class="music-player-mainctrl__play"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99944 5.70019L0.799439 0.700188C0.723555 0.651369 0.636271 0.623135 0.54617 0.618264C0.45607 0.613392 0.366252 0.632051 0.285546 0.672404C0.20484 0.712757 0.136022 0.773416 0.0858583 0.848419C0.0356951 0.923423 0.00591196 1.01019 -0.000563662 1.10019L-0.000565481 11.0002C0.00292167 11.0932 0.0291258 11.1839 0.0757551 11.2644C0.122385 11.345 0.188023 11.4129 0.266936 11.4622C0.34585 11.5115 0.435638 11.5408 0.528461 11.5474C0.621283 11.554 0.71432 11.5378 0.799438 11.5002L7.99944 6.50019C8.06767 6.45809 8.124 6.39924 8.16307 6.32922C8.20215 6.25921 8.22266 6.18037 8.22266 6.10019C8.22266 6.02001 8.20215 5.94117 8.16307 5.87116C8.124 5.80114 8.06767 5.74229 7.99944 5.70019Z" fill="#25378D"/></svg></div></div><div class="custom-audio-playlist__song">' + currentValue['name'] + '</div><div class="custom-audio-playlist__duration">' + currentValue['meta_duration'] + '</div></div>';
			});
			my_albums[activeAlbum].my_songs_pseudo.forEach(function (currentValue, index) {
				playlist += '<div class="musicpl-playlist-item musicpl-playlist-item--pseudo amplitude-paused" style="pointer-events:none;"><div class="music-player-mainctrl music-player-mainctrl--playlist"><div class="music-player-mainctrl__pause"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1V11.3C1.9796 11.5451 1.86293 11.7722 1.67552 11.9315C1.4881 12.0908 1.24521 12.1694 1 12.15C0.755385 12.1667 0.513917 12.0872 0.3271 11.9284C0.140283 11.7696 0.0229043 11.5441 0 11.3V1C0.0229043 0.755886 0.140283 0.530383 0.3271 0.371588C0.513917 0.212794 0.755385 0.133278 1 0.15C1.24521 0.130639 1.4881 0.209208 1.67552 0.368511C1.86293 0.527814 1.9796 0.754876 2 1Z" fill="#25378D"/><path d="M8.02 1V11.3C8.02 11.5652 7.91464 11.8196 7.72711 12.0071C7.53957 12.1946 7.28522 12.3 7.02 12.3C6.75478 12.3 6.50043 12.1946 6.31289 12.0071C6.12536 11.8196 6.02 11.5652 6.02 11.3V1C6.02 0.734784 6.12536 0.48043 6.31289 0.292893C6.50043 0.105357 6.75478 0 7.02 0C7.28522 0 7.53957 0.105357 7.72711 0.292893C7.91464 0.48043 8.02 0.734784 8.02 1Z" fill="#25378D"/></svg></div><div class="music-player-mainctrl__play"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99944 5.70019L0.799439 0.700188C0.723555 0.651369 0.636271 0.623135 0.54617 0.618264C0.45607 0.613392 0.366252 0.632051 0.285546 0.672404C0.20484 0.712757 0.136022 0.773416 0.0858583 0.848419C0.0356951 0.923423 0.00591196 1.01019 -0.000563662 1.10019L-0.000565481 11.0002C0.00292167 11.0932 0.0291258 11.1839 0.0757551 11.2644C0.122385 11.345 0.188023 11.4129 0.266936 11.4622C0.34585 11.5115 0.435638 11.5408 0.528461 11.5474C0.621283 11.554 0.71432 11.5378 0.799438 11.5002L7.99944 6.50019C8.06767 6.45809 8.124 6.39924 8.16307 6.32922C8.20215 6.25921 8.22266 6.18037 8.22266 6.10019C8.22266 6.02001 8.20215 5.94117 8.16307 5.87116C8.124 5.80114 8.06767 5.74229 7.99944 5.70019Z" fill="#25378D"/></svg></div></div><div class="custom-audio-playlist__song">' + currentValue['name'] + '</div><div class="custom-audio-playlist__duration">' + currentValue['meta_duration'] + '</div></div>';
			});
			$('#music-player__playlist-inner').html(playlist);
		}


		generatePlaylist(activeAlbum);

		var logos = '';
		my_albums.forEach(function (currentValue, index) {
			logos += '<div class="mpl-icon-slider__slide" data-index="' + index + '"><img src="' + currentValue['cover_art_url'] + '" alt="' + currentValue['album'] + '"></div>';
		});
		$('#mpl-icon-slider').append(logos);

		//слайдер изображений альбомов
		var mplIconSlider = $('#mpl-icon-slider').slick({
			infinite: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 600,
			touchMove: false,
			arrows: false,
			accessibility: false
		});



		//перемотка
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


		//установка ноты
		function changeOrigLink(idx) {
			$('#song-orig-link').attr('href', my_albums[idx]['orig_link']);
		}

		//обновление стилей плейлиста
		function actualizePlaylist() {
			var idx = Amplitude.getActiveIndex();
			$('.musicpl-playlist-item[data-amplitude-song-index="' + idx + '"]')
				.addClass('amplitude-playing').removeClass('amplitude-paused')
				.siblings('.amplitude-playing')
				.addClass('amplitude-paused').removeClass('amplitude-playing');
		}

		//все стили на паузу
		function pausePlaylist() {
			$('.musicpl-playlist-item.amplitude-playing').addClass('amplitude-paused').removeClass('amplitude-playing');
		}

		//обновление времени
		function updateCustomDuration(albumIndex, indexSong) {
			var dur = my_albums[albumIndex].my_songs[indexSong]['meta_duration'].split(':');
			$('#amplitude-custom-duration-minutes').html(dur[0]);
			$('#amplitude-custom-duration-seconds').html(dur[1]);
		}

		updateCustomDuration(activeAlbum,0);


		var startPlaylist = JSON.parse(JSON.stringify(my_albums[activeAlbum].my_songs));
			//инициализация плеера
		function initPlayer() {
			Amplitude.init({
				"songs": startPlaylist,
				"volume": 100,
				//debug: true,
				preload :"none",
				callbacks: {
					timeupdate: function () {
						var w = soundRS__progressContainer.width();
						var percentage = Amplitude.getSongPlayedPercentage();
						soundRS__fill.css('width', w / 100 * percentage + 'px');
						soundRS__handle.css('left', 'calc(' + percentage + '% - 0px)');

						$('#amplitude-custom-current-minutes').html(Math.floor(Amplitude.getSongPlayedSeconds() / 60).toString());
					},
					initialized: function () {
						changeOrigLink(activeAlbum);
						pausePlaylist();
						//updateCustomDurationMinutes();
					},
					song_change: function () {
						$('#music-player').addClass('music-player--lock');

						var idx = Amplitude.getActiveIndex();

						//$('#mpl-icon-slider').slick('slickGoTo', idx);

						//var slide_idx = $('#mpl-icon-slider').slick('slickCurrentSlide');
						//var count = $('#mpl-icon-slider').slick('getSlick').slideCount;
						/*console.log(idx);
						console.log(slide_idx);
						console.log(count-1);
						console.log('------');*/

						/*if (count - 1 === slide_idx && idx === 0) {
							$('#mpl-icon-slider').slick('slickNext');
						} else {
							if (count - 1 === idx && slide_idx === 0) {
								$('#mpl-icon-slider').slick('slickPrev');
							} else {
								$('#mpl-icon-slider').slick('slickGoTo', idx);
							}
						}*/
						actualizePlaylist();
						updateCustomDuration(activeAlbum, idx);
						setTimeout(function () {
							$('#music-player').removeClass('music-player--lock');
						}, 350);

					},
					stop: function () {
						pausePlaylist();
						//updateCustomDurationMinutes();
					},
					pause: function () {
						pausePlaylist();
						//updateCustomDurationMinutes();
					},
					play: function () {
						actualizePlaylist();
						//updateCustomDurationMinutes();
					}
				}
			});

			Amplitude.setRepeat(true);
			Amplitude.stop();
		}

		initPlayer();



		$('.music-player-top__arrow--next').on('click',function (){
			$('#mpl-icon-slider').slick('slickNext');
		});
		$('.music-player-top__arrow--prev').on('click',function (){
			$('#mpl-icon-slider').slick('slickPrev');
		});

		$('#mpl-icon-slider').on('afterChange', function (event, slick, currentSlide) {
			let isPlay = Amplitude.getPlayerState();
			Amplitude.stop();
			removeAllSongs(activeAlbum);
			activeAlbum = currentSlide;
			addAllSongs(activeAlbum);
			generatePlaylist(activeAlbum);
			changeOrigLink(activeAlbum);
			actualizePlaylist();
			initPlayer();
			updateCustomDuration(activeAlbum,0);
			if (isPlay === 'playing') {
				Amplitude.play();
				$('.amplitude-paused').removeClass('amplitude-paused').addClass('amplitude-playing');
			}
			//Amplitude.playSongAtIndex(currentSlide);
		});
		$('#music-player__swipe-area').on("swipeleft", function (event) {
			//Amplitude.next();
			$('#mpl-icon-slider').slick('slickNext');
		});
		$('#music-player__swipe-area').on("swiperight", function (event) {
			//Amplitude.prev();
			$('#mpl-icon-slider').slick('slickPrev');
		});



		//настройка громкости
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

		var prevState = (window.matchMedia("(min-width: 1351px)").matches) ? 'hor' : 'vert';

		$(window).on('resize', function (e) {
			if (prevState !== ((window.matchMedia("(min-width: 1351px)").matches) ? 'hor' : 'vert')) {
				prevState = ((window.matchMedia("(min-width: 1351px)").matches) ? 'hor' : 'vert');
				mpVolumeRS_inp.rangeslider('destroy');
				volume_orientation = (window.matchMedia("(min-width: 1351px)").matches) ? 'horizontal' : 'vertical';
				$('.volumeRS-wrap').removeClass('volumeRS-wrap--horizontal').removeClass('volumeRS-wrap--vertical').addClass((window.matchMedia("(min-width: 1351px)").matches) ? 'volumeRS-wrap--horizontal' : 'volumeRS-wrap--vertical');
				setTimeout(function () {
					mpVolumeRS = mpVolumeRS_inp.rangeslider({
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
				}, 250);
			}
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


		$(document).click(function (e) {
			if ($(e.target).closest('.musicpl-bottom-controls__volume').length > 0) {
				// клик внутри элемента
				//return;
			} else {
				$('.musicpl-bottom-controls__volume').removeClass('musicpl-bottom-controls__volume--active');
			}

			if ($(e.target).closest('#music-player__playlist,#music-player__playlist-container-2, .musicpl-bottom-controls__playlist').length > 0) {
				// клик внутри элемента
				//return;
			} else {
				//console.log('close2');
				$("#music-player__playlist-container-2").slideUp(500);
				$("#music-player__playlist-container-2").removeClass('music-player__playlist-container-2--show-line');
				setTimeout(function () {
					$("#music-player").removeClass('music-player--playlist-on');
					$("#music-player__playlist .musicpl-playlist-item--visible").removeClass('musicpl-playlist-item--visible');
				}, 500);
			}

		});

		mpVolumeRS_inp.rangeslider('update', true);
		setTimeout(function () {
			mpVolumeRS_inp.rangeslider('update', true);
		}, 1000);
		setTimeout(function () {
			mpVolumeRS_inp.rangeslider('update', true);
		}, 2000);


		function removeAllSongs(activeAlbum){
			let count = my_albums[activeAlbum].my_songs.length;
			for (let i = count; i >= 0; i--) {
				Amplitude.removeSong(i);
			}
		}

		function addAllSongs(activeAlbum){
			let count = my_albums[activeAlbum].my_songs.length;
			for (let i = 0; i < count; i++) {
				Amplitude.addSong( my_albums[activeAlbum].my_songs[i] );
			}
		}





		$('.musicpl-bottom-controls__playlist').click(function () {
			if (!$("#music-player").hasClass('music-player--playlist-on')) {
				//console.log('open1');
				$("#music-player").addClass('music-player--playlist-on');
				$("#music-player__playlist-container-2").slideDown(500);
				//console.log('open1end');
				setTimeout(function () {
					$("#music-player__playlist-container-2").addClass('music-player__playlist-container-2--show-line');
					$("#music-player__playlist .musicpl-playlist-item").addClass('musicpl-playlist-item--visible');
					plListScrollbar.recalculate();
				}, 500);

			} else {
				//console.log('close1');
				$("#music-player__playlist-container-2").slideUp(500);
				$("#music-player__playlist-container-2").removeClass('music-player__playlist-container-2--show-line');
				setTimeout(function () {
					$("#music-player").removeClass('music-player--playlist-on');
					$("#music-player__playlist .musicpl-playlist-item--visible").removeClass('musicpl-playlist-item--visible');
				}, 500);
			}
		});


		plListScrollbar = new SimpleBar($('#music-player__playlist-inner')[0], {
			autoHide: false,
			classNames: {
				content: 'simplebar-content',
				scrollContent: 'simplebar-scroll-content',
				scrollbar: 'simplebar-scrollbar',
				track: 'simplebar-track'
			}
		});
	}
});