const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    default: null
  },
  twitterId: {
    type: String,
    default: null,
  },
  githubId: {
    type: String,
    default: null,
  },
  facebookId: {
    type: String,
    default: null,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,

  },
  lastName: {
    type: String,

  },
  image: {
    type: String,
  },
  emailId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
