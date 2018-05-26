$( document ).ready( function () {
    // Check if element is scrolled into view
    function isScrolledIntoView( elem ) {
        const docViewTop = $( window ).scrollTop();
        const docViewBottom = docViewTop + $( window ).height();

        const elemTop = $( elem ).offset().top;
        const elemBottom = elemTop + $( elem ).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function updateAnimatedContent() {
        $( '.animated:not(.infinite)' ).each( function () {
            if ( isScrolledIntoView( this ) === true ) {
                $( this ).removeClass( 'hidden' ).addClass( $( this ).data( 'animation' ) );
            }
        } );
    }

    // If element is scrolled into view, fade it in
    $( window ).scroll( function () {
        updateAnimatedContent();
    } );

    $( "a[href^='#']" ).click( function ( e ) {
        e.preventDefault();
        const dest = $( this ).attr( 'href' ).substring( 1 );

        $( 'html,body' ).animate( { scrollTop: $( "a[name='" + dest + "']" ).offset().top - 80 }, 'slow' );
    } );

    // On Load
    updateAnimatedContent();
} );