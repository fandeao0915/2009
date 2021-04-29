var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fda'
});


connection.connect();//建立连接


let sql="select * from user limit 2";


connection.query(sql, function (error, results, fields) {
    console.log(results);
});


connection.end();