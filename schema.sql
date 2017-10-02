DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

CREATE table burgers (
    id int(4) AUTO_INCREMENT NOT NULL,
    burger VARCHAR(255) NOT NULL,
    taste VARCHAR(255) NOT NULL,
    is_devoured BOOLEAN default 0,
    TIMESTAMP timestamp,
    PRIMARY KEY (id)
);

