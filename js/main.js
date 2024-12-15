
const words = ["FAST & HIGHLY SECURE", "CRYPTO LOANS & MORE", "BORDERLESS EXCHANGE"];
  let currentWordIndex = 0;

  function changeText() {
    const currentWord = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElem = document.getElementById('flip-word');

    setTimeout(() => {
      wordElem.style.transform = 'translateY(-100%)'; wordElem.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
      wordElem.style.transform = 'translateY(0%)'; wordElem.style.opacity = '1';
      wordElem.innerHTML = currentWord;
    }, 600);
  }

  setInterval(() => {
    changeText();
  }, 5000);