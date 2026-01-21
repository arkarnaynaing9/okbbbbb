// Portfolio JavaScript - Pure vanilla JS without TypeScript

// Animated Role Text Data - Exactly matching React component
const roles = [
    { en: "UX/UI Designer", jp: "デザイナー", translation: "Designer" },
    { en: "UX/UI Designer", jp: "ユーザー体験", translation: "User Experience" },
    { en: "UX/UI Designer", jp: "インターフェース", translation: "Interface" },
    { en: "UX/UI Designer", jp: "创意创造者", translation: "Creator" }
];

// Global Variables
let currentRoleIndex = 0;
let showJapanese = false;
let isAnimating = false;

// Portfolio Projects Data - Matching your React portfolio exactly
const portfolioProjects = [
    {
        title: "AgriDiagnose",
        year: "2025",
        badge: "UX/UI Design",
        description: "An AI-powered agricultural platform with a clean, user-friendly landing page designed to clearly communicate crop disease diagnosis, benefits, and actions, simplifying complex technology for farmers.",
        image: "./AgriDiagnose.png",
        tags: ["UX/UI Design", "Landing Page", "AI-Powered", "Agriculture Tech", "Mobile-First"],
        duration: "3 months",
        client: "Company Project",
        link: "https://www.behance.net/gallery/242606013/AgriDiagnose?"
    },
    {
        title: "LH Bank AI Assistant",
        year: "2025",
        badge: "UX/UI Design",
        description: "AI voice assistant interface featuring a responsive sphere animation component that visually represents listening, processing, and responding states, designed to enhance clarity and user trust during voice interactions.",
        image: "./LHBank.png",
        tags: ["UX/UI Desgin", "Voice Assistant Animation", "AI-Powered", "Banking Technology", "Mobile-First"],
        duration: "2 months",
        client: "LH Bank",
        link: "https://www.behance.net/gallery/242609413/Ai-Voice-Assistan"
    },
    {
        title: "Dova",
        year: "2025",
        badge: "UX/UI Design",
        description: "Contributed to the full redesign of the DOVA app, creating a comprehensive design system and collaborating with the team to improve usability and visual consistency. The project involved OCR integration and mobile-first optimization for a smoother user experience.",
        image: "./Dova1.png",
        tags: ["UX/UI Design", "OCR Technology", "Design System", "App Redesign", "Team Collaboration"],
        duration: "4 months",
        client: "Company Project",
        link: ""
    },
    {
        title: "Chat Framework",
        year: "2025",
        badge: "UX/UI Design",
        description: "Collaborated as a team member to completely redesign the Chat Framework web app. Focused on improving usability, visual consistency, and responsive layout, creating an intuitive interface optimized for users.",
        image: "./ChatFramework.png",
        tags: ["UX/UI Design", "Web App", "App Redesign", "Team Collaboration", "AI Chat"],
        duration: "6 months",
        client: "Company Project",
        link: ""
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Arkar Nay Naing Portfolio Loading...');
    initializePortfolio();
});

// Initialize Portfolio
function initializePortfolio() {
    setupNavigation();
    setupAnimatedRoleText();
    setupScrollAnimations();
    setupContactForm();
    loadPortfolioProjects();
    addHoverEffects();
    console.log('✨ Portfolio initialized successfully!');
}

// Navigation Setup
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animated Role Text Setup - Exactly matching React behavior
function setupAnimatedRoleText() {
    const roleElement = document.getElementById('animatedRole');
    if (!roleElement) {
        console.log('❌ Role element not found');
        return;
    }

    // Set initial text
    roleElement.textContent = roles[0].en;
    roleElement.style.transition = 'opacity 0.6s ease, filter 0.6s ease';
    setAnimatedRoleWidth(roleElement);
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setAnimatedRoleWidth(roleElement));
    }
    
    console.log('🎭 Starting role animation...');
    
    // Start animation cycle matching React timing (every 2 seconds)
    setTimeout(() => {
        animateRoleText();
    }, 2000);
}

// Keep the animated role span width steady so the prefix never shifts
function setAnimatedRoleWidth(roleElement) {
    if (!document.body) return;

    const tester = document.createElement('span');
    tester.className = 'animated-role';
    tester.style.position = 'absolute';
    tester.style.visibility = 'hidden';
    tester.style.pointerEvents = 'none';
    tester.style.whiteSpace = 'nowrap';
    tester.style.transition = 'none';
    tester.style.opacity = '0';
    tester.style.transform = 'translate(-9999px, -9999px)';

    const texts = roles.reduce((acc, role) => {
        acc.push(role.en, role.jp);
        return acc;
    }, []);

    document.body.appendChild(tester);

    let maxWidth = 0;
    texts.forEach(text => {
        tester.textContent = text;
        maxWidth = Math.max(maxWidth, tester.offsetWidth);
    });

    document.body.removeChild(tester);

    if (maxWidth > 0) {
        const widthPx = `${Math.ceil(maxWidth)}px`;
        roleElement.style.width = widthPx;
        roleElement.style.flex = `0 0 ${widthPx}`;
    }
}

// Animate Role Text - Matching React logic exactly
function animateRoleText() {
    if (isAnimating) return;
    
    const roleElement = document.getElementById('animatedRole');
    if (!roleElement) return;

    isAnimating = true;
    
    // Fade out current text with blur effect (matching React)
    roleElement.style.opacity = '0';
    roleElement.style.filter = 'blur(10px)';
    
    setTimeout(() => {
        if (showJapanese) {
            // If currently showing Japanese, move to next role and show English
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            showJapanese = false;
        } else {
            // If currently showing English, show Japanese
            showJapanese = true;
        }
        
        const currentRole = roles[currentRoleIndex];
        
        // Update text content
        roleElement.textContent = showJapanese ? currentRole.jp : currentRole.en;
        roleElement.style.fontWeight = '700'; // Always bold like in React
        
        // Fade in new text
        roleElement.style.opacity = '1';
        roleElement.style.filter = 'blur(0px)';
        
        isAnimating = false;
        
        // Schedule next animation (every 2 seconds like React)
        setTimeout(() => {
            animateRoleText();
        }, 2000);
    }, 600); // Match React transition duration
}

// Load Portfolio Projects
function loadPortfolioProjects() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        portfolioGrid.innerHTML = portfolioProjects.map((project, index) => `
            <div class="project-card" style="animation-delay: ${0.2 + index * 0.1}s;">
                <div class="project-badge">${project.badge}</div>
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay"></div>
                    <div class="project-meta">
                        <div class="meta-client">${project.client}</div>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <span class="project-year">${project.year}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${project.link ? `<button class="project-btn" onclick="handleProjectClick('${project.link}')">View Case Study</button>` : ''}
                </div>
            </div>
        `).join('');
        
        // Setup project card interactions after adding content
        setupProjectCardInteractions();
    }
}

// Setup Project Card Interactions
function setupProjectCardInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card) => {
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateY(5deg) rotateX(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.2)';
            
            // Animate project tags
            const tags = this.querySelectorAll('.tag');
            tags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1) rotate(5deg)';
                    tag.style.background = 'var(--primary)';
                    tag.style.color = 'var(--primary-foreground)';
                }, tagIndex * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reset tags
            const tags = this.querySelectorAll('.tag');
            tags.forEach(tag => {
                tag.style.transform = '';
                tag.style.background = '';
                tag.style.color = '';
            });
        });
    });
}

// Handle project button clicks
function handleProjectClick(link) {
    if(link){
        window.open(link, '_blank');
    }
}

// Scroll Animations Setup
function setupScrollAnimations() {
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-header, .about-text, .about-image, .project-card, .skill-card');
    animatedElements.forEach(el => {
        // Set initial state for elements that need it
        if (!el.style.opacity && !el.classList.contains('project-card')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
        
        observer.observe(el);
    });
}

// Contact Form Setup
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    let statusElement = contactForm.querySelector('.form-status');
    if (!statusElement) {
        statusElement = document.createElement('p');
        statusElement.className = 'form-status';
        statusElement.setAttribute('role', 'status');
        statusElement.setAttribute('aria-live', 'polite');
        contactForm.appendChild(statusElement);
    }

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        statusElement.textContent = '';
        statusElement.classList.remove('success', 'error');

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject)
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            this.reset();
            statusElement.textContent = 'Thanks! Your message is on its way.';
            statusElement.classList.add('success');
            submitBtn.textContent = 'Message Sent! ✨';
            submitBtn.style.background = '#10b981';
        } catch (error) {
            console.error('Contact form error:', error);
            statusElement.textContent = 'Sorry, something went wrong. Please try again later.';
            statusElement.classList.add('error');
            submitBtn.textContent = 'Try Again';
            submitBtn.style.background = '#ef4444';
        } finally {
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });

    // Form field animations
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.style.borderColor = 'var(--primary)';
            this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = '';
            if (!this.value) {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            }
        });
    });
}

// Add Enhanced Hover Effects
function addHoverEffects() {
    // Skill card hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotateY(5deg) scale(1.05)';
            this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
            
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            if (this.classList.contains('btn-primary')) {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
            } else if (this.classList.contains('btn-secondary')) {
                this.style.transform = 'scale(1.05)';
                this.style.background = 'var(--primary)';
                this.style.color = 'var(--primary-foreground)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            if (this.classList.contains('btn-secondary')) {
                this.style.background = 'transparent';
                this.style.color = 'var(--foreground)';
            }
        });
    });

    // Info item hover effects
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
            const dot = this.querySelector('.info-dot');
            if (dot) {
                dot.style.transform = 'scale(1.8)';
                dot.style.boxShadow = '0 0 15px var(--primary)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            const dot = this.querySelector('.info-dot');
            if (dot) {
                dot.style.transform = '';
                dot.style.boxShadow = '';
            }
        });
    });
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add visual feedback for interactions
function addClickFeedback(element) {
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = '';
    }, 150);
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Performance optimization: Reduce animations on mobile
function optimizeForMobile() {
    const isMobile = window.innerWidth <= 768;
    const body = document.body;
    
    if (isMobile) {
        body.classList.add('mobile-view');
    } else {
        body.classList.remove('mobile-view');
    }
}

// Window resize handler
window.addEventListener('resize', optimizeForMobile);

// Initialize mobile optimization
optimizeForMobile();

// Export functions for global access
window.scrollToSection = scrollToSection;
window.handleProjectClick = handleProjectClick;

// Console Welcome Message
console.log(`
🎨 Welcome to Arkar Nay Naing's Portfolio
🚀 Built with pure HTML, CSS, and JavaScript (no TypeScript!)
💫 Featuring cyberpunk animations and modern design
📧 Contact: arkarnaynaing1058@gmail.com
📱 Phone: +95 9796599476
✨ University of Computer Studies, Mandalay Graduate
`);

// Development helpers
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Development mode detected');
    console.log('Available functions:', {
        scrollToSection,
        handleProjectClick,
        roles,
        portfolioProjects
    });
}