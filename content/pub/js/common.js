$(function() {

	var mmTriggered = false;

	var scrlWidth = window.innerWidth - $(document).width();

	$('.hamburger').on('click', function(){

		if (!mmTriggered)  {

			mmTriggered = true;
			
			$('#my-menu').css('display', 'block');

			$('#my-menu').mmenu({
				extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
				navbar: {
					title: '<img src="img/logo-1.svg" alt="best PUB ever">'
				},
				hooks: {
					'open:finish': function(){
						$('.hamburger').addClass('is-active');
					},
					'close:finish': function(){
						$('.hamburger').removeClass('is-active');
					}
				}
			});

			/*var mmAPI = $('#my-menu').data('mmenu');

			mmAPI.bind('open:finish', function () {
				$('.hamburger').addClass('is-active');
			});
			mmAPI.bind('close:finish', function () {
				$('.hamburger').removeClass('is-active');
			});*/

		}


	});

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselService();
		}, 100);
	});

	$('.carousel-testimonials').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		dots: true,
		autoHeight: true
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	function carouselService(){
		$('.carousel-services-item').each(function(){
			var h = $(this).find('.carousel-services-content').outerHeight();			
			$(this).find('.carousel-services-img').css('min-height', h);				
		});
	}

	carouselService();
	carouselEqualHeights();

	function carouselEqualHeights(){
		var arr = [];
		var maxH = 0;
		$('.carousel-services-item').each(function(){
			var elemHeight = $(this).find('.carousel-services-content').outerHeight();
			arr.push(elemHeight);	
		});
		maxH = Math.max.apply(null,arr);
		$('.carousel-services-item').each(function(){
			$(this).find('.carousel-services-content').css('min-height', maxH);
		});
	}

	$('section .h2').each(function(){
		var arr = $(this).text().split(' ');
		var str = '';
		for (var i = 1; i < arr.length; i++) {
			str+= arr[i] + ' ';
		}
		$(this).html('<span>' + arr[0] + '</span> ' + str);
	});

	$('select').selectize({
		create: true
	});

	//E-mail Ajax Send
	$("form.book").submit(function() { //Change
		var th = $(this);
		th.find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			th.find('.success').removeClass('active').fadeOut();
		}, 3000);
		/*$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('.active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('.active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});*/
		return false;
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
	})

	$(window).on('resize', function(){
		setTimeout(function(){
			carouselService();
			carouselEqualHeights();
		},100);
	});

	$(window).on('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});

});
