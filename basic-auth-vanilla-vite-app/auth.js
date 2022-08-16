const auth = require('basic-auth');
require('dotenv').config();

const admins = {
  [process.env.COOL_USERNAME]: {password: process.env.COOL_PASSWORD},
};

module.exports = (req, res, next) => {
  const user = auth(req);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    res.set('WWW-Authenticate', 'Basic realm="Enter username and password"');
    return res.status(401).send();
  }
  return next();
};
