var
	$document 	= $( document ),
	$window 	= $( window ),
	$header  	= $( '#header' ),
	$navbar  	= $( '#nav-bar' ),
	$logo 		= $( '#logo' ),
	$navlinks 	= $( '.level1item' ),
	$wrapper 	= $( '#wrapper' ),
	$button 	= $( '#call-to-action' ),
	$features 	= $( '#call-to-action-areas .component4' ),
	scrollThreshold,
	scrollRatio

function reposition() {
	$header.attr( 'class' )? '' : $header.css( 'padding-top', window.innerHeight - $header.height() - $navbar.height() - 50 )
	scrollThreshold = $navbar.offset().top + $navbar.height()/2 // calculate scrollThreshold ONLY after the header has been repositioned
}

$button.on( 'click', function() { window.location = 'contact.html' })
$logo.on( 'click', function() { window.location = 'index.html' })

$window
	.on( 'load resize', reposition )
	.on( 'scroll', function() { // nav-bar
		scrollRatio = $window.scrollTop()/$header.parent().outerHeight(true)
		$window.scrollTop() > scrollThreshold? $navbar.addClass( 'fixed' ) : $navbar.removeClass( 'fixed' ) // fixed nav bar
		$( '#header' ).parent().css( 'background-color', 'rgba(44, 44, 44, ' + scrollRatio + ')' )
	})

// nav menu
var $activeMenu = ''
$navlinks.on( 'mouseenter', function() {
	$activeMenu = $( $(this).children()[0] )
	$activeMenu.addClass( 'active' ).parent().find( 'ul.submenu' ).slideDown(300)
}).on( 'mouseleave', function() {
	$activeMenu.removeClass( 'active' ).parent().find( 'ul.submenu' ).slideUp(50)
	$activeMenu = ''
})

// testimonial slideshow
var direction = '-'
setInterval( function() {
	var totalWidth = ($wrapper.children().length - 1) * $wrapper.children().outerWidth(true),
		currentPos = parseInt( $wrapper.css('left'), 10 )
	!currentPos? direction = '-' : currentPos <= -totalWidth? direction = '+' : ''
	$wrapper.animate({ 'left': direction + '=960px' }, 800)
}, 5000)

// typewriter effect
$features.typed({
	strings: ["Live captioning", "Media captioning", "Communication access & services", "Custom technical solutions"],
	typeSpeed: 20,
	backDelay: 4000,
	loop: true
})