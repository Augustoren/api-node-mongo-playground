const connection = require("../connection");

const bookSchema = new connection.Schema({
  title: String,
  author: String,
  isFree: Boolean,
  price: {
    type: Number,
    min: 0.1,
    required: function () {
      return !this.isFree;
    },
  },
});

const Book = connection.model("Book", bookSchema);

module.exports = Book;
