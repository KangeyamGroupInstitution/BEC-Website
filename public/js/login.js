document.addEventListener("DOMContentLoaded", function() {
  var aboutLink = document.querySelector('li[onclick="about"] > a');
  var aboutDropdown = document.querySelector('.about');

  aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    aboutDropdown.classList.toggle("show");
  });
});
let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)