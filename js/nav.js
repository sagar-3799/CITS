// Mobile Menu Toggle
const toggleBtn = document.querySelector(".toggle_btn");
const dropdownMenu = document.querySelector(".dropdown_menu");
const bodyOverlay = document.querySelector(".body-overlay");
const closeDropdown = dropdownMenu?.querySelector(".close_btn i");

// Info Button Toggle
const infoButton = document.querySelector(".info-button");
const offcanvasMenu = document.querySelector(".offcanvas-menu");
const closeOffcanvas = offcanvasMenu?.querySelector(".close_btn i");

// Mobile Menu Functionality
if (toggleBtn && dropdownMenu) {
  toggleBtn.addEventListener("click", () => {
    dropdownMenu.classList.add("open");
    bodyOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if (closeDropdown) {
  closeDropdown.addEventListener("click", () => {
    dropdownMenu.classList.remove("open");
    bodyOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });
}

// Offcanvas Menu Functionality
if (infoButton && offcanvasMenu) {
  infoButton.addEventListener("click", () => {
    offcanvasMenu.classList.add("active");
    bodyOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if (closeOffcanvas) {
  closeOffcanvas.addEventListener("click", () => {
    offcanvasMenu.classList.remove("active");
    bodyOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });
}

// Close menus when clicking on overlay
if (bodyOverlay) {
  bodyOverlay.addEventListener("click", () => {
    dropdownMenu.classList.remove("open");
    offcanvasMenu.classList.remove("active");
    bodyOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });
}

// Close menus when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dropdownMenu.classList.remove("open");
    offcanvasMenu.classList.remove("active");
    bodyOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});
