const Backbone = require('backbone');

const UserModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/users',
  defaults: {
    tweets: new Backbone.Collection()
  },

  // parse(model) {
  //   const TweetsCollection = require('./collections/TweetsCollection');
  //   if(model.tweets) {
  //     model.tweets = new TweetsCollection(model.tweets, { parse: true });
  //   }
  //   return model;
  // }
});

module.exports = UserModel;
