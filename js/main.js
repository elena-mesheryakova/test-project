$(function(){
	$(document).ready(function() {
        
		$('.header__menu-burger').click(function() {
			$('.header__menu-burger').toggleClass('open-menu');
			$('.header__menu').toggleClass('open-menu');
		});
	});

	$(document).ready(function(){

		$('.slider').slick({
			dots:  true,
			arrows: false,
			adaptiveHeight: true,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
		
		
	});

	
	
});