var mobile = document.getElementById('mobile');
var nav = document.getElementById('nav');
var head = document.getElementById('header');
mobile.addEventListener("click", ()=>{
   
    head.classList.toggle('fade');
    nav.classList.toggle('active')
})