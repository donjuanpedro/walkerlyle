const Backbone = require('backbone');

const NavBarView = Backbone.View.extend({
  el: `
    <nav>
      <h1 id="title">
        <a href="/#">Tweeter</a>
      </h1>
      <form method="POST" id="logout" action="/logout">
        <button type="submit">Logout</button>
      </form>
    </nav>
  `,

  render() {
    return this;
  }
});

module.exports = NavBarView;
