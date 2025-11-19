// Product data
const products = [
    {
        id: 1,
        name: "Chamomile Cozy",
        type: "Calm Kit",
        price: 499,
        image: "/assets/images/chamomile-calm-kit.jpg",
        description: "Soothing chamomile blend with floral notes"
    },
    {
        id: 2,
        name: "Cocoa Dream", 
        type: "Premium Kit",
        price: 899,
        image: "/assets/images/cocoa-dream-premium-kit.jpg",
        description: "Rich cocoa with calming vanilla undertones"
    },
    {
        id: 3,
        name: "Lavender Calm",
        type: "Calm Kit", 
        price: 499,
        image: "/assets/images/lavender-calm-kit.jpg",
        description: "Relaxing lavender infusion for peaceful evenings"
    },
    {
        id: 4,
        name: "Jasmine Whisper",
        type: "Premium Kit",
        price: 899,
        image: "/assets/images/jasmine-wisper-premium-kit.jpg",
        description: "Delicate jasmine with honey notes"
    },
    {
        id: 5,
        name: "Vanilla Honey",
        type: "Calm Kit",
        price: 499,
        image: "/assets/images/vanila-honey-calm-kit.jpg",
        description: "Warm vanilla with sweet honey accents"
    }
];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    initCarousel();
});

// Load products into grid
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='/assets/images/coffee.png'">
            <h3>${product.name}</h3>
            <p class="product-type">${product.type}</p>
            <p class="product-desc">${product.description}</p>
            <div class="product-price">₹${product.price}</div>
            <button class="cta-button" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Simple carousel
function initCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    carousel.innerHTML = `
        <div class="carousel-container">
            <img src="/assets/images/all-flavour.jpg" alt="SnugBrew Collection" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 18px;">
        </div>
    `;
}

// Demo cart function
function addToCart(productId) {
    alert('Demo: Product added to cart! (Academic demonstration)');
}

// Admin access (simple demo)
function accessAdmin() {
    const password = prompt('Enter admin password (demo: snugbrew123)');
    if (password === 'snugbrew123') {
        window.location.href = '/admin';
    } else {
        alert('Incorrect password for demo access');
    }
}
