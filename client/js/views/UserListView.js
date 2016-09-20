const Backbone = require('backbone');
const UserItemView = require('./UserItemView');

const UserListView = Backbone.View.extend({
  el: `<ul></ul>`,

  initialize() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render() {
    this.$el.html('');
    this.collection.each(user => {
      this.el.append(new UserItemView({model: user}).render().el);
    });

    return this;
  }
});

module.exports = UserListView;
