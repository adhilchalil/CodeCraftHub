// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
app.use('/api/users', userRoutes); // User routes
app.use(errorHandler); // Error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
