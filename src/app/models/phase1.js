const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const phase = new Schema({
    duaration: String,
    image: String,
    name: String,
    title: String,
    film: String

});

module.exports = mongoose.model('phase1', phase)