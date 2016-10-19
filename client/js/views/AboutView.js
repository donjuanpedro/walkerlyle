const Backbone = require('backbone');

const AboutView = Backbone.View.extend({
  el: `
  <div class="container">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-2">
        <h1>About Me</h1>
        <p> I'm a developer in Austin, TX. </p>
      </div>
    </div>
  </div>
  `,

  render() {
    return this;
  }
});

module.exports = AboutView;
