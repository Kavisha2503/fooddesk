const login = require('./routes/login');
const changepwd = require('./routes/changepwd');
const signup = require('./routes/signup');
const sendotp = require('./routes/sendotp');

module.exports = {
    login,
    changepwd,
    signup,
    sendotp
};