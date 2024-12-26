const User = require('../models/User');
const bcrypt = require('bcrypt'); // For password hashing

const registerUser = async (userData) => {
    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;

    const newUser = await User.create(userData);
    return newUser;
};

// Implement other service methods (login, getProfile, etc.)

module.exports = { registerUser, /* ... other methods */ };
