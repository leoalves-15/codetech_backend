const Sequelize = require("sequelize");

const bdDatas = {
  bd: process.env.BD,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
};

const sequelize = new Sequelize(bdDatas.bd, bdDatas.user, bdDatas.password, {
  host: bdDatas.host,
  dialect: "mysql",
});

module.exports = {
  Sequelize,
  sequelize,
};
