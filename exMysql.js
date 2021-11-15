var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',    // 호스트 주소
    user: 'root',           // mysql user
    password: '111111',       // mysql password
    database: 'opentutorials'         // mysql 데이터베이스
});
connection.connect();

connection.query('SELECT * FROM topic;',
    function (error, results, fields) {
        if (error) throw error;
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].id + " " + results[i].title);
        }
    });

connection.end();