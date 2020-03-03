/**
 * Twenty Fourteen keyboard support for image navigation.
 */
( function( $ ) {
  // the keydown event uses a namespace, a feature of jQuery. Don't be alarmed.
	$( document ).on( 'keydown.twentyfourteen', function( e ) {
		var url = false;

		// Left arrow key code.
		if ( e.which === 36 ) {
			url = $( '.previous_image a' ).attr( 'href' );

		// Right arrow key code.
		} else if ( e.which === 39 ) {
			url = $( '.next_image a' ).attr( 'href' );
		}

		if ( url && ( ! $( 'textarea, input' ).is( ':focus' ) ) ) {
			window.location = url;
		}
	} );
} )( jQuery );