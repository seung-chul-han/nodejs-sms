const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/profile', isLoggedIn, (req, res) => {
	res.render('profile', { title: '내 정보 - NodeBird', user: req.user });
});

router.get('/join', isNotLoggedIn, (req, res) => {
	res.render('join', {
		title: '회원 가입 - NodeBird',
		user: req.user,
		joinError: req.flash('joinError'),
	});
});

router.get('/', (req, res) => {
	res.render('main', {
		title: 'NodeBird',
		twits: [],
		user: req.user,
		loginError: req.flash('loginError'),
	});
});

module.exports = router;
