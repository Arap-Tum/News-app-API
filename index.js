const express = require('express');
const dotenv = require("dotenv");
dotenv.config();

const app = express();



// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the News App API!');
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing
module.exports = app;
// Export the app for testing
module.exports = app;
