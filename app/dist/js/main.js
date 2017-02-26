//accordeon
$(function(){
	$('.accordeon-js').find('.ac_head').click(function(){
    	$(this).next().stop().slideToggle();
	}).next().stop().hide();
	$('.ac_head').click(function(){
    	$(this).toggleClass("js_up");
	});
});

//tabs
$( function() {
	$('.logo-mobile').click(function(){
		$('.nav__mobile').toggle(500);
	})
} );
//paralax
$(function(){
	$(document).ready(function(){
		$window = $(window);
		$('section[data-type="background"]').each(function(){
			var $bgobj = $(this);
			$(window).scroll(function() {         
				var yPos = -($window.scrollTop() / ($bgobj.data('speed')/20)); 
				var coords = '50% '+ yPos + 'px';
				$bgobj.css({ backgroundPosition: coords });
			}); 
 		});	
	}); 
	/* 
	 * Create elements HTML5 for IE
	 */
	document.createElement("article");
	document.createElement("section");
});

//scroll
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1) {
			$("header").css("background", "#fff");
		} else {
			$("header").css("background", "rgba(255,255,255, .9)");
		};
	});
});

//tabs
$( function() {
	$( "#tabs" ).tabs();
	$('.faq li a').click(function(){
		$('.faq li a').removeClass('active');
		$(this).addClass('active');
	})
} );