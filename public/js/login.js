document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    if (username === "admin" && password === "admin1234") {
      window.location.href = "/admissionPage1";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
  
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


  