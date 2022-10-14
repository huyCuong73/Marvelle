const express = require( 'express' );
const fs = require( "fs" );

class VideoController {
    index( req, res, next ) {

        //
        //	->	Display the index view with the video tag
        //
        res.render( 'show', {
            base_url: process.env.BASE_URL
        } );

    }

}



module.exports = new VideoController();