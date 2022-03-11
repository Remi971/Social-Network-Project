module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Comment;
}