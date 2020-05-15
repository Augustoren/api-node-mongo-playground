const connection = require("../connection");

const requestSchema = new connection.Schema({
  ip: String,
  method: String,
  path: String,
  content: String,
});

const Request = connection.model("Request", requestSchema);

module.exports = Request;
