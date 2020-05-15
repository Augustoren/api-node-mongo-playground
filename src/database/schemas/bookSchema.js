const connection = require("../connection");

const bookSchema = new connection.Schema({
  title: String,
  author: String,
});

const Book = connection.model("Book", bookSchema);

module.exports = Book;
