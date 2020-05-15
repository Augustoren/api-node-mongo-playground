const connection = require("../connection");

const requestSchema = new connection.Schema({
  ip: String,
  method: String,
  path: String,
});

const Request = connection.model("Request", requestSchema);

module.exports = Request;
