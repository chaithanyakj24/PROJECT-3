document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("[data-carousel] [data-slides] img");
  
    images.forEach(image => {
      image.addEventListener("click", () => {
        const offset = 1;
        const slides = image.closest("[data-carousel]").querySelector("[data-slides]");
  
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
  
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  });
  function navigateTo(page) {
    window.location.href = page;
}
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
function redirectToCart() {
  window.location.href = "mycart.html";
}
function addToCart() {
  window.location.href = "mycart.html";
}
