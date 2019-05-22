module.exports = function (sequelize, DataTypes) {
    var Adopt = sequelize.define("Adopt", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        activityLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        workhours: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        activityTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sociability: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        experience: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Adopt;
};