const express = require('express');

const app = express();

// GET /
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Node.js Express Server!');
});

// GET /about
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'srijani yerram',
        section: 'cse-2E'
    });
});

// GET /time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Express Server running at http://localhost:3000');
});