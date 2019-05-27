(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#pixelNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slideshow');
        var testiSlide = $('.testimonial-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            navText: ['السابق', 'التالي'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        testiSlide.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 500
        });
    }

    // :: 4.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.pixel-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.pixel-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: 5.0 Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: 6.0 Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.zoom-img').magnificPopup({
            type: 'image'
        });
    }
    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i> Top'
        });
    }

    // :: 8.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#c1').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c2').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c3').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c4').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }

    // :: 10.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 11.0 Prevent Default a Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 12.0 Jarallax Active Code
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: 13.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#sticker").sticky({
            topSpacing: 0
        });
    }

    // :: 14.0 Wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }



    // global variable for the player
    var player;

    // this function gets called when API is ready to use
    function onYouTubePlayerAPIReady() {
        // create the global player from the specific iframe (#video)
        player = new YT.Player('video', {
            events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
    
    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });
    
    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
    });

    var stopButton = document.getElementById("stop-button");
    stopButton.addEventListener("click", function() {
        player.stopVideo();
    });
    
    }

    // Inject YouTube API script
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 


	/*----------------------------------------------------*/
	/*  Portfolio carousel js
    /*----------------------------------------------------*/

	$('.active-gallery-carousel').owlCarousel({
		items: 2,
		// autoplay: 2500,
		loop: true,
		margin: 30,
		nav: true,
		navText: [ "<img src='img/cprev.png'>", "<img src='img/cnext.png'>" ],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			420: {
				items: 1
			},
			575: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			},
			1680: {
				items: 2
			}
		}
    });
    
	/*----------------------------------------------------*/
	/*  Nice Select
    /*----------------------------------------------------*/

    //$('select').niceSelect();
    
    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }
  
    
    $('.testi-carousel').owlCarousel({
        loop:true,
        margin:30,
        dots:true,
        nav: true,
        responsiveClass:true,
        navText: [
           "<i class='fas fa-arrow-circle-left'></i>",
           "<i class='fas fa-arrow-circle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                loop:false
            },
            1200:{
                items:1,
                loop:false
            }
        }
    });


    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('#portfoliowork').mixItUp({
        selectors: {
            target: '.tile',
            filter: '.filter',
            sort: '.sort-btn'
        },
        animation: {
            animateResizeContainer: false,
            effects: 'fade scale'
        }

    });

    $('.single_features_slide').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='fas fa-arrow-circle-left'></i>",
            "<i class='fas fa-arrow-circle-right'></i>"
        ],
        autoplayHoverPause: true

    });


    $('.popup-video').click(function(event) {
        let model = $(this).attr('model');
        //alert(model);
        $('.'+model).css({'display':'flex'});
        event.preventDefault();
    });

    $('.modal .close').click(function(){
        $('.modal').css({'display':'none'});
    });

    $('#portfolio #filters .filter').click(function(event) {
        $('#portfolio-items-desc .item-desc').removeClass('show');
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('#portfolio-items-desc .' + filter ).addClass('show');
        } else {
            $('#portfolio-items-desc ' + filter ).addClass('show');
        }
    });

})(jQuery);



// Code goes here

// based on
// http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
// use href="#anchorID" in your hyperlinks 
// with smoothScroll('destinationAnchorID');return false; as the onclick event.
// <a href="#anchor-1" onclick="smoothScroll('anchor-1-id');">smooth scroll to Anchor 1<a/>


function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  return false;
}
