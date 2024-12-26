const router = require('express').Router();
const userController = require('../../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.getProfile); // Assuming authentication middleware is used
// ... other user-related routes

module.exports = router;
