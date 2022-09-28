const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
    username: String,
    password: String

}, {
    collection: "accounts"
});


module.exports = mongoose.model('accounts', account)