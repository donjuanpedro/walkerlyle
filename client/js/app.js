const $ = require('jquery');
const Backbone = require('backbone');
const Router = require('./router');

window.$ = window.jQuery = $;

const router = new Router();
Backbone.history.start();
