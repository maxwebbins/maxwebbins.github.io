$(function() {

	$(window).on('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});

	$(window).on('scroll', function(){
		if( $(this).scrollTop() > $(this).height() ) {
			$('.totop').addClass('active');
		} else {
			$('.totop').removeClass('active');
		}

		if ( $(this).scrollTop() > $('.header-top').height() ) {
			$('nav').addClass('active');
		} else {
			$('nav').removeClass('active');
		}
	});

	$('.mui-toggle button').on('click', function(){
		$('nav .links').css('display', 'block');
	});

	$('nav .links').after().on('click', function(){
		$('nav .links').css('display', '');
	});

	$('.totop').on('click', function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


 	$('.video button').on('click', function() {
 		$('.video-modal').css('display', 'block');
 		$('body').css('margin-right', (window.innerWidth - $('body').width()) + 'px');
 		$('body').css('overflow-y','hidden');
 		$('.video-modal iframe').attr('src', 'https://www.youtube.com/embed/GfblQtZi4Ms');
 	});

 $('.video-modal').on('click', function() {
 		$('.video-modal').css('display', 'none');
 		$('body').css('margin-right', '');
 		$('body').css('overflow-y','auto');
 		$('.video-modal iframe').attr('src', $('.video-modal iframe').attr('src'));
 	});

	$('.slider_1').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		smartSpeed: 500
	});

	$('.slider_2').bxSlider({
		mode: 'fade',
		startSlide: 1,
		captions: true,
		nextText: '',
		prevText: '',
		pager: true
	});

});
