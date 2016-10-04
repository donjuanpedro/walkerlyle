const TweetModel = require('../models/TweetModel.js');

module.exports = {
  list (req, res, next) {
    TweetModel.find()
    .populate('user')
    .exec()
    .then(tweets => {
      return res.json(tweets);
    })
    .catch(err => {
      return next(err);
    });
  },

  show(req, res, next) {
    TweetModel.FindById(req.params.id)
    .populate('user')
    .exec()
    .then(tweet => {
      return res.json(tweet);
    })
    .catch(err => {
      return next(err);
    });
  },

  create: function(req, res) {
    const tweet = new TweetModel({
      body: req.body.body,
      user: req.body.user
    });
    tweet.save((err, tweet) => {
      res.json(tweet);
    });
  }

  // update: function(req, res, next) {
  //   TweetModel.findById(req.params.id)
  //   .exec()
  //   .then(tweet => {
  //     tweet.body = req.body.body;
  //     return tweet.save();
  //   })
  //   .then(tweet => {
  //     TweetModel.populate(tweet, { path: 'user' });
  //     return res.json(tweet);
  //   })
  //   .catch(err => {
  //     return next(err);
  //   });
  // },
  //
  // remove: function(req, res) {
  //   var id= req.params.id;
  //   TweetModel.findByIdAndRemove({_id: id}, function(err, tweet) {
  //     return res.json(tweet);
  //   });
  // }

};
