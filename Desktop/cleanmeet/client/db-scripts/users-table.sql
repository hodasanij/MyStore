-- connect to mysql
-- /usr/local/mysql/bin/mysql -uroot -p
-- pass:hoda1295

-- create our project database
CREATE DATABASE meetrics_db;

-- switch to our created database
USE meetrics_db;

-- create table for client -> USERS
CREATE TABLE USERS(
    userId INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    address VARCHAR(100) DEFAULT NULL,
    image VARCHAR(1000),
    addedOn DATETIME DEFAULT CURRENT_TIMESTAMP
);

