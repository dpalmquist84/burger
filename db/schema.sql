DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255),
	is_devoured boolean  default 0,
    taste varchar(255),
    TimeStamp TIMESTAMP,
	PRIMARY KEY (id)
);