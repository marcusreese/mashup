"use strict";
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
var request = require('request');
let R = require('ramda');

io.on('connection', (socket) => {
  console.log('browser connected');
  let intvl;
  socket.on('disconnect', function(){
    clearInterval(intvl);
    console.log('user disconnected');
  });

  socket.on('requestFeedVal', (message) => {
    let currentVal = message.current;
    // console.log('got msg:', message);
    intvl = setInterval(() => {
      request(message.url, function (error, response, body) {
        if (error || response.statusCode != 200) {
          console.log('Get request failed:', (response ? response.statusCode : ''), error);
        } else {
          const jsonString = body.replace(/^[\)\]}',]*/, '');
          const jsonObj = JSON.parse(jsonString);
          const newVal = R.path(message.path, jsonObj);
          if (newVal !== currentVal) {
            console.log(message.deviceName, message.propName + ':', newVal);
            io.emit('feedVal', {
              deviceName: message.deviceName,
              propName: message.propName,
              value: newVal,
              url: message.url
            });
            currentVal = newVal;
          }
        }
      });
    }, 1000);
  });

  socket.on('setFeedVal', (message) => {
    request(message.url, function (error, response, body) {
      if (error || response.statusCode != 200) {
        console.log('Set request failed:', (response ? response.statusCode : ''), error);
      } else {
        console.log("Passed on set request:", message.url.split('?')[1]);
      }
    });
  });
});

http.listen(5000, () => {
  console.log('started on port 5000');
});

// var http = require('http');
// var port;
// var express = require('express');
// //var helmet = require('helmet');
// var request = require('request');
//
// var app = express();
// //app.use(helmet());
// app.listen(port='8181', function () {
//     console.log("Server listening on: http://localhost:%s", port);
// });
//
//
// app.use('/url', function(req, res) {
//   // console.log('in use /url,', req.params, req.url, req.query, req.headers);
//   console.log('about to use:', req.url.slice(1));
//   // let rfStaus = request(req.url + '?feed.kpp/status');
//   // req.pipe(request(req.url.slice(1))).pipe(res);
//   res.send('Get a blank');
// });

// app.route('/')
//   .get(function(req, res) {
//     console.log('in route /,', req.url, req.query);
//     res.send('Get a blank');
//   })
//   .post(function(req, res) {
//     res.send('Add a blank');
//   })
//   .put(function(req, res) {
//     res.send('Update the blank');
//   });


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
