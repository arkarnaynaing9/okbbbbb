// Portfolio JavaScript - Pure vanilla JS without TypeScript

// Animated Role Text Data - Exactly matching React component
const roles = [
    { en: "UI/UX Designer", jp: "デザイナー", translation: "Designer" },
    { en: "UI/UX Designer", jp: "ユーザー体験", translation: "User Experience" },
    { en: "UI/UX Designer", jp: "インターフェース", translation: "Interface" },
    { en: "UI/UX Designer", jp: "創造者", translation: "Creator" }
];

// Global Variables
let currentRoleIndex = 0;
let showJapanese = false;
let isAnimating = false;

// Portfolio Projects Data - Matching your React portfolio exactly
const portfolioProjects = [
    {
        title: "CinemaBook - Movie Ticket System",
        year: "2024",
        badge: "Web Application",
        description: "A comprehensive movie ticket booking platform featuring real-time seat selection, multiple payment options, and intuitive user flow. Designed to streamline the cinema experience from movie discovery to ticket confirmation.",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop&crop=center",
        tags: ["React", "Node.js", "Real-time", "Payment Gateway", "Mobile-First"],
        duration: "3 months",
        client: "Personal Project"
    },
    {
        title: "LH Bank AI Assistant",
        year: "2024",
        badge: "UI/UX Design",
        description: "Interactive AI chatbot animations and interface design for LH Bank's customer service platform. Features include natural conversation flows, smooth micro-interactions, and contextual help animations to enhance user engagement.",
        image: "https://cdn.dribbble.com/userupload/17818225/file/still-77fc6ade74311548b9ca1cd679c9800e.png?resize=400x300",
        tags: ["UI Animation", "Micro-interactions", "Banking UX", "AI Interface", "Figma"],
        duration: "2 months",
        client: "LH Bank"
    },
    {
        title: "Millian Cake E-commerce",
        year: "2024",
        badge: "Full-Stack Development",
        description: "Custom e-commerce platform for Millian Cake Company featuring elegant product showcases, seamless ordering system, and mobile-optimized checkout. Focused on creating a delightful shopping experience for premium baked goods.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&crop=center",
        tags: ["E-commerce", "React", "Responsive Design", "Cart System", "Food Tech"],
        duration: "4 months",
        client: "Millian Cake Company"
    },
    {
        title: "Veracity - Digital Signature App",
        year: "2023",
        badge: "UI/UX Design",
        description: "Secure digital signature application with document management, multi-party signing workflows, and compliance features. Built with a focus on security, user experience, and legal document integrity.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&crop=center",
        tags: ["Digital Security", "Document Management", "Authentication", "PDF Processing", "Legal Tech"],
        duration: "6 months",
        client: "Enterprise Client"
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
    
    console.log('🎭 Starting role animation...');
    
    // Start animation cycle matching React timing (every 2 seconds)
    setTimeout(() => {
        animateRoleText();
    }, 2000);
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
                        <div class="meta-item">Duration: ${project.duration}</div>
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
                    <button class="project-btn" onclick="handleProjectClick('${project.title}')">View Case Study</button>
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
function handleProjectClick(projectTitle) {
    console.log(`🔍 Viewing case study for: ${projectTitle}`);
    // Add your project navigation logic here
    alert(`Case study for "${projectTitle}" coming soon!`);
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

    contactForm.addEventListener('submit', function(e) {
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
        
        // Simulate form submission
        setTimeout(() => {
            this.reset();
            
            submitBtn.textContent = 'Message Sent! ✨';
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
            console.log('📧 Form submitted:', formObject);
        }, 2000);
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