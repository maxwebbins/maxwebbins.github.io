 document.addEventListener("DOMContentLoaded", function(event) {

 	const wrapper = document.querySelector('.wrapper');
 	const slider = document.querySelector('.main-slider');
 	const sliderContent = slider.querySelector('.content');
 	const sliderSlides = sliderContent.querySelectorAll('.item');
 	const menu = document.querySelector('.menu-left');
 	const menuItems = menu.querySelectorAll('.menu-item');
 	let scrollMul = 0;
 	let touchstartY = 0;
	let touchendY = 0;
	let scrollSuspended = false;

 	menu.addEventListener('click', function(ev){

 		if ( ev.target != ev.currentTarget && ev.target.dataset.id ) {

 			let id = ev.target.dataset.id;

 			for (let i = 0; i < menuItems.length; i++) {
 				menuItems[i].classList.remove('active');
 			}

 			ev.target.classList.add('active');

 			for (let i = 0; i < sliderSlides.length; i++) {
 				if ( sliderSlides[i].dataset.id == id ) {				
 					scrollMul = id - 1;
 					sliderContent.style.transform = `translate3d(0,${-scrollMul*100}%,0)`;
 				}
 			}

 		}
 		
 	});

 	wrapper.addEventListener('wheel', function(ev){

 		if ( ev.deltaY < 0 ) {
 			slideDown();
 		}
 		if ( ev.deltaY > 0 ) {
 			slideUp();
 		}	
 			
 	});

	wrapper.addEventListener('touchstart', function(event) {
	    touchstartY = event.changedTouches[0].screenY;
	}, false);

	wrapper.addEventListener('touchend', function(event) {
	    touchendY = event.changedTouches[0].screenY;
	    handleGesture();
	}, false); 

	function handleGesture() {
	    if ( touchstartY - touchendY > 70 ) {
	        slideUp();
	    }
	    
	    if ( touchendY - touchstartY > 70 ) {
	    	slideDown();
	    }        
	}

	function scrollSuspend(time) {
		setTimeout(() => scrollSuspended = false, time);
	}

	function slideDown(){
		if (scrollSuspended) return false;

		for (let i = 0; i < menuItems.length; i++) {
	 			menuItems[i].classList.remove('active');
	 	}

		if ( scrollMul == 0 ) {
			scrollMul = sliderSlides.length - 1;
			menuItems[scrollMul].classList.add('active');
			sliderContent.style.transform = `translate3d(0,${-scrollMul*100}%,0)`;
		} else {
			scrollMul--;
			menuItems[scrollMul].classList.add('active');
			sliderContent.style.transform = `translate3d(0,${-scrollMul*100}%,0)`;
		}

		scrollSuspended = true;
		scrollSuspend(1000);
	}

	function slideUp(){
		if (scrollSuspended) return false;

		for (let i = 0; i < menuItems.length; i++) {
	 			menuItems[i].classList.remove('active');
	 		}
		if ( scrollMul > sliderSlides.length - 2) {
			scrollMul = 0;
			menuItems[scrollMul].classList.add('active');
			sliderContent.style.transform = `translate3d(0,0,0)`;
			console.log(scrollMul);
		} else {
			scrollMul++;
			menuItems[scrollMul].classList.add('active');		
			sliderContent.style.transform = `translate3d(0,${-scrollMul*100}%,0)`;
			console.log(scrollMul);
		}

		scrollSuspended = true;
		scrollSuspend(1000);
	}

 });
