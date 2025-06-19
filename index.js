document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("menu-button");
  const closeMenu = document.getElementById("close-menu");

  if (hamburgerIcon && mobileMenu && closeMenu) {
    hamburgerIcon.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }
});
