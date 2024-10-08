// Import the student model
const mongoose = require('mongoose');
const Student = require('../models/student');  // Include the model here

// Function to connect to MongoDB
const connectDB = (url) => {
    // Return the connection promise
    return mongoose.connect(url)
        .then(() => {
            console.log('MongoDB connected successfully');
            // Optional: You can check if the Student collection exists here or log the models
            console.log('Student model is ready');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err);
            process.exit(1);  // Exit the process if unable to connect
        });
};

module.exports = connectDB;
