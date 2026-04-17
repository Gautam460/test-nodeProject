const { Router } = require('express');
const userRoutes = require('./user.routes');

const router = Router();

// Mount user routes
router.use('/users', userRoutes);

// Add new fresh routes here

module.exports = router;
