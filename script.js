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
    initChatbot();

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


/* =====================================================
   CHATBOT
===================================================== */

function initChatbot(){

    const toggle=document.getElementById("chatToggle");

    const box=document.getElementById("chatBox");

    const body=document.getElementById("chatBody");

    if(!toggle || !box || !body) return;

    toggle.addEventListener("click",()=>{

        box.classList.toggle("show");

    });

    window.chatReply=function(type){

        let reply="";

        switch(type){

            case "services":

                reply=`
                <b>My Services</b><br><br>

                • Administrative Support<br>
                • Email Management<br>
                • Calendar Management<br>
                • Canva Design<br>
                • Data Entry<br>
                • Social Media Assistance
                `;

            break;

            case "pricing":

                reply=`
                <b>Rates</b><br><br>

                • Hourly Rate<br>
                • Part-Time Package<br>
                • Full-Time Package<br><br>

                Full pricing will be available soon.
                `;

            break;

            case "contact":

                reply=`
                📧 c.calungsod.va@gmail.com

                <br><br>

                Based in the Philippines 🇵🇭
                `;

            break;

            case "book":

                reply=`
                Ready to work together?<br><br>

                Click the Discovery Call button in the Contact section to schedule a free meeting.
                `;

            break;

            default:

                reply="Hello! 👋";

        }

        body.innerHTML=`

        <div class="bot-message">

        ${reply}

        </div>

        <div class="chat-options">

            <button onclick="chatReply('services')">

            Services

            </button>

            <button onclick="chatReply('pricing')">

            Pricing

            </button>

            <button onclick="chatReply('contact')">

            Contact

            </button>

            <button onclick="chatReply('book')">

            Book Call

            </button>

        </div>

        `;

    }

    chatReply();

}
