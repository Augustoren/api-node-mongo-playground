const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/express-mongo")
  .then(() => console.log("Conexao feita com sucesso!"))
  .catch((err) => console.log("Falha na conexao!", err.message));

module.exports = mongoose;
