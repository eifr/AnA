/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const UserController = require('../../controller/userController');
const userController = new UserController();

/* Load Check Auth */
const checkAuth = require('../../../midware/check-auth');


/**
 * User Entity routes
 */

 router.post('/signup',  (req, res, next) => {
    userController.create(req,res);
 });

 router.delete('/:id', checkAuth, function (req, res) {
    userController.deleteById(req, res);
});

router.post('/login', function (req, res) {
    userController.login(req, res);
});
module.exports = router;
