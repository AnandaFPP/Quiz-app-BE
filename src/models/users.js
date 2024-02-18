const Pool = require("../config/db");

const createUser = (data) => {
  const { user_id, user_email, passwordHash, user_fullname } = data;
  return Pool.query(`INSERT INTO users(user_id, user_email, user_password, user_fullname) VALUES('${user_id}','${user_email}','${passwordHash}','${user_fullname}')`);
};

const findEmail = (user_email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users WHERE user_email='${user_email}'`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  createUser,
  findEmail,
};