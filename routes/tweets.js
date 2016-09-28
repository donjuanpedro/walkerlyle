const express = require('express');
const mongoose = require('mongoose');
const tweetRouter = express.Router();
const TweetsController = require('../controllers/TweetsController');

/* GET users listing. */
tweetRouter.get('/', TweetsController.list);

tweetRouter.get('/:id', TweetsController.show);

tweetRouter.post('/', TweetsController.create);

tweetRouter.put('/:id', TweetsController.update);

tweetRouter.delete('/:id', TweetsController.remove);

module.exports = tweetRouter;
