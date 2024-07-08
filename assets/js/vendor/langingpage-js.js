(function ($) {
    "use strict";

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        const sectionHeader = document.querySelector(".header-landing");
        const currentScrollY = window.scrollY;

        if (sectionHeader) {
            if (currentScrollY > 100) {
                sectionHeader.classList.add("sticky");
                document.body.style.paddingTop = sectionHeader.getBoundingClientRect().height + 'px';
            } else {
                sectionHeader.classList.remove("sticky");
                document.body.style.paddingTop = 0;
            }
            lastScrollY = currentScrollY;
        }
    });


    $("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});


      //============== back to top ==========
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

})(jQuery);