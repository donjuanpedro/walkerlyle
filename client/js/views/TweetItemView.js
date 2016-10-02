const _ = require('lodash');
const Backbone = require('backbone');

const TweetItemView = Backbone.View.extend({
  el: `<li></li>`,

  initialize() {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: _.template(`
    <a href ="#user/<%= tweet.get('user').get('_id') %>">
      <%= tweet.get('user').escape('username') %>
    </a>
    <div><%= tweet.escape('body') %></div>
    `),

  render() {
    this.$el.html(this.template({ tweet: this.model }));
    return this;
  }
});

module.exports = TweetItemView;
