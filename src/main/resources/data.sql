DROP TABLE IF EXISTS  users;

CREATE TABLE users (
                       id INT PRIMARY KEY ,
                       first_name VARCHAR (250) NOT NULL,
                       last_name VARCHAR (250) NOT NULL,
                       email VARCHAR (250) NOT NULL
);

INSERT INTO users (id, first_name, last_name, email) VALUES
(1, 'Java1', 'Trap1', 'java1@gmail.com'),
(2, 'Java2', 'Trap2', 'java2@gmail.com'),
(3, 'Java3', 'Trap3', 'java3@gmail.com');