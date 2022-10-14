const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const course = new Schema({
    image: String,
    name: String,
    title: String,
    film: String

});

module.exports = mongoose.model('courses', course)