/* ============================================
   MAIN JS — main.js
   Handles: Navbar scroll, mobile menu, reveal animations
   ============================================ */

// ---------- Navbar ----------
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile hamburger toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---------- Scroll Reveal ----------
// Adds .reveal class to animatable elements, then uses IntersectionObserver
const revealSelectors = [
  '.card', '.featured-card', '.pub-item', '.project-card',
  '.collab-card', '.faq-item', '.timeline-item', '.skill-group',
  '.interest-item', '.social-card', '.section-title', '.section-subtitle',
  '.about-intro-grid', '.contact-grid', '.cta-box'
];

document.querySelectorAll(revealSelectors.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---------- Active Nav Link ----------
// Auto-highlights the current page link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});
