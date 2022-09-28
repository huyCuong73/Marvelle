const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    username: String,
    password: String

}, {
    collection: "users"
});


module.exports = mongoose.model('users', users)