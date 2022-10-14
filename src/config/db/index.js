const mongoose = require( 'mongoose' )

async function connect() {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/pd' );
        console.log( 'a' );
    } catch ( e ) {
        console.log( 'b' );
    }

}

module.exports = {
    connect
};