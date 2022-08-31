CREATE DATABASE full_to_do_app

CREATE TABLE to_dos(
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    status BOOLEAN NOT NULL
);