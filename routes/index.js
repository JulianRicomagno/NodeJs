'use strict';

const express = require('express');

const itemController = require('../controller/itemController');
const postController = require('../controller/postController');

const api = express.Router();

const validarPostItem = require('../middlewares/itemPostValidation');

//item
api.get('/items', itemController.getItems);
api.get('/item/:itemId', itemController.getItem);
api.post('/item', validarPostItem, itemController.saveItem);
api.put('/item/:itemId', itemController.updateItem);
api.delete('/item/:itemId', itemController.deleteItem);
//post
api.get('/blog/post', postController.getPosts);
api.get('/blog/post/:postId', postController.getPost);
api.post('/blog/post', postController.savePost);
api.put('/blog/post/:postId', postController.updatePost);
api.delete('/blog/post/:postId', postController.deletePost);

module.exports = api;