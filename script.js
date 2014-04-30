function isXS() {
    /* mobile */
    return $('.device-xs').is(':visible')
}

function isSM() {
    /* tablet */
    return $('.device-sm').is(':visible')
}

function isMD() {
    /* desktop */
    return $('.device-md').is(':visible')
}

$(window).on('resize load', function() {
    if($(window).width() <= 1030) {
        /* add mobile-specific customizations */
        /* 1. fix the navbar to the top */
        $('.navbar').addClass('navbar-fixed-top')
    } else {
        /* remove all mobile-specific customizations */
        $('.navbar').removeClass('navbar-fixed-top')
    }
})


$(document).ready(function(){
	$('#testimonials').slick({
		autoplay: true,
		autoplaySpeed: 10000
	})
})

$( '#call-to-action-areas .component4' ).typed({
	strings: ["Live captioning", "Media captioning", "Transcriptions"],
	typeSpeed: 20,
	backDelay: 4000,
	loop: true
})