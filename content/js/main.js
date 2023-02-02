window.onload = function () {
  const hamburger = document.querySelector(".hamburger");
  const closingBtn = document.querySelector(".closing_btn");
  const mobileMenu = document.querySelector(".mobile-nav");
  const mobileMenuOverlay = document.querySelector(".mobile-nav__overlay");
  const plusBtn = document.querySelector(".plus__btn");
  const mobileDropDown = document.querySelector(".mobile__dropdown__content");

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
  plusBtn.addEventListener("click", function () {
    plusBtn.classList.toggle("is-active");
    mobileDropDown.classList.toggle("is-active");
  });
};

const videoBtn = document.querySelector(".video__icon");
const VidModile = document.querySelector(".vid__modle");
const videoClosingBtn = document.querySelector(".closing_btn-vid");

videoBtn.addEventListener("click", function () {
  VidModile.style.display = "flex";
});

videoClosingBtn.addEventListener("click", function () {
  VidModile.style.display = "none";
});
