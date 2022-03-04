 // Preloader
// Page loading animation
	
$(window).on('load', function() {
    $("#preloader").animate({
        'opacity': '0'
    }, 600, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});



// jQuery to collapse the navbar on scroll
$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() >= 20) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink")
        }
    });
});



// Swiper
$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
    // If we need autoplay
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
    
    // Optional parameters
        direction: 'horizontal',
        loop: true,
  
    // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
  
    // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    // Optional slide no
        slidesPerView: 3,

    // Optional media-query
        breakpoints: {
    // when window is <= 992px
        992: {
            slidesPerView: 3
         },
    // when window is <= 0px
        0: {
            slidesPerView: 1
        } 
    },
  
  });
  });
