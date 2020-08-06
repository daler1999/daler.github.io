$(document).ready(function () {
    
    var header = $('header');
    var nav = $('header .nav');
    var flag = true;
    $(window).scroll(function(){
        if($(this).scrollTop() >= header.innerHeight() - nav.innerHeight() && flag == true){
            nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1
            }, 600)
            flag = false;
        }
        else if($(this).scrollTop() <= header.innerHeight() - nav.innerHeight() && flag == false ){
            nav.animate({
                opacity: 0
            },600,function(){
                nav.removeClass('fixed-top').css('opacity',1 );
            })
            flag = true;
        }
    })
    var btn = document.querySelector('.btn');
var timer;

btn.addEventListener('click', toTop );
  
    function toTop(){
        scrolled = window.pageYOffset;
        if(scrolled > 0) {
            scrolled -= 100;
            scrollTo(0, scrolled);
            timer = setTimeout (toTop, 10);
        }
    
    
}
window.addEventListener('wheel', function(e){
    if(pageYOffset > 400){
        btn.style.display = 'block';
        
    }
    else{
        btn.style.display = 'none';
    }
    
})

    
    
});