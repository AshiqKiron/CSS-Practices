// When the Document Object Model is ready
$(document).ready(function(){
	// 'scroll' is the amount of pixels destination
	// is from the top of the document
	var scroll = $('.c1a').offset().top;
	
	// When .p2p2 is clicked
	$('.p2p2').click(function(){
		// Scroll down to 'scroll'
		$('html, body').animate({scrollTop:scroll}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});

// When the Document Object Model is ready
$(document).ready(function(){
	// 'scroll' is the amount of pixels destination
	// is from the top of the document
	var scroll = $('.c2p1').offset().top;
	
	// When .p2p2 is clicked
	$('.c1button').click(function(){
		// Scroll down to 'scroll'
		$('html, body').animate({scrollTop:scroll}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});

// When the Document Object Model is ready
$(document).ready(function(){
	// 'scroll' is the amount of pixels destination
	// is from the top of the document
	var scroll = $('.c3p1').offset().top;
	
	// When .p2p2 is clicked
	$('.c2button').click(function(){
		// Scroll down to 'scroll'
		$('html, body').animate({scrollTop:scroll}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});


// When the Document Object Model is ready
$(document).ready(function(){
	// 'scroll' is the amount of pixels destination
	// is from the top of the document
	var scroll = $('.c4p1').offset().top;
	
	// When .p2p2 is clicked
	$('.c3p12').click(function(){
		// Scroll down to 'scroll'
		$('html, body').animate({scrollTop:scroll}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});


