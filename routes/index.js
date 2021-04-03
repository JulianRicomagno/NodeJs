'use strict';

const express = require('express');

const itemController = require('../controller/itemController');
//const departamentoController = require('../controllers/departamentoController');

const api = express.Router();

const validarPostItem = require('../middlewares/itemPostValidation');
//const validarPutDepartamento = require('../middlewares/departamentoPutValidator');

//item
api.get('/items', itemController.getItems);
api.get('/item/:itemId', itemController.getItem);
api.post('/item', validarPostItem, itemController.saveItem);
api.put('/item/:itemId', itemController.updateItem);
api.delete('/item/:itemId', itemController.deleteItem);

module.exports = api;