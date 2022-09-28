const express = require( 'express' )
const router = express.Router()

const login = require( '../app/controllers/LoginController' )

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get( '/login', login.show )
router.post('/login',urlencodedParser, login.index)


module.exports = router;