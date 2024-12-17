            // Show loader until page is fully loaded
            window.addEventListener('load', () => {
                const loader = document.getElementById('loader');
                loader.style.display = 'none'; // Hide the loader
            });
            
     

        // Get elements for toggling
        const hamburger = document.getElementById('hamburger');
        const closeMenu = document.getElementById('closeMenu');
        const slidingMobileMenu = document.getElementById('slidingMobileMenu');
        
        // Open the menu when hamburger button is clicked
        hamburger.addEventListener('click', () => {
            slidingMobileMenu.style.transform = 'translateX(0)';
        });

        // Close the menu when close button is clicked
        closeMenu.addEventListener('click', () => {
            slidingMobileMenu.style.transform = 'translateX(100%)';
        });