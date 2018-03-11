// This renders the homepage when going to localhost:3000

var express = require('express');
// imported from auth-routes.js
var authRoutes = require('./routes/auth-routes');
var app = express();

// set up view engine
app.set('view engine', 'ejs');

// set up routes that were imported from auth-routes.js. By saying app.use, you are able to use an imported route. By using /auth, then it will only use these routes when a user goes to localhost:3000/auth/login, */logout or */google
app.use('/auth', authRoutes);

// create home routes
app.get('/', (req, res) => {
	res.render('home');
});

// listen to port number
app.listen(3000,() => {
	console.log('app now listening on port 3000')
});