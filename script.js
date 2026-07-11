/* =====================================================
   CARMINA PORTFOLIO
   VERSION 2.0
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initStickyNavbar();
    initScrollProgress();
    initBackToTop();
    initActiveMenu();
    initTyping();
    initSkillsAnimation();
    initRippleButtons();
    initVisitorCounter();

});


/* =====================================================
   LOADER
===================================================== */

function initLoader(){

    window.addEventListener("load",()=>{

        const loader=document.getElementById("loader");

        if(loader){

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },400);

        }

    });

}


/* =====================================================
   STICKY NAVBAR
===================================================== */

function initStickyNavbar(){

    const navbar=document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>20){

            navbar.classList.add("sticky");

        }else{

            navbar.classList.remove("sticky");

        }

    });

}


/* =====================================================
   PROGRESS BAR
===================================================== */

function initScrollProgress(){

    const progress=document.getElementById("progressBar");

    window.addEventListener("scroll",()=>{

        const scrollTop=document.documentElement.scrollTop;

        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const percent=(scrollTop/height)*100;

        progress.style.width=percent+"%";

    });

}


/* =====================================================
   BACK TO TOP
===================================================== */

function initBackToTop(){

    const btn=document.getElementById("topBtn");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            btn.style.display="flex";

        }else{

            btn.style.display="none";

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* =====================================================
   ACTIVE MENU
===================================================== */

function initActiveMenu(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-180;

            const height=section.offsetHeight;

            if(pageYOffset>=top && pageYOffset<top+height){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}


/* =====================================================
   TYPING EFFECT
===================================================== */

function initTyping(){

    const typing=document.getElementById("typing");

    if(!typing) return;

    const text="Virtual Assistant • Administrative Support • Social Media Support";

    let i=0;

    function type(){

        if(i<text.length){

            typing.innerHTML+=text.charAt(i);

            i++;

            setTimeout(type,45);

        }

    }

    type();

}


/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

function initSkillsAnimation(){

    const bars=document.querySelectorAll(".skill-fill");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const width=entry.target.dataset.width;

                entry.target.style.width=width;

            }

        });

    },{

        threshold:.5

    });

    bars.forEach(bar=>{

        observer.observe(bar);

    });

}


/* =====================================================
   RIPPLE BUTTON
===================================================== */

function initRippleButtons(){

    document.querySelectorAll(".primary-btn,.secondary-btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=this.getBoundingClientRect();

            ripple.style.left=e.clientX-rect.left+"px";

            ripple.style.top=e.clientY-rect.top+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

}


/* =====================================================
   VISITOR COUNTER
===================================================== */

function initVisitorCounter(){

    let visits=localStorage.getItem("portfolioVisits");

    if(!visits){

        visits=1;

    }else{

        visits=parseInt(visits)+1;

    }

    localStorage.setItem("portfolioVisits",visits);

    const counter=document.getElementById("visitorCounter");

    if(counter){

        counter.innerHTML=visits;

    }

}





/* ===========================
LOCAL ANALYTICS
=========================== */

// total visits

let visitors = localStorage.getItem("visitors");

if(!visitors){

visitors = 1;

}else{

visitors = Number(visitors)+1;

}

localStorage.setItem("visitors",visitors);

document.getElementById("visitorCount").innerHTML=visitors;


// today visits

const today = new Date().toDateString();

let visitDate = localStorage.getItem("visitDate");
let todayVisits = localStorage.getItem("todayVisits");

if(visitDate!==today){

localStorage.setItem("visitDate",today);
localStorage.setItem("todayVisits",1);

todayVisits=1;

}else{

todayVisits=Number(todayVisits)+1;

localStorage.setItem("todayVisits",todayVisits);

}

document.getElementById("todayCount").innerHTML=todayVisits;


// last visit

const lastVisit=localStorage.getItem("lastVisit");

if(lastVisit){

document.getElementById("lastVisit").innerHTML=lastVisit;

}else{

document.getElementById("lastVisit").innerHTML="First Visit";

}

localStorage.setItem("lastVisit",new Date().toLocaleString([],{

hour:"2-digit",

minute:"2-digit"

}));


// device

const mobile=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);

document.getElementById("deviceType").innerHTML=mobile?"Mobile":"Desktop";



/* ================= CHATBOT ================= */

const chatToggle=document.getElementById("chat-toggle");

const chatBox=document.getElementById("chat-box");

const chatClose=document.getElementById("chat-close");

const chatMessage=document.getElementById("chat-message");

chatToggle.onclick=()=>{

chatBox.classList.toggle("show");

};

chatClose.onclick=()=>{

chatBox.classList.remove("show");

};

const replies={

services:"📁 I can help with Administrative Support, Email Management, Calendar Management, Canva Design, Social Media Support, and Data Entry.",

rates:"💰 My rates are flexible depending on your business needs. Visit my Rates & Packages section or contact me for a custom quote.",

portfolio:"🎨 Scroll down to the Portfolio section to see sample projects and mock client work.",

call:"📅 You can book a FREE Discovery Call using the Calendly button in my Contact section.",

contact:"📧 Email: c.calungsod.va@gmail.com<br><br>📍 Based in the Philippines 🇵🇭"

};

document.querySelectorAll(".chat-buttons button").forEach(button=>{

button.onclick=()=>{

const key=button.dataset.chat;

chatMessage.innerHTML=replies[key];

};

});