// script.js

// Initialize AOS Animation

AOS.init({
    duration: 1200,
    once: true
});


// Navbar Background Change on Scroll

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


// Typing Animation

const text = "Future Entrepreneur";
let index = 0;

function typingEffect(){

    const typingText = document.querySelector(".hero-content h2");

    typingText.innerHTML = "Hello, I'm " + text.slice(0, index);

    index++;

    if(index <= text.length){

        setTimeout(typingEffect, 120);

    }
}

typingEffect();


// Button Click Animation

const button = document.querySelector(".btn");

button.addEventListener("click", function(){

    button.style.transform = "scale(0.95)";

    setTimeout(() => {

        button.style.transform = "scale(1)";

    }, 150);

});
