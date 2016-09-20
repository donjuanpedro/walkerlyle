const Backbone = require('backbone');

const Router = Backbone.Router.extend({
  routes: {
    '': 'tweets'
    '': 'users'
  },

  tweets() {
    const TweetsCollection = require('./collections/TweetsCollection');
    const TweetsListView = require('./views/TweetListView');
    const collection = new TweetsCollection();
    const view = TweetsListView({ collection });
    collection.fetch();

    setView(view);
  },

  users() {
    const UsersCollection = require('./collections/UsersCollection');
    const UsersListView = require('./views/UserListView');
    const collection = new UsersCollection();
    const view = UserListView({ collection });
    collection.fetch();

    setView(view);
  }
});

function setView(view) {
  const app = document.querySelector('#app');
  app.appendChild(view.render().el);
}

module.exports = Router;
