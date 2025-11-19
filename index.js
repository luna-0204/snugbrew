const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// ALL YOUR ROUTES - ADD THESE:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'));
});

// 🚨 CRITICAL FIX: Add ALL product routes
app.get('/product/chamomile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

app.get('/product/lavender', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

app.get('/product/cocoa', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

app.get('/product/jasmine', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

app.get('/product/vanilla', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

// Catch-all route for any other product pages
app.get('/product/:name', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

app.listen(PORT, () => {
    console.log(`☕ SnugBrew running on port ${PORT}`);
});
