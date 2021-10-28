const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema;
const movies = new Schema( {

    name: String,
    description: String,
    image: String,
    date: Date,

} );

module.exports = mongoose.model( 'movies', movies )