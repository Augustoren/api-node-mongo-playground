const Request = require("../database/schemas/requestSchema");

async function watcher(req, res, next) {
  const { ip, method, path } = req;
  const content = JSON.stringify(req.body);
  console.log(content);
  const request = new Request({
    ip,
    method,
    path,
    content,
  });

  const result = await request.save();
  next();
}

module.exports = watcher;
