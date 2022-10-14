const movie = require( '../models/phase2' );
const {
    mongooseToObject
} = require( '../../util/mongoose' )
class Phase1Controller {

    show( req, res, next ) {
        movie.findOne( {
                title: req.params.title
            } )
            .then( movies => {
                movies = mongooseToObject( movies )

                res.render( "search", {
                    movies
                } )

            } )
            .catch( next )
    }
}


module.exports = new Phase1Controller();