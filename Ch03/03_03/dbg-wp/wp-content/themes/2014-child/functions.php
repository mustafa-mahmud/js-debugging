<?php

// dequeue the built-in keyboard nav script, substituting mine.
function twentyfourteen_child_scripts() {
	if ( is_singular() && wp_attachment_is_image() ) {
		wp_dequeue_script( 'twentyfourteen-keyboard-image-navigation');
		wp_enqueue_script( 'twentyfourteen-child-keyboard-image-navigation', get_stylesheet_directory_uri() . '/js/keyboard-image-navigation.js', array( 'jquery' ), '20150624' );
	}
}
add_action( 'wp_enqueue_scripts', 'twentyfourteen_child_scripts', 100 );