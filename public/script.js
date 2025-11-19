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
    loadProductsPreview(); // 🆕 ADDED THIS LINE!
});

// 🆕 NEW FUNCTION: LOAD PRODUCTS PREVIEW WITH WORKING BUTTONS
function loadProductsPreview() {
    const previewContainer = document.querySelector('.products-preview');
    if (!previewContainer) return;
    
    previewContainer.innerHTML = `
        <div class="preview-card">
            <img src="/assets/images/chamomile-tin.jpg" alt="Chamomile Cozy">
            <h3>Chamomile Cozy</h3>
            <p>From ₹199</p>
            <button class="cta-button" onclick="window.location.href='/product/chamomile'">View Options</button>
        </div>
        <div class="preview-card">
            <img src="/assets/images/lavender-tin.jpg" alt="Lavender Calm">
            <h3>Lavender Calm</h3>
            <p>From ₹199</p>
            <button class="cta-button" onclick="window.location.href='/product/lavender'">View Options</button>
        </div>
        <div class="preview-card">
            <img src="/assets/images/cocoa-dream-tin.jpg" alt="Cocoa Dream">
            <h3>Cocoa Dream</h3>
            <p>From ₹199</p>
            <button class="cta-button" onclick="window.location.href='/product/cocoa'">View Options</button>
        </div>
        <div class="preview-card">
            <img src="/assets/images/jasmine-wisper-tin.jpg" alt="Jasmine Whisper">
            <h3>Jasmine Whisper</h3>
            <p>From ₹199</p>
            <button class="cta-button" onclick="window.location.href='/product/jasmine'">View Options</button>
        </div>
        <div class="preview-card">
            <img src="/assets/images/vanila-honey-tin.jpg" alt="Vanilla Honey">
            <h3>Vanilla Honey</h3>
            <p>From ₹199</p>
            <button class="cta-button" onclick="window.location.href='/product/vanilla'">View Options</button>
        </div>
    `;
}

// WORKING CAROUSEL SYSTEM
function initCarousel() {
    const carousel = document.getElementById('mainCarousel');
    if (!carousel) return;
    
    createCarouselDots();
    
    // Auto-rotate every 5 seconds
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
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Reset auto-rotate timer
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
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Reset auto-rotate timer
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
    
    // Show success message
    showNotification('Added to cart! 🛒');
}

function showNotification(message) {
    // Create notification element
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
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// PRODUCT DETAIL PAGE
function loadProductDetail() {
    const path = window.location.pathname;
    if (!path.includes('/product/')) return;
    
    const productName = path.split('/').pop();
    const product = products[productName];
    const container = document.getElementById('productDetail');
    
    if (!container) return;
    
    if (!product) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <h2>Product Not Found</h2>
                <p>Sorry, we couldn't find the product you're looking for.</p>
                <a href="/products" class="cta-button" style="display: inline-block; margin-top: 1rem;">Back to Products</a>
            </div>
        `;
        return;
    }
    
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
}

function changeMainImage(src) {
    document.getElementById('mainProductImage').src = src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    event.target.classList.add('active');
}

function selectOption(element, productId, optionIndex) {
    // Remove selected class from all options
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
    
    // Update add to cart button
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
