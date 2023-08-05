document.addEventListener("DOMContentLoaded", function() {
  const animatedElement = document.getElementById("animatedElement");
  const section = document.querySelector(".section");
  let isInViewport = false;

  function checkVisibility() {
    const rect = section.getBoundingClientRect();
    isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function animateElement() {
    if (isInViewport) {
      animatedElement.style.opacity = "1";
      animatedElement.style.transform = "translate(-50%, -50%) scale(1)";
    } else {
      animatedElement.style.opacity = "0";
      animatedElement.style.transform = "translate(-50%, -50%) scale(0)";
    }
  }

  // Check visibility on page load
  checkVisibility();
  animateElement();

  // Listen for scroll events
  window.addEventListener("scroll", function() {
    checkVisibility();
    animateElement();
  });
});
