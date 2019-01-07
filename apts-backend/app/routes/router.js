/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/apt', require('./aptRoutes'));


module.exports = router;
