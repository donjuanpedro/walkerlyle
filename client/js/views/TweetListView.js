const Backbone = require('backbone');
const _ = require('lodash');
const TweetItemView = require('./TweetItemView');

const TweetListView = Backbone.View.extend({
  el: `<ul></ul>`,

  template: _.template(`
    <form class="form-inline" action="/tweets" method="POST">
        <div class="container-fluid">
          <div class="row">
           <div class="col-xs-12">
            <div class="col-lg-12 form-group text-lef">
              <input type="text" class="form-control" name="tweet" placeholder="New Tweet"/>
            </div>
            <div class="col-lg-12 form-group text-left">
              <input type="file" name="profilePic" accept="image/*" />
              <button type="submit" class="btn btn-default">Submit</button>
            </div>
           </div>
          </div>
        </div>
      </form>
      <ul></ul>
    </div>
    `),

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
