const homeRouter = require('./home')
const login = require('./login')
const courses = require('./courses')
const phase1 = require('./phase1')
const phase2 = require('./phase2')
const phase3 = require('./phase3')
const phase4 = require('./phase4')




function route(app) {

    app.use('/phase1', phase1);
    app.use('/phase2', phase2);
    app.use('/phase3', phase3);
    app.use('/phase4', phase4);
    app.use('/', homeRouter, login, courses);

    app.use(function(err,req,res,next){
        res.type('html')
        res.status(404)
        res.render('search')
    })
}



module.exports = route