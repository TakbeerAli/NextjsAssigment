const mysql = require("mysql");

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "newuserr",
  password: "12345",
  database: "businessschema",
});

module.exports = db;
