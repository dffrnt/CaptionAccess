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

var verticalCenter  = 	function() {
							btnCTA.css({'margin-top': (header.height() - btnCTA.outerHeight())/2})
							headerMsg.css({'margin-top': (header.height() - headerMsg.outerHeight())/2})
						}

var headerAdjust    = 	function(mode) {
							$('#content-grid').css({'margin-top': mode? 60 : header.height() + 120})
						}

var adjust 			= 	function() {
							headerAdjust()
							verticalCenter()
						}

$(function() {
	adjust()
	$('#testimonials').slick({
		autoplay: true,
		draggable: false,
		autoplaySpeed: 10000
	})
})

$(window).on('resize load', function() {
	adjust()
	if($(window).width() <= 1100) {
		/* add mobile-specific customizations */
		/* 1. fix the navbar to the top */
		$('.navbar').addClass('navbar-fixed-top')
	} else {
		/* remove all mobile-specific customizations */
		$('.navbar').removeClass('navbar-fixed-top')
		headerAdjust('reset')
	}
})

$( '#call-to-action-areas #area2' ).typed({
	strings: ["Live captioning", "Media captioning", "Transcriptions"],
	typeSpeed: 20,
	backDelay: 4000,
	loop: true
})