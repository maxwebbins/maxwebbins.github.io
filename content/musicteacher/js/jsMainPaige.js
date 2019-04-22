 document.addEventListener("DOMContentLoaded", function(event) {

 	var mainContent = document.querySelector('.maincontent-index');
 	var mainContentText = document.querySelector('.maincontent-index-text');
 	var navigation = document.querySelector('.navigation');

 	function resize( range ){

 			if ( !range.matches ) {
				mainContent.style.height = document.documentElement.clientHeight + 'px';
				navigation.style.height = document.documentElement.clientHeight + 'px';
				setTimeout(function(){
			 		mainContentText.style.opacity = 1;
			 		mainContentText.style.marginTop = ( document.documentElement.clientHeight - mainContentText.clientHeight )/2 + 'px';
			 	},500);
 			} else {
 				setTimeout(function(){
			 		mainContentText.style.opacity = 1;
			 		mainContentText.style.marginTop = ( document.documentElement.clientHeight - mainContentText.clientHeight )/4 + 'px';
			 		mainContentText.style.marginBottom = ( document.documentElement.clientHeight - mainContentText.clientHeight )/4 + 'px';
			 	},500);
 			}

 			//change navigation and main container height on resize to fit background image and vertically align text
		 	document.querySelector('body').onresize = function() { 

		 		if ( !range.matches ) {

			 		mainContent.style.height = document.documentElement.clientHeight + 'px';
			 		navigation.style.height = document.documentElement.clientHeight + 'px';
			 		mainContentText.style.marginTop = ( document.documentElement.clientHeight - mainContentText.clientHeight )/2 + 'px';

		 		} else {
		 			mainContent.style.height = 100 + '%';
			 		navigation.style.height = 100 + '%';
			 		mainContentText.style.marginTop = ( document.documentElement.clientHeight - mainContentText.clientHeight )/4 + 'px';
			 		mainContentText.style.marginBottom = ( document.documentElement.clientHeight - mainContentText.clientHeight )/4 + 'px';
		 		}
		 	};

 	}

 	var disablePoint = window.matchMedia("(max-width: 768px)");
 	disablePoint.addListener( resize(disablePoint) );

});