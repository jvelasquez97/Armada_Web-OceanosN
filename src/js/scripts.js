jQuery('.arrow-up').click(function(){
    fullpage_api.moveSectionUp();
})
jQuery('.arrow-down').click(function(){
    fullpage_api.moveSectionDown();
})

jQuery('.button-empezar').click(function(){
    fullpage_api.moveSectionDown();
})
jQuery('.btn-info').click(function(){
    jQuery('.slide-info').toggleClass('active')
})

let image = 0

jQuery('.btn-change').click(function(){
    if(image == 0){
        jQuery('.slider-interactive').attr('src','src/images/mapa02.jpg')
        image =1
    }else{
        jQuery('.slider-interactive').attr('src','src/images/mapa03.jpg')
        image =0
    }
})





jQuery('.menu').click (function(){
    
    if(jQuery(this).hasClass('open')){
        jQuery('#fp-nav').removeClass('animate__fadeInRight')
        jQuery('#fp-nav').addClass('animate__fadeOutRight')
        jQuery(this).removeClass('open');
    }else{
        jQuery('#fp-nav').removeClass('animate__fadeOutRight')
        jQuery('#fp-nav').addClass('animate__fadeInRight')
        jQuery(this).addClass('open');
    }
  });

  


  


