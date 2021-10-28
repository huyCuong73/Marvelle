const newsRouter = require( './news' )
const siteRouter = require( './site' )
const moviesRouter = require( './movies' )


function route( app ) {
    app.use( '/news', newsRouter );
    app.use( '/movies', moviesRouter );
    app.use( '/', siteRouter );
}

module.exports = route