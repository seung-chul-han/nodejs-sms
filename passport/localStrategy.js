const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');
const { HASH_COUNT } = require('../routes/auth');

module.exports = (passport) => {
	console.log('local strategy');
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
			},
			async (email, password, done) => {
				console.log('local strategy - async function');
				try {
					const exUser = await User.findOne({ where: { email } });
					const hash = await bcrypt.hash(password, HASH_COUNT);
					console.log('🚀 ~ hash:', hash, exUser.password);
					if (exUser) {
						const result = bcrypt.compare(password, hash, exUser.password);

						if (result) {
							done(null, exUser);
						} else {
							done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
						}
					} else {
						done(null, false, { message: '가입되지 않은 회원입니다' });
					}
				} catch (error) {
					console.error(error);
					done(error);
				}
			}
		)
	);
};
