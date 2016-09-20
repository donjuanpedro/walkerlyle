const _ = require('lodash');
const Backbone = require('backbone');

const TweetItemView = Backbone.View.extend({
  el: `<li></li>`,

  template: _.template(`
    <div><%= tweet.get('user').escape('username') %></div>
    <div><%= tweet.escape('body') %></div>
    `),
  render() {
    this.$el.html(this.template({ tweet: this.model }));
    return this;
  }
});

module.exports = TweetItemView;
