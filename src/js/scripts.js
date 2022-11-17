
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
    jQuery('.btn-change').removeClass('active')
    if(jQuery(this).attr('data') == 'barimetria'){
        jQuery('.before-img').attr('src','src/images/barimetria.jpg')
        jQuery(this).addClass('active')
        
    }else{
        jQuery('.before-img').attr('src','src/images/satelital.jpg')    
        jQuery(this).addClass('active')
    }
})

jQuery('.btn-change2').click(function(){
    jQuery('.btn-change2').removeClass('active')
    if(jQuery(this).attr('data') == 'color'){
        jQuery('.before-img2').attr('src','src/images/mapa2-02.jpg')
        jQuery(this).addClass('active')
        
    }else{
        jQuery('.before-img2').attr('src','src/images/mapa2-01.jpg')    
        jQuery(this).addClass('active')
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

  


  


