const Backbone = require('backbone');
const TweetModel = require('./TweetModel');

const UserModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/users',
  defaults: {
    tweets: new Backbone.Collection()
  }
});

module.exports = UserModel;
