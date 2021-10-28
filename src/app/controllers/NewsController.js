const film = require( '../models/movies' );

class NewsController {
    index( req, res ) {
        res.render( 'news' )
    }
}



module.exports = new NewsController();