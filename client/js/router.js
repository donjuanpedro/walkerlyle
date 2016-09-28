const Backbone = require('backbone');
const UserModel = require('./models/UserModel');
const UserView = require('./views/UserView');
const NavBarView = require('./views/NavBarView');


let currentView;

const Router = Backbone.Router.extend({
  routes: {
    "": "tweets",
    "user/:id": "user",
  },

  initialize() {
    $('#nav').html(
      new NavBarView().render().el
    );
  },

  tweets() {
    const TweetsCollection = require('./collections/TweetsCollection');
    const TweetListView = require('./views/TweetListView');
    const collection = new TweetsCollection();
    const view = TweetListView({ collection });
    collection.fetch();

    setView(view);
  },

  user(id) {
    const model = new UserModel({ _id: id });
    const collection = new TweetsCollection();
    const view = new UserView({ model, collection });
    collection.url = `/users/${id}/tweets`;
    collection.fetch();
    model.fetch();

    setView(view);
  }

});

function setView(view) {
  if (currentView) {
    currentView.remove();
  }
  currentView = view;

  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.appendChild(view.render().el);
}

module.exports = Router;
