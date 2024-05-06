// Date Object
let output = document.getElementById("date-obj");
let mydate = new Date();
output.innerHTML = "Build" + "@" + mydate.getFullYear();



const toggleContainer = document.getElementById("toggleContainer");
const toggleBtn = document.getElementById("toggleBtn");
const iconImg = toggleBtn.querySelector("#ham-icon");

toggleBtn.addEventListener('click', () => {
    toggleContainer.classList.toggle('show-navigation');
    iconImg.classList.toggle('fa-xmark');
});



// Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#toggleContainer .toggleIcons a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {
            event.preventDefault();


            const targetId = navLink.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
            toggleContainer.classList.remove('show-navigation');
            iconImg.classList.toggle('fa-xmark');
        });
    });


    // Active Section Link
    function changeActiveLink() {
        const scrollPosition = window.scrollY;
        sections.forEach(function (section) {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(function (navLink) {
                    if (navLink.getAttribute("href").substring(1) === section.id) {
                        navLink.classList.add("active-link");
                    } else {
                        navLink.classList.remove("active-link");
                    }
                });
            }
        });
    }
    window.addEventListener("scroll", changeActiveLink);
});


// DOM Object Loading Animation 
document.addEventListener("DOMContentLoaded", function () {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Hide loader after 4 seconds
    setTimeout(function () {
        document.querySelector(".loaderContainer").style.display = "none";

        // Restore scrolling
        document.body.style.overflow = "auto";
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector('.back-to-top');

    // Show back-to-top button when scrolling down
    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scrolling effect
    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


// JavaScript to add animation class when elements are scrolled into view
function checkScroll() {
    const elements = document.querySelectorAll('.animated-element');
    const secondElements = document.querySelectorAll('.animatedd-element');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementPosition < viewportHeight) {
            element.classList.add('animated');
        }
    });
    secondElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementPosition < viewportHeight) {
            element.classList.add('animated-second');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll();



// toggle dark mode 
const body = document.body

const tglThemeBtn = document.getElementById("tglThemeBtn")

tglThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    if (body.classList.contains("dark-mode")) {
        tglThemeBtn.classList.add('fa-moon');
        tglThemeBtn.classList.remove('fa-sun');

    }
    else {
        tglThemeBtn.classList.add('fa-sun');
        tglThemeBtn.classList.remove('fa-moon');
    }
})



// gsap Animation 
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()

tl.from("#nameHead", {
    y: 50,
    opacity: 0,
    duration: 0.4,
    delay: 3,
    stagger: 0.5
});

tl.from("#appIcons", {
    x: 400,
    rotate: 360,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2
});

tl.from("#nav", {
    y: -500,
    opacity: 0,
    duration: 0.4,
});
tl.from("#hamNav", {
    scale: 0,
    opacity: 0,
    duration: 0.4,
});

gsap.from('#profileimgg', {
    opacity: 0,
    y: 400,
    duration: 0.4,
    delay: 3,
})

// section 2 

gsap.from('.aboutSec #scrollanimated', {
    opacity: 0,
    duration: 0.4,
    y: 200,
    scrollTrigger: {
        trigger: ".aboutSec #scrollanimated",

    }
})
const tlp = gsap.timeline()
gsap.from('.todoSec #scrollanimated', {
    opacity: 0,
    duration: 0.8,
    x: -400,
    scrollTrigger: {
        trigger: ".todoSec #scrollanimated",
        start: "top 50%",
    }
})

























document.getElementById('resumeBtn').style.display = 'none'
document.getElementById('navbtn').addEventListener("click", () => {
    document.getElementById('resumeBtn').classList.toggle('btnRmv')
})
