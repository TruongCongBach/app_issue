const bcryt = require('bcrypt');

module.exports = function (password) {
   let salt = bcryt.genSaltSync(10);
   let passwordHash = bcryt.hashSync(password, salt);
   return passwordHash;
};