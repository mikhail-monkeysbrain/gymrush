
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