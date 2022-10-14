const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema;
const phase4 = new Schema( {

    image: String,
    name: String,
    movie: String,
    film: String


} );

module.exports = mongoose.model( 'phase4', phase4 )