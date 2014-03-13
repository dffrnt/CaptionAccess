var
	$document 	= $( document ),
	$window 	= $( window ),
	$header  	= $( '#header' ),
	$navbar  	= $( '#nav-bar' ),
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