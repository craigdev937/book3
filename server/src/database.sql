CREATE DATABASE book3;

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    age SMALLINT,
    info TEXT
);


