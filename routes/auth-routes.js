// All of the authentication routes are here

// The Router method creates an instance of a router. That way we can export it to use in app.js
var router = require('express').Router();

// auth login route that shows login.ejs when you go to localhost:3000/login
router.get('/login', (req, res) => {
	res.render('login');
});

// auth log out of Google. Will be handled with Passport
router.get('/logout',(req, res) => {
	// handle with passport
	res.send('logging out');
});

// auth with google. This will be handled with Passport and show Googles authentication page, so we dont' neet to render anything here
router.get('/google', (req, res) => {
	// handle with passport
	res.send('logging in with google');
});

// exprt the router so you can import it into app.js
module.exports = router;