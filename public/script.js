// ADMIN PASSWORD: snugbrew123
let currentUser = null;
let cart = JSON.parse(localStorage.getItem('snugbrewCart')) || [];

// All products data
const products = {
    'chamomile': {
        id: 1,
        name: "Chamomile Cozy",
        description: "Soothing chamomile blend with floral honey notes, perfect for winding down after a long day.",
        images: [
            "/assets/images/chamomile-calm-kit.jpg",
            "/assets/images/chamomile-premium-kit.jpg", 
            "/assets/images/chamomile-tin.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items" },
            { type: "Bi-Monthly", price: 999, description: "1 large tin + premium ritual item" }
        ]
    },
    'lavender': {
        id: 2,
        name: "Lavender Calm", 
        description: "Relaxing lavender infusion with subtle vanilla undertones for peaceful evenings.",
        images: [
            "/assets/images/lavender-calm-kit.jpg",
            "/assets/images/lavender-premium-kit.jpg",
            "/assets/images/lavender-tin.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items" },
            { type: "Bi-Monthly", price: 999, description: "1 large tin + premium ritual item" }
        ]
    },
    'cocoa': {
        id: 3,
        name: "Cocoa Dream",
        description: "Rich cocoa blend with calming vanilla and cinnamon notes for cozy nights.",
        images: [
            "/assets/images/cocoa-dream-calm-kit.jpg", 
            "/assets/images/cocoa-dream-premium-kit.jpg",
            "/assets/images/cocoa-dream-tin.jpg"
        ],
        options: [
            { type: "Tin Only", price: 199, includes: ["10-serving tin"] },
            { type: "Calm Kit", price: 499, includes: ["Tin", "Mini candle", "Skincare minis", "Affirmation card"] },
            { type: "Premium Kit", price: 899, includes: ["All Calm Kit items", "Full-size candle", "Eye mask", "Plushie", "Premium box"] }
        ],
        subscriptions: [
            { type: "Monthly", price: 999, description: "1 tin + mini candle + seasonal items" },
            { type: "Bi-Monthly", price: 999, description: "1 large tin + premium ritual item" }
        ]
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    updateCartCount();
    loadProductDetail();
    loadProductsPage();
    loadBlogPosts();
});

// SPINNING CAROUSEL
let currentSlide = 0;
function initCarousel() {
    const carousel = document.getElementById('mainCarousel');
    if (!carousel) return;
    
    // Auto-rotate every 5 seconds
    setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

function moveCarousel(direction) {
    const carousel = document.getElementById('mainCarousel');
    if (!carousel) return;
    
    const items = carousel.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + direction + items.length) % items.length;
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// CART SYSTEM
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
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
        image: product.images[0]
    };
    
    if (subscription) {
        cartItem.subscription = subscription.type;
        cartItem.isSubscription = true;
    }
    
    cart.push(cartItem);
    localStorage.setItem('snugbrewCart', JSON.stringify(cart));
    updateCartCount();
    alert('Added to cart! 🛒');
}

function loadCartPage() {
    const cartContainer = document.getElementById('cartContainer');
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartContainer.innerHTML = `
        ${cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.product}">
                <div class="cart-details">
                    <h3>${item.product}</h3>
                    <p>${item.option} ${item.subscription ? '• ' + item.subscription + ' Subscription' : ''}</p>
                    <p class="price">₹${item.price} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('')}
        <div class="cart-total">Total: ₹${total}</div>
        <button class="cta-button" onclick="checkout()">Checkout (Demo)</button>
    `;
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('snugbrewCart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

function checkout() {
    alert('Demo Checkout Complete! This is an academic demonstration. 🎓');
    cart = [];
    localStorage.setItem('snugbrewCart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

// PRODUCT DETAIL PAGES
function loadProductDetail() {
    const path = window.location.pathname;
    if (!path.includes('/product/')) return;
    
    const productName = path.split('/').pop();
    const product = products[productName];
    const container = document.getElementById('productDetail');
    
    if (!container || !product) return;
    
    container.innerHTML = `
        <div class="product-gallery">
            <div class="main-image">
                <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage">
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
                
                <button class="cta-button" onclick="addToCart(${product.id}, product.options[0])">
                    Add to Cart - ₹${product.options[0].price}
                </button>
                
                <div class="subscription-options">
                    <h3>Subscribe & Save</h3>
                    ${product.subscriptions.map(sub => `
                        <div class="sub-option">
                            <div>
                                <h4>${sub.type} Subscription</h4>
                                <p>${sub.description}</p>
                            </div>
                            <div>
                                <div class="price">₹${sub.price}</div>
                                <button class="cta-button" onclick="addToCart(${product.id}, {type: '${sub.type} Subscription', price: ${sub.price}}, ${JSON.stringify(sub).replace(/"/g, '&quot;')})">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
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
    const button = element.closest('.product-info').querySelector('.cta-button');
    button.textContent = `Add to Cart - ₹${product.options[optionIndex].price}`;
    button.onclick = () => addToCart(productId, product.options[optionIndex]);
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

// BLOG SYSTEM
function loadBlogPosts() {
    const container = document.getElementById('blogContainer');
    if (!container) return;
    
    const posts = [
        {
            title: "How to Create Your Evening Ritual",
            excerpt: "Learn how to build a calming evening routine with our ritual kits...",
            image: "/assets/images/chamomile-calm-kit.jpg"
        },
        {
            title: "Brew Guide for Better Sleep",
            excerpt: "The perfect way to brew our non-caffeinated blends for restful nights...",
            image: "/assets/images/lavender-calm-kit.jpg"
        },
        {
            title: "Skincare & Nighttime Routine",
            excerpt: "Combining skincare with calming rituals for complete evening wellness...",
            image: "/assets/images/cocoa-dream-calm-kit.jpg"
        }
    ];
    
    container.innerHTML = posts.map(post => `
        <div class="blog-post">
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="#" class="read-more">Read More</a>
        </div>
    `).join('');
}

// PRODUCTS PAGE
function loadProductsPage() {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    container.innerHTML = Object.entries(products).map(([key, product]) => `
        <div class="product-card" onclick="window.location='/product/${key}'">
            <img src="${product.images[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">From ₹199</div>
            <button class="cta-button">View Options</button>
        </div>
    `).join('');
}
