const express = require( 'express' )
const router = express.Router()

const phase1 = require( '../app/controllers/Phase1Controller' )


router.get('/create', phase1.add)
router.post('/create', phase1.create)
router.get( '/:title', phase1.show )


console.log(router);
module.exports = router;