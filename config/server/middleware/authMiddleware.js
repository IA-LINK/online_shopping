const jwt = require('jsonwebtoken'); // For token-based authentication

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from header

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, 'your_secret_key'); // Replace with your actual secret key
        req.user = decoded; // Attach user data to request object
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;
