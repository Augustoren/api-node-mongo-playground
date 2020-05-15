const connection = require("../connection");

const userSchema = new connection.Schema({
  name: String,
  email: String,
  isActive: Boolean,
});

const User = connection.model("User", userSchema);

module.exports = User;
