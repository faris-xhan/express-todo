const config = require("../config");
const helper = require("../helper");
const mysql = require("mysql2/promise");

const query = async (sql, params) => {
   const connection = await mysql.createConnection(config.db);
   const [result] = await connection.execute(sql, params);

   return helper.emptyOrRows(result);
};

module.exports = {
   query,
};
