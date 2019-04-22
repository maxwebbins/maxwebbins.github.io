$(document).ready(function() {

	//parallax($('.header-bg'), 0.4);

	heightCalc();

	$('.header-text h1').addClass('animate');
	$('.header-text h2').addClass('animate');

	$('.menu-toggle').on('click', function() {
		$('.sidenav').css('width', '100%');
		$('.sidenav .links').css('opacity', '1');
	});

	$('.sidenav').on('click', function() {
		$('.sidenav').css('width', '0');
		$('.sidenav .links').css('opacity', '0');
	});

	$(window).on('resize', function() {
		heightCalc();
	});

	$('.sidenav .links').mouseover(function(ev){
		let target = $(ev.target);
		let highlight = $('.sidenav .highlight');
		highlight.css('display', 'block');
		if ( target.is('a') ) {
			highlight.css({
				'top':'' + ( target.index() * 72 ) + 'px'
			});
		}

		$(this).mouseout(function(){
			highlight.css('display', 'none');
		});
	});

	$('.portfolio-control li').on('click', function(){
		$('.portfolio-control li').removeClass('active');
		$(this).addClass('active');
	});


	function heightCalc() {
		$('.header').css( 'height', $(window).height() );
	}


	function parallax(target, rate) {
	    $(window).on('scroll', function () {
	        var scroll = $(document).scrollTop();
	        if ( scroll < $(window).height() ) {
		        target.css({
		            'background-position':'50% '+(-rate*scroll)+'px'
		        });        	
	        }
	    });
	}

	var mixer = mixitup('.portfolio-items');

	$('.contact-form form').validate({

	    rules: {
	      // The key name on the left side is the name attribute
	      // of an input field. Validation rules are defined
	      // on the right side
	      contactName: "required",
	      contactMsg: 'required',
	      contactEmail: {
	        required: true,
	        // Specify that email should be validated
	        // by the built-in "email" rule
	        email: true
	      }
	    },
	    // Specify validation error messages
	    messages: {
	      contactName: "*Введите имя",
	      contactEmail: "*Введите действующий email",
	      contactMsg: '*Введите сообщение'
	    }
	    
	});

	$('.portfolio-items img').on('click', function(){
		$('.portfolio-modal').fadeIn(400);
		$('.portfolio-modal img').attr( 'src', $(this).attr('src') );
	});

	$('.portfolio-modal').on('click', function(){
		$('.portfolio-modal').fadeOut(400);
	});

	$(window).on('scroll', function () {
	   let scroll = $(document).scrollTop();

	   if ( scroll + 500 > $('.about-info').offset().top ) {
			$('.about-info').addClass('animate');
	   }

	   if ( scroll + 500 > $('.about-personal').offset().top ) {
			$('.about-personal').addClass('animate');
	   }

	   if ( scroll + 500 > $('.about-photo').offset().top ) {
			$('.about-photo').addClass('animate');
	   }

	   if ( scroll + 500 > $('.resume-work').offset().top ) {
	   		$('.resume-work').addClass('animate');
	   }

	   if ( scroll + 500 > $('.resume-education').offset().top ) {
	   		$('.resume-education').addClass('animate');
	   }

	});



});

$(window).on('load', function(){
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
});