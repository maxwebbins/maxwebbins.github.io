 document.addEventListener("DOMContentLoaded", function(event) {

 	var slideIndex = 1;
 	var slides_1 = document.querySelectorAll('.slides_1');
 	var slides_2 = document.querySelectorAll('.slides_2');
 	var goods = ['Winter Pullover', 'Summer Jacket', 'Track Jacket', 'Spring Coat'];

 	if ( document.querySelector('.slides_1') !== null ) {

 		showSlides( slideIndex, slides_1 );
 		controllerSizeChange(document.querySelector('.featured-controller-1'));

	 	document.querySelector('.featured-controller-1').onclick = function () {
	 		currentSlide(1, slides_1);
	 		controllerSizeChange(this);
	 	}

	 	document.querySelector('.featured-controller-2').onclick = function () {
	 		currentSlide(2, slides_1);
	 		controllerSizeChange(this);
	 	}

	 	document.querySelector('.featured-controller-3').onclick = function () {
	 		currentSlide(3, slides_1);
	 		controllerSizeChange(this);
	 	
	 	}
 	}

 	 if ( document.querySelector('.slides_2') !== null ) {

 		showSlides( slideIndex, slides_2 );

	 	document.querySelector('.product-controller-1').onclick = function () {
	 		currentSlide(1, slides_2);
	 		controllerCaptionChange(this);
	 	}

	 	document.querySelector('.product-controller-2').onclick = function () {
	 		currentSlide(2, slides_2);
	 		controllerCaptionChange(this);
	 	}

	 	document.querySelector('.product-controller-3').onclick = function () {
	 		currentSlide(3, slides_2);
	 		controllerCaptionChange(this);	 	
	 	}
 	}

 	if ( document.querySelector('.product-modal') !== null  ) {
	 	var productImg = document.querySelectorAll('.slides_2 img');
	 	var productModalClose = document.querySelector('.product-modal-close');

	 	productModalClose.onclick = function() {
	 		var productModal = document.querySelector('.product-modal');
		 	productModal.style.display = 'none';
	 	}

	 	for (var i = 0; i < productImg.length; i++) {

	 		productImg[i].onclick = function() {
	 			var productModal = document.querySelector('.product-modal'),
		 		productModalImg = document.querySelector('.product-modal-content'),
		 		productModalCaption = document.querySelector('.product-modal-caption');
		 		productModalClose = document.querySelector('.product-modal-close');

		 		productModal.style.display = 'block';
		 		productModalImg.src = this.src;
		 		productModalCaption.innerHTML = this.alt;
		 	}

	 	}

 	}

 	if ( document.querySelector('.product-info-size') !== null ) {

		var productInfoSize = document.querySelectorAll('.product-info-size a');

		for (var i = 0; i < productInfoSize.length; i++) {
				
			productInfoSize[i].onclick = function() {
				for (var j = 0; j < productInfoSize.length; j++) {
					productInfoSize[j].classList.remove('active');
				}

				this.classList.add('active');
			}

		}	
		
 	}

 	if ( document.querySelector('.product-info-quantity') !== null ) {

 		var productInfoQuantityValue = document.querySelector('.product-info-quantity-value input');
 		var productInfoQuantityMore = document.querySelector('.product-info-quantity-more');
 		var productInfoQuantityLess = document.querySelector('.product-info-quantity-less');


 		productInfoQuantityMore.onclick = function() {
 			productInfoQuantityValue.value++;
 		}

 		productInfoQuantityLess.onclick = function() {
 			if ( productInfoQuantityValue.value > 1 ) productInfoQuantityValue.value--;			
 		}

 	}

 	if ( document.querySelector('.allproducts-settings-show') !== null ) {

 		var allproductsSettingsShow = document.querySelector('.allproducts-settings-show a');
 		var allproductsSettingsHide = document.querySelector('.allproducts-settings-show .filter-close');
 		var settingsPanel = document.querySelector('.allproducts-settings.col_3');

 		allproductsSettingsShow.addEventListener('click', function(){		
 			settingsPanel.style.display = 'block';
 			setTimeout(function(){
 				settingsPanel.style.width = '60%';
 			}, 20);
 			setTimeout(function(){
 				allproductsSettingsHide.style.display = 'block';
 			}, 700);			
 		});

 		allproductsSettingsHide.addEventListener('click', function(){
 			settingsPanel.style.display = 'none';
 			settingsPanel.style.width = '0';
 			this.style.display = 'none';
 		});
 	}

 	
 	/*======================AUTOCOMPLETE=====================*/

	 function autocomplete(inp, arr) {
	  /*the autocomplete function takes two arguments,
	  the text field element and an array of possible autocompleted values:*/
	  var currentFocus;
	  /*execute a function when someone writes in the text field:*/
	  inp.addEventListener("input", function(e) {
	      var a, b, i, val = this.value;
	      /*close any already open lists of autocompleted values*/
	      closeAllLists();
	      if (!val) { return false;}
	      currentFocus = -1;
	      /*create a DIV element that will contain the items (values):*/
	      a = document.createElement("DIV");
	      a.setAttribute("id", this.id + "autocomplete-list");
	      a.setAttribute("class", "autocomplete-items");
	      /*append the DIV element as a child of the autocomplete container:*/
	      this.parentNode.appendChild(a);
	      /*for each item in the array...*/
	      for (i = 0; i < arr.length; i++) {
	        /*check if the item starts with the same letters as the text field value:*/
	        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
	          /*create a DIV element for each matching element:*/
	          b = document.createElement("DIV");
	          /*make the matching letters bold:*/
	          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
	          b.innerHTML += arr[i].substr(val.length);
	          /*insert a input field that will hold the current array item's value:*/
	          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
	          /*execute a function when someone clicks on the item value (DIV element):*/
	          b.addEventListener("click", function(e) {
	              /*insert the value for the autocomplete text field:*/
	              inp.value = this.getElementsByTagName("input")[0].value;
	              /*close the list of autocompleted values,
	              (or any other open lists of autocompleted values:*/
	              closeAllLists();
	          });
	          a.appendChild(b);
	        }
	      }
	  });

	  function closeAllLists(elmnt) {
	    /*close all autocomplete lists in the document,
	    except the one passed as an argument:*/
	    var x = document.getElementsByClassName("autocomplete-items");
	    for (var i = 0; i < x.length; i++) {
	      if (elmnt != x[i] && elmnt != inp) {
	        x[i].parentNode.removeChild(x[i]);
	      }
	    }
	  }
	  /*execute a function when someone clicks in the document:*/
	  document.addEventListener("click", function (e) {
	      closeAllLists(e.target);
	  });
	}

	autocomplete(document.querySelector(".searchInput"), goods);


	/*======================AUTOCOMPLETE=====================*/



 	function controllerCaptionChange(target) {
 		var captions = document.querySelectorAll('.product-img-captions a');

 		for (var i = 0; i < captions.length; i++) {
 			captions[i].classList.remove('active');			
 		}

 		target.classList.add('active');	
 	}

 	function controllerSizeChange (target) {
 		var controllers = document.querySelectorAll('.featured-controller a');
 		
 		for (var i = 0; i < controllers.length; i++) {
 			controllers[i].style.height = "18px";
 			controllers[i].style.backgroundColor = "#fff";
 		}

 		var id = setInterval(changeSize, 10);
 		var size = 18;

 		target.style.backgroundColor = "#ff5912";

 		function changeSize() {
 			if (size === 50) {
 				clearInterval(id);
 			} else {
 				size++;
 				target.style.height = size + 'px';
 			}
 		}
 	}

 	function currentSlide(n, slides) {
 		showSlides(slideIndex = n, slides);
 	}
 	
 	function showSlides(n, slides) {

 		for (var i = 0; i < slides.length; i++) {
 			slides[i].style.display = "none";
 			//slides[i].classList.remove('current');
 		}

 		slides[slideIndex - 1].style.display = "block";
 		//slides[slide_1_Index - 1].classList.add('current');
 		
 	}


 	var newContentPos = document.querySelectorAll('.new-content .col_3');

 	for (var i = 0; i < newContentPos.length; i++) {
	 	newContentPos[i].onmouseenter = function() {
	 		var self = this;

	 		setTimeout(function(){

	 			self.querySelector('.new-content-info').classList.add('opacity_increase');

	 		}, 100);

	 		this.querySelector('.new-content-info').classList.remove('hidden');
	 		//this.querySelector('.new-content-price').classList.add('hidden');
	 		//this.querySelector('.new-content-img img').classList.add('new-content-img-width');
	 		//this.querySelector('.new-content-img').classList.add('new-content-img-height');
	 	}

	 	newContentPos[i].onmouseleave = function() {
	 		this.querySelector('.new-content-info').classList.add('hidden');
	 		this.querySelector('.new-content-info').classList.remove('opacity_increase');
	 		//this.querySelector('.new-content-price').classList.remove('hidden');
	 		//this.querySelector('.new-content-img img').classList.remove('new-content-img-width');
	 		//this.querySelector('.new-content-img').classList.remove('new-content-img-height');
	 	}
 	}


 	document.querySelector('.header-menu .icon').onclick = function() {

 		this.classList.toggle('change-bar');

 		var menu = document.querySelector('.header-menu-nav');
 		if (menu.classList.contains('responsive') ) {
 			menu.classList.remove('responsive');
 		} else {
 			menu.classList.add('responsive');
 		}
 	}

 	document.addEventListener('click', function(e){

 		
 	});

});