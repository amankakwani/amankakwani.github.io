// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Horizontal scroll functionality for project rows
const setupScrollButtons = () => {
    const rowContainers = document.querySelectorAll('.row-container');

    rowContainers.forEach(container => {
        const leftBtn = container.querySelector('.scroll-left');
        const rightBtn = container.querySelector('.scroll-right');
        const wrapper = container.querySelector('.row-wrapper');

        if (leftBtn && rightBtn && wrapper) {
            leftBtn.addEventListener('click', () => {
                wrapper.scrollBy({
                    left: -400,
                    behavior: 'smooth'
                });
            });

            rightBtn.addEventListener('click', () => {
                wrapper.scrollBy({
                    left: 400,
                    behavior: 'smooth'
                });
            });

            // Update button visibility based on scroll position
            const updateScrollButtons = () => {
                const scrollLeft = wrapper.scrollLeft;
                const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

                leftBtn.style.opacity = scrollLeft > 0 ? '1' : '0';
                leftBtn.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';

                rightBtn.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0';
                rightBtn.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
            };

            wrapper.addEventListener('scroll', updateScrollButtons);
            updateScrollButtons();
        }
    });
};

// Initialize scroll buttons
setupScrollButtons();

// Hero button actions
const viewProjectsBtn = document.querySelector('.btn-primary');
const moreInfoBtn = document.querySelector('.btn-secondary');

if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const offsetTop = projectsSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

if (moreInfoBtn) {
    moreInfoBtn.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Add hover effect sound (optional - commented out by default)
// const cards = document.querySelectorAll('.project-card, .skill-card');
// cards.forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         // Add subtle scale animation
//         card.style.transition = 'transform 0.3s ease';
//     });
// });

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.content-section, .about-section, .contact-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Profile icon click handler
const profileIcon = document.querySelector('.profile-icon');
if (profileIcon) {
    profileIcon.addEventListener('click', () => {
        alert('Profile menu coming soon!');
    });
}

// Search button click handler
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        alert('Search functionality coming soon!');
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Project card click handlers (can be customized for modal or navigation)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        const projectTitle = this.querySelector('.project-info h3').textContent;
        console.log(`Clicked on project: ${projectTitle}`);
        // You can add modal functionality or navigation here
    });
});

// Skill card click handlers
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function () {
        const skillName = this.querySelector('h3').textContent;
        console.log(`Clicked on skill: ${skillName}`);
        // You can add additional functionality here
    });
});
