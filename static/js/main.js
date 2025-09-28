// Modal functionality for Instagram-style gallery
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');

    // Function to open modal with gallery item data
    window.openModal = function(element) {
        const image = element.getAttribute('data-image');
        const title = element.getAttribute('data-title');
        const date = element.getAttribute('data-date');
        const description = element.getAttribute('data-description');

        modalImg.src = image;
        modalImg.alt = title;
        modalTitle.textContent = title;
        modalDescription.innerHTML = `
            <div class="modal-date">${date}</div>
            <p>${description}</p>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // Close modal when clicking the X
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Mobile menu toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.body.classList.add('menu-open');
            } else {
                document.body.style.overflow = 'auto';
                document.body.classList.remove('menu-open');
                // Close dropdown when closing mobile menu
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('show');
                }
            }
        });
    }

    // Dropdown functionality (works for both desktop and mobile)
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
        });

        // Close dropdown when clicking outside (only on desktop)
        document.addEventListener('click', function(e) {
            if (window.innerWidth > 768) {
                if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.classList.remove('show');
                }
            }
        });
    }

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                if (mobileToggle) mobileToggle.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Close mobile menu when clicking dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                if (mobileToggle) mobileToggle.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
                if (dropdownMenu) dropdownMenu.classList.remove('show');
                document.body.style.overflow = 'auto';
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state on desktop
            if (mobileToggle) mobileToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            if (dropdownMenu) dropdownMenu.classList.remove('show');
            document.body.style.overflow = 'auto';
            document.body.classList.remove('menu-open');
        }
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
