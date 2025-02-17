--  create 
--  \! clear
--  \l  hamma malumotlar bazasini ko'rish


-- CREATE Table "user" (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50),
--   age INTEGER,
--   email VARCHAR(50) UNIQUE
-- );

INSERT INTO "user" (name, age, email) VALUES('Usmon', 19, 'Usmon@gmail.com') RETURning*;


SELECT * FROM "user";



CREATE Table departments(
  id Serial PRIMARY key,
  name varchar(255) not null
)



CREATE Table employees (
    id Serial PRIMARY key,
    name varchar(255) not null,
    department_id INT not null,
    constraint fk_department 
        FOREIGN key (department_id)
        REFERENCES departments (id)
        on delete set NULL
        on update CASCADE 
)