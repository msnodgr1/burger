CREATE DATABASE burgers_db;

USE burgers_db;
drop table burgers;
CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	currentDate TIMESTAMP,
	PRIMARY KEY(id)
);






