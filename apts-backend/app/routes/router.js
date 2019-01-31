/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();
const {OAuth2Client} = require('google-auth-library');


/* API routes */
router.use('/apt', require('./api/aptRoutes'));
router.use('/login',  require('./api/userRoutes'));


ng


module.exports = router;
