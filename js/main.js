
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


 // FAQ Toggle Functionality
document.querySelectorAll('.faq-header').forEach((header) => {
    header.addEventListener('click', () => {
        const targetId = header.getAttribute('data-target');
        const content = document.querySelector(targetId);

        // Toggle content visibility
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            content.classList.add('block');
        } else {
            content.classList.add('hidden');
            content.classList.remove('block');
        }

        // Toggle arrow icon direction
        const icon = header.querySelector('i');
        if (icon.classList.contains('fa-angle-down')) {
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }
    });
});


// Initialize Bootstrap carousel
const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: 5000,  // Auto slide every 5 seconds
    ride: 'carousel' // Enable the automatic sliding
});

// Optional: Pause carousel on hover (for mobile)
document.getElementById('carouselExampleIndicators').addEventListener('mouseenter', function () {
    carousel.pause();
});
document.getElementById('carouselExampleIndicators').addEventListener('mouseleave', function () {
    carousel.cycle();
});



function toggleDropdown(sectionId) {
  const dropdown = document.getElementById(sectionId);
  const icon = document.getElementById(`${sectionId}-icon`);
  
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    icon.textContent = "-"; // Show minus icon
  } else {
    dropdown.classList.add("hidden");
    icon.textContent = "+"; // Show plus icon
  }
}


