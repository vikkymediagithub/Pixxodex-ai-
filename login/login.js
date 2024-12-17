const themeToggleButtons = document.querySelectorAll('#themeToggle, #themeToggleMobile');
const sideBarSm = document.getElementById('sideBarSm');
const menuToggleIcon = document.querySelectorAll('#menuToggleIcon span');
const themeToggleIcon = document.querySelectorAll('.theme-toggle-icon');

// Handle theme toggle for both desktop and mobile
themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        updateTheme();
    });
});

// Function to update the theme
function updateTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update theme variables
    const root = document.documentElement;
    root.style.setProperty('--icon-color', isDarkMode ? '#ffffff' : '#000000');
    root.style.setProperty('--sidebar-bg-color', isDarkMode ? '#000000' : '#ffffff');
    root.style.setProperty('--sidebar-text-color', isDarkMode ? '#ffffff' : '#1f2937');
    
    // Change the theme toggle icon color
    themeToggleIcon.forEach(icon => {
        icon.style.color = isDarkMode ? '#ffffff' : '#000000';
    });

    // Adjust menu icon color in dark and light mode
    menuToggleIcon.forEach(span => {
        span.style.backgroundColor = isDarkMode ? '#ffffff' : '#000000';
    });
}

// Toggle sidebar visibility
function toggleSideBarSm() {
    sideBarSm.classList.toggle('open');
}

// Initialize the theme on page load
updateTheme();
