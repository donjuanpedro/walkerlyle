const Backbone = require('backbone');

const NavBarView = Backbone.View.extend({
  el: `

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header" id="title">
      <a class="navbar-brand navBarLinks" href="#">Walker Lyle</a>
    </div>
    <div>
      <ul class="nav navbar-nav">
        <li><a href="#">About </a></li>
        <li>
          <a href="http://donjuanpedro.github.io/" target="_blank">Projects </a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <form class="navbar-form navbar-right" method="POST" id="logout" action="/logout">
            <button type="submit" class="btn btn-default"> Logout</button>
          </form>
        </li>
      </ul>
  </div><!-- /.container-fluid -->
</nav>
  `,

  render() {
    return this;
  }
});

module.exports = NavBarView;
