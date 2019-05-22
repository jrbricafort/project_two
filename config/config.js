require("dotenv").config();

var config = {
  "development": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
console.log(process.env.PASSWORD);

module.exports = config;