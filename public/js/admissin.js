document.addEventListener('DOMContentLoaded', function () {
  const shikElements = document.querySelectorAll('.shik');
  const isScreenSmall = window.matchMedia("(max-width: 1150px)").matches;
  shikElements.forEach(element => {
    if (isScreenSmall) {
      element.setAttribute('data-aos', 'zoom-in');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const pgText= document.querySelectorAll('.num-card-con-2');
  const ScreenSmall = window.matchMedia("(max-width: 1150px)").matches;
  pgText.forEach(element => {
    if (ScreenSmall) {
      element.setAttribute('data-aos', 'slide-right');
    }
  });
});




function animateNumber(target, finalValue, duration) {
  let current = 0;
  const step = (finalValue - current) / (duration / 50);

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
      animateNumber("number1", 60, 2000);
      animateNumber("number2", 60, 2000);
      animateNumber("number3", 60, 2000);
      animateNumber("number4", 60, 2000);
      animateNumber("number5", 60, 2000);
      animateNumber("number6", 30, 1500);

      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(checkIfVisible, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
});
const countdownContainer = document.getElementById("countdownContainer");
observer.observe(countdownContainer);

// For the second set of numbers

function animateNumber2(target, finalValue, duration) {
  let current = 0;
  const step = (finalValue - current) / (duration / 50);

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

function checkIfVisible2(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumber2("number7", 60, 2000);
      animateNumber2("number8", 30, 1500);
      animateNumber2("number9", 18, 1000);
      animateNumber2("number10", 45, 1800);

      observer2.unobserve(entry.target);
    }
  });
}

const observer2 = new IntersectionObserver(checkIfVisible2, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
});
const countdownContainer2 = document.getElementById("countdownContainer2");
observer2.observe(countdownContainer2);





  

