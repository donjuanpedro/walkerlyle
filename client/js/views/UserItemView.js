const _ = require('lodash');
const Backbone = require('backbone');

const UserItemView = Backbone.View.extend({
  el: `<li></li>`,

  template: _.template(`
    <div><%= user.get('tweet').escape('user') %></div>
    <div><%= user.escape('body') %></div>
    `),
  render() {
    this.$el.html(this.template({ user: this.model }));
    return this;
  }
});

module.exports = UserItemView;
