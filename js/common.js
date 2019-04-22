document.addEventListener('DOMContentLoaded', function(){

	var pic 	= document.querySelector('.pic'),
			pic02 = pic.querySelector('.pic02'),
			pic03 = pic.querySelector('.pic03'),
			pic04 = pic.querySelector('.pic04'),
			pic05 = pic.querySelector('.pic05'),
			picSettings = {
				mul: 8
			};

	pic.addEventListener('mousemove', function(event){
		var posX = event.clientX;
				posY = event.clientY - getCoords(this).top;

		pic02.style.transform = 'translate3d(' + -posX/picSettings.mul + 'px,' + -posY/picSettings.mul + 'px, 0px)';
		pic03.style.transform = 'translate3d(' + -posX/(picSettings.mul+4) + 'px,' + -posY/(picSettings.mul+4) + 'px, 0px)';
		pic04.style.transform = 'translate3d(' + -posX/(picSettings.mul+8) + 'px,' + -posY/(picSettings.mul+8) + 'px, 0px)';
		pic05.style.transform = 'translate3d(' + -posX/(picSettings.mul+12) + 'px,' + -posY/(picSettings.mul+12) + 'px, 0px)';

	});

	function getCoords(elem) {
	
		var box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
			bottom: box.top + box.height + pageYOffset
		};

	}

});
