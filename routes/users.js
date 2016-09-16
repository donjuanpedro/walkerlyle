const express = require('express');
const mongoose = require('mongoose');
const userRouter = express.Router();
const UsersController = require('../controllers/UsersController');

/* GET users listing. */
userRouter.get('/', UsersController.list);

userRouter.get('/:id', UsersController.show);

userRouter.get('/:id/edit', UsersController.edit);

userRouter.post('/', UsersController.create);

userRouter.put('/:id', UsersController.update);

userRouter.delete('/:id', UsersController.remove);

module.exports = userRouter;
