window.onload = function () {
  const hamburger = document.querySelector(".hamburger");
  const closingBtn = document.querySelector(".closing_btn");
  const mobileMenu = document.querySelector(".mobile-nav");
  const mobileMenuOverlay = document.querySelector(".mobile-nav__overlay");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
    mobileMenuOverlay.classList.toggle("is-active");
    closingBtn.addEventListener("click", function () {
      hamburger.classList.remove("is-active");
      mobileMenu.classList.remove("is-active");
      mobileMenuOverlay.classList.remove("is-active");
    });
  });
};
