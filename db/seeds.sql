INSERT INTO department (department_name)
VALUES
    ('Personnel'),
    ('Sales'),
    ('Finance'),
    ('Production'),
    ('Quality');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Hiring Manager', 50000, 1),
    ('Sales Manager', 65000, 1),
    ('Sales Administrator', 65000, 1),
    ('CFO', 100000, 3),
    ('Finance Administrator', 60000, 3),
    ('Operations Manager', 90000, 4),
    ('Production Manager', 90000, 4),
    ('Production Administrator', 65000, 4),
    ('Production Assistant', 45000, 4),
    ('Quality Manager', 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Valerie', 'Garcia', 1, NULL),
    ('Nick', 'Romoland', 2, NULL),
    ('Gladys', 'Lopez', 3, 2),
    ('Laura', 'Smith', 4, NULL),
    ('Mackenzie', 'Serpentina', 5, 4),
    ('Christina', 'Campos', 6, NULL),
    ('Alex', 'Black', 7, NULL),
    ('Maeve', 'Fisher', 8, 7),
    ('Rebecca', 'Black', 9, 8),
    ('Patrick', 'Star', 10, NULL);

