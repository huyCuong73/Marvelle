const newsRouter = require( './news' )
const siteRouter = require( './site' )
const moviesRouter = require( './movies' )
const videoRouter = require( './video' )


function route( app ) {
    app.use( '/video', videoRouter )
    app.use( '/news', newsRouter );
    app.use( '/movies', moviesRouter );
    app.use( '/', siteRouter );


}

module.exports = route