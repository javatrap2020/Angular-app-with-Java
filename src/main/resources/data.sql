DROP TABLE IF EXISTS  users;

CREATE TABLE users (
    id INT PRIMARY KEY ,
    FIRST_NAME VARCHAR (250) NOT NULL,
    LAST_NAME VARCHAR (250) NOT NULL,
    EMAIL VARCHAR (250) NOT NULL,
);

INSERT INTO users (ID, FIRST_NAME, LAST_NAME, EMAIL) VALUES
    (1, 'Java1', 'Trap1', 'java1@gmail.com'),
    (2, 'Java2', 'Trap2', 'java2@gmail.com'),
    (3, 'Java3', 'Trap3', 'java3@gmail.com');