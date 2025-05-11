var mq= window.matchMedia("(min-width: 1025px)");
var lt= window.matchMedia("(max-width:1024)");

if(mq.matches){
    document.querySelector( ".navbar").classList.add("fk");
    document.querySelector(".bx").remove();
    document.querySelector(".lasttwo").removeAttribute('hidden');
    document.querySelector(".lasttw").removeAttribute('hidden');

}else{
    document.querySelector( ".navbar").setAttribute('hidden');
}
if(lt.matches){

}else{
    document.querySelector( ".navbar").classList.remove("fk");

}
