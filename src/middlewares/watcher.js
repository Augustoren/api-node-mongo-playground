const Request = require("../database/schemas/requestSchema");

async function watcher(req, res, next) {
  const { ip, method, path } = req;
  const request = new Request({
    ip,
    method,
    path,
  });

  const result = await request.save();
  next();
}

module.exports = watcher;
