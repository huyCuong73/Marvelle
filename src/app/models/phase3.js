const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema;
const phase3 = new Schema( {

    name: String,
    image: String,
    date: Date,
    slug: String

} );

module.exports = mongoose.model( 'phase3', phase3 )