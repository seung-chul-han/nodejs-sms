// tag로 검색을 하기 위해 따로 모델을 만듦
module.exports = (sequelize, DataTypes) =>
	sequelize.define(
		'hashtag',
		{
			title: {
				type: DataTypes.STRING(15),
				allowNull: false,
				unique: true,
			},
		},
		{
			timestamp: true,
			paranoid: true,
		}
	);
