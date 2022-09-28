const movies = require( '../models/phase1' );
const {
    mongooseToObject
} = require( '../../util/mongoose' )
const Handlebars = require('handlebars');
// Handlebars.registerHelper('ifeq', function (a, b, options) {
//     if (a == b) { return options.fn(this); }
//     return options.inverse(this);
// });
// const helpers = require('handlebars-helpers')();

class Phase1Controller {

    show( req, res, next ) {

        movies.findOne( {
                title: req.params.title
            } )
            .then( movies => {
                movies = mongooseToObject( movies )
                
                Handlebars.registerHelper('sub', () => movies.title);

                res.render( "movies/show", {
                    movies
                } )

            } )
            .catch( next => {

            })
    }

    add(req, res, next){
        res.render('newmovie')
    }

    create(req, res, next){
        console.log(req.body)
        const small = new movies(req.body)
        small.save()
            .then(() => res.redirect("/newmovie"))

    }
}


module.exports = new Phase1Controller();