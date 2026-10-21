const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const navLinks = navMenu.querySelectorAll("a");

function openMenu() {
  hamburger.classList.add("active");
  navMenu.classList.add("open");
  overlay.classList.add("show");
  document.body.classList.add("no-scroll");
  hamburger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("open");
  overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
  hamburger.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  navMenu.classList.contains("open") ? closeMenu() : openMenu();
}

// Toggle with the hamburger button
hamburger.addEventListener("click", toggleMenu);

// Close when clicking the overlay
overlay.addEventListener("click", closeMenu);

// Close when a link is clicked
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

// Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Reset if the window is resized back to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMenu();
});