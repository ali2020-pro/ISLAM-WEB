// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth",
        });
    });
});

//Page redirects using buttons
function redirection(){
    document.querySelector(".read-more-button").addEventListener('click',()=>{
        window.location.href='about-us.html'
    });
    document.querySelector(".learn-with-us-button").addEventListener('click',()=>{
        window.location.href='learn-with-us.html'
    });
    document.querySelector(".donate-button").addEventListener('click',()=>{
        window.location.href='donation.html'
    });
    document.querySelector(".resources-button").addEventListener('click',()=>{
        window.location.href='resources.html'
    });
    document.querySelector(".financial-aid-button").addEventListener('click',()=>{
        window.location.href='financial-aid.html'
    });
    document.querySelector(".projects-button").addEventListener('click',()=>{
        window.location.href='projects.html'
    });
}
redirection()



// Gallery Slider
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        const totalSlides = slides.length;

        // Ensure the slide index is within bounds
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        // Move the slides container to the correct position
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100/totalSlides}%)`;

        // Update dot navigation
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    // Initialize the slider by showing the first slide
    showSlide(currentSlide);

    // Next button click event
    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Previous button click event
    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Dots click event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-slide functionality
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000); // Change slide every 4 seconds
});