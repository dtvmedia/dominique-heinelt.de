/**
 * Check if element is scrolled into view
 * @param elem
 * @return {boolean}
 */
function isScrolledIntoViewWithOverlayScrollbars( elem ) {
    const docViewBottom = $( '.os-viewport' ).height();

    const elemTop = $( elem ).offset().top;
    const elemBottom = elemTop + $( elem ).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= 0));
}

/**
 * Updates the animated content
 */
function updateAnimatedContent() {
    $( '.animated:not(.infinite)' ).each( function () {
        if ( isScrolledIntoViewWithOverlayScrollbars( this ) === true ) {
            $( this ).removeClass( 'hidden' ).addClass( $( this ).data( 'animation' ) );
        }
    } );
}
var Scrollbar;
/**
 * On Load Handler
 */
$( document ).ready( function () {
    const Body = $( 'body' );

    // Init Custom Scrollbars
    Body.overlayScrollbars( {
        callbacks : {
            onScroll: function () {
                // If element is scrolled into view, animate it
                updateAnimatedContent();
            }
        }
    } );
    Scrollbar = Body.overlayScrollbars();

    // Initial Animation Update
    updateAnimatedContent();

    // Scroll down button
    $( "a[href='#about']" ).click( function ( e ) {
        e.preventDefault();

        Scrollbar.scroll({ y : 1025 + 'px' }, 600);
    } );

} );