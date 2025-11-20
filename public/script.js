// COMPLETE PRODUCT DATA - ALL 5 FLAVORS
const products = {
    'chamomile': {
        id: 1,
        name: "Chamomile Cozy",
        description: "Soothing chamomile blend with floral honey notes, perfect for winding down after a long day. Our most popular calming ritual.",
        images: [
            "/assets/images/chamomile-tin.jpg",
            "/assets/images/chamomile-calm-kit.jpg",
            "/assets/images/chamomile-premium-kit.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items + free shipping" }
        ]
    },
    'lavender': {
        id: 2,
        name: "Lavender Calm", 
        description: "Relaxing lavender infusion with subtle vanilla undertones for deeply peaceful evenings and restful sleep.",
        images: [
            "/assets/images/lavender-tin.jpg",
            "/assets/images/lavender-calm-kit.jpg",
            "/assets/images/lavender-premium-kit.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items + free shipping" }
        ]
    },
    'cocoa': {
        id: 3,
        name: "Cocoa Dream",
        description: "Rich cocoa blend with calming vanilla and cinnamon notes for cozy nights and warm comfort.",
        images: [
            "/assets/images/cocoa-dream-tin.jpg", 
            "/assets/images/cocoa-dream-calm-kit.jpg",
            "/assets/images/cocoa-dream-premium-kit.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items + free shipping" }
        ]
    },
    'jasmine': {
        id: 4,
        name: "Jasmine Whisper",
        description: "Delicate jasmine with sweet honey notes for gentle relaxation and serene moments.",
        images: [
            "/assets/images/jasmine-wisper-tin.jpg",
            "/assets/images/jasmine-wisper-calm-kit.jpg", 
            "/assets/images/jasmine-wisper-premium-kit.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items + free shipping" }
        ]
    },
    'vanilla': {
        id: 5,
        name: "Vanilla Honey",
        description: "Warm vanilla with sweet honey accents for comforting rituals and sweet dreams.",
        images: [
            "/assets/images/vanila-honey-tin.jpg",
            "/assets/images/vanila-honey-calm-kit.jpg",
            "/assets/images/vanila-honey-premium-kit.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items + free shipping" }
        ]
    }
};

// Cart system
let cart = JSON.parse(localStorage.getItem('snugbrewCart')) || [];
let currentSlide = 0;
let carouselInterval;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    updateCartCount();
    loadProductDetail();
    setupMobileMenu();
    loadProductsPreview();
    detectPage();
});


// 🆕 FIXED PRODUCT DETAIL FUNCTION
function loadProductDetail() {
    const path = window.location.pathname;
    console.log('🔄 Checking path:', path);
    
    // Check if we're on a product page
    if (!path.includes('/product/')) {
        console.log('❌ Not a product page');
        return;
    }
    
    // Extract product name correctly
    const productName = path.split('/product/')[1];
    console.log('🔍 Product name:', productName);
    
    const product = products[productName];
    const container = document.getElementById('productDetail');
    
    console.log('📦 Product found:', product);
    console.log('🎯 Container found:', container);
    
    if (!container) {
        console.log('❌ No product detail container');
        return;
    }
    
    if (!product) {
        console.log('❌ Product not found in database');
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <h2>Product Not Found</h2>
                <p>Sorry, we couldn't find "${productName}".</p>
                <a href="/products" class="cta-button">Back to Products</a>
            </div>
        `;
        return;
    }
    
    console.log('✅ Loading product:', product.name);
    
    // SUCCESS! Show the actual product
    container.innerHTML = `
        <div class="product-detail">
            <div class="product-gallery">
                <div class="main-image">
                    <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage">
                </div>
                <div class="thumbnail-gallery">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="${product.name} ${index + 1}" 
                             onclick="changeMainImage('${img}')"
                             class="thumbnail ${index === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
            </div>
            
            <div class="product-info">
                <h1>${product.name}</h1>
                <p class="product-description">${product.description}</p>
                
                <div class="product-options">
                    ${product.options.map((option, index) => `
                        <div class="option-card ${index === 0 ? 'selected' : ''}" 
                             onclick="selectOption(this, ${product.id}, ${index})">
                            <h4>${option.type}</h4>
                            <div class="price">₹${option.price}</div>
                            <ul>
                                ${option.includes.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                
                <button class="cta-button add-to-cart-btn" onclick="addToCart(${product.id}, product.options[0])">
                    Add to Cart - ₹${product.options[0].price}
                </button>
                
                <div class="subscription-options">
                    <h3>📦 Monthly Subscription</h3>
                    ${product.subscriptions.map(sub => `
                        <div class="sub-option">
                            <div>
                                <h4>${sub.type} Subscription - ₹${sub.price}/month</h4>
                                <p>${sub.description}</p>
                            </div>
                            <button class="cta-button" onclick="addToCart(${product.id}, {type: '${sub.type} Subscription', price: ${sub.price}}, ${JSON.stringify(sub).replace(/"/g, '&quot;')})">
                                Subscribe
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    console.log('🎉 Product detail loaded successfully!');
}

// [REST OF YOUR FUNCTIONS - Carousel, Cart, etc. remain the same...]
// WORKING CAROUSEL SYSTEM
function initCarousel() {
    const carousel = document.getElementById('mainCarousel');
    if (!carousel) return;
    
    createCarouselDots();
    
    carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

function createCarouselDots() {
    const carousel = document.getElementById('mainCarousel');
    if (!carousel) return;
    
    const dotsContainer = document.querySelector('.carousel-dots');
    if (!dotsContainer) return;
    
    const items = carousel.querySelectorAll('.carousel-item');
    dotsContainer.innerHTML = '';
    
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function moveCarousel(direction) {
    const carousel = document.getElementById('mainCarousel');
    if (!carousel) return;
    
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    currentSlide = (currentSlide + direction + items.length) % items.length;
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => moveCarousel(1), 5000);
}

function goToSlide(slideIndex) {
    const carousel = document.getElementById('mainCarousel');
    if (!carousel) return;
    
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    currentSlide = slideIndex;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => moveCarousel(1), 5000);
}

// CART SYSTEM
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(productId, option, subscription = null) {
    const product = Object.values(products).find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = {
        id: Date.now(),
        product: product.name,
        option: option.type,
        price: option.price,
        quantity: 1,
        image: product.images[0],
        timestamp: new Date().toISOString()
    };
    
    if (subscription) {
        cartItem.subscription = subscription.type;
        cartItem.isSubscription = true;
        cartItem.recurring = true;
    }
    
    cart.push(cartItem);
    localStorage.setItem('snugbrewCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Added to cart! 🛒');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--matcha);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function changeMainImage(src) {
    document.getElementById('mainProductImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    event.target.classList.add('active');
}

function selectOption(element, productId, optionIndex) {
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    element.classList.add('selected');
    
    const product = Object.values(products).find(p => p.id === productId);
    const button = document.querySelector('.add-to-cart-btn');
    if (button) {
        button.textContent = `Add to Cart - ₹${product.options[optionIndex].price}`;
        button.onclick = () => addToCart(productId, product.options[optionIndex]);
    }
}

// MOBILE MENU
function setupMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });
    }
}

// ADMIN ACCESS
function checkAdminAccess() {
    const password = prompt('Enter admin password:');
    if (password === 'snugbrew123') {
        return true;
    } else {
        alert('Incorrect password. Demo password: snugbrew123');
        return false;
    }
}

// 🆕 ENHANCED PAGE DETECTION SYSTEM
function detectPage() {
    const path = window.location.pathname;
    console.log('📍 Current page:', path);
    
    if (path === '/about') {
        showAboutPage();
    } else if (path === '/blog') {
        showBlogPage();
    } else if (path === '/contact') {
        showContactPage();
    } else if (path === '/products') {
        showProductsPage();
    } else if (path === '/cart') {
        showCartPage();
    }
}

function showAboutPage() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    main.innerHTML = `
        <section class="page-content">
            <div class="container">
                <h1>About SnugBrew</h1>
                <div class="about-grid">
                    <div class="about-text">
                        <h2>Our Story</h2>
                        <p>Founded in 2024, SnugBrew emerged from a simple idea: in our fast-paced world, everyone deserves a moment of calm. We believe that true relaxation isn't a luxury—it's a necessity.</p>
                        
                        <h2>Our Mission</h2>
                        <p>We create non-caffeinated ritual kits that help you unwind and find peace in your daily routine. Each kit is carefully crafted with soothing blends, calming scents, and mindful elements.</p>
                        
                        <h2>What Makes Us Different</h2>
                        <ul>
                            <li>🌿 100% natural ingredients</li>
                            <li>🕯️ Hand-poured candles</li>
                            <li>🎁 Thoughtful packaging</li>
                            <li>💝 Perfect for self-care or gifting</li>
                        </ul>
                    </div>
                    <div class="about-values">
                        <h2>Our Values</h2>
                        <div class="value-card">
                            <h3>Mindfulness</h3>
                            <p>Every product is designed to encourage presence and awareness</p>
                        </div>
                        <div class="value-card">
                            <h3>Sustainability</h3>
                            <p>Eco-friendly packaging and responsibly sourced ingredients</p>
                        </div>
                        <div class="value-card">
                            <h3>Community</h3>
                            <p>Building a space where everyone can share their calm journey</p>
                        </div>
                    </div>
                </div>
                <div class="back-home">
                    <a href="/" class="cta-button">Back to Home</a>
                </div>
            </div>
        </section>
    `;
}

function showBlogPage() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    main.innerHTML = `
        <section class="page-content">
            <div class="container">
                <h1>SnugBrew Blog</h1>
                <p class="subtitle">Tips, stories, and inspiration for your calm journey</p>
                
                <div class="blog-grid">
                    <article class="blog-post">
                        <img src="/assets/images/chamomile-tin.jpg" alt="Evening Rituals">
                        <div class="blog-content">
                            <h2>Creating Your Perfect Evening Ritual</h2>
                            <p class="blog-meta">Posted on March 15, 2024 • 5 min read</p>
                            <p>Discover how to build a calming evening routine that helps you unwind and prepare for restful sleep. From tea brewing to mindfulness practices...</p>
                            <a href="#" class="read-more">Read More →</a>
                        </div>
                    </article>
                    
                    <article class="blog-post">
                        <img src="/assets/images/lavender-tin.jpg" alt="Sleep Hygiene">
                        <div class="blog-content">
                            <h2>The Science of Sleep & Relaxation</h2>
                            <p class="blog-meta">Posted on March 10, 2024 • 7 min read</p>
                            <p>Explore how certain scents and rituals can significantly improve your sleep quality and overall well-being...</p>
                            <a href="#" class="read-more">Read More →</a>
                        </div>
                    </article>
                    
                    <article class="blog-post">
                        <img src="/assets/images/cocoa-dream-tin.jpg" alt="Self Care">
                        <div class="blog-content">
                            <h2>Self-Care Beyond the Basics</h2>
                            <p class="blog-meta">Posted on March 5, 2024 • 6 min read</p>
                            <p>Moving beyond bubble baths: meaningful self-care practices that actually make a difference in your mental health...</p>
                            <a href="#" class="read-more">Read More →</a>
                        </div>
                    </article>
                </div>
                
                <div class="blog-newsletter">
                    <h3>Stay Updated</h3>
                    <p>Get the latest articles and exclusive content delivered to your inbox</p>
                    <div class="newsletter-form">
                        <input type="email" placeholder="Your email address">
                        <button class="cta-button">Subscribe</button>
                    </div>
                </div>
                
                <div class="back-home">
                    <a href="/" class="cta-button">Back to Home</a>
                </div>
            </div>
        </section>
    `;
}

function showContactPage() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    main.innerHTML = `
        <section class="page-content">
            <div class="container">
                <h1>Get in Touch</h1>
                <p class="subtitle">We'd love to hear from you! Reach out with questions, feedback, or just to say hello.</p>
                
                <div class="contact-grid">
                    <div class="contact-info">
                        <h2>Contact Information</h2>
                        
                        <div class="contact-item">
                            <h3>📧 Email</h3>
                            <p>hello@snugbrew.com</p>
                            <p>support@snugbrew.com</p>
                        </div>
                        
                        <div class="contact-item">
                            <h3>📞 Phone</h3>
                            <p>+91 98765 43210</p>
                            <p>Mon-Fri: 9AM-6PM IST</p>
                        </div>
                        
                        <div class="contact-item">
                            <h3>📍 Address</h3>
                            <p>SnugBrew Wellness<br>
                               123 Calm Street<br>
                               Bangalore, Karnataka 560001<br>
                               India</p>
                        </div>
                        
                        <div class="social-links">
                            <h3>Follow Us</h3>
                            <div class="social-icons">
                                <a href="#">Instagram</a>
                                <a href="#">Facebook</a>
                                <a href="#">Pinterest</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form">
                        <h2>Send us a Message</h2>
                        <form>
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" placeholder="Enter your name">
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" id="email" placeholder="Enter your email">
                            </div>
                            
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select id="subject">
                                    <option>General Inquiry</option>
                                    <option>Product Question</option>
                                    <option>Shipping & Delivery</option>
                                    <option>Feedback</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Your Message</label>
                                <textarea id="message" rows="5" placeholder="Tell us how we can help you..."></textarea>
                            </div>
                            
                            <button type="submit" class="cta-button">Send Message</button>
                        </form>
                    </div>
                </div>
                
                <div class="back-home">
                    <a href="/" class="cta-button">Back to Home</a>
                </div>
            </div>
        </section>
    `;
}

function showProductsPage() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    main.innerHTML = `
        <section class="featured-products">
            <div class="container">
                <h1>All Our Ritual Kits</h1>
                <p class="subtitle">Discover your perfect calm companion</p>
                <div class="products-preview">
                    <!-- Products will be loaded by loadProductsPreview() -->
                </div>
            </div>
        </section>
    `;
    loadProductsPreview();
}

function showCartPage() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    main.innerHTML = `
        <section class="page-content">
            <div class="container">
                <h1>Your Shopping Cart</h1>
                
                ${cart.length === 0 ? `
                    <div class="empty-cart">
                        <h2>Your cart is empty</h2>
                        <p>Add some calming products to get started!</p>
                        <a href="/products" class="cta-button">Start Shopping</a>
                    </div>
                ` : `
                    <div class="cart-items">
                        ${cart.map(item => `
                            <div class="cart-item">
                                <img src="${item.image}" alt="${item.product}">
                                <div class="cart-details">
                                    <h3>${item.product}</h3>
                                    <p>${item.option}</p>
                                    ${item.subscription ? `<p class="subscription-badge">${item.subscription}</p>` : ''}
                                </div>
                                <div class="cart-price">
                                    <p class="price">₹${item.price}</p>
                                    <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
                                </div>
                            </div>
                        `).join('')}
                        
                        <div class="cart-total">
                            <h3>Total: ₹${cart.reduce((sum, item) => sum + item.price, 0)}</h3>
                            <button class="cta-button">Proceed to Checkout</button>
                        </div>
                    </div>
                `}
                
                <div class="back-home">
                    <a href="/" class="cta-button">Continue Shopping</a>
                </div>
            </div>
        </section>
    `;
}

// 🆕 ADD REMOVE FROM CART FUNCTION
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('snugbrewCart', JSON.stringify(cart));
    updateCartCount();
    showCartPage(); // Refresh cart page
}
// 🆕 TEMPORARY DEBUG - ADD THIS
function debugPages() {
    console.log('=== PAGE DEBUG ===');
    console.log('URL:', window.location.href);
    console.log('Path:', window.location.pathname);
    console.log('Main element:', document.getElementById('mainContent'));
    console.log('DetectPage function:', typeof detectPage);
    console.log('=== END DEBUG ===');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SnugBrew Initializing...');
    
    initCarousel();
    updateCartCount();
    setupMobileMenu();
    loadProductsPreview();
    
    // 🆕 CHECK IF WE'RE ON A PRODUCT PAGE
    if (window.location.pathname.includes('/product/')) {
        console.log('📦 Loading product page...');
        loadProductDetail();
    } else {
        // Regular page detection
        detectPage();
    }
});
// 🆕 PRODUCT PAGE FUNCTIONALITY - CAROUSEL & PACKAGE SELECTION
function initProductPage() {
    console.log('🚀 Initializing product page...');
    
    // CAROUSEL FUNCTIONALITY
    const carousels = document.querySelectorAll('.product-carousel');
    console.log('Found carousels:', carousels.length);
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        
        console.log('Carousel slides:', slides.length);
        
        if (slides.length > 0) {
            let currentSlide = 0;

            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
                if (dots[currentSlide]) {
                    dots[currentSlide].classList.add('active');
                }
            }

            // Navigation buttons
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    console.log('Previous clicked');
                    showSlide(currentSlide - 1);
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    console.log('Next clicked');
                    showSlide(currentSlide + 1);
                });
            }

            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    console.log('Dot clicked:', index);
                    showSlide(index);
                });
            });
        }
    });

    // PACKAGE SELECTION FUNCTIONALITY
    const optionCards = document.querySelectorAll('.option-card');
    console.log('Found option cards:', optionCards.length);
    
    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Option card clicked');
            
            // Remove selected class from all cards in this group
            const allCards = this.parentElement.querySelectorAll('.option-card');
            allCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Update price display
            const price = this.getAttribute('data-price');
            const finalPriceElement = document.querySelector('.final-price');
            if (finalPriceElement) {
                finalPriceElement.textContent = `₹${price}`;
                console.log('Price updated to:', price);
            }
        });
    });

    // ADD TO CART FUNCTIONALITY
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const productName = document.querySelector('.product-info h1').textContent;
            const selectedOption = document.querySelector('.option-card.selected');
            const price = selectedOption ? selectedOption.getAttribute('data-price') : '199';
            
            alert(`Added ${productName} to cart! 🛒\nPrice: ₹${price}`);
            console.log('Added to cart:', productName, price);
        });
    }
}

