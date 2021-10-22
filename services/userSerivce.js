const db = require("./db");

const getUser = async (email, password) => {
   const user = await db.query(
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      [email, password]
   );

   return user;
};

const createUser = async (fname, lname, email, password) => {
   let result = "";
   try {
      const row = await db.query(
         `INSERT INTO users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
         [fname, lname, email, password]
      );

      result = "USER_CREATED";
   } catch (error) {
      result =
         error.code === "ER_DUP_ENTRY" ? "USER_EXIST" : "SERVER_SIDE_ERROR";
   }

   return result;
};

module.exports = {
   getUser,
   createUser,
};
