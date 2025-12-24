document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});

const loadHeader = () => {
    const headerHTML = `
    <header>
        <div class="container flex justify-between items-center">
            <a href="index.html" class="logo flex items-center gap-sm">
                <!-- SVG Logo Placeholder -->
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#2A9D8F"/>
                    <path d="M12 6C13.5 6 14.8 6.8 15.5 8L14 9.5C13.6 8.9 12.9 8.5 12 8.5C10.5 8.5 9.2 9.6 9.2 11.2C9.2 12.8 10.5 13.9 12 13.9C13.1 13.9 13.9 13.4 14.3 12.7L15.6 13.8C14.9 15.2 13.5 16 12 16C9.6 16 7.5 13.9 7.5 11.2C7.5 8.5 9.6 6.4 12 6Z" fill="#2A9D8F"/>
                </svg>
                <div class="flex flex-col">
                    <span style="font-family: 'Outfit'; font-weight: 800; font-size: 1.5rem; line-height: 1; color: var(--secondary);">THE PETS SHOP</span>
                    <span style="font-size: 0.75rem; letter-spacing: 1px; color: var(--primary); font-weight: 600;">VICTORVILLE, CA</span>
                </div>
            </a>
            
            <nav>
                <ul class="flex gap-md nav-links">
                    <li><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="about.html" class="nav-link">About Us</a></li>
                    <li><a href="pets.html" class="nav-link">Our Pets</a></li>
                    <li><a href="gallery.html" class="nav-link">Gallery</a></li>
                </ul>
            </nav>

            <div class="flex items-center gap-sm">
                <a href="contact.html" class="btn btn-primary">Visit Us</a>
                
                <div class="hamburger" onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
    `;

    // Insert at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    highlightActiveLink();
};

const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
};

const loadFooter = () => {
    const footerHTML = `
    <footer>
        <div class="container grid grid-cols-auto gap-lg">
            <div class="footer-column">
                <h3 style="color: white; margin-bottom: 1rem;">THE PETS SHOP</h3>
                <p style="color: #d8e2e6; margin-bottom: 1rem;">
                    Victorville's favorite highly-rated local pet store. 
                    We care for our animals and our community.
                </p>
                <div class="flex gap-sm">
                    <a href="https://www.instagram.com/thepetshop.sb/" target="_blank" style="color: white;">
                        <img src="assets/instagram-icon.svg" alt="Instagram" width="24" height="24"> 
                        <!-- Placeholder if icon missing -->
                    </a>
                </div>
            </div>
            
            <div class="footer-column">
                <h4>Quick Links</h4>
                <a href="index.html" class="footer-link">Home</a>
                <a href="about.html" class="footer-link">About Us</a>
                <a href="pets.html" class="footer-link">Our Pets</a>
                <a href="gallery.html" class="footer-link">Gallery</a>
                <a href="contact.html" class="footer-link">Contact</a>
            </div>

            <div class="footer-column">
                <h4>Visit Us</h4>
                <p style="color: #d8e2e6; margin-bottom: 0.5rem;">
                    📍 15323 7th St,<br>Victorville, CA 92395
                </p>
                <p style="color: #d8e2e6; margin-bottom: 0.5rem;">
                    📞 +1 760-552-4028
                </p>
                <p style="color: #d8e2e6;">
                    🕒 Opens at 11:00 AM<br>
                    (Holiday hours may vary)
                </p>
            </div>
        </div>
        <div class="copyright">
            &copy; ${new Date().getFullYear()} The Pets Shop. All rights reserved.
        </div>
    </footer>
    `;

    // Insert at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
};

const highlightActiveLink = () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
};
