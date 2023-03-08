const express = require("express");
const dotenv = require("dotenv").config();
const PORT = 3333;
const bd = require("./config/bd");
const bodyParser = require("body-parser");
const { Router } = require("express");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}...`));

module.exports = {
  app,
  bd,
  Router,
  PORT,
  dotenv,
  express,
  cors,
};

require("./routes/score")(bd, app, cors);
