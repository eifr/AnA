/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/apt', require('./api/aptRoutes'));
router.use('/user', require('./api/userRoutes'));


module.exports = router;
