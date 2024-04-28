// Date Object
let output = document.getElementById("date-obj");
let mydate = new Date();
output.innerHTML = "Build" + "@" + mydate.getFullYear();


const blurObj = document.getElementsByClassName('blur');
const toggleContainer = document.getElementById("toggleContainer");
const toggleBtn = document.getElementById("toggleBtn");
const iconImg = toggleBtn.querySelector("#ham-icon"); // Use querySelector to get the element by ID

toggleBtn.addEventListener('click', () => {
    toggleContainer.classList.toggle('show-navigation');
    iconImg.classList.toggle('fa-xmark');

    for (let i = 0; i < blurObj.length; i++) {
        // Skip applying 'dimmed' class to toggleContainer and toggleBtn
        if (blurObj[i] !== toggleContainer && blurObj[i] !== toggleBtn) {
            if (toggleContainer.classList.contains('show-navigation')) {
                blurObj[i].classList.add('dimmed');
            } else {
                blurObj[i].classList.remove('dimmed');
            }
        }
    }
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
            for (let i = 0; i < blurObj.length; i++) {
                blurObj[i].classList.remove('dimmed');
            }
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


gsap.to(".headline", {
    duration: 2,
    ease: "power2.out",
    x: 0,
});



// toggle dark mode 
const body = document.body

const tglThemeBtn = document.getElementById("tglThemeBtn")

tglThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    if (body.classList.contains("dark-mode")) {
        tglThemeBtn.innerText = "👓";
    }
    else {
        tglThemeBtn.innerText = "🎃";
    }
})