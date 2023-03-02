-- Create table employees script
-- email must be unique
-- role: true:manager, false:employee

CREATE TABLE IF NOT EXISTS employees (
    id          serial         PRIMARY KEY,
    first_name  varchar(45)            NOT NULL,
    last_name   varchar(50),
    email       varchar(100)   UNIQUE  NOT NULL,
    password    varchar(50)            NOT NULL,
    manager_id  integer        DEFAULT NULL     REFERENCES employees(id)    CHECK (manager_id != id),
    role        boolean        DEFAULT FALSE
);