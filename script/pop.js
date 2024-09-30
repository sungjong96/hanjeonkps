// $(function(){
    
//     $('.close').click(function(){
//         $('.popup').hide();
//     });
// }); 

    // 쿠키검색함수

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    };

        // 스크립트데이터 기록 쿠키 == 쿠키저장함수

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    };


    function couponClose(){
    if($("input[name='chkbox']").is(":checked") ==true){
        setCookie("close","Y",1);
    }
    $(".popup").hide(); 
    
}
$(document).ready(function(){
    cookiedata = document.cookie;
    if(cookiedata.indexOf("close=Y")<0){
        $(".popup").show(); 
    }else{
        $(".popup").hide(); 
        
    }
    $(".close").click(function(){
        couponClose();
    });
});


