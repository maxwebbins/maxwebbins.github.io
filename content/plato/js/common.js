
if (!Element.prototype.closest) {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}

if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(arrayLike/*, mapFn, thisArg */) {
      var C = this;
      var items = Object(arrayLike);
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }
      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  }());
}

let worksObj = Object.create(null);

worksObj = {
	'phaedo' : {
		'img' : 'img/phaedo.jpg',
		'title' : 'Phaedo',
		'author' : 'Plato',
		'date' : '390BC',
		'descr' : 'One of the main themes in the Phaedo is the idea that the soul is immortal. In the dialogue, Socrates discusses the nature of the afterlife on his last day before being executed by drinking hemlock. Socrates has been imprisoned and sentenced to death by an Athenian jury for not believing in the gods of the state (though some scholars think it was more for his support of "philosopher kings" as opposed to democracy) and for corrupting the youth of the city.',
		'link': 'https://en.wikipedia.org/wiki/Phaedo'
	},
	'apology' : {
		'img' : 'img/apology.jpg',
		'title' : 'Apology',
		'author' : 'Plato',
		'date' : '399BC',
		'descr' : 'The Apology of Socrates, by the philosopher Plato (429–347 BC), was one of many explanatory apologia about Socrates\'s legal defence against accusations of corruption and impiety; most apologia were published in the decade after the Trial of Socrates (399 BC). As such, Plato\'s Apology of Socrates is an early philosophic defence of Socrates, presented in the form of a Socratic dialogue. Although Aristotle later classified it as a genre of fiction, it is still a useful historical source about Socrates (469–399 BC) the philosopher.',
		'link' : 'https://en.wikipedia.org/wiki/Apology_(Plato)'
	},
	'symposium' : {
		'img' : 'img/symposium.jpg',
		'title' : 'Symposium',
		'author' : 'Plato',
		'date' : '385BC?',
		'descr' : 'The Symposium is considered a dialogue – a form used by Plato in more than thirty works – but in fact, it is predominantly a series of essay-like speeches from differing points of view. So dialogue plays a smaller role in the Symposium than it does in Plato\'s other dialogues. Socrates is renowned for his dialectic approach to knowledge (often referred to as the Socratic Method), which involves posing questions that encourage others to think deeply about what they care about and articulate their ideas. In the Symposium, the dialectic exists among the speeches: in seeing how the ideas conflict from speech-to-speech, and in the effort to resolve the contradictions and see the philosophy that underlies them all.',
		'link' : 'https://en.wikipedia.org/wiki/Symposium_(Plato)'
	},
}

document.addEventListener('DOMContentLoaded', function(){

	const content = document.querySelector('.js-content');

	content.addEventListener('click', function(event){

		let target = event.target;

		if ( target.matches('.js-box-wrapper') ) {

			event.preventDefault();

			let hero = target.closest('.js-main-box');
			let close = hero.querySelector('.js-box-close');

			hero.classList.add('active');

			close.addEventListener('click', function(event){
				hero.classList.remove('active');
			});

			if ( hero.classList.contains('js-mainbox-about') ) {

				const moreabout = hero.querySelector('.js-moreabout');

				moreabout.addEventListener('click', moreaboutHandler);

			}

			if ( hero.classList.contains('js-mainbox-works') ) {

				const works = hero;
				const worksArr =  Array.from(works.querySelectorAll('.js-work'));

				for ( let work of worksArr ) {
					let id = work.dataset.id;
					work.title = worksObj[id].title;
					work.querySelector('.js-work-ovtext').textContent = worksObj[id].title;
					work.querySelector('.js-work-img').style.backgroundImage = `url(${worksObj[id].img})`;
				}

				works.addEventListener('click', worksClickHandler);

			}

			if ( hero.classList.contains('js-mainbox-contact') ) {

				const conactsForm = hero.querySelector('.js-contacts-form');

				conactsForm.addEventListener('focusin', conactsFormFocusInHandler);
				conactsForm.addEventListener('focusout', conactsFormFocusOutHandler);
				conactsForm.addEventListener('click', conactsFormClickHandler);

			}

		}

	});

	let prof = document.querySelector('.js-prof');
	let profs = prof.querySelectorAll('p');
	let profCurtain = prof.querySelector('.prof-curtain');
	let currentProf = 0;
	let timer = 0;

	let id = setInterval( () => step(timer), 20);

	function step(timestamp) {
		if ( timestamp < 3000 ) {
			profCurtain.style.left = Math.min(timestamp * 2/10, 300) + "px";
		} else {
			profCurtain.style.left = (-timestamp + 6000)/10 + "px";
		}
		timer += 20;
		if ( timestamp >= 6000 ) {
			currentProf++;
			if ( currentProf > profs.length - 1 ) currentProf = 0;
			prof.querySelector('.visible').classList.remove('visible');
			profs[currentProf].classList.add('visible');
			timer = 0;
		}
	}

	function moreaboutHandler(event) {

		let target = event.target;

		let tabs = this.querySelector('.js-moreabout-tabs');
		let btns = this.querySelector('.js-moreabout-btns');

		if ( target.closest('.js-moreabout-btn') ) {

			target = target.closest('.js-moreabout-btn');

			if ( target.classList.contains('active') ) return;

			changeCard(target.dataset.index);

		}

		if ( target.closest('.js-card-title') ) {

			target = target.closest('.js-moreabout-card');

			if ( target.classList.contains('active') ) return;

			changeCard(target.dataset.index);

		}

		function changeCard(index){

			let card = tabs.querySelector(`.js-moreabout-card[data-index="${index}"]`);
			let btn = btns.querySelector(`.js-moreabout-btn[data-index="${index}"]`);

			btns.querySelector('.active').classList.remove('active');
			btn.classList.add('active');

			tabs.querySelector('.active').classList.remove('active');
			card.classList.add('active');

			tabs.insertAdjacentElement('afterbegin', card);

		}

	} // /moreaboutHandler

	function worksClickHandler(event){

		let target = event.target;

		const modal = this.querySelector('.js-works-modal');
		const modalImg = modal.querySelector('.js-modal-img');
		const modalTitle = modal.querySelector('.modal-info__title .js-content');
		const modalAuthor = modal.querySelector('.modal-info__author .js-content');
		const modalDate = modal.querySelector('.modal-info__date .js-content');
		const modalDescr = modal.querySelector('.modal-info__descr .js-content');
		const modalBtn = modal.querySelector('.modal-info__btn');

		
		if ( target.closest('.js-work') ) {

			this.style.overflow = 'hidden';

			target = target.closest('.js-work');
			let id = target.dataset.id;

			modalImg.style.backgroundImage = `url(${worksObj[id].img})`;
			modalTitle.textContent = worksObj[id].title;
			modalAuthor.textContent = worksObj[id].author;
			modalDate.textContent = worksObj[id].date;
			modalDescr.textContent = worksObj[id].descr;
			modalBtn.href = worksObj[id].link;

			modal.classList.add('active');

		}

		if ( target.closest('.js-works-modal-close') ) {

			this.style.overflow = '';

			modal.classList.remove('active');

		}

	} // /worksClickHandler

	function conactsFormFocusInHandler(event) {

		let target = event.target;

		if ( target.matches('input[type="text"]') || target.matches('textarea') ) {

			let field = target.parentElement;

			field.classList.add('active');

		}

	} // /conactsFormFocusInHandler

	function conactsFormFocusOutHandler(event) {

		let target = event.target;

		if ( target.matches('input[type="text"]') || target.matches('textarea') ) {

			if ( !target.value.length ) {
				
				let field = target.parentElement;

				field.classList.remove('active');

			}

		}

	} // /conactsFormFocusOutHandler

	function conactsFormClickHandler(event) {

		let target = event.target;

		if ( target.matches('.js-submit') ) {

			if ( !this.reportValidity() ) return;

			event.preventDefault();

			let contact = content.querySelector('.js-mainbox-contact');
			let contactOverlay = contact.querySelector('.js-contact-overlay');

			let fields = this.querySelectorAll('input[type="text"], textarea');

			for ( let field of Array.from(fields) ) {
				field.value = '';
				field.parentElement.querySelector('label').classList.remove('active');
				field.parentElement.classList.remove('active');
			}

			contactOverlay.classList.add('active');

			setTimeout( () => contactOverlay.classList.remove('active'), 2500 );

		}

	} // /conactsFormClickHandler

});

