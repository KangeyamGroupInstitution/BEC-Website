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
      animateNumber("number1", 14, 500);
      animateNumber("number2", 90, 800);
      animateNumber("number3", 200, 1500);
      animateNumber("number4", 2500, 1700);
      animateNumber("number5", 100,1000 );
      observer.unobserve(entry.target); 
    }
  });
}

const observer = new IntersectionObserver(checkIfVisible, { root: null, rootMargin: "0px", threshold: 0.5 });
const countdownContainer = document.getElementById("countdownContainer");

observer.observe(countdownContainer);


// alumini gal
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fadeEffect: {
    crossFade: true
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000, 
    disableOnInteraction: false, 
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


// trusty slider

function startFeatureAutoplay() {
  const interval = 5000; 
  let currentFeatureIndex = 1;

  function switchToNextFeature() {
    const features = document.querySelectorAll('.feature-inner-part');
    const radios = document.querySelectorAll('input[name="select"]');

    radios[currentFeatureIndex % features.length].checked = true;
    currentFeatureIndex++;
  }

  setInterval(switchToNextFeature, interval);
}

window.addEventListener('load', startFeatureAutoplay);