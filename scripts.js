var
	$document 	= $( document ),
	$window 	= $( window ),
	$header  	= $( '#header' ),
	$navbar  	= $( '#nav-bar' ),
	$wrapper 	= $( '#wrapper' ),
	$features 	= $( '#call-to-action-areas .component4' ),
	scrollThreshold,
	scrollRatio

function reposition() {
	$header.css( 'padding-top', window.innerHeight - $header.height() - $navbar.height() - 50 )
	scrollThreshold = $navbar.offset().top + $navbar.height()/2 // calculate scrollThreshold ONLY after the header has been repositioned
}

$window
	.on( 'load resize', reposition )
	.on( 'scroll', function() {
		scrollRatio = $window.scrollTop()/$header.parent().outerHeight(true)
		$window.scrollTop() > scrollThreshold? $navbar.addClass( 'fixed' ) : $navbar.removeClass( 'fixed' ) // fixed nav bar
		$( '#header' ).parent().css( 'background-color', 'rgba(44, 44, 44, ' + scrollRatio + ')' )
	})

// testimonial slideshow
setInterval( function() {
	var totalWidth = -($wrapper.children().length - 1) * $wrapper.children().outerWidth(true),
		direction = !$wrapper.css( 'left' )? '-': (parseInt($wrapper.css( 'left' ),10) <= totalWidth? '+':'-')
	$wrapper.animate({ 'left': direction + '=960px' }, 800)
}, 5000)

// typewriter effect
$features.typed({
	strings: ["Live captioning", "Media captioning", "Communication access & services", "Custom technical solutions"],
	typeSpeed: 20,
	backDelay: 4000,
	loop: true
})