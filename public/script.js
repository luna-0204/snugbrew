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

// Update the loadProductDetail function to handle all 5 flavors
function loadProductDetail() {
    const path = window.location.pathname;
    if (!path.includes('/product/')) return;
    
    const productName = path.split('/').pop();
    const product = products[productName];
    const container = document.getElementById('productDetail');
    
    if (!container || !product) {
        container.innerHTML = '<p>Product not found. <a href="/products">Back to Products</a></p>';
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

// Add image gallery function
function changeMainImage(src) {
    document.getElementById('mainProductImage').src = src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    event.target.classList.add('active');
}
