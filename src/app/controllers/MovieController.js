const movie = require( '../models/movies' );

class MovieController {

    show( req, res, next ) {
        movie.findOne( {
                slug: req.params.slug
            } )
            .then( movies => {
                movies = movies.map( movies => movies.toObject() )
                res.json( movies )
            } )
            .catch( next )
    }
}


module.exports = new MovieController();