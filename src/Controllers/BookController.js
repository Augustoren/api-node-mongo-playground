const Book = require("../database/schemas/bookSchema");

module.exports = {
  async list(req, res) {
    const data = await Book.find(req.query);
    return res.json(data);
  },

  async create(req, res) {
    const { title, author, isFree, price } = req.body;
    const book = new Book({
      title,
      author,
      isFree,
      price,
    });
    try {
      const result = await book.save();
      return res.json(result);
    } catch (err) {
      return res.json(err.message);
    }
  },
};
