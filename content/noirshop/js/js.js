 document.addEventListener("DOMContentLoaded", function(event) {

 	topSlider();
 	productsFilter();
 	discountTimer();
 	showModalProducts();
 	carousel( document.querySelector('.carousel'), 4, 3, 2, 1);
 	carousel( document.querySelector('.carousel_01'), 3, 2, 1, 1);
 	carousel( document.querySelector('.carousel_02'), 1 ); 	

 	var latestNewsBlockText = document.querySelectorAll('.latest_news-block-text');

 	for (var i = 0; i < latestNewsBlockText.length; i++) {
 		if ( latestNewsBlockText[i].innerHTML.length > 200 ) {
 			latestNewsBlockText[i].innerHTML = latestNewsBlockText[i].innerHTML.slice(0, 197) + '...';
 		}
 	}

 	var topSearch = document.querySelector('.navigation-account-search'),
 		topSearchBtn = document.querySelector('.navigation-account-lens');   

 	document.addEventListener('click', function(ev){
 		/*if ( ev.target.className == 'navigation-account-lens' || ev.target.className == 'navigation-account-search-field' ) {
 			topSearch.style.display = 'block';
 			setTimeout(function(){
 				topSearch.style.opacity = '1';
 			}, 20);
 		} else {
 			topSearch.style.opacity = '0';
 			setTimeout(function(){
 				topSearch.style.display = 'none';
 			}, 500);
 		}*/
 		switch ( ev.target.className ) {
			case 'navigation-account-lens':
				topSearch.style.display = 'block';
	 			setTimeout(function(){
	 				topSearch.style.opacity = '1';
	 			}, 20);
			break;

			case 'navigation-account-search-field':
				topSearch.style.display = 'block';
			break;

			default:
				topSearch.style.opacity = '0';
	 			setTimeout(function(){
	 				topSearch.style.display = 'none';
	 			}, 500);
			break;
		}	
 	});

 	var navigation = document.querySelector('.navigation'),
 		navStickyToggle = navigation.querySelector('.navigation-stickyToggle');

 	navStickyToggle.addEventListener('click', function(){
 		navigation.classList.toggle('shown');
 	});


 	window.onscroll = function(){

 		( window.pageYOffset >= 50  ) ? navigation.classList.add('sticky') : navigation.classList.remove('sticky');
 	}

 	function showModalProducts(){

	 	var modal = document.querySelector('.products-blocks-modal'),
	 		closeModal = modal.querySelector('.close'),
			modalImg = modal.querySelector('.modal-content'),
			modalCaption = modal.querySelector('.modal-caption'), 
			showImgBtns = document.querySelectorAll('.products-block-btns-img-show');

		closeModal.onclick = function(){
			 modal.style.display = "none";
		}

		for (var i = 0; i < showImgBtns.length; i++) {
			showImgBtns[i].addEventListener('click', function(){
				var img = this.parentNode.parentNode.getElementsByTagName('IMG')[0];
				modal.style.display = "block";
				modalImg.src = img.src;
				modalCaption.innerHTML = img.alt;
			});
		}
 	}

 	function carousel(carousel, iShown, iShown980, iShown680, iShown480) {

	 	var carouselContainer = carousel.querySelector('.carousel-container'),
	 		carouselItems = carouselContainer.children,
	 		carouselNext = carousel.querySelector('.next'),
	 		carouselPrev = carousel.querySelector('.prev'),

	 	//amount of elements in visible area
	 		itemsShown = iShown,
	 	//clicks before returing to starting position
	 		restrictedClicks = Math.ceil(carouselContainer.children.length / itemsShown - 1), 
	 	//serial number of block containing -itemsShown- elements
	 		currentPosition = 1, 

	 		windowWidth = document.body.clientWidth;

		//set the width of slider equal to body width to fill all available area
	 	carousel.style.width = windowWidth + 'px'; 

	 	//set the same width to all slider elements to fit them nicely in slider area
	 	setElemWidth();
	 	function setElemWidth() {
		 	for (var i = 0; i < carouselItems.length; i++) {
		 		carouselItems[i].style.width = windowWidth/itemsShown + 'px';
		 	}	 		
	 	}

	 	//function change amount of shown slides. Call at run time and every time on resize
	 	cahngeAmountItemsShown();
	 	function cahngeAmountItemsShown() {
	 		if ( windowWidth < 980 && windowWidth > 680 ) {
	 			if (iShown980) {
	 				itemsShown = iShown980;
	 			} else {
	 				return false;
	 			}
	 			setElemWidth();
	 			restrictedClicks = Math.ceil(carouselContainer.children.length / itemsShown - 1);
	 		} else if ( windowWidth < 680 && windowWidth > 480 ) {
	 			if (iShown680) {
	 				itemsShown = iShown680;
	 			} else {
	 				return false;
	 			}
	 			setElemWidth();
	 			restrictedClicks = Math.ceil(carouselContainer.children.length / itemsShown - 1);
	 		} else if ( windowWidth < 480 ) {
	 			if (iShown480) {
	 				itemsShown = iShown480;
	 			} else {
	 				return false;
	 			}
	 			setElemWidth();
	 			restrictedClicks = Math.ceil(carouselContainer.children.length / itemsShown - 1);
	 		} else {
	 			itemsShown = iShown;
	 			setElemWidth();
	 			restrictedClicks = Math.ceil(carouselContainer.children.length / itemsShown - 1);
	 		}
	 	}

	 	window.addEventListener('resize', function(){

	 		windowWidth = document.body.clientWidth; 

		 	carousel.style.width = windowWidth + 'px'; 

		 	setElemWidth();

		 	clickNext();

		 	cahngeAmountItemsShown(); 		
	 	});


	 	function clickNext() {
	 		//if the end of carousel is reached return to starting position else show next block of elements
	 		if( currentPosition > restrictedClicks ) {
	 			carouselContainer.style.transform = 'translate(0,0)';
	 			currentPosition = 1;
	 		} else {
	 			carouselContainer.style.transform = 'translate(-'+windowWidth * currentPosition+'px,0)';
	 			currentPosition++;
	 		}
	 	}

	 	function clickPrev() {
	 		//if button is clicked while on starting position then show the last block of elements else show previous
	 		if( currentPosition === 1 ) {
	 			carouselContainer.style.transform = 'translate(-'+windowWidth * restrictedClicks+'px,0)';
	 			currentPosition = restrictedClicks + 1;
	 		} 

	 		else {
	 			carouselContainer.style.transform = 'translate(-'+windowWidth * (currentPosition - 2) +'px,0)';
	 			currentPosition--;
	 		}
	 	}

	 	carouselNext.addEventListener('click', function(){
	 		clickNext();
	 	});

	 	carouselPrev.addEventListener('click', function(){
	 		clickPrev();
	 	});	

 	}

 	function discountTimer() {

	 	var currentDate = new Date(),
	 		countDownDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0, 0).getTime(),
	 		hoursContainer = document.querySelector('.deals-sale-timer-h li:first-of-type'),
	 		minsContainer = document.querySelector('.deals-sale-timer-m li:first-of-type'),
	 		secsContainer = document.querySelector('.deals-sale-timer-s li:first-of-type');

	 	update();

	 	var countDownId = setInterval(function(){

	 		update();

	 	}, 1000);
 		
	 	function update() {
	 		var now = new Date().getTime(),
	 			distance = countDownDate - now,
		    	seconds = Math.floor( distance/1000 % 60 ),
		    	minutes = Math.floor( distance/1000/60 % 60 ),
	   			hours = Math.floor( (distance/(1000*60*60)) % 24 );

	   		if ( minutes < 10 ) {
	   			minsContainer.innerHTML = '0'+minutes;
	   		} else {
	   			minsContainer.innerHTML = minutes;
	   		}

	   		if ( seconds < 10 ) {
	   			secsContainer.innerHTML = '0'+seconds;
	   		} else {
	   			secsContainer.innerHTML = seconds;
	   		}

	    	hoursContainer.innerHTML = hours;
	 	}

 	}


 	function topSlider() {

	 	var slider = document.getElementById('slider_1'),
	 		slides = slider.getElementsByClassName('slides')[0],
	 		slidesColletion = slides.children,
	 		slideIndex = slidesColletion.length - 1,
	 		infoSlides = slider.getElementsByClassName('info-slides')[0],
	 		infoSlidesCollection = infoSlides.children,
	 		infoIndex = 0;

	 	for (var i = 0; i < slidesColletion.length; i++) {
	 		slidesColletion[i].style.transition = "opacity 2s ease 0s, transform 2s ease 0s";

	 	}

	 	function slideShow(){
	 		slidesColletion[slideIndex].style.opacity = '0';
	 		slidesColletion[slideIndex].style.transform = 'scale(0.8)';
	 		setTimeout(function(){
	 			slidesColletion[slideIndex].style.opacity = '1';
	 			slidesColletion[slideIndex].style.transform = 'scale(1)';
	 			slidesColletion[slideIndex].parentNode.insertBefore(slidesColletion[slideIndex], slidesColletion[0]);
	 		}, 2000);
	 	}

	 	function infoShow(){
	 		for (var i = 0; i < infoSlidesCollection.length; i++) {
	 			infoSlidesCollection[i].style.display = 'none';
	 		}

	 		if ( infoIndex > infoSlidesCollection.length - 1 ) {
	 			infoIndex = 0;
	 			infoSlidesCollection[infoIndex].style.display = 'block';	
	 			infoIndex++;
	 		} else {
	 			infoSlidesCollection[infoIndex].style.display = 'block';	
	 			infoIndex++;
	 		}

	 	}

	 	infoShow();

	 	var paused = false;

	 	var timerId = setTimeout(function tick(){
	 		if ( !paused ) {
	 			infoShow();
	 			slideShow();
	 		}
	 		timerId = setTimeout(tick, 6000);
	 	}, 6000);
	 		

	 	slider.addEventListener('mouseover', function(){
	 		paused = true;
	 	});

	 	slider.addEventListener('mouseout', function(){
	 		paused = false;
	 	});	
 			
 	}


 	function productsFilter() {

	 	var productsNavigation = document.querySelector('.products-navigation'),
	 		productsNavigationBtns = document.querySelectorAll('.products-navigation button'),
	 		productsBlock = document.querySelectorAll('.products-block');

	 	productsNavigation.addEventListener('click', function(ev){
	 		if (ev.target.tagName.toUpperCase() == 'BUTTON') {

	 			var type = ev.target.dataset.type;

	 			for (var i = 0; i < productsNavigationBtns.length; i++) {
	 				productsNavigationBtns[i].classList.remove('active');
	 			}
	 			
	 			ev.target.classList.add('active');

	 			if ( type == 'all' ) {

	 				for (var i = 0; i < productsBlock.length; i++) {
	 					productsBlock[i].style.display = 'block';
	 				}

	 			} else {

		 			for (var i = 0; i < productsBlock.length; i++) {


		 				if ( !(productsBlock[i].dataset.type == type) )  {
		 					productsBlock[i].style.display = 'none';
		 				} else {
		 					productsBlock[i].style.display = 'block';
		 				}
		 				

		 			}

	 			}

	 		};
	 	});

 	}


 });

document.body.onload = function(){
 	setTimeout(function(){
 		document.getElementById('preloader-main').classList.add('loaded');
 	}, 200);
}