DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
	devoured boolean NOT NULL default 0,
    TimeStamp TIMESTAMP,
	PRIMARY KEY (id)
);