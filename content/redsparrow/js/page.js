 document.addEventListener("DOMContentLoaded", function(event) {

 	const faq = document.querySelector('.faq');
 	const faqTitles = faq.querySelectorAll('.faq-title');
 	const faqContents = faq.querySelectorAll('.faq-content');


 	faq.addEventListener('click', function(ev){
 		
 		let hero = ev.target;

 		if ( hero.classList.contains('faq-title') ) {

	 		if ( hero.classList.contains('active') ) {
	 			hero.classList.remove('active');
	 			hero.nextElementSibling.style.height = '';
	 		} else {			
		 		hero.classList.add('active');
		 		hero.nextElementSibling.style.height = hero.nextElementSibling.scrollHeight + 'px'; 	
	 		}	

 		}
 		
 	});


 });