document.addEventListener("DOMContentLoaded", function(event) {

	contactFormCheck();

	function contactFormCheck() {
	 		
	 	var contactFormWrappers = document.querySelectorAll('.contact-form-wrappers');
	 	var contactFormWrappersInput = document.querySelectorAll('.contact-form-wrappers input');
	 	var contactFormNameInput = document.querySelector('.contact-form-name input');
	 	var contactFormEmailInput = document.querySelector('.contact-form-email input');
	 	var contactFormPhoneInput = document.querySelector('.contact-form-phone input');
	 	var contactFormSubmit = document.querySelector('.contact-form input[type="button"]');

	 	for (var i = 0; i < contactFormWrappersInput.length; i++) {

	 		(function(){

	 			var id = i;

		 		contactFormWrappersInput[id].addEventListener('focus', function(){
		 			contactFormWrappers[id].getElementsByClassName('contact-form-tooltip')[0].style.display = 'block';
		 			setTimeout(function(){
		 				contactFormWrappers[id].getElementsByClassName('contact-form-tooltip')[0].classList.add('visible');
		 			}, 20);
		 			
		 		}); 

		 		contactFormWrappersInput[id].addEventListener('blur', function(){
		 			contactFormWrappers[id].getElementsByClassName('contact-form-tooltip')[0].style.display = 'none';
		 			contactFormWrappers[id].getElementsByClassName('contact-form-tooltip')[0].classList.remove('visible');
		 		});

	 		})();
	 		
	 	}

	 	contactFormSubmit.addEventListener('click', function(){

	 		var fail = false;
	 		var name = contactFormNameInput.value;
	 		var email = contactFormEmailInput.value;
	 		var phone = contactFormPhoneInput.value;
	 		var msgContainer = document.querySelector('.contact-form-fairy-msg p');
	 		var errorMsg = "";
	 		var regEmail = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i

	 		if ( name === "" || name === " " ) {
	 			msgContainer.innerHTML += '- You forget to write name<br>';
	 			fail = true;
	 		} else if ( name.length < 3 ) {
	 			msgContainer.innerHTML += '- Name is too short<br>';
	 			fail = true;
	 		}

	 		if ( email === "" || email === " " )  {
	 			msgContainer.innerHTML  += '- You forget to write email<br>';
	 			fail = true;
	 		} else if ( !regEmail.test(email) ) {
	 			msgContainer.innerHTML  += '- You entered strange email<br>';
	 			fail = true;
	 		}

	 		if ( fail ) {
	 			fairyTooltip();
	 		} else {
	 			msgContainer.innerHTML = "Message successfuly sent!";
	 			contactFormNameInput.value = contactFormEmailInput.value = contactFormPhoneInput.value = '';
	 			for (var i = 0; i < contactFormWrappers.length; i++) {
	 				contactFormWrappers[i].classList.remove('valid');
	 				contactFormWrappers[i].classList.remove('invalid');
	 			}
	 			fairyTooltip();
	 		}

	 		function fairyTooltip () {

		 		var fairyBox = document.querySelector('.contact-form-fairy-box');

		 		showFairy();

		 		setTimeout(function(){
		 			hideFairy();
		 			msgContainer.innerHTML = '';
		 		}, 2000);

		 		function showFairy() {
		 			fairyBox.style.display = 'block';
			 			setTimeout(function(){
			 			fairyBox.classList.add('visible');
			 		}, 20);
		 		}

		 		function hideFairy() {
		 			fairyBox.style.display = 'block';
		 			fairyBox.classList.remove('visible');
		 		}
	 		}
	 		
	 		
	 	});

		contactFormNameInput.addEventListener('input', function(ev){
	 		var contactFormName = document.querySelector('.contact-form-name');
	 		if ( this.value.length > 12 ) this.value = this.value.substring(0, 12);
	 		var x = this.value.replace(/\W|\d|[_]/g,'');
	 		this.value = x;
	 	});

	 	contactFormNameInput.addEventListener('keyup', function(){
	 		var contactFormName = document.querySelector('.contact-form-name');
	 		var letters = /\w/g;
	 		if (  this.value === '' ) {
	 			contactFormName.classList.remove('valid');
	 			contactFormName.classList.remove('invalid');
	 		} else if ( this.value.length < 3 ) {
	 			contactFormName.classList.remove('valid');
	 			contactFormName.classList.add('invalid');
	 		} else {
	 			contactFormName.classList.add('valid');
	 			contactFormName.classList.remove('invalid');
	 		}
	 	});
	 	
	 	contactFormEmailInput.addEventListener('keyup', function(){
	 		var contactFormEmail = document.querySelector('.contact-form-email');
	 		var letters = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
	 		if (  this.value === '' ) {
	 			contactFormEmail.classList.remove('valid');
	 			contactFormEmail.classList.remove('invalid');
	 		} else if ( !this.value.match(letters) ) {
	 			contactFormEmail.classList.remove('valid');
	 			contactFormEmail.classList.add('invalid');
	 		} else {
	 			contactFormEmail.classList.add('valid');
	 			contactFormEmail.classList.remove('invalid');
	 		}
	 	});

	 	contactFormPhoneInput.addEventListener('input', function(ev){
	 		var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
	 		this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
	 	})
	}

});
