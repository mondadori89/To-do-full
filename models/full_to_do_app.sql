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


-- Create a table for storing the desired order of the to dos
CREATE TABLE to_dos_order(                
    id uuid DEFAULT uuid_generate_v4 (),
    order_seq TEXT[] NOT NULL
);

    -- Just for testing and creating the one ID that will be used:
    INSERT INTO to_dos_order (id, order_seq)
    VALUES ('8a23bf6d-4030-42fe-b54a-b59a9a32d958', '{"88136ace-95df-4d51-8e4e-e61446f2392d","0a3defb1-c066-48e7-b466-9ed2b018f960"}');

    -- To select the first item from the array:
    SELECT order_seq[1]
    FROM to_dos_order;

