// Image Slider
let slideIndex = 0;
let slideInterval;

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Reset all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Reset all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  // Handle slide index bounds
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Show current slide
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active-dot");
}

function plusSlides(n) {
  clearInterval(slideInterval); // Reset timer when manually changing slides
  slideIndex += n;
  showSlides(slideIndex);
  startAutoSlide(); // Restart auto slide
}

function currentSlide(n) {
  clearInterval(slideInterval); // Reset timer when manually changing slides
  slideIndex = n - 1;
  showSlides(slideIndex);
  startAutoSlide(); // Restart auto slide
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // Change slide every 5 seconds
}

// Initialize slider
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  startAutoSlide();
});

// Pause auto slide when hovering over slider
const sliderContainer = document.querySelector(".slider-container");
if (sliderContainer) {
  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    startAutoSlide();
  });
}
