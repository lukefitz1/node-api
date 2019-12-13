require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("../src/api/middleware/bodyParser");
const router = require("./api/routes/router");

app.use(bodyParser);
app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;
