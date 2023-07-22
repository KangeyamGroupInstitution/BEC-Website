//galary
let slideIndex = 0;
showSlides();


function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; 
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}


function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
 
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
 
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}


let timer = 7; 
const _timer = timer;


setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; 
  }
}, 1000); 

//numcount
function animateNumber(target, finalValue, duration) {
  let current = 0;
  let step = (finalValue - current) / (duration / 50);

  function updateNumber() {
    if (current <= finalValue) {
      document.getElementById(target).textContent = Math.floor(current);
      current += step;
      setTimeout(updateNumber, 50);
    } else {
      document.getElementById(target).textContent = finalValue + "+";
    }
  }

  updateNumber();
}

function checkIfVisible(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumber("number1", 18, 1000);
      animateNumber("number2", 90, 1500);
      animateNumber("number3", 200, 2000);
      animateNumber("number4", 3500, 2500);
      animateNumber("number5", 100, 3000);
      observer.unobserve(entry.target); 
    }
  });
}

const observer = new IntersectionObserver(checkIfVisible, { root: null, rootMargin: "0px", threshold: 0.5 });
const countdownContainer = document.getElementById("countdownContainer");

observer.observe(countdownContainer);
