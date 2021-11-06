const path = require( 'path' );
const express = require( 'express' );
const morgan = require( 'morgan' )
const handlebars = require( 'express-handlebars' )
const app = express();
const http = require( 'http' );
const port = 3000;
const route = require( './routes' )
const fs = require( "fs" );
const ffmpeg = require( 'fluent-ffmpeg' );


const db = require( './config/db' )
db.connect()
app.use( morgan( 'combined' ) );
app.engine( 'hbs', handlebars( {
    extname: '.hbs'
} ) );
app.set( 'view engine', 'hbs' )
app.set( 'views', path.join( __dirname, "resource", "views" ) )

app.use( express.static( path.join( __dirname, 'public' ) ) );
route( app );
console.log( __dirname )


// 
// var streaming = function ( req, res, newpath ) {
//     var videoPath = './public/video/' + newpath + '.mp4';
//
//
//     console.log( req.headers );
//
//     // Ensure there is a range given for the video
//     const range = req.headers.range;
//     if ( !range ) {
//         res.status( 400 ).send( "Requires Range header" );
//     }
//
//     // get video stats (about 11MB)
//
//     const videoSize = fs.statSync( videoPath ).size;
//     console.log( videoSize )
//
//     // Parse Range
//     // Example: 'bytes=6750208-'
//     const CHUNK_SIZE = 5 * 10 ** 5; // ~500 KB => 500000 Bytes
//     const start = Number( range.replace( /\D/g, "" ) ); // 'bytes=6750208-' => 6750208
//     const end = Math.min( start + CHUNK_SIZE, videoSize - 1 );
//     console.log( start, end );
//
//     // Create headers
//     const contentLength = end - start + 1;
//     const headers = {
//         "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": contentLength,
//         "Content-Type": "video/mp4",
//     };
//
//     // HTTP Status 206 for Partial Content
//     res.writeHead( 206, headers );
//
//     // create video read stream for this particular chunk
//     const videoStream = fs.createReadStream( videoPath, {
//         start,
//         end
//     } );
//
//     // Stream the video chunk to the client
//     videoStream.pipe( res );
// };
//
//
//
// app.get( '/video', function ( req, res ) {
//     streaming( req, res, "a" );
// } )
//


app.listen( port, () => console.log( `Example app listening at http://localhost:${port}` ) )