CREATE TABLE users(
    id VARCHAR(80) PRIMARY KEY UNIQUE,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(80) UNIQUE
);