CREATE DATABASE book3;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE books(
    id uuid DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    author VARCHAR(255),
    age SMALLINT,
    info TEXT
);


