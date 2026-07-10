window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("sticky", window.scrollY > 20);

});


const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}