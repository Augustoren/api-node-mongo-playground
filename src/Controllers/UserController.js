const User = require("../database/schemas/userSchema");

module.exports = {
  async create(req, res) {
    const { name, email, isActive } = req.body;
    const user = new User({
      name,
      email,
      isActive,
    });
    const result = await user.save();
    return res.json(result);
  },

  async list(req, res) {
    const data = await User.find();
    res.json(data);
  },
};
