const Backbone = require('backbone');
const TweetModel = require('./TweetModel');

const UserModel = Backbone.Model.extend({
  urlRoot: '/users'
  parse(model) {
    if (model.tweet) {
      model.tweet = new TweetModel(model.user);
    }

    return model;
  }
});

module.exports = UserModel;
