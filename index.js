const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve main site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// API route for products
app.get('/api/products', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Chamomile Cozy",
            type: "calm-kit",
            price: 499,
            image: "/assets/images/chamomile-calm-kit.jpg"
        },
        {
            id: 2, 
            name: "Cocoa Dream",
            type: "premium-kit",
            price: 899,
            image: "/assets/images/cocoa-dream-premium-kit.jpg"
        }
        // Add all your products here
    ]);
});

app.listen(PORT, () => {
    console.log(`☕ SnugBrew running on port ${PORT}`);
});
