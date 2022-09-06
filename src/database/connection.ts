const Sequelize = require('sequelize');

const sequelize = new Sequelize('m7info11_code_tech', 'm7info11_root', 'dk?TQKg!eE7%', {
    host: "ns461.hostgator.com.br",
    dialect: 'mysql'
});


module.exports = {
    Sequelize,
    sequelize
}