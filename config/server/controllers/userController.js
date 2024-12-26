const userService = require('../../services/userService');

const register = async (req, res) => {
    try {
        const newUser = await userService.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Implement other controller methods (login, getProfile, etc.)
// using userService

module.exports = { register, /* ... other methods */ };
