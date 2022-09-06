const express = require('express');

const router = express.Router();

const { create, getAll, remove } = require('../controllers/index');

// List of all to dos
router.get('/all', getAll);

// post a new to do
router.post('/create', create);

// delete a to do
router.delete('/:id', remove);


module.exports = router;