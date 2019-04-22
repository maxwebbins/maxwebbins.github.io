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
	});

	$('.totop').on('click', function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$('.stellarnav').stellarNav({
		theme: 'plain',
		breakpoint: 992,
		menuLabel: 'Menu',
		sticky: false,
		position: 'static',
		openingSpeed: 250,
		closingDelay: 250,
		showArrows: true,
		phoneBtn: '',
		locationBtn: '',
		closeBtn: false,
		scrollbarFix: false
	});

  $(".owl-carousel.top-s").owlCarousel({
  	items: 1,
  	//autoHeight: true,
  	nav: true,
  	dots: false,
  	loop: true,
  	smartSpeed: 500
  });

  $(".owl-carousel.causes-sl").owlCarousel({
  	responsive: {
  		768: {
  			items: 2
  		}		
  	},
  	items: 1,
  	margin: 15,
  	loop: true,
  	autoplay: true,
  	autoplayHoverPause: true,
  	smartSpeed: 500
  });

  $('.bxslider').bxSlider({
    mode: 'vertical',
    captions: false,
    pager: false,
    minSlides: 2,
    slideMargin: 15,
    maxSlides: 2,
    nextText: '',
    prevText: '',
    slideWidth: 600
  });

  modalSlider();

  function modalSlider(){

	  var arrImgs = [];
	  var currentSlide = 0;
	  var imgNameArr = $('.gallery-modal img').attr('src').split('/');

	  var touchstartX = 0;
		var touchendX = 0;

		document.querySelector('.gallery-modal').addEventListener('touchstart', function(event) {
	    touchstartX = event.changedTouches[0].screenX;
		}, false);

		document.querySelector('.gallery-modal').addEventListener('touchend', function(event) {
	    touchendX = event.changedTouches[0].screenX;
	    handleGesture();
		}, false); 

		function handleGesture() {
	    if ( touchstartX - touchendX > 70 ) {
	       $('.gallery-modal .next').trigger('click');
	    }
	    
	    if ( touchendX - touchstartX > 70 ) {
	        $('.gallery-modal .prev').trigger('click');
	    }

		}

	  $('.gallery-item button').on('click', function(){

	  	$('.gallery-modal').css('display', 'block');
	  	imgNameArr[imgNameArr.length - 1] = $(this).data('img') + '.jpg';
	  	currentSlide = $(this).data('id');

	  	$('.gallery-modal img').attr('src', imgNameArr.join('/'));

	  });

	  $('.gallery-item button').each(function(){
	  	arrImgs.push($(this).data('img'));
	  });

	  $('.gallery-modal').on('click', function(event){
	  	
	  	if ( event.target == event.currentTarget ) $('.gallery-modal').css('display', 'none');

	  });

	  $('.gallery-modal .close').on('click', function(event){
	  	
	  	$('.gallery-modal').css('display', 'none');

	  });

	  $('.gallery-modal .next').on('click', function(){
	  	if ( currentSlide == arrImgs.length - 1) {
	  		currentSlide = 0;
	  	} else {
	  		currentSlide++;
	  	}
	  	
	  	imgNameArr[imgNameArr.length - 1] = arrImgs[currentSlide] + '.jpg';
	  	$('.gallery-modal img').attr('src', imgNameArr.join('/'));
	  });

	  $('.gallery-modal .prev').on('click', function(){

	  	if ( currentSlide == 0) {
	  		currentSlide = arrImgs.length - 1;
	  	} else {
	  		currentSlide--;
	  	}
	  	
	  	imgNameArr[imgNameArr.length - 1] = arrImgs[currentSlide] + '.jpg';
	  	$('.gallery-modal img').attr('src', imgNameArr.join('/'));
	  });


  	
  }



});
