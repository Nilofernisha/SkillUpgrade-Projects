
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100 + '%';
    document.querySelector('.slides').style.transform = 'translateX(' + offset + ')';
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

setInterval(nextSlide, 3000); 

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
