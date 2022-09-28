const path = require('path');
const express = require('express');
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express();
const http = require('http');
const port = 443;
const routes = require('./routes/index.js')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const https = require('https')

// const privateKey = fs.readFileSync('C:/Certbot/live/marvelenglishlearning.com/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('C:/Certbot/live/marvelenglishlearning.com/cert.pem', 'utf8');
// const ca = fs.readFileSync('C:/Certbot/live/marvelenglishlearning.com/chain.pem', 'utf8');
// const chain = fs.readFileSync('C:/Certbot/live/marvelenglishlearning.com/fullchain.pem', 'utf8');

// const sub= fs.readFileSync('C:/Users/Administrator/Desktop/Node/E-ironman1.vtt','utf8')
// console.log(sub.cue)


// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca,
//     chain:chain
// };


var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));
const User = require('./app/models/user');


const db = require('./config/db');
const { required } = require('nodemon/lib/config');
db.connect()
app.use(morgan('common'));
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, "resource", "views"))

app.use('/', express.static(path.join(__dirname + '/public')));
routes(app);
console.log(__dirname)

// const server = https.createServer(credentials, app)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// http.createServer(function(req, res) {
//     res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
//     res.end();
// }).listen(80);