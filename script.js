// =========================================
// STICKY HEADER
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(header){

        header.classList.toggle(
            "sticky",
            window.scrollY > 50
        );

    }

});

// =========================================
// MOBILE MENU
// =========================================

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuToggle.innerHTML =
        navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    });

}

// =========================================
// CLOSE MENU ON LINK CLICK
// =========================================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        if(navLinks){

            navLinks.classList.remove("active");

        }

        if(menuToggle){

            menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        }

    });

});

// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        const sectionHeight =
        section.clientHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){

            link.classList.add("active");

        }

    });

});

// =========================================
// FADE UP ANIMATION
// =========================================

const fadeElements =
document.querySelectorAll(".fade-up");

const reveal = () => {

    fadeElements.forEach(el => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// =========================================
// COUNTER ANIMATION
// =========================================

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter(){

    counters.forEach(counter => {

        counter.innerText = "0";

        const target =
        +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current =
            +counter.innerText;

            const increment =
            target / 100;

            if(current < target){

                counter.innerText =
                Math.ceil(
                    current + increment
                );

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const statsSection =
    document.querySelector(
        ".stats-section, .achievement-section"
    );

    if(!statsSection) return;

    const sectionTop =
    statsSection.offsetTop - 400;

    if(
        window.scrollY > sectionTop &&
        !counterStarted
    ){

        startCounter();

        counterStarted = true;

    }

});

// =========================================
// FORM VALIDATION
// =========================================

const forms =
document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const inputs =
        form.querySelectorAll(
            "input, textarea"
        );

        let valid = true;

        inputs.forEach(input => {

            if(
                input.value.trim() === ""
            ){

                input.style.border =
                "1px solid red";

                valid = false;

            } else {

                input.style.border =
                "1px solid #cbd5e1";

            }

        });

        const email =
        form.querySelector(
            'input[type="email"]'
        );

        if(email){

            const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(
                !pattern.test(email.value)
            ){

                email.style.border =
                "1px solid red";

                valid = false;

            }

        }

        if(valid){

            alert(
                "Form Submitted Successfully!"
            );

            form.reset();

        } else {

            alert(
                "Please fill all fields correctly."
            );

        }

    });

});

// =========================================
// SCROLL TO TOP BUTTON
// =========================================

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.right = "20px";
scrollBtn.style.bottom = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background =
"linear-gradient(135deg,#2563eb,#06b6d4)";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});



// =========================================
// LOADER
// =========================================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

});

// =========================================
// AUTO SLIDER
// =========================================

const slides =
document.querySelectorAll(".slide");

if(slides.length > 0){

    let slideIndex = 0;

    function showSlides(){

        slides.forEach(slide => {

            slide.style.display = "none";

        });

        slideIndex++;

        if(
            slideIndex > slides.length
        ){

            slideIndex = 1;

        }

        slides[
            slideIndex - 1
        ].style.display = "block";

        setTimeout(showSlides, 3000);

    }

    showSlides();

}

// =========================================
// FOOTER YEAR
// =========================================

const year =
document.getElementById("year");

if(year){

    year.innerHTML =
    new Date().getFullYear();

}