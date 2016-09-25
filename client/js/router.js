const Backbone = require('backbone');
const UserModel = require('./models/UserModel');
const UsersCollection = require('./collections/UsersCollection');
const UserListView = require('./views/UserListView');
const UserProfileView = require('./views/UserProfileView');

let currentView;

const Router = Backbone.Router.extend({
  routes: {
    '/': 'tweets'
    'users/:id': 'user'
    '*users': 'users',
  },

  initialize() {
    $('#nav').html(
      new NavBarView().render().el
    );
  }

  tweets() {
    const TweetsCollection = require('./collections/TweetsCollection');
    // const TweetsListView = require('./views/TweetListView');
    const collection = new TweetsCollection();
    // const view = TweetsListView({ collection });
    collection.fetch();

    setView(view);
  },

  user(id) {
    const user = new UserModel({_id: id});
    const view = new UserProfileView({model: user});
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
  app.innerHTML = '';
  app.appendChild(view.render().el);
}

module.exports = Router;
