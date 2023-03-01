CREATE TABLE IF NOT EXISTS employees (
    id          serial         PRIMARY KEY,
    first_name  varchar(45)            NOT NULL,
    last_name   varchar(50),
    email       varchar(100)   UNIQUE  NOT NULL,
    password    varchar(50)            NOT NULL,
    manager_id  integer        DEFAULT NULL     REFERENCES employees(id)
);