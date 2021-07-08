const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "messenger", "postgres", "pw123!", {
  dialect: 'postgres',
  logging: false
});


module.exports = db;
