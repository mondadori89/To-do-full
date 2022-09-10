CREATE DATABASE full_to_do_app

-- Started the table like that
CREATE TABLE to_dos(                
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    status BOOLEAN NOT NULL
);

-- Had to change it to use uuid 
--  Ensure the UUID extension is installed.
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--  Dropping and recreating the default column value is required because
--  the default INT value is not compatible with the new column type.
ALTER TABLE to_dos 
ALTER COLUMN id DROP DEFAULT, 
ALTER COLUMN id SET DATA TYPE UUID USING (uuid_generate_v4()), 
ALTER COLUMN id SET DEFAULT uuid_generate_v4();
