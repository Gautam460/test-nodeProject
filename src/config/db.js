const { drizzle } = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");
const config = require("./index");

// MySQL Connection Pool for Drizzle ORM
const connection = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
});

const sqlDb = drizzle(connection);

module.exports = { connection, sqlDb };
