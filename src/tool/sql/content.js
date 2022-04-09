const mysql = require('mysql');
//建立与数据库之间的联系
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin10086',
    database: 'user_info' //指定数据库
})
module.exports = db;