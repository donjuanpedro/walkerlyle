const express = require('express');
const router = express.Router();
const middleware = require('./middleware');
const UsersController = require('../controllers/UsersController');

router.get('/', middleware.auth, function(req, res, next) {
  userModel.findOne({ _id: req.user.id }, function(err, user) {
    return res.json(user);
  })
});
/* GET users listing. */
router.get('/', UsersController.list);

// router.get('/:id', UsersController.show);

router.post('/', UsersController.create);

// router.put('/:id', UsersController.update);
//
// router.delete('/:id', UsersController.remove);

module.exports = router;
