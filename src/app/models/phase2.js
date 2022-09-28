const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema;
const phase2 = new Schema( {

    name: String,
    image: String,
    date: Date,
    slug: String,
    movie:String

} );

module.exports = mongoose.model( 'phase2', phase2 )