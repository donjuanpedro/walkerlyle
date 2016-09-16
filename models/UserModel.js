const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  tweets: Array
});

module.exports = mongoose.model('User', userSchema);
