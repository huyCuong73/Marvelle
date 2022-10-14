
const express = require('express')
const router = express.Router()
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/courses/create',(req,res) => {
    res.json(req.body)
})
router.get('/courses',(req,res) => {
    res.render("courses")
})


module.exports = router