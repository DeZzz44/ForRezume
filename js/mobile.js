let hamburger=document.querySelector('.hamburger');
let mobile=document.querySelector('.mobile');
let mobile1=document.querySelector('.mobile1');
let closeMobile=document.querySelector('.close');

hamburger.onclick=function(){
   mobile.classList.add( 'displayFlex');
   document.body.classList.add('overflowHidden');
   mobile1.classList.add( 'displayBlock');
}

closeMobile.onclick=function(){
    mobile.classList.remove( 'displayFlex');
    document.body.classList.remove('overflowHidden');
    mobile1.classList.remove( 'displayBlock');
    }

mobile1.addEventListener('click', function () {
    mobile.classList.remove( 'displayFlex');
    document.body.classList.remove('overflowHidden');
    mobile1.classList.remove( 'displayBlock');
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        mobile.classList.remove( 'displayFlex');
        document.body.classList.remove('overflowHidden');
        mobile1.classList.remove( 'displayBlock');
    }
  });



    


 