const Sequelize = require('sequelize');
import {bdDatas} from "../../env";

const sequelize = new Sequelize(bdDatas.bd, bdDatas.user, bdDatas.password, {
    host: bdDatas.host,
    dialect: 'mysql'
});


module.exports = {
    Sequelize,
    sequelize
}