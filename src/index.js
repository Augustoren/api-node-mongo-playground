const express = require("express");
const app = express();
const watcher = require("./middlewares/watcher");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());
app.use(watcher);
app.use(userRoutes);
app.use(bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
