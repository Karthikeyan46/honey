function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile hamburger menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open');
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('mobile-open');
            document.getElementById('hamburger').classList.remove('open');
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.padding = '1rem 5%';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
        nav.style.padding = '1.5rem 5%';
    }
});

// Modal Logic
function openPaymentModal(productName, price) {
    const modal = document.getElementById('paymentModal');
    const title = document.getElementById('modalProductTitle');
    const priceText = document.getElementById('modalProductPrice');
    const whatsappBtn = document.getElementById('confirmPaymentBtn');

    title.innerText = `Order: ${productName}`;
    priceText.innerText = `Price: ${price}`;
    
    // Prepare WhatsApp message
    const message = encodeURIComponent(`Hello! I've just paid for ${productName} (${price}). Here is my payment screenshot.`);
    whatsappBtn.href = `https://wa.me/918778587258?text=${message}`;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('paymentModal');
    if (event.target == modal) {
        closeModal();
    }
});


// FAQ Toggle
function toggleFaq(element) {
    const item = element.parentElement;
    item.classList.toggle('active');
}

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Newsletter Subscribe
document.addEventListener('DOMContentLoaded', () => {
    const newsletterBtn = document.querySelector('.newsletter-form .btn');
    const newsletterInput = document.querySelector('.newsletter-form input');
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', () => {
            const email = newsletterInput.value.trim();
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                newsletterInput.style.borderColor = '#ff4d4d';
                newsletterInput.placeholder = 'Please enter a valid email';
                return;
            }
            newsletterInput.style.borderColor = '#25d366';
            newsletterBtn.textContent = '✓ Subscribed!';
            newsletterBtn.disabled = true;
            newsletterBtn.style.background = '#25d366';
            newsletterInput.value = '';
            newsletterInput.placeholder = 'Enter your email address';
            setTimeout(() => {
                newsletterBtn.textContent = 'Subscribe';
                newsletterBtn.disabled = false;
                newsletterBtn.style.background = '';
                newsletterInput.style.borderColor = '';
            }, 4000);
        });
    }
});
