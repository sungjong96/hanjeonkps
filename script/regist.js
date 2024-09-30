$(function(){
  $('#frm').submit(function(){
    function createTxt(target,msg){
      var txt= new Array();
      target ='#'+target;
      txt[0] = "아이디는 필수입력사항입니다.";
      txt[1] = "비밀번호는 필수입력사항입니다.";
      txt[2] = "비밀번호확인은 필수입력사항입니다.";
      txt[3] = "비밀번호를 다시 확인 하세요.";
      txt[4] = "이메일은 필수입력사항입니다.";
      txt[5] = "이메일 형식이 올바르지 않습니다.";
      if(!$(target).next().hasClass('on')){
      $(target).after('<p>'+txt[msg]+'</p>').next().addClass('on');
      }
    }
    var reg_email =/^([0-9a-zA-Z-_]+)@([0-9a-zA-Z-_]+)(\.[0-9a-zA-Z-_]+){1,2}$/;
    
    if(!$('#id').val()){ 
     createTxt('id',0);
     return false;
    }
    if(!$('#pw').val()){
     createTxt('pw',1);
     return false;
    }
    if(!$('#repw').val()){
     createTxt('repw',2);
     return false;
    }
    if($('#pw').val() != $('#repw').val()){
     createTxt('repw',3);
     return false;
    }
    if(!$('#email').val()){
     createTxt('email',4);
     return false;
    }
    if(!reg_email.test($('#email').val())){
     createTxt('email',5);
     return false;
    }
  });
  $('#frm dl dd input').focus(function(){
    $(this).next().remove();
  });
});