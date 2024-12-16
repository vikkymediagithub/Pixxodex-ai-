
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




   // Show loader until page is fully loaded
   window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide the loader
  });

  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('show'); // Show the menu
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show'); // Hide the menu
  });