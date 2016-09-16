const TweetModel = require('../models/TweetModel.js');

module.exports = {
  list (req,res,next) {
    TweetModel.find().exec()
    .then(users => {
      res.json(200, tweets);
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

  edit: function(req,res) {
    TweetModel.findOne({ _id: req.params.id }).exec()
      .then(user => {
        return res.json(user);
      })
      .catch(err => {
        return next (err);
      });
  },

  create: function(req,res) {
    const tweet = new TweetModel({
      body: req.body.body,
      user: req.body.user
    });
    tweet.save((err, tweet) => {
      res.json(tweet);
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    TweetModel.findOne({_id: id}, function(err, tweet) {
      tweet.body = req.body.body;
      tweet.user = req.body.user;
      tweet.save(function(err,user) {
        res.json(tweet);
      });
    });
  },

  remove: function(req, res) {
    var id= req.params.id;
    TweetModel.findByIdAndRemove({_id: id}, function(err, tweet) {
      return res.json(tweet);
    });
  },

};
