exports.isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(403).send('로그인 필요');
	}
};

exports.isNotLoggedIn = (req, res, next) => {
	console.log('middlewares isNotLoggedIn');
	if (!req.isAuthenticated()) {
		console.log('middlewares next');
		next();
	} else {
		res.redirect('/');
	}
};
