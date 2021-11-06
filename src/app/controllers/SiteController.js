const film = require( '../models/movies' );

class SiteController {
    index( req, res, next ) {
        film.find( {} )
            .then( movies => {
                movies = movies.map( movies => movies.toObject() )
                res.render( "home", {
                    movies
                } )
            } )
            .catch( next )
    }



    search( req, res ) {
        res.send( 'search' )
    }
}

//llllllll
module.exports = new SiteController();