const Backbone = require('backbone');
const UserModel = require('./UserModel');

const TweetModel = Backbone.Model.extend({
  urlRoot: '/tweets',
  parse(model) {
    if (model.user) {
      model.user = new UserModel(model.user);
    }

    return model;
  }
});

module.exports = TweetModel;
