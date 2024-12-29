   // Show loader until page is fully loaded
   window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide the loader
  });



    // Loader
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        loader.style.display = 'none'; // Hide the loader
    });

    // // Mobile Menu
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", () => {
        document.body.classList.add("menu-open");
        mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        mobileMenu.classList.remove("active");
    });

    // // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const themeBody = document.getElementById("theme-body");

    // Load theme from localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        themeBody.classList.add(currentTheme);
    } else {
        themeBody.classList.add("dark-mode");
    }

    // Toggle function
    themeToggle.addEventListener("click", () => {
        if (themeBody.classList.contains("dark-mode")) {
            themeBody.classList.remove("dark-mode");
            themeBody.classList.add("light-mode");
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
            localStorage.setItem("theme", "light-mode");
        } else {
            themeBody.classList.remove("light-mode");
            themeBody.classList.add("dark-mode");
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
            localStorage.setItem("theme", "dark-mode");
        }
    });

    // // Account Dropdown
    const accountButton = document.querySelector("button.flex.items-center");
    const accountDropdown = document.getElementById("account-dropdown");

    accountButton.addEventListener("click", () => {
        accountDropdown.classList.toggle("hidden");
    });

    // Close dropdown if clicked outside
    window.addEventListener("click", (event) => {
        if (!event.target.closest("button.flex.items-center")) {
            accountDropdown.classList.add("hidden");
        }
    });
    

    // Script for Dropdown Toggle 

    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });



    function updateCryptoDetails(value) {
        const selectedOption = document.querySelector(`#ttr option[value="${value}"]`);
        const cryptoName = selectedOption.dataset.name;
        const cryptoIcon = selectedOption.dataset.icon;
    
        // Update the hidden inputs
        document.getElementById("ttr-name").value = cryptoName;
        document.getElementById("ttrValue").placeholder = `${cryptoName.toUpperCase()} 0.00000`;
    
        // Change the icon
        document.getElementById("crypto-icon").src = cryptoIcon;
    }

    function updateCryptoDetails(value) {
        const selectedOption = document.querySelector(`#tts option[value="${value}"]`);
        const cryptoName = selectedOption.dataset.name;
        const cryptoIcon = selectedOption.dataset.icon;

        // Update the hidden inputs
        document.getElementById("tts-name").value = cryptoName;
        document.getElementById("ttsValue").placeholder = `${cryptoName.toUpperCase()} 0.00000`;

        // Change the icon
        document.getElementById("crypto-icon").src = cryptoIcon;
    }





    function switchTab(button, target) {
        const forms = document.querySelectorAll('.tab');
        const tabs = document.querySelectorAll('.grid button');
        
        // Reset the current tab and form
        forms.forEach(form => form.classList.add('hidden'));
        tabs.forEach(tab => tab.classList.remove('bg-gray-700'));
        
        // Show the target form
        document.querySelector(target).classList.remove('hidden');
        
        // Highlight the active tab
        button.classList.add('bg-gray-700');
    }




