document.addEventListener("DOMContentLoaded", function () {
  // **Tab Switching Logic**
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) =>
        tabContent.classList.remove("active")
      );
      tabs.forEach((tab) => tab.classList.remove("active"));

      tab.classList.add("active");
      target.classList.add("active");
    });
  });

  // **Sticky Navigation Bar with Active Link Highlight**
  const navBar = document.getElementById("navBar");
  const navLinks = document.querySelectorAll("#navBar a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    // Sticky Navbar Logic
    if (window.scrollY > window.innerHeight * 0.5) {
      navBar.classList.add("fixed");
    } else {
      navBar.classList.remove("fixed");
    }

    // Highlight Active Section
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navBar.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + section.offsetHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // **Team Slider (Swiper.js)**
  new Swiper(".team-slider", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

//logo Slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

// Clone slides to create an infinite loop
const cloneStart = [...slides]
  .slice(0, 7) // Clone the first 7 slides
  .map((slide) => slide.cloneNode(true));
const cloneEnd = [...slides]
  .slice(0, 7) // Clone the first 7 slides
  .map((slide) => slide.cloneNode(true));

// Append and prepend cloned slides
cloneStart.forEach((clone) => slider.appendChild(clone));
cloneEnd.reverse().forEach((clone) => slider.prepend(clone));

// Update slides reference after cloning
const updatedSlides = document.querySelectorAll(".slide");
const updatedTotalSlides = updatedSlides.length;

// Adjust initial position after cloning
let slideWidth = updatedSlides[0].offsetWidth;
slider.style.transform = `translateX(-${slideWidth}px)`;

// Function to create dots
function createDots() {
  for (let i = 0; i < updatedTotalSlides - 2 * 7; i++) {
    // Exclude the cloned slides
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); // Mark the first dot as active
    dot.addEventListener("click", () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

// Function to update the active dot
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Function to move slider
function moveSlider() {
  currentIndex = (currentIndex + 1) % (updatedTotalSlides - 2 * 7); // Adjust for number of real slides
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`; // Move by 1 slide width
  updateDots(); // Update dots based on the current index
}

// Reset position after transition
slider.addEventListener("transitionend", () => {
  if (currentIndex === 0 || currentIndex === updatedTotalSlides - 1) {
    slider.style.transition = "none"; // Disable transition for reset
    slider.style.transform = `translateX(-${slideWidth}px)`; // Reset position to first real slide
    setTimeout(() => {
      slider.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
    }, 50);
  }
});

// Function to navigate to specific slide based on dot click
function moveToSlide(index) {
  currentIndex = index;
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`; // Move to clicked slide
  updateDots(); // Update dots based on the clicked slide
}

// Create dots initially
createDots();

// Auto-slide every 3 seconds
setInterval(moveSlider, 3000);
