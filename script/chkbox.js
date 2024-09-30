function chkBox(){
    if(!document.fm.f1.checked){
     alert('개인정보 수집에 동의를 체크하세요');
     return false;
    }
    window.open('chkpop.html','pop2','width=420,height=600');
 }