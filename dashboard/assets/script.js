// Show loader until the page is fully loaded
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none'; // Hide the loader
});

// Side Dropdown List Toggle
function toggleSideDropdown() {
    const menu = document.getElementById('dropdown-sidemenu');
    const icon = document.getElementById('dropdown-sideicon');
    if (menu && icon) {
        menu.classList.toggle('hidden');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    }
}

// Right-Sliding Navigation
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const slidingNav = document.getElementById('sliding-nav');

if (openNav && closeNav && slidingNav) {
    openNav.addEventListener('click', () => {
        slidingNav.classList.add('active');
        slidingNav.classList.remove('hidden');
    });

    closeNav.addEventListener('click', () => {
        slidingNav.classList.remove('active');
        setTimeout(() => {
            slidingNav.classList.add('hidden');
        }, 300); // Wait for the slide-out animation
    });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.addEventListener('click', () => {
        document.body.classList.add('menu-open');
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
        mobileMenu.classList.remove('active');
    });
}

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeBody = document.getElementById('theme-body');

// Load theme from localStorage
if (themeBody) {
    const currentTheme = localStorage.getItem('theme');
    themeBody.classList.add(currentTheme || 'dark-mode'); // Default to dark mode
}

if (themeToggle && themeIcon && themeBody) {
    themeToggle.addEventListener('click', () => {
        if (themeBody.classList.contains('dark-mode')) {
            themeBody.classList.replace('dark-mode', 'light-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light-mode');
        } else {
            themeBody.classList.replace('light-mode', 'dark-mode');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
}

// Account Dropdown
const accountButton = document.querySelector('button.flex.items-center');
const accountDropdown = document.getElementById('account-dropdown');

if (accountButton && accountDropdown) {
    accountButton.addEventListener('click', () => {
        accountDropdown.classList.toggle('hidden');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.closest('button.flex.items-center')) {
            accountDropdown.classList.add('hidden');
        }
    });
}

// Generic Dropdown Toggle
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });
}

// Update Crypto Details
function updateCryptoDetails(value, dropdownId, nameFieldId, valueFieldId, iconId) {
    const selectedOption = document.querySelector(`#${dropdownId} option[value="${value}"]`);
    if (selectedOption) {
        const cryptoName = selectedOption.dataset.name;
        const cryptoIcon = selectedOption.dataset.icon;

        // Update the hidden inputs
        document.getElementById(nameFieldId).value = cryptoName;
        document.getElementById(valueFieldId).placeholder = `${cryptoName.toUpperCase()} 0.00000`;

        // Change the icon
        const iconElement = document.getElementById(iconId);
        if (iconElement) iconElement.src = cryptoIcon;
    }
}

// Example usage for two dropdowns
function updateTTRDetails(value) {
    updateCryptoDetails(value, 'ttr', 'ttr-name', 'ttrValue', 'crypto-icon');
}

function updateTTSDetails(value) {
    updateCryptoDetails(value, 'tts', 'tts-name', 'ttsValue', 'crypto-icon');
}

// Tab Switch Functionality
function switchTab(button, target) {
    const forms = document.querySelectorAll('.tab');
    const tabs = document.querySelectorAll('.grid button');

    if (forms && tabs) {
        // Reset the current tab and form
        forms.forEach((form) => form.classList.add('hidden'));
        tabs.forEach((tab) => tab.classList.remove('bg-gray-700'));

        // Show the target form
        document.querySelector(target)?.classList.remove('hidden');

        // Highlight the active tab
        button.classList.add('bg-gray-700');
    }
}


