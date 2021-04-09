$(document).ready(function(){
    $('.video-slider').owlCarousel({
        autplay:false,
        loop:false,
        margin:20,
        nav:true,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{
              items:1,
            },
            576:{
              items:2,
              margin:25,
            },
            768:{
              items:3,
              margin:20,
            },
            992:{
                items:4,
            }
          }

    });

})