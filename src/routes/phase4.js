const express = require( 'express' )
const router = express.Router()

const phase4 = require( '../app/controllers/Phase4Controller' )

router.get( '/:film', phase4.show )


module.exports = router;