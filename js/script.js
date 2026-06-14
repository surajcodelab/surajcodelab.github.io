/* ============================================
   PORTFOLIO JAVASCRIPT - Interactivity & DOM Manipulation
   ============================================ */

// ============================================
// 1. SMOOTH SCROLLING & ACTIVE NAV HIGHLIGHTING
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Close mobile navbar if open
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active link
                updateActiveLink(link);
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    function updateActiveLink(link) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }
});

// ============================================
// 2. FORM VALIDATION & SUBMISSION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Validate form
            if (validateForm(formData)) {
                submitForm(formData);
            }
        });
    }
});

function validateForm(data) {
    // Validate name
    if (data.name.length < 3) {
        showAlert('error', 'Please enter a valid name (at least 3 characters)');
        return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showAlert('error', 'Please enter a valid email address');
        return false;
    }

    // Validate subject
    if (data.subject.length < 3) {
        showAlert('error', 'Please enter a valid subject (at least 3 characters)');
        return false;
    }

    // Validate message
    if (data.message.length < 10) {
        showAlert('error', 'Message must be at least 10 characters long');
        return false;
    }

    return true;
}

function submitForm(data) {
    // Show loading state
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

    // Simulate form submission (in real scenario, send to backend)
    setTimeout(() => {
        // Reset form
        document.getElementById('contactForm').reset();

        // Show success message
        showAlert('success', 'Message sent successfully! I\'ll get back to you soon.');

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 1500);
}

function showAlert(type, message) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type === 'error' ? 'danger' : 'success'} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Insert alert at the beginning of contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.parentElement.insertBefore(alertDiv, contactForm);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ============================================
// 3. SCROLL ANIMATIONS & REVEAL EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Observe elements for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards and cert cards
    document.querySelectorAll('.project-card, .cert-card').forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// 4. MOBILE MENU CLOSE ON LINK CLICK
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Close menu when viewport scrolls or a link is clicked
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link') && !e.target.classList.contains('navbar-brand')) {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

// ============================================
// 5. LAZY LOADING & PERFORMANCE OPTIMIZATION
// ============================================

// Load images lazily
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// 6. SCROLL TO TOP BUTTON
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'btn btn-primary btn-floating';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add styles for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .btn-floating {
        position: fixed;
        bottom: -100px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .btn-floating.show {
        bottom: 30px;
    }

    .btn-floating:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    .animate-in {
        animation: fadeIn 0.6s ease forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Responsive for mobile */
    @media (max-width: 576px) {
        .btn-floating {
            width: 45px;
            height: 45px;
            right: 20px;
            font-size: 1rem;
        }

        .btn-floating.show {
            bottom: 20px;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// 7. PARALLAX SCROLLING EFFECT (Optional)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add subtle parallax to hero section
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            if (scrollY < 800) {
                heroSection.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
            }
        });
    }
});

// ============================================
// 8. ANALYTICS & TRACKING (Optional)
// ============================================

// Track section views
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Log section view (for analytics)
                console.log(`User viewed: ${entry.target.id}`);
                // You can send this to Google Analytics or other tracking service
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// ============================================
// 9. ACCESSIBILITY ENHANCEMENTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Press 'H' to scroll to home
        if (e.key === 'h' || e.key === 'H') {
            if (document.activeElement === document.body) {
                document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Press 'Escape' to close mobile menu
        if (e.key === 'Escape') {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        }
    });
});

// ============================================
// 10. PERFORMANCE MONITORING
// ============================================

// Log page performance metrics (optional)
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}

// ============================================
// END OF SCRIPT
// ============================================
