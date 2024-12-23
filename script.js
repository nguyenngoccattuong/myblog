// Smooth scrolling for navigation links
$(document).ready(function() {
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Add active class to nav items when scrolling
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    });

    // Animation cho timeline items
    $('.timeline-item').each(function(index) {
        $(this).css('animation-delay', (index * 0.2) + 's');
        $(this).addClass('animate-timeline');
    });

    // Smooth scroll cho nút download
    $('.download-btn a').click(function(e) {
        e.preventDefault();
        // Thêm logic download CV ở đây
    });
});

// Navbar color change on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('navbar-scrolled');
    } else {
        $('.navbar').removeClass('navbar-scrolled');
    }
});

// Thêm class active cho timeline item khi scroll đến
$(window).scroll(function() {
    $('.timeline-item').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).addClass('active');
        }
    });
});

// Script cho trang contact
document.addEventListener('DOMContentLoaded', function() {
    // Animation cho contact card khi load trang
    const contactCard = document.querySelector('.contact-card');
    if (contactCard) {
        contactCard.classList.add('animate-in');
    }

    // Animation cho các contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });

    // Hover effect cho social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        link.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });

    // Copy to clipboard functionality
    const contactDetails = document.querySelectorAll('.contact-detail a');
    contactDetails.forEach(detail => {
        detail.addEventListener('click', function(e) {
            if (!this.href.includes('mailto:') && !this.href.includes('tel:')) {
                e.preventDefault();
                const text = this.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    // Show copied notification
                    const notification = document.createElement('div');
                    notification.className = 'copy-notification';
                    notification.textContent = 'Copied!';
                    this.parentNode.appendChild(notification);
                    
                    setTimeout(() => {
                        notification.remove();
                    }, 2000);
                });
            }
        });
    });

    // Accordion functionality for certificates
    const certificateHeaders = document.querySelectorAll('.certificate-header');
    
    certificateHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const certificateItem = this.parentElement;
            const isActive = certificateItem.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.certificate-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                certificateItem.classList.add('active');
            }
        });
    });
});

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active navigation based on current page
function setActiveNavItem() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Current page:', currentPage); // For debugging
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Get the href value
        const href = link.getAttribute('href');
        console.log('Checking link:', href); // For debugging
        
        // Remove any existing active classes
        link.classList.remove('active');
        
        // Compare current page with href
        if (currentPage === href) {
            link.classList.add('active');
            console.log('Match found! Adding active class to:', href); // For debugging
        }
        
        // Special case for home page
        if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Call when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavItem();
}); 