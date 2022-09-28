const express = require( 'express' )
const router = express.Router()

const phase2 = require( '../app/controllers/Phase2Controller' )

router.get( '/:title', phase2.show )


module.exports = router;