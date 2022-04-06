$('.single-item').slick({
    infinite: true,
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });