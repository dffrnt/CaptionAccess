var isXS            = 	function() {
							/* mobile */
							return $('.device-xs').is(':visible')
						}

var isSM            = 	function() {
							/* tablet */
							return $('.device-sm').is(':visible')
						}

var isMD            = 	function() {
							/* desktop */
							return $('.device-md').is(':visible')
						}

var header			= 	$('#header'),
	btnCTA			= 	$('#header.inner button'),
	headerMsg 		=   $('#header p')
	headerHeight 	= 	header.height()

var verticalCenter  = 	function() {
							btnCTA.css({'margin-top': (headerHeight - btnCTA.outerHeight())/2})
							headerMsg.css({'margin-top': (headerHeight - headerMsg.outerHeight())/2})
						}

var opacityAdjust 	=	function() {
							$('.navbar.default .navbar-toggle').on('click', function() {
								!$('.navbar.default div.in').length? $('.navbar-fixed-top').addClass('opaque') : $('.navbar-fixed-top').removeClass('opaque')
							})
						}

$(function() {
	opacityAdjust()
	$('#testimonials').slick({
		autoplay: true,
		draggable: false,
		autoplaySpeed: 10000
	})
})

$(window).on('resize load', function() {
	if($(window).width() <= 1100) {
		if($(window).width() > 768) verticalCenter()
		/* fix the navbar to the top */
		$('.navbar.default').addClass('navbar-fixed-top')
	} else {
		/* remove all mobile-specific customizations */
		$('.navbar').removeClass('navbar-fixed-top')
		verticalCenter()
	}
})

var featureShow = $( '#call-to-action-areas #area2' )
if(featureShow.length) {
	featureShow.typed({
		strings: ["Live captioning", "Media captioning", "Transcriptions"],
		typeSpeed: 20,
		backDelay: 4000,
		loop: true
	})
}