document.addEventListener('DOMContentLoaded', () => {
    // Dynamic year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Header background on scroll
    const header = document.querySelector('.header');
    const toggleHeader = () => {
        if (window.scrollY > 40) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    };
    window.addEventListener('scroll', toggleHeader, { passive: true });
    toggleHeader();

    // Mobile menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--open');
        burger.classList.toggle('burger--open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--open');
            burger.classList.remove('burger--open');
        });
    });

    // Scroll reveal with stagger
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parent = entry.target.closest('.about__stats, .cases__grid, .clients__grid, .real-cases__grid, .products__grid, .process__timeline, .stack__grid');
                if (parent) {
                    const siblings = Array.from(parent.children).filter(child => child.classList.contains('reveal'));
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 100}ms`;
                }
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Typing effect for hero title (one time)
    const typeContainer = document.querySelector('.type-text');
    if (typeContainer) {
        const text = typeContainer.dataset.text;
        let i = 0;
        const speed = 40;

        function type() {
            if (i < text.length) {
                typeContainer.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                typeContainer.closest('.hero__title')?.classList.add('typing-done');
            }
        }

        setTimeout(type, 600);
    }

    // Form placeholder handler
    const form = document.querySelector('.contacts__form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Заявка отправлена';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }
});
