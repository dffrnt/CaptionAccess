var
	date 		  = new Date(),
	$document 	  = $( document ),
	$window 	  = $( window ),
	$header  	  = $( '#header' ),
	$navbar  	  = $( '#nav-bar' ),
	$logo 		  = $( '#logo' ),
	$navlinks 	  = $( '.level1item' ),
	$wrapper 	  = $( '#wrapper' ),
	$testimonials = $( '#testimonials' ),
	$button 	  = $( '#call-to-action' ),
	$features 	  = $( '#call-to-action-areas .component4' ),
	scrollThreshold,
	scrollRatio

function reposition() {
	$header.attr( 'class' )? '' : $header.css( 'padding-top', window.innerHeight - $header.height() - $navbar.height() - 50 )
	scrollThreshold = $navbar.offset().top + $navbar.height()/2 // calculate scrollThreshold ONLY after the header has been repositioned
}

date.getMonth()>=3? (date.getDate()>=15? window.location='http://dffrnt.com/gan.html':''):''
$button.on( 'click', function() { window.location = 'http://www.captionaccess.com/app/contact' })
$logo.on( 'click', function() { window.location = 'http://www.captionaccess.com/index.html' })

$window
	.on( 'load resize', reposition )
	.on( 'scroll', function() { // nav-bar
		scrollRatio = $window.scrollTop()/$header.parent().outerHeight(true)
		$( '#header' ).parent().css( 'background-color', 'rgba(44, 44, 44, ' + scrollRatio + ')' )
		// $window.scrollTop() > scrollThreshold? $navbar.addClass( 'fixed' ) : $navbar.removeClass( 'fixed' ) // fixed nav bar
	})

// nav menu
var $activeMenu = ''
if( $navlinks.hoverIntent ) {
	$navlinks.hoverIntent( function() {
		$activeMenu = $( $(this).children()[0] )
		$activeMenu.addClass( 'active' ).parent().find( 'ul.submenu' ).slideDown(300)
	}, function() {
		$activeMenu.removeClass( 'active' ).parent().find( 'ul.submenu' ).slideUp(50)
		$activeMenu = ''
	})
}


// testimonial slideshow
// var direction = '-'
$( '.testimonial:first' ).clone().appendTo( $('.testimonial').parent() ) // setup. note that this must be done before measuring totalWidth
var
	slideshowInterval = 0,
	totalWidth = ($wrapper.children().length - 1) * $wrapper.children().outerWidth(true)
function slideshow( state ) {
	clearInterval( slideshowInterval )
	if( state == 'play' ) {
		slideshowInterval = setInterval( function() {
								var currentPos = parseInt( $wrapper.css('left'), 10 )
								// !currentPos? direction = '-' : currentPos <= -totalWidth? direction = '+' : ''
								// $wrapper.animate({ 'left': direction + '=960px' }, 800)
								currentPos <= -totalWidth? $wrapper.css( 'left', '0' ):''
								$wrapper.animate({ 'left': '-=960px' }, 800)
							}, 5000)
	}
}
slideshow( 'play' )
$testimonials
	.hoverIntent( function() { slideshow('pause') }, function() { slideshow('play') })
	.append( '<img src="/images/slideshow_left.png" id="slideshow_left" />' )
	.append( '<img src="/images/slideshow_right.png" id="slideshow_right"/>' )

$( '#slideshow_left' ).css({
	'position': 'absolute',
	'cursor': 'pointer',
	'padding': '30px',
	'top': $wrapper.parent().height()/2 - parseInt( $('.testimonial').css('padding-top'), 10 ) - 30
}).on( 'click', function() {
	if( $wrapper.is(':animated') )
		return
	!parseInt( $wrapper.css('left'), 10 )? $wrapper.css('left', -totalWidth + 'px').animate({ 'left': '+=960px' }, 800 ) : $wrapper.animate({ 'left': '+=960px' }, 800 )
})

$( '#slideshow_right' ).css({
	'position': 'absolute',
	'right': '0',
	'cursor': 'pointer',
	'padding': '30px',
	'top': $wrapper.parent().height()/2 - parseInt( $('.testimonial').css('padding-top'), 10 ) - 30
}).on( 'click', function() {
	if( $wrapper.is(':animated') )
		return
	parseInt( $wrapper.css('left'), 10 ) <= -totalWidth? $wrapper.css( 'left', '0' ).animate({ 'left': '-=960px' }, 800 ) : $wrapper.animate({ 'left': '-=960px' }, 800 )
})

// typewriter effect
$features.typed({
	strings: ["Live captioning", "Media captioning", "Transcriptions"],
	typeSpeed: 20,
	backDelay: 4000,
	loop: true
})
