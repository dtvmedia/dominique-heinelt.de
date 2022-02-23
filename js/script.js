/**
 * Check if element is scrolled into view
 * @param elem
 * @return {boolean}
 */
function isScrolledIntoViewWithOverlayScrollbars(elem) {
    const docViewBottom = $('.os-viewport').height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + 25;

    return ((elemBottom <= docViewBottom) && (elemTop >= 0));
}

/**
 * Updates the animated content
 */
function updateAnimatedContent() {
    $('.animated:not(.infinite)').each(function() {
        if (isScrolledIntoViewWithOverlayScrollbars(this) === true) {
            $(this).removeClass('hidden').addClass($(this).data('animation'));
        }
    });
}

/**
 * On Load Handler
 */
$(document).ready(function() {
    const Body = $('body');

    // Init Custom Scrollbars
    Body.overlayScrollbars({
        callbacks: {
            onScroll: function() {
                // If element is scrolled into view, animate it
                updateAnimatedContent();
            }
        }
    });
    const Scrollbar = Body.overlayScrollbars({
        overflowBehavior : {
            x : "hidden",
        },
    });

    // Initial Animation Update
    updateAnimatedContent();

    // Scroll down button
    $("a[href='#about']").click(function(e) {
        e.preventDefault();

        document.getElementById('main').scrollIntoView({behavior: "smooth"});
    });

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 55,
                "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.48927153781200905,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.2,
                "direction": "none",
                "random": true,
                "straight": true,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
