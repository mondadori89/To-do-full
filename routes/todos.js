const express = require('express');

const router = express.Router();

const { create, getAll, getToDo, remove, updateStatus, setListOrder } = require('../controllers/index');

// List of all to dos
router.get('/all', getAll);

// get a single to do
router.get('/:id', getToDo);

// post a new to do
router.post('/create', create);

// delete a to do
router.delete('/remove/:id', remove);

// change a to do status
router.put('/updateStatus/:id', updateStatus);

// set the order of how the to dos should be on first render
router.put('/setListOrder/:id', setListOrder);

module.exports = router;