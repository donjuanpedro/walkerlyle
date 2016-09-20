const Backbone = require('backbone');
const TweetItemView = require('./TweetItemView');

const TweetListView = Backbone.View.extend({
  el: `<ul></ul>`,

  initialize() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render() {
    this.$el.html('');
    this.collection.each(tweet => {
      this.el.append(new TweetItemView({model: tweet}).render().el);
    });

    return this;
  }
});

module.exports = TweetListView;
