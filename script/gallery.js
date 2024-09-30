  $('.thumbs a').click(function(){
    var path =$(this).attr('href');

    $('#largeImg > img').attr({src:path});    
    $('#largeImg > img').css('opacity','0').stop().animate({opacity:1},1500);
     return false;	 
   });	