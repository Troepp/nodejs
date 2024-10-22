const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mariadb',
    database: 'mariadb'
});

var sql = "CREATE TABLE IF NOT EXISTS users(test int);"
connection.query(sql);

connection.quer("SHOW TABLES", function(err,rows){
    if(console.log(err)){
        console.log(err);
    }
    else{
        console.log(rows);
    }
})
connection.end();