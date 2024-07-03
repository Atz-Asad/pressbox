
(function ($) {
  "use strict";
    
  // header menu sticky
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
      const sectionHeader = document.querySelector(".section-header");
      const navmenu = document.querySelector(".nav-menu");
      const currentScrollY = window.scrollY;

      if (sectionHeader && navmenu) {
          const sectionHeaderHeight = sectionHeader.getBoundingClientRect().height;
          // console.log("Section Header Height:", sectionHeaderHeight);
          if (currentScrollY < lastScrollY && currentScrollY > sectionHeaderHeight) { 
              navmenu.classList.add("sticky-navbar");
              document.body.style.paddingTop = navmenu.getBoundingClientRect().height + 'px';
          } else {
              navmenu.classList.remove("sticky-navbar");
              document.body.style.paddingTop = 0;
          }
          lastScrollY = currentScrollY;
      }
  });

  // header 4
  if ($('.header-post-card-slider').length > 0) {   
    var swiper = new Swiper(".header-post-card-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 1000,
      grabCursor: true,
      mousewheel: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },  
    });
  }

  // Today’s Match slider Home 2 ===========
  if ($('.breakingnews-slider-3').length > 0) { 
    var swiper2 = new Swiper(".breakingnews-slider-3", {
      // spaceBetween: 40,
      // slidesPerView: 2.8,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed:8000,
      breakpoints: {
        480:{
          slidesPerView: 0.6,
        },
        575: {
          slidesPerView: .8,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 1.7,
          
        },
        1200: {
          slidesPerView: 2.1,
          
        },
        1400: {
          spaceBetween: 20,
          slidesPerView: 1.3,
          
        },
      },
    });

    // $('.swiper-slide').hover(function(){
    //   swiper2.autoplay.stop();
    // }, function(){
    //   swiper2.autoplay.start();
    // });
  }

  // Breaking-news-slider Marquee Slider ===========  
  $(function (){	
    let options = {
      padding: 40,
      duration: 100000, // duration in milliseconds
      autostart: true,
      onComplete: function(){},
    };
    $('.simple-marquee-container').SimpleMarquee(options);

  });
  //========== breaking-news-slider 2 ======== swiper slider
  if ($('.breaking-news-slider-2').length > 0) { 
    var swiper = new Swiper(".breaking-news-slider-2", {
      loop: true,
      slidesPerView: 'auto',
      speed: 2000,
      navigation: {
        nextEl: ".breaking-news-item-next",
        prevEl: ".breaking-news-item-prev",
      },
    });
  }
  // Megamenu Slider Start
  if ($('.megamenuslider').length > 0) {   
    var swiper = new Swiper(".megamenuslider", {
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 1000,
        grabCursor: true,
        mousewheel: true,
        loop: true,
        navigation: {
            nextEl: ".megamenuslider-item-next",
            prevEl: ".megamenuslider-item-prev",
        },  
    });
  }
  // Megamenu Slider End

  // video gallery Start
  if ($('.video-gallery-thumds').length > 0) {  
    var swiper = new Swiper(".video-gallery-thumds", {
        spaceBetween: 30,
        slidesPerView: 4,
        loop: true,
        breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
  if ($('.video-gallery').length > 0) {  
      var swiper = new Swiper(".video-gallery", {
        loop: true,
        speed: 1000,
        thumbs: {
          swiper: swiper,
        },
      });
  }
  // video gallery End

  // Home - 2 video Gallery
  if ($('.video-slider-style-2').length > 0) { 
    var swiper = new Swiper(".video-slider-style-2", {
      slidesPerView: '4',
      loop: true,
      centeredSlides: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        
      },
      navigation: {
        nextEl: ".video-slider-button-next",
        prevEl: ".video-slider-button-prev",
      },
      breakpoints: {
        360: {
          slidesPerView: 1,
          
        },
        575: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 2.5,
          // centeredSlides: false,
        },
        1200: {
          slidesPerView: 4,
          
        },
      },
    });
  }

  // Home 3 photo gallery
  var swiper = new Swiper(".photo-gallery-slider", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    // autoplay: {
    //   delay: 1500,
    // },
    speed: 1000,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 380,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: ".photo-gallery-button-next",
      prevEl: ".photo-gallery-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: true
        },
        
      },
      992: {
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 380,
          modifier: .47,
          slideShadows: false
        },
      },
    },
  });

  // video gallery Start
  if ($('.instagram-slider').length > 0) {  
    var swiper = new Swiper(".instagram-slider", {
      spaceBetween: 30,
      slidesPerView: 6,
      loop: true,
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  };

  // ==== logo-slider article ===========
  if ($('.logo-slider').length > 0) { 
    var swiper2 = new Swiper(".logo-slider", {
      spaceBetween: 100,
      slidesPerView: 7,
      loop: true,
      // autoplay: {
      //   delay: 0,
      //   disableOnInteraction: false,
      // },
      // speed:8000,
      breakpoints: {
        300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 4,
          
        },
        575: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 80,
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 110,
        },
      },
      
    });

    // $('.swiper-slide').hover(function(){
    //   swiper2.autoplay.stop();
    // }, function(){
    //   swiper2.autoplay.start();
    // });
  }

  if ($('.sports-match-slider').length > 0) { 
    var swiper = new Swiper(".sports-match-slider", {
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: ".sports-match-button-next",
        prevEl: ".sports-match-button-prev",
      },
    });
  }

  // ========== video popup ==========
  if ($('.my-video-links').length > 0) {  
      new VenoBox({
          selector: '.my-video-links',
          autoplay: false
      });
  } 
  // video popup Images
  new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: false,
      spinner: 'grid',
      spinColor: '#0F90E6',
      // titlePosition: 'bottom',
  });

  // ======== Dynamic Date =========
  if ($('#dynamic-date').length > 0) {  
    function getFormattedDate() {
      const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
    document.getElementById('dynamic-date').textContent = getFormattedDate();
  }

  // =============  Dynamic Year =====footer use===== 
  if ($('.dynamic-year').length > 0) {  
    const yearElement = document.querySelector('.dynamic-year');
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = currentYear;
  }
  // ==========  Recent-search 
  document.addEventListener('DOMContentLoaded', function() {
    const closeIcons = document.querySelectorAll('.icon-close');
    if (closeIcons.length > 0) {
        closeIcons.forEach(closeIcon => {
            closeIcon.addEventListener('click', function() {
                const parent = this.closest('.recent-search-title');
                if (parent) {
                    parent.remove();
                }
            });
        });
      }
  });
  // ==========  Recent-search End ======

  //============== Ads Pop up ==========
  if ($('#popup').length > 0) { 

    document.addEventListener("DOMContentLoaded", function() {
        var popup = document.getElementById("popup");
        var closePopup = document.getElementById("closePopup");
        popup.style.display = "block"; //block
        setTimeout(function() {
          popup.classList.add("show");
        });
        closePopup.addEventListener("click", function(e) {
            e.preventDefault();
            popup.style.display = "none";
        });
    });
  }
  //============== Ads Pop up ==========

  //============== Scroll back to top ==========
  if ($('.btn-back-to-top').length > 0) {
    document.addEventListener("DOMContentLoaded", function() {
      const backtotop = document.querySelector('.btn-back-to-top');
      // Show the button when user scrolls down
      window.addEventListener('scroll', () => {
          if (window.pageYOffset > 500) {
              backtotop.classList.add('show');
          } else {
              backtotop.classList.remove('show');
          }
      });
      // Smooth scroll back to top
      backtotop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      });
    });
  }
  // =================  Back-To-Top =============

  // social icon hover effect 
  if ($('.share').length > 0) {

    const shareIcon = document.querySelector(".share");
    const social = document.querySelector(".social");
    
    shareIcon.addEventListener("mouseover", () => {
      social.style.display = "flex";
      shareIcon.style.display = "none";
    });
    social.addEventListener("mouseleave", () => {
      social.style.display = "none";
      shareIcon.style.display = "block";
    });
  }


  // odometer CountDown
  if ($('.odometer').length > 0) {

    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            // Initialize Odometer with duration option
            var odometer = new Odometer({
                el: this,
                value: 0,
                format: '',
                duration: 2000, // Set the duration in milliseconds
            });
    
            // Animate the odometer to the target value
            odometer.update(countNumber);
        });
    });
  };

})(jQuery);

// Hover Menu
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 992) {
    document.querySelectorAll('.hover-menu .dropdown').forEach(function (everyitem) {
        everyitem.addEventListener('mouseover', function (e) {
            let el_link = this.querySelector('a[data-bs-toggle]');
            if (el_link !== null) {
                let nextEl = el_link.nextElementSibling;
                el_link.classList.add('show');
                if (nextEl !== null && this.contains(nextEl)) {
                    nextEl.classList.add('show');
                }
            }
        }.bind(everyitem));
        everyitem.addEventListener('mouseleave', function (e) {
            let el_link = this.querySelector('a[data-bs-toggle]');
            if (el_link !== null) {
                let nextEl = el_link.nextElementSibling;
                if (nextEl !== null && this.contains(nextEl)) {
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
            }
        }.bind(everyitem));
    });
  }
  // end if innerWidth
});
