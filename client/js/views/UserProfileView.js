const _ = require('lodash');
const Backbone = require('backbone');

const UserProfileView = Backbone.View.extend({
  el: `<div class="profile"></div>`,

  template: _.template(`
    <div><%= user.get('tweet').escape('user') %></div>
    <div><%= user.escape('body') %></div>
    `),

    initialize() {
      this.listenTo(this.collection, 'update', this.render);
    },

    render() {
      this.$el.html('');
      this.collection.each(user => {
        this.el.append(new UserProfileView({model: user}).render().el);
      });

      return this;
    }

})
