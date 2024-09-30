$(function(){
    $('.msub').hide();
    $('.title').click(function(){
        $('.msub').slideUp();
        $(this).next().slideDown(); //show()
    })
})