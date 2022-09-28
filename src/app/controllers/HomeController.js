const film1 = require('../models/phase1');
const film2 = require('../models/phase2');
const film3 = require('../models/phase3');
const film4 = require('../models/phase4');

class HomeController {

    index(req, res, next) {
        film1.find({}, function(err, movies1) {
            film2.find({}, function(err, movies2) {
                film3.find({}, function(err, movies3) {
                    film4.find({}, function(err, movies4) {
                        movies1 = movies1.map(movies1 => movies1.toObject())
                        movies2 = movies2.map(movies2 => movies2.toObject())
                        movies3 = movies3.map(movies3 => movies3.toObject())
                        movies4 = movies4.map(movies4 => movies4.toObject())
                        res.render('home', {
                            movies1,
                            movies2,
                            movies3,
                            movies4
                        })
                    })
                })
            })
        })
    }

}
//llllllll
module.exports = new HomeController();