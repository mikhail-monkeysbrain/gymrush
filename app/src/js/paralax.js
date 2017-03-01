//paralax
$(function(){
	$(document).ready(function(){
		$window = $(window);
		$('.depth-1[data-type="background"]').each(function(){
			var $bgobj = $(this);
			$(window).scroll(function() {         
				var yPos = -($window.scrollTop() / ($bgobj.data('speed')/20)); 
				var coords = '50% '+ yPos + 'px';
				$bgobj.css({ backgroundPosition: coords });
			}); 
 		});	
		$('.depth-2[data-type="background"]').each(function(){
			var $bgobj = $(this);
			$(window).scroll(function() {         
				var yPos = -($window.scrollTop() / ($bgobj.data('speed')/5)); 
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