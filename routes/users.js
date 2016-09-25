const express = require('express');
const userRouter = express.Router();
const middleware = require('./middleware');
const UsersController = require('../controllers/UsersController');

userRouter.get('/', middleware.auth, function(req, res, next) {
  userModel.findOne({ _id: req.user.id }, function(err, user) {
    return res.json(user);
  })
});
/* GET users listing. */
userRouter.get('/', UsersController.list);

userRouter.get('/:id', UsersController.show);

userRouter.get('/:id/edit', UsersController.edit);

userRouter.post('/', UsersController.create);

userRouter.put('/:id', UsersController.update);

userRouter.delete('/:id', UsersController.remove);

module.exports = userRouter;
