let fs = require( 'fs' )
let path = require( 'path' );
let express = require( 'express' );

videoController = require( '../app/controllers/VideoController' )


const router = express.Router();

//
//	Stream the video
//
router.get( '/video', videoController.index )


module.exports = router;