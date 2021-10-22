require("dotenv").config();

const env = process.env;

const config = {
   db: {
      host: env.DB_HOST || "localhost",
      user: env.DB_USER || "root",
      password: env.DB_PASSWORD || "root",
      database: env.DB_NAME || "test",
   },
};

module.exports = config;
