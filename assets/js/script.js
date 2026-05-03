/* ================================================================
   AS Prime Contracting - Main JavaScript
   Handles form validation, smooth scrolling, and interactions
   ================================================================ */

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initializeScripts();
});

/**
 * Main initialization function
 */
function initializeScripts() {
    handleNavbarScroll();
    initializeFormValidation();
    enableSmoothScroll();
    animateOnScroll();
}

/**
 * Handle navbar styling on scroll
 */
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }
    });
}

/**
 * Initialize Bootstrap form validation
 */
function initializeFormValidation() {
    const forms = document.querySelectorAll('form[novalidate]');
    
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

/**
 * Enable smooth scrolling for anchor links
 */
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Animate elements on scroll using Intersection Observer
 */
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.service-card, .project-card, .section-padding').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Validate contact form (if present)
 */
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        // Validation checks
        const errors = [];

        if (!name || name.length < 2) {
            errors.push('Name must be at least 2 characters');
        }

        if (!email || !isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }

        if (!phone || !isValidPhone(phone)) {
            errors.push('Please enter a valid phone number');
        }

        if (!message || message.length < 10) {
            errors.push('Message must be at least 10 characters');
        }

        // Display errors or success
        if (errors.length > 0) {
            showFormAlert(errors.join('<br>'), 'danger');
        } else {
            showFormAlert('Thank you! Your message has been sent. We will contact you shortly.', 'success');
            form.reset();
        }
    });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number (supports various formats)
 */
function isValidPhone(phone) {
    // Remove common separators and validate length
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return /^\d{7,15}$/.test(cleanPhone);
}

/**
 * Display alert message
 */
function showFormAlert(message, type) {
    const alertDiv = document.getElementById('formAlert');
    if (!alertDiv) return;

    alertDiv.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Auto-dismiss success alerts after 5 seconds
    if (type === 'success') {
        setTimeout(function() {
            const alert = alertDiv.querySelector('.alert');
            if (alert) {
                alert.remove();
            }
        }, 5000);
    }
}

/**
 * Handle mobile menu toggle
 */
function setupMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        // Close menu when a link is clicked
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', function() {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            });
        });
    }
}

/**
 * Add hover effects to service cards
 */
function setupCardHoverEffects() {
    const cards = document.querySelectorAll('.service-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

/**
 * Initialize page-specific functionality
 */
function initializePageSpecific() {
    const currentPage = document.querySelector('body').getAttribute('data-page');
    
    switch(currentPage) {
        case 'contact':
            validateContactForm();
            break;
        case 'about':
            setupTimelineAnimation();
            break;
        case 'projects':
            setupProjectFilters();
            break;
        default:
            break;
    }
}

/**
 * Timeline animation for About page (future enhancement)
 */
function setupTimelineAnimation() {
    console.log('Timeline animation ready');
}

/**
 * Project filter functionality
 */
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        });
    });
}

/**
 * Lazy load images (future enhancement)
 */
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Handle scroll to top button (if present)
 */
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    if (!scrollBtn) return;

    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Call page-specific initialization after DOM ready
document.addEventListener('DOMContentLoaded', initializePageSpecific);
document.addEventListener('DOMContentLoaded', setupMobileMenu);
document.addEventListener('DOMContentLoaded', setupCardHoverEffects);
document.addEventListener('DOMContentLoaded', setupScrollToTop);
