$(function(){
    var mMenu =$('.gnb > li'); //주메뉴
    var tHeader =$('#header');

    $('.sub').hide();
    mMenu.mouseenter(function(){
        tHeader.stop().animate({height:'380px'},400);
        $('.sub').show();
    });
    mMenu.mouseleave(function(){
        tHeader.stop().animate({height:'100px'},200);
        $('.sub').hide();
    });
})