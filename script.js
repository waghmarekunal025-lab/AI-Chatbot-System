// ===============================
// Typing Animation
// ===============================

var typed = new Typed("#typing", {
    strings: [
        "AI Developer",
        "Python Developer",
        "Machine Learning Enthusiast",
        "Artificial Intelligence Engineer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});


// ===============================
// Vanilla Tilt Cards
// ===============================

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3
});


// ===============================
// Particles Background
// ===============================

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#00e5ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5,
            random: false
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00e5ff",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },

    interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        },

        modes: {
            repulse: {
                distance: 100
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});


// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// ===============================
// Smooth Reveal Animation
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});