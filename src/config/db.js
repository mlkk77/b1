const mysql = require("mysql");

const db = mysql.createConnection({
    host: "a1.onoffmoa.com",
    user: "root",
    password: "hjyr1126)(*",
    database: "nodejs1",
});

db.connect();

module.exports = db;