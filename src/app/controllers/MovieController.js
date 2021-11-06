const movie = require( '../models/movies' );
const {
    mongooseToObject
} = require( '../../util/mongoose' )
class MovieController {

    show( req, res, next ) {
        movie.findOne( {
                slug: req.params.slug
            } )
            .then( movies => {
                res.render( 'movies/show', {
                    movies: mongooseToObject( movies )
                } )
            } )
            .catch( next )
    }
}


module.exports = new MovieController();