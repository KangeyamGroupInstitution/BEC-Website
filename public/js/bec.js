function wrapLettersWithSpanAndClass(paragraphId, className) {
    const paragraph = document.getElementById(paragraphId);
    const text = paragraph.innerText;
    const characters = text.split('');

    const wrappedText = characters.map(char => `<span class="${className}">${char}</span>`).join('');
    paragraph.innerHTML = wrappedText;
  }
  
  wrapLettersWithSpanAndClass('myParagraph', 'highlight');

  const animatedTextSpans = document.querySelectorAll(".highlight");
  animatedTextSpans.forEach((span, index) => {
    const animationDelay = (index + 1) * 0.009;
    span.style.animationDelay = `${animationDelay}s`;
    console.log(animationDelay);
  });

  