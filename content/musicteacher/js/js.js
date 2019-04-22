 document.addEventListener("DOMContentLoaded", function(event) {

 	if ( document.querySelector('.songs-tabs') !== null ) {
 		tabs();
 	}

 	if ( document.querySelector('.sheets-sheet') !== null ) {
 		shiftSheets();
 	}

 	if ( document.querySelector('.sheets-control-sort-dropdown-btn' ) !== null ) {
 		sheetDropdown();
 	}

 	if ( document.querySelector('.sheets-control-sort' ) !== null ) {
		sortSheets();
 	}

 	if ( document.querySelector('.navigation-cart') !== null ) {
 		navCart();
 	}

 	

 	function tabs() {
 		
	 	var songTabs = document.querySelectorAll('.songs-tabs');
	 	var songTabsControl = document.querySelectorAll('.songs-tabcontrol a');
	 	var songTabsUnderline = document.querySelector('.songs-tabcontrol-underline');

		markActiveTab(songTabsControl[0]);

	 		for (var i = 0; i < songTabsControl.length; i++) {
	 			songTabsControl[i].addEventListener('click', function(){
	 				showTab(this);
	 				markActiveTab(this); 				
	 			});
	 		}


	 	function markActiveTab(tab){
	 		var parentLeft = tab.parentElement.getBoundingClientRect().left;
	 		var left = tab.getBoundingClientRect().left;
	 		var width = tab.offsetWidth;
	 		songTabsUnderline.style.width = width + 'px';
	 		songTabsUnderline.style.left = ( left - parentLeft ) + 'px';
	 	}

	 	function showTab(tab) {
	 		for (var i = 0; i < songTabs.length; i++) {
				songTabs[i].classList.remove('active');
			}
			var tabName = tab.innerHTML.toLowerCase().replace(/\s/g, '');
			document.querySelector('div[data-name="'+tabName+'"').classList.add('active');
	 	}

 	}

 	function shiftSheets() {
 		var sheets = document.querySelectorAll('.sheets-sheet');
 		var listOfSheets = document.querySelector('.sheets-control-list');
 		var platesOfSheets = document.querySelector('.sheets-control-plates');

 		listOfSheets.addEventListener('click', function(){
 			for (var i = 0; i < sheets.length; i++) {
 				sheets[i].classList.add('list');
 			}
 		});

 		platesOfSheets.addEventListener('click', function(){
 			for (var i = 0; i < sheets.length; i++) {
 				sheets[i].classList.remove('list');
 			}
 		});
 	}

 	function sheetDropdown() {

	 	var sortDropdownBtn = document.querySelector('.sheets-control-sort-dropdown-btn');
	 	var sortDropdownMenu = document.querySelector('.sheets-control-sort-dropdown');

	 	document.addEventListener('click', function(ev){
	 		if ( ev.target.matches('.sheets-control-sort-dropdown-btn') ) {
	 			sortDropdownMenu.classList.toggle('active');
	 		} else if ( ev.target.matches('.by-author') || ev.target.matches('.by-name') || ev.target.matches('.by-price') ) {
	 			return false;
	 		} else {
	 			sortDropdownMenu.classList.remove('active');
	 		}
	 	});

 	}

 	function sortSheets() {

	 	var sortByAuthor = document.querySelector('.by-author');
	 	var sortByPiece = document.querySelector('.by-piece');
	 	var sortByPrice = document.querySelector('.by-price')

	 	sortByAuthor.addEventListener('click', function(){
	 		sortByParam( 'sheets-sheet-info-comp' );
	 	});

	 	sortByPiece.addEventListener('click', function(){
	 		sortByParam( 'sheets-sheet-info-piece' );
	 	});

	 	sortByPrice.addEventListener('click', function(){
	 		sortByParam( 'sheets-sheet-price-val');
	 	});


	 	function sortByParam(option) {
	 		var parentSheet = document.querySelector('.sheets-page');
	 		var movingElems = parentSheet.getElementsByTagName('a');
	 		var shouldSwitch = false;
	 		var switching = true;

	 		( option === 'sheets-sheet-price-val' ) ? sortInt() : sortStr();

	 		function sortInt() {

	 			while( switching ) {
		 			switching = false;
		 			for ( var i = 0; i < movingElems.length - 1; i++ ) {
		 				shouldSwitch= false;
		 				if ( parseFloat(movingElems[i].getElementsByClassName(option)[0].innerHTML.toLowerCase()) > parseFloat(movingElems[i+1].getElementsByClassName(option)[0].innerHTML.toLowerCase()) ) {
		 					shouldSwitch= true;
		 					break;
		 				} 
		 			}

		 			if ( shouldSwitch ) {
		 				movingElems[i].parentNode.insertBefore(movingElems[i+1], movingElems[i]);
		 				switching = true;
		 			}
		 		}

	 		}

	 		function sortStr() {
	 			
		 		while( switching ) {
		 			switching = false;
		 			for ( var i = 0; i < movingElems.length - 1; i++ ) {
		 				shouldSwitch= false;
		 				if ( movingElems[i].getElementsByClassName(option)[0].innerHTML.toLowerCase() > movingElems[i+1].getElementsByClassName(option)[0].innerHTML.toLowerCase() ) {
		 					shouldSwitch= true;
		 					break;
		 				} 
		 			}

		 			if ( shouldSwitch ) {
		 				movingElems[i].parentNode.insertBefore(movingElems[i+1], movingElems[i]);
		 				switching = true;
		 			}
		 		}
	 		
	 		}

	 	}

 	}

 	function navCart() {

	 	var navigationCart = document.querySelector('.navigation-cart div');
	 	var cartQuantity = document.querySelector('.cart-quantity');
	 	var sheetsSheetCartBtn = document.querySelectorAll('.sheets-sheet-cart button');


	 	for (var i = 0; i < sheetsSheetCartBtn.length; i++) {
	 		sheetsSheetCartBtn[i].addEventListener('click', function(){
		 		cartQuantity.innerHTML = +cartQuantity.innerHTML + 1;
		 	});
	 	}

	 	navigationCart.addEventListener('mouseenter', function(){
	 		var top = -3;
	 		var right = -2;
	 		var max = 43;
	 		var id = setInterval(function(){
	 			top += 2;
	 			if ( top < max/2 ) right += -0.6;
	 			if ( top > max/2 ) right += 0.6;
	 			if ( top > max ) clearInterval(id);
	 			cartQuantity.style.top = top + 'px';
	 			cartQuantity.style.right = right + 'px';
	 		}, 10);

	 	});

	 	navigationCart.addEventListener('mouseleave', function(){
	 		cartQuantity.style.top = -3 + 'px';
	 		cartQuantity.style.right = -2 + 'px';
	 	});
 		
 	}


});