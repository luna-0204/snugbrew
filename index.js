const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));
app.use('/assets', express.static('assets'));

// API route example
app.get('/api', (req, res) => {
    res.json({ message: 'SnugBrew API is working! 🚀' });
});

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`☕ SnugBrew server running on port ${PORT}`);
});
