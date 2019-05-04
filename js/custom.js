$(function(){
    $('.thumbnails').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        }
    });
    $('.technology_images').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        }
    });
    $('.mobile_menu_button').on('click', function(){
    	$('.header_menu').slideToggle();
    });
    if (window.matchMedia("(max-width: 768px)").matches){
    	$('.main_info .logo_block').detach().appendTo($('.header_menu_block'));
    }
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-70
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
    $('input[name=phone]').mask('+7 (999) 999-9999');
    
    $('a.fancybox').fancybox();
	$('[data-event]').on('click',function(){
		if($(this).data('event') == 'fancy'){
			jQuery.fancybox({
				'href':'#'+$(this).data('name'),
				'closeBtn':true,
				'wrapCSS':'modal_forms',
				'fixed' : false,
    			'autoCenter' : true
			})
		}
	})
	
	// $('.reviews .items').slick({
	//     arrows: false,
	//     dots: true,
 //        slidesToShow: 6,
 //        slidesToScroll: 1,
 //        responsive: [
 //            {
 //                breakpoint: 992,
 //                settings: {
 //                    slidesToShow: 5,
 //                    slidesToScroll: 1
 //                }
 //            },
 //            {
 //                breakpoint: 768,
 //                settings: {
 //                    slidesToShow: 4,
 //                    slidesToScroll: 1
 //                }
 //            },
 //            {
 //                breakpoint: 600,
 //                settings: {
 //                    slidesToShow: 3,
 //                    slidesToScroll: 1
 //                }
 //            },
 //            {
 //                breakpoint: 480,
 //                settings: {
 //                    slidesToShow: 2,
 //                    slidesToScroll: 1
 //                }
 //            }

 //        ]
 //    });
	
	// if(window.location.pathname=='/'){
	//     $('a[href^="/#"].scrollTo').on('click',function (e) {
	//     e.preventDefault();
	//     var target = this.hash,
	//     $target = $(target);

	//     $('html, body').stop().animate({
	//         'scrollTop': $target.offset().top
	//     }, 900, 'swing', function () {
	//         window.location.hash = target;
	//     });
	// });
	// }
	
	
});