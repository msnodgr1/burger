var orm = require('../config/orm.js');

var burger = {
	all: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	create: function(cols, vals, cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},

	update: function(obColVal, condition, cb){
		orm.updateOne("burgers", obColVal, condition, function(res){
			cb(res);
		});
	}
};


module.exports = burger;