var con = require('../config/connection.js');

function questionMarks(number){
	var array = [];

	for (var i = 0; i < number; i++){
		array.push("?");
	}

	return array.toString();
}


function sqlSyn(object){
	var array = [];

	for (var key in object){
		var value = object[key];

		//if (Object.hasOwnProperty.call(object, key)){
		//	value = "'" + value + "'";
		//}

		array.push(key + "=" + value);
	}

	return array.toString();
}


var orm = {

	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		con.query(queryString, function(err, result){
			if(err){
				throw err;
			}

			cb(result);
		});
	},

	insertOne: function(table, col, vals, cb){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += questionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		con.query(queryString, vals, function(){
			if(err){
				throw err
			}

			cb(result);
		});
	},

	updateOne: function(table, obColVal, condition, cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += sqlSyn(obColVal);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		con.query(queryString, function(err, result){
			if(err){
				throw err;
			}

			cb(result);
		});
	}


};

module.exports = orm;