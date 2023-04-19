const { Pool } = require("pg");
require("dotenv").config();

const conn = new Pool({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "postgres",
  password: process.env.PASSWORD || "postgres",
  database: process.env.DATABASE || "stun_run",
  port: process.env.PORT || "5432",
});

module.exports = { conn };
