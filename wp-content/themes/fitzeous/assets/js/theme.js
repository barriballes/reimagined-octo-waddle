;(function($) {
    "use strict"; 
    /* TO TOP STARTS */

	$(window).load(function(){
		if($('#loader-wrapper').length){
            $('#loader-wrapper').fadeOut();
		};
	});

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    var nav_offset_top = $('header').height();
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('header').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_menu,.menu_inner_area_four").addClass("navbar_fixed");
                } else {
                    $(".header_menu,.menu_inner_area_four").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    /* Main Slider js */
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:780,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1360,1199,992,767,480],
                gridwidth:[1170,1020,850,720,500,300],
                gridheight:[760,760,760,760,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    };
    
    function main_slider4(){
        if ( $('#main_slider4').length ){
            $("#main_slider4").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:780,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1360,1199,992,767,480],
                gridwidth:[1170,1020,850,720,500,300],
                gridheight:[630,630,630,630,630,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    };
    
    function main_slider2(){
        if ( $('#main_slider2').length ){
            $("#main_slider2").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:800,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1360,1199,992,767,480],
                gridwidth:[1170,1020,850,710,500,300],
                gridheight:[845,845,845,845,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }; 
    
    function main_slider3(){
        if ( $('#main_slider3').length ){
            $("#main_slider3").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:800,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1360,1199,992,767,480],
                gridwidth:[1170,1020,850,630,500,300],
                gridheight:[680,680,680,680,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }; 
    
    /* SaysCarus */ 
    function saysCarus(){
        if ( $('.customers_says_row').length ){ 
            $('.says_carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                items: 1,
                responsive: { 
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                },
            });
        };
    }; 
    function whatCarus(){
        if ( $('.what_wedo_area').length ){ 
            $('.what_wedo_carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true, 
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                responsive: { 
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                },
            });
        };
    };  
    
    /* Counter Js */
    function counterUp(){
        if ( $('.counter').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };  
    
    /* Magnificpopup js */
    function magnificPopup() {
        if ($('body').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });
            
            //Search Popup
            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline', 
                fixedContentPos: false,
                fixedBgPos: true, 
                overflowY: 'auto', 
                closeBtnInside: true,
                preloader: false, 
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });  
        };
    };  
    
    //* Isotope js
  	function gallery_isotope(){
        if ( $('.grid_gallery_area').length ){ 
            // Activate isotope in container
            $(".grid_gallery_item_inner").imagesLoaded( function() {
                $(".grid_gallery_item_inner").isotope({
                    layoutMode: 'fitRows',
                    columnWidth: 1,
                    percentPosition: true,
                }); 
            }); 
            
            // Add isotope click function 
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".grid_gallery_item_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  
        };
    }; 
    //* Isotope js
  	function nice_Select(){
        if ( $('.product_select').length ){ 
            $('select').niceSelect();
        };
    };  
    
    //*  Simple LightBox js 
    $('.imageGallery1 .light').simpleLightbox(); 

    
    /*Function Calls*/ 
    navbarFixed ();
    saysCarus();
    counterUp();
    magnificPopup();
    gallery_isotope ();
    nice_Select ();
    whatCarus ();

})(jQuery); 