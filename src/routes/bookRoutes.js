const express = require('express');
const route = express.Router();
const BookController = require('../controllers/BookControler');

route.get('/', BookController.index);
route.post('/', BookController.create);
route.put('/:id', BookController.update);
route.delete('/:id', BookController.delete);

module.exports = route;
