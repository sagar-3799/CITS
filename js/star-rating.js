// Automatic Star Rating System
function generateStars() {
  const starContainers = document.querySelectorAll(".stars[data-rating]");

  starContainers.forEach((container) => {
    const rating = parseFloat(container.getAttribute("data-rating"));
    const maxStars = 5;

    // Clear existing content
    container.innerHTML = "";

    // Create stars based on rating
    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElement("span");
      star.className = "star";

      if (i <= Math.floor(rating)) {
        // Full star
        star.classList.add("filled");
        star.textContent = "★";
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        star.classList.add("half-filled");
        star.textContent = "★";
      } else {
        // Empty star
        star.textContent = "★";
      }

      container.appendChild(star);
    }
  });
}

// Initialize stars when page loads
document.addEventListener("DOMContentLoaded", function () {
  generateStars();
});

// Function to update rating dynamically
function updateRating(newRating, reviewsCount = 20) {
  const starContainer = document.querySelector(".stars[data-rating]");
  const ratingText = document.querySelector(".rating-text");
  const reviewsSpan = document.querySelector(".reviews");

  if (starContainer) {
    starContainer.setAttribute("data-rating", newRating);
    generateStars();
  }

  if (ratingText) {
    ratingText.innerHTML = `${newRating} <span class="reviews">(${reviewsCount} reviews)</span>`;
  }
}

// Example usage: updateRating(4.7, 25);
