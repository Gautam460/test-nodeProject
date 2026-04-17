const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// Maps to GET /api/users/alluser
router.get('/alluser', userController.getUsers);
//router.post('/addUser', userController.createUser);

module.exports = router;
