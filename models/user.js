module.exports = (sequelize, DataTypes) =>
	sequelize.define(
		'user',
		{
			email: {
				type: DataTypes.STRING(40),
				allowNull: false,
				unique: true,
			},
			nick: {
				type: DataTypes.STRING(15),
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(100),
				allowNull: true,
			},
			// local: local login, kakao: kakao login
			// SNS 로그인 시 provider, snsId를 저장한다
			provider: {
				type: DataTypes.STRING(10),
				allowNull: false,
				defaultValue: 'local',
			},
			snsId: {
				type: DataTypes.STRING(30),
				allowNull: true,
			},
		},
		{
			timestamps: true,
			paranoid: true,
		}
	);
