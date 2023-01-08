$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.sidebar').addClass("sticky");
        }else{
            $('.sidebar').removeClass("sticky");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // Menu Mobile
    $('.menu-btn').click(function(){
        $('.sidebar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
