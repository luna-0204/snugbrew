const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// 🚀 ALL YOUR ROUTES - COMPLETE SET:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Same as home for now
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Same as home for now
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Same as home for now
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Same as home for now
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Same as home for now
});

// PRODUCT ROUTES
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

// Catch-all for any other product pages
app.get('/product/:name', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

// 🎯 CATCH-ALL ROUTE - Serves index.html for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`☕ SnugBrew running on port ${PORT}`);
});
