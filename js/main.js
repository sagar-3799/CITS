const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const closeBtn = document.querySelector(".close_btn");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-bars" : "fa-solid fa-bars";
};

// Close menu when clicking the close button
closeBtn.onclick = function () {
  dropDownMenu.classList.remove("open");
  toggleBtnIcon.classList = "fa-solid fa-bars"; // Reset to bars icon
};
document.addEventListener("click", function (e) {
  // If the click is outside the dropdown menu and toggle button
  if (!dropDownMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars"; // Reset the icon to the default 'bars'
  }
});

// Select the elements
const infoButton = document.querySelector(".info-button"); // Make sure there's an element with the class "info-button"
const offcanvasMenu = document.querySelector(".offcanvas-menu");
const closeBtn = document.querySelector(".close_btn .right");

// Open the offcanvas menu when the info button is clicked
infoButton.onclick = function () {
  offcanvasMenu.classList.add("active");
};

// Close the offcanvas menu when the close button is clicked
closeBtn.onclick = function () {
  offcanvasMenu.classList.remove("active");
};

// Close the offcanvas menu when clicking outside of it
document.addEventListener("click", function (event) {
  if (
    !offcanvasMenu.contains(event.target) &&
    !infoButton.contains(event.target) &&
    offcanvasMenu.classList.contains("active")
  ) {
    offcanvasMenu.classList.remove("active");
  }
});
