jQuery(document).ready(function() {




//scrollTop-1
	jQuery(".scrolltotop").click(function() {
			jQuery("html").animate({scrollTop : "0px"}, 400);
		});

		jQuery(document).scroll(function() {

			var otd = jQuery(document).scrollTop();
			if (otd > 500) {
				jQuery(".scrolltotop").fadeIn();

			} else {
				jQuery(".scrolltotop").fadeOut();
			}
		});


	//my-menu-1
	/*jQuery(".hamburger").click(function() {
		jQuery(".collapse").slideToggle("easeInExpo");
	});*/

	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

	//owl-carousel
	  $(".owl-class").owlCarousel({
	  	"items" : 5,
	    "loop" : true,
	    "dots" : true,
	    "autoplay" : true,
	    "nav" : false,
	    "autoplayTimeout" :1000,
       responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            765:{
                items:3
            },
            1000:{
                "items":4,
                "loop" : false,
                "autoplay" : false,
            }
        }

	  });  


	//smouth scroll

	//Option 2 - jQuery Smooth Scrolling
	$('.navbar-nav a').on('click', function (e) {
	  if (this.hash !== '') {
	    e.preventDefault();

	    const hash = this.hash;

	    $('html, body')
	      .animate({
	        scrollTop: $(hash).offset().top
	      },800);
	  }
	});


  	// PRE LOADER
  	jQuery(window).on("load",function(){
        jQuery(".preloader").fadeOut(1000);
    });








































	
});