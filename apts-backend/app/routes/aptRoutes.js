/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const AptController = require('../controller/aptController');
const aptController = new AptController();

/**
 * Apt Entity routes
 */
router.get('/count', function (req, res) {
    aptController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    aptController.exists(req, res);
});

router.get('/:id', function (req, res) {
    aptController.findById(req, res);
});

router.get('/', function (req, res) {
    aptController.findAll(res);
});

router.put('/:id', function (req, res) {
    aptController.update(req, res);
});

router.post('/create', function (req, res) {
    aptController.create(req, res);
});

router.delete('/:id', function (req, res) {
    aptController.deleteById(req, res);
});

module.exports = router;
