// Initialize Lucide Icons must run once the script is loaded
lucide.createIcons();

// Mobile Menu Toggler
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Function to close menu when a link is clicked (used in inline HTML)
window.closeMenu = function() {
    mobileMenu.classList.add('hidden');
}

// FAQ Accordion Toggler
window.toggleFaq = function(id) {
    const content = document.getElementById('content-' + id);
    const icon = document.getElementById('icon-' + id);

    if (content.classList.contains('hidden')) {
        // Close all other open content
        document.querySelectorAll('[id^="content-"]').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('[id^="icon-"]').forEach(i => i.classList.remove('rotate-180'));

        // Open current content and rotate icon
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        // Close current content and reset icon rotation
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

// Set Current Year in Footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Simple Form Submission Handler (Prevents default and shows message)
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would send this data to a server.
    // Using a custom modal is recommended over alert(), but alert() is used here for simple demonstration.
    alert("Thank you for initiating your cleanup mission! A Cleanup Hero will contact you shortly with your fast appraisal.");
    form.reset();
});
