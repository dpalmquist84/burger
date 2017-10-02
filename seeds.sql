USE burgers_db;

INSERT INTO burgers
 (burger, taste, is_devoured, timestamp)
 VALUES 
("Dave's Single", "tasty",0, CURTIME()),
("Dave's Double", "tasty",0,CURTIME()),
("Dave's Triple", "tasty",0, CURTIME()),
("Baconator", "tasty",0, CURTIME()),
("Son of Baconator", "tasty",0, CURTIME()),
("JR Bacon Cheeseburger", "tasty",0, CURTIME()),
("JR Bacon Cheeseburger Deluxe", "tasty",0, CURTIME()),
("Jr Cheeseburger", "tasty",0, CURTIME()),
("Double Stack", "tasty",0, CURTIME()),
("JR Hamburger", "tasty",0, CURTIME());

select * from burgers;