const env = require("./env");

module.exports = {
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: env.DB_PORT,
  seederStorage: "sequelize",
  dialect: "postgres"
};
