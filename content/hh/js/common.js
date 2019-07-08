/*document.addEventListener("DOMContentLoaded", function(event) {



	function getRandomArbitrary(min, max) {
	 return Math.random() * (max - min) + min;
 }


 function isInViewport(elem){
	 let elemTop = getCoords(elem).top;
	 let viewportTop = window.pageYOffset;
	 let viewportBottom = window.pageYOffset + document.documentElement.clientHeight;

	 return viewportBottom > elemTop && viewportTop < elemTop;
 }

 function getCoords(elem) {
 
	 let box = elem.getBoundingClientRect();

	 return {
		 top: box.top + pageYOffset,
		 left: box.left + pageXOffset
	 };

 }

 window.onscroll = function(){

	 for (let i = 0; i < titleCover.length; i++) {

		 if ( isInViewport(titleCover[i]) && !titleCover[i].classList.contains('shown') ) {
			 titleCover[i].classList.add('shown');
			 console.log('triggered');
		 }

	 }
 }



});*/

jQuery(document).ready(function(){

	/*$(window).on('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});*/

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

	$(document).on('click', function(event){

		var delay = 100;
		var target = $(event.target);
		var menuBtn = $('nav .show-menu .blocks');

		if ( target.is(menuBtn) || target.is(menuBtn.children()) ) {

			if ( menuBtn.hasClass('active') ) {
				menuBtn.removeClass('active');
				$('.menu a').removeClass('shown');
				return;
			}
			menuBtn.addClass('active');
	
			$('.menu a').each(function(){
				var self = $(this);
				setTimeout(function(){
					self.addClass('shown');
				}, delay);
				delay += 100;
			});

		} else {
			menuBtn.removeClass('active');
			$('.menu a').removeClass('shown');
		}

	});

	$('.menu a').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

	$('.totop').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop: 0}, 1000);
	});

	$('.slider_1.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop: true,
		lazyLoad: true,
		smartSpeed: 500,
		autoplay: true,
		autoplayHoverPause: true,
		navContainer: '.slider_1-control'
	});

	var mixer = mixitup('.projects-shuffle');

});

