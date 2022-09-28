const express = require( 'express' )
const router = express.Router()

const phase3 = require( '../app/controllers/Phase3Controller' )

router.get( '/:title', phase3.show )


module.exports = router;