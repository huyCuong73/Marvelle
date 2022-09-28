const Account = require('../models/account');
const jwt = require('jsonwebtoken')
const {
    mongooseToObject
} = require('../../util/mongoose')
class AccountController {

    show(req, res, next) {
        res.render('login')
    }

    index(req, res, next) {
        var username = req.body.username
        var password = req.body.password
        Account.findOne({
                username: username,
                password: password
            })
            .then(data => {
                if (data) {
                    var token = jwt.sign({
                        _id: data._id
                    }, 'pw')
                    return res.json({
                        message: 'sucess',
                        token: token
                    })
                } else {
                    return res.json('fail')
                }
            })
            .catch(err => {
                res.status(500)
            })

    }
}


module.exports = new AccountController();