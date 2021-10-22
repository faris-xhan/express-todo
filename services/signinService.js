const db = require("./db");

const getUser = async (email, password) => {
   const user = await db.query(
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      [email, password]
   );

   return user;
};

getUser("test@gmail.com", "12345678");
getUser("test123@gmail.com", "12345678");
