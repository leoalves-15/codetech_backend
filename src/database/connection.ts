const Sequelize = require('sequelize');

const sequelize = new Sequelize('code_tech', 'root', '', {
    host: "localhost",
    dialect: 'mariadb'
});

module.exports = {
    Sequelize,
    sequelize
}