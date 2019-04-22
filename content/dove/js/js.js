 document.addEventListener("DOMContentLoaded", function(event) {

 	/*=========ONSCROLL ANIMATIONS============*/

 	var nav = document.querySelector('.nav'),
		tabbed = document.querySelector('.tabbed'),
		tabbedFirstElem = tabbed.querySelector('.tabbed-img'),
		tabbedSecondElem = tabbed.querySelector('.tabbed-info'),
 		accordion = document.querySelector('.accordion'),
 		accordionFirstElem = accordion.querySelector('.accordion-img'),
		accordionSecondElem = accordion.querySelector('.accordion-info'),
 		odometer = document.querySelectorAll('.odometer'),
 		stat = document.querySelector('.stats ');

 	window.onscroll = function() {
 		( document.documentElement.scrollTop > 80 ) ? nav.classList.add('active') : nav.classList.remove('active');
 		
 		if ( isInViewport(tabbed) && !tabbedFirstElem.classList.contains('shown') ) {
 			tabbedFirstElem.classList.add('shown');
 			tabbedSecondElem.classList.add('shown');
 			//console.log('triggered');
 		}
		

 		if ( isInViewport(accordion) && !accordionFirstElem.classList.contains('shown') ) {
 			accordionFirstElem.classList.add('shown');
 			accordionSecondElem.classList.add('shown');
 			//console.log('triggered');
 		}		

 		if ( isInViewport(stat) && !stat.classList.contains('shown') ) {
 			//console.log('triggered');
 			stat.classList.add('shown');
 			for (var i = 0; i < odometer.length; i++) {
 				odometer[i].style.display = 'inline-block';
 			}
 		}
 	}

 	function isInViewport(elem){
		var elemTop = getCoords(elem).top;
		var elemBottom = getCoords(elem).bottom;
		var viewportTop = window.pageYOffset;
		var viewportBottom = window.pageYOffset + document.documentElement.clientHeight;

		return viewportBottom - 400 > elemTop && viewportTop + 400 < elemBottom;
	}

	function getCoords(elem) {
	
		var box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
			bottom: box.top + box.height + pageYOffset
		};

	}

 	/*=========ONSCROLL ANIMATIONS/============*/

 	/*=========MODAL VIDEO============*/

 	var videoBtn = document.querySelector('.video-btn'),
 		videoModal = document.querySelector('.video-modal'),
 		videoModalClose = videoModal.querySelector('.close'),
 		videoModalFrame = videoModal.querySelector('iframe');

 	videoBtn.addEventListener('click', function() {
 		videoModal.style.display = 'flex';
 		videoModalFrame.src = 'https://www.youtube.com/embed/GfblQtZi4Ms';
 	});

 	videoModalClose.addEventListener('click', function() {
 		videoModal.style.display = 'none';
 		videoModalFrame.src = videoModalFrame.src; //stop iframe video after modal window is closed
 	});

 	/*=========MODAL VIDEO/============*/

 	/*=========NAVIGATION============*/

 	var navLinks = document.querySelector('.nav-links'),
 		navLinksBtns = navLinks.querySelectorAll('.nav-links-dropdown'),
 		navSmallBtn = document.querySelector('.nav-small-dropdown'),
 		navSmallMenu = document.querySelector('.nav-small-content');

 	navSmallMenu.addEventListener('click', function(ev) {
 		if ( ev.target.tagName.toLowerCase() == 'button' ) {
 			ev.target.classList.toggle("active");

 			var content = ev.target.nextElementSibling;
 			if (content.style.maxHeight){
		      content.style.maxHeight = null;
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px";
		    } 
 		}
 	});

 	document.body.addEventListener('click', function(ev){

 		if ( ev.target.classList.contains('nav-links-dropdown') ) { 
 			for (var i = 0; i < navLinksBtns.length; i++) {
 				navLinksBtns[i].parentElement.classList.remove('active');
 			}	
 			ev.target.parentElement.classList.add('active');
 		} else {
 			for (var i = 0; i < navLinksBtns.length; i++) {
 				navLinksBtns[i].parentElement.classList.remove('active');
 			}
 		}

 		if ( ev.target.classList.contains('nav-small-dropdown') ) {
 			navSmallMenu.classList.toggle('active');
 		} else if ( navSmallMenu.contains(ev.target) ) {
 			return false;
 		} else {
 			navSmallMenu.classList.remove('active');
 		}

 	});

 	/*=========NAVIGATION/============*/

 	/*=========TABS============*/

 	var tabbedInfoContent = document.querySelector('.tabbed-info-content'),
 		tabbedInfoContentBlocks = tabbedInfoContent.getElementsByTagName('DIV'),
 		tabbedInfoTabs = document.querySelector('.tabbed-info-tabs'),
 		tabbedInfoTabsBtns = tabbedInfoTabs.querySelectorAll('.tabbed-info-tabs button'),
 		tabbedCarousel = document.querySelector('.tabbed-carousel'),
 		tabbedCarouselImgs = tabbedCarousel.querySelectorAll('.carousel-img');

 	tabbedInfoTabs.addEventListener('click', function(ev){

 		//set 'pointer-events: none' to inner element or it'll become ev.target when clicked
 		if ( ev.target !== ev.currentTarget ) {

 			//change triggered button color
 			for (var i = 0; i < tabbedInfoTabsBtns.length; i++) {
 				tabbedInfoTabsBtns[i].classList.remove('active');
 			}

 			//show target tab and hide the others
 			for (var i = 0; i < tabbedInfoContentBlocks.length; i++) {

 				if ( ev.target.dataset.id == tabbedInfoContentBlocks[i].dataset.id ) {
 					ev.target.classList.add('active');
 					tabbedInfoContentBlocks[i].style.display = 'block';
 				} else {
 					tabbedInfoContentBlocks[i].style.display = 'none';
 				}

 			}

 			//show target image and hide the others
 			for (var i = 0; i < tabbedCarouselImgs.length; i++) {

 				if ( ev.target.dataset.id == tabbedCarouselImgs[i].dataset.id ) {
 					tabbedCarouselImgs[i].classList.add('active');
 				} else {
 					tabbedCarouselImgs[i].classList.remove('active');
 				}
 				
 			}

 		} 

 		ev.stopPropagation();

 	});

 	/*=========TABS/============*/

 	/*=========ACCORDION============*/

 	var accordionInfoTabs = document.querySelector('.accordion-info-tabs'),
 		accordionInfoTabContent = accordionInfoTabs.querySelectorAll('.accordion-info-tab'),
 		accordionInfoTabsBtns = accordionInfoTabs.querySelectorAll('.accordion-info-tabs button'),
 		accordionCarousel = document.querySelector('.accordion-carousel'),
 		accordionCarouselImgs = accordionCarousel.querySelectorAll('.carousel-img');

 	accordionInfoTabs.addEventListener('click', function(ev){

 		//set 'pointer-events: none' to inner element or it'll become ev.target when clicked
 		if ( ev.target !== ev.currentTarget && ev.target.tagName.toLowerCase() == 'button' ) {

 			for (var i = 0; i < accordionInfoTabsBtns.length; i++) {
 				accordionInfoTabsBtns[i].querySelector('i.right').classList.remove('active');
 			}

 			//show target tab and hide the others
 			for (var i = 0; i < accordionInfoTabContent.length; i++) {


 				if ( ev.target.dataset.id == accordionInfoTabContent[i].dataset.id ) {
 					accordionInfoTabContent[i].classList.add('active');
 					ev.target.querySelector('i.right').classList.add('active');
 				} else {
 					accordionInfoTabContent[i].classList.remove('active');
 				}

 			}

 			//show target image and hide the others
 			for (var i = 0; i < accordionCarouselImgs.length; i++) {

 				if ( ev.target.dataset.id == accordionCarouselImgs[i].dataset.id ) {
 					accordionCarouselImgs[i].classList.add('active');
 				} else {
 					accordionCarouselImgs[i].classList.remove('active');
 				}
 				
 			}

 		} 

 		ev.stopPropagation();

 	});

 	/*=========ACCORDION/============*/

 	/*=========PRICING============*/

 	var pricing = document.querySelector('.pricing'),
 		pricingCards = pricing.querySelectorAll('.pricing-cards-card'),
 		pricingCardNext = pricing.querySelector('.pricing-next'),
 		pricingCardPrev= pricing.querySelector('.pricing-prev'),
 		news = document.querySelector('.news'),
 		newsBoxes = news.querySelectorAll('.news-box'),
 		newsNext = news.querySelector('.news-next'),
 		newsPrev = news.querySelector('.news-prev');

 	pricingCards[0].style.opacity = '1';
 	newsBoxes[0].style.opacity = '1';

 	slider(newsBoxes, newsNext, newsPrev, news);

 	slider(pricingCards, pricingCardNext, pricingCardPrev, pricing);

 	//gZone - area is being listened for touch event
 	function slider(items, nextBtn, prevBtn, gZone) {

 		var currentItem = 0;

 		nextBtn.addEventListener('click', function(){

	 		currentItem++;

	 		if ( currentItem > items.length - 1 ) currentItem = 0;

	 		slideChange();
	 			
	 	});

	 	prevBtn.addEventListener('click', function(){
 		
	 		currentItem--;

	 		if ( currentItem < 0 ) currentItem = items.length - 1;

	 		slideChange();		
	 	});

		var touchstartX = 0;
		var touchendX = 0;

		gZone.addEventListener('touchstart', function(event) {
		    touchstartX = event.changedTouches[0].screenX;
		}, false);

		gZone.addEventListener('touchend', function(event) {
		    touchendX = event.changedTouches[0].screenX;
		    handleGesture();
		}, false); 

		function handleGesture() {
		    if ( touchstartX - touchendX > 70 ) {
		        currentItem++;

		 		if ( currentItem > items.length - 1 ) currentItem = 0;

		 		slideChange();
		    }
		    
		    if ( touchendX - touchstartX > 70 ) {
		        currentItem--;
		 		if ( currentItem < 0 ) currentItem = items.length - 1;

		 		slideChange();
		    }

		}

	 	function slideChange() {
	 		for (var i = 0; i < items.length; i++) {
	 			items[i].style.opacity = '0';
	 			items[i].classList.remove('active');
	 		}

	 		items[currentItem].style.opacity = '1';
	 		items[currentItem].classList.add('active');
	 	}

 	}

 	/*=========PRICING/============*/

 	/*=========ONRESIZE AND MAP============*/

 	window.onresize = function () {
 		if ( window.innerWidth > 980 ) {
 			for (var i = 0; i < pricingCards.length; i++) {
 				pricingCards[i].style.opacity = '1';
 			}

 			for (var i = 0; i < newsBoxes.length; i++) {
 				newsBoxes[i].style.opacity = '1';
 			}
 		}
 	}

	/*=========ONRESIZE AND MAP/============*/

 });

 document.body.onload = function(){
 	setTimeout(function(){
 		document.getElementById('preloader-main').classList.add('loaded');
 	}, 200);
 }