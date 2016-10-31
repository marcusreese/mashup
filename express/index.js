
var http = require('http');
var port;
var express = require('express');
//var helmet = require('helmet');

var app = express();
//app.use(helmet());
app.listen(port='8181', function () {
    console.log("Server listening on: http://localhost:%s", port);
});


app.route('/') //cogz.x.expressServer.route not a function?
  .get(function(req, res) {
    console.log('caught by /:', req.url)
    res.send('Get a blank');
  })
  .post(function(req, res) {
    res.send('Add a blank');
  })
  .put(function(req, res) {
    res.send('Update the blank');
  });


// how to handle the route:

// app.use('/static', express.static(__dirname + '/public'));
// is probably a given, but besides that . . .

// Approaches for routes:

// 1) simple:

// app.get('/users', function (req, res, next) {
//   pg.connect(conString, function (err, client, done) {
//     if (err) {
//       // pass the error to the express error handler
//       return next(err)
//     }
//     client.query('SELECT name, age FROM users;', [], function (err, result) {
//       done()
//
//       if (err) {
//         // pass the error to the express error handler
//         return next(err)
//       }
//
//       res.json(result.rows)
//     })
//   })
// })

// 2) simplified interface to simple: maybe

// app.get('/', (request, response) => {
//   response.render('home', {
//     name: 'John'
//   })
// })

// 3) middleware: probably

// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...');
//   next(); // pass control to the next handler
// });

// 4) array of functions: yes

// An array of callback functions can handle a route. For example:
//
// var cb0 = function (req, res, next) {
//   console.log('CB0');
//   next();
// }
//
// var cb1 = function (req, res, next) {
//   console.log('CB1');
//   next();
// }
//
// var cb2 = function (req, res) {
//   res.send('Hello from C!');
// }
//
// app.get('/example/c', [cb0, cb1, cb2]);

// 5) various verbs on same route pattern: yes

// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });

// what is this--handlebars?
// Method	Description
// res.download()	Prompt a file to be downloaded.
// res.end()	End the response process.
// res.json()	Send a JSON response.
// res.jsonp()	Send a JSON response with JSONP support.
// res.redirect()	Redirect a request.
// res.render()	Render a view template.
// res.send()	Send a response of various types.
// res.sendFile()	Send a file as an octet stream.
// res.sendStatus()	Set the response status code and send its string representation as the response body.




// ├── app.js
// ├── bin
// │   └── www
// ├── package.json
// ├── public
// │   ├── images
// │   ├── javascripts
// │   └── stylesheets
// │       └── style.css
// ├── routes
// │   ├── index.js
// │   └── users.js
// └── views
//     ├── error.jade
//     ├── index.jade
//     └── layout.jade
