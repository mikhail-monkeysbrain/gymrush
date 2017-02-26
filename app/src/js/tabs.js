
//tabs
$( function() {
	$( "#tabs" ).tabs();
	$('.faq li a').click(function(){
		$('.faq li a').removeClass('active');
		$(this).addClass('active');
	})
} );