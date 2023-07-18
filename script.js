window.addEventListener('scroll', function() {
  var elements = document.getElementsByClassName('clg-info');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('animate');
    }
  }
});
