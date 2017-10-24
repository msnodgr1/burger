var mysql = require('mysql');

var con = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "guest",
	password: "test",
	database: "burgers_db"
});

con.connect(function(err){
	if(err){
		console.error("error, cannot connect: " + err.stack);
	}

	console.log("connected as id " + con.threadId);
});


module.exports = con;