(function ($) {
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
        settings = $.extend(
            {
                format: "dropdown",
                sticky: false
            },
            options
            );
            return this.each(function () {
                $(this)
                .find(".button")
                .on("click", function () {
                    $(this).toggleClass("menu-opened");
                    var mainmenu = $(this).next("ul");
                    if (mainmenu.hasClass("open")) {
                        mainmenu.slideToggle().removeClass("open");
                    } else {
                        mainmenu.slideToggle().addClass("open");
                        if (settings.format === "dropdown") {
                            mainmenu.find("ul").show();
                        }
                    }
                });
                cssmenu.find("li ul").parent().addClass("has-sub");
                multiTg = function () {
                    cssmenu
                    .find(".has-sub")
                    .prepend('<span class="submenu-button"></span>');
                    cssmenu.find(".submenu-button, .has-sub>a").on("click", function () {
                        $(this).siblings(".submenu-button").toggleClass("submenu-opened");
                        $(this).toggleClass("submenu-opened");
                        if ($(this).siblings("ul").hasClass("open")) {
                            $(this).siblings("ul").removeClass("open").slideToggle();
                        } else {
                            $(this).siblings("ul").addClass("open").slideToggle();
                        }
                    });
                };
                if (settings.format === "multitoggle") multiTg();
                else cssmenu.addClass("dropdown");
                if (settings.sticky === true) cssmenu.css("position", "fixed");
                resizeFix = function () {
                    var mediasize = 1000;
                    if ($(window).width() > mediasize) {
                        cssmenu.find("ul").show();
                    }
                    if ($(window).width() <= mediasize) {
                        cssmenu.find("ul").hide().removeClass("open");
                    }
                };
                resizeFix();
                return $(window).on("resize", resizeFix);
            });
        };
    })(jQuery);
    
    (function ($) {
        $(document).ready(function () {
            $("#cssmenu").menumaker({
                format: "multitoggle"
            });
        });
    })(jQuery);
   $(document).ready(function () {
        var owl = $(".hero-slider");

        owl.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 9000,
            smartSpeed: 800,
            autoplayHoverPause: true, 
            loop: true,
            nav: true,
            // onTranslated: handleSlideChange,
            dots: false
        });

        // function handleSlideChange(event) {
        //     // Pause all videos before changing the slide
        //     owl.find('.youtube-player').each(function () {
        //         this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        //     });

        //     // Autoplay the video in the current slide
        //     var currentSlide = owl.find('.owl-item.active');
        //     var currentVideo = currentSlide.find('.youtube-player');
        //     var videoSrc = currentVideo.attr('src');
        //     currentVideo.attr('src', videoSrc.replace('&autoplay=0', '&autoplay=1'));
        // }
    });
    $(function () {
        // Owl Carousel
       
        var news = $('.news-slider');
        news.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 9000,
            smartSpeed: 800,
            loop: true,
            nav: false,
            dots: false
        });
        
        var events = $('.events-slider');
        events.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 800,
            loop: true,
            nav: false,
            dots: false
        });
        
        var student = $('.student-slider');
        student.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            loop: true,
            nav: false,
            dots: false
        });
        
        var research = $('.research-slider');
        research.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 9000,
            smartSpeed: 800,
            autoplayHoverPause: true, 
            loop: true,
            nav: true,
            dots: false
        });
        
        var recruiter_list = $('.recruiter_list');
        recruiter_list.owlCarousel({
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            loop: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                    nav: false
                },
                600: {
                    items: 4,
                    nav: false
                },
                1000: {
                    items: 6,
                    nav: false
                }
            }
        });
        $('.fadeslide-1').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 150,
        });
        $('.fadeslide-2').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 200,
        });
        $('.fadeslide-3').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 250,
        });
        $('.fadeslide-4').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 300,
        });
        $('.student-testimonial').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            // autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 300,
        });
        $('.media-news_slider').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 300,
        });
        $('.research-aria_slider').owlCarousel({
            loop: true,
            margin: 15,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        });
        $('.overview-aria_slider').owlCarousel({
            loop: true,
            margin: 15,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        })
    });
    $("#portfolio").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    
    // $(document).ready(function() {
    //     var scrollThreshold = 117; 
    //     var $header = $('header');
    
    //     $(window).scroll(function() {
    //       if ($(this).scrollTop() >= scrollThreshold) {
    //         $header.addClass('fixed');
    //       } else {
    //         $header.removeClass('fixed');
    //       }
    //     });
    //   });
    //   $(document).ready(function() {
    //     $(window).scroll(function() {
    //         if ($(window).scrollTop() >= 117) {
    //             $("header").addClass("fixed");
    //         } else {
    //             $("header").removeClass("fixed");
    //         }
    //     });
    // });
    $(document).ready(function () {
        var header = $("header");
        var headerOffset = header.offset().top;
        var isHeaderFixed = false;
        header.addClass("in");
        // Check if the header was previously fixed
        var isHeaderFixedString = localStorage.getItem("isHeaderFixed");
        if (isHeaderFixedString === "true") {
            header.addClass("fixed");
            isHeaderFixed = true;
        }
        
        $(window).scroll(function () {
            
            if ($(window).scrollTop() >= 117) {
                if (!isHeaderFixed) {
                    header.removeClass("in");
                    header.addClass("fixed");
                    isHeaderFixed = true;
                    // Store the state in localStorage
                    localStorage.setItem("isHeaderFixed", "true");
                }
            } else {
                if (isHeaderFixed) {
                    header.removeClass("fixed");
                    isHeaderFixed = false;
                    // Remove the state from localStorage
                    localStorage.setItem("isHeaderFixed", "false");
                }
            }
        });
    });
    