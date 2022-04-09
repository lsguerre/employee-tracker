const inquirer = require('inquirer')
const connection = require('./db/connection')
const consoleTable = require('console.table')

const options = () => {
    inquirer.prompt([
        {
            type: 'list',
            name:'menu',
            message: 'Welcome to your employee database! What would you like to do?',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'Add department',
                'Add role',
                'Add an employee',
                'Exit'
            ]
        }
    ])
    .then(({ options }) => {
        switch (options) {
            case 'View departments':
                viewDepartments()
                break;
            case 'View roles':
                viewRoles()
                break;
            case 'View employees':
                viewEmployees()
                break;
            case 'Add department':
                newDepartment()
                break;
            case 'Add role':
                newRole()
                break;
            case 'Add an employee':
                newEmployee()
                break;
            case 'Exit':
                process.exit();
            
        }
    })

}

function viewDepartments() {
        const sql = `SELECT * FROM department`;
        connection.promise().query(sql)
            .then(rows => {
                console.table(rows[0]);
            })
            .then(options);
    }
function viewRoles() {
    const sql = `SELECT * FROM role`;
    connection.promise().query(sql)
        .then(rows => {
            console.table(rows[0]);
        })
        .then(options);
}

const viewEmployees = () => {
    const sql = `SELECT * FROM employee ORDER BY id`;
    connection.promise().query(sql)
        .then(rows => {
            console.table(rows[0]);
        })
        .then(options);
}

const newDepartment = () => {
    const sql = `INSERT INTO department (department) VALUES (?)`;
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: "What is the name of the department?"
        }
    ])
    .then(data => 
        connection.query(sql, data.newDepartment, (err, result) =>
        {
            if (err) throw err

        })
            .then(viewDepartments)
        )
}

const newRole = () => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    connection.query(`SELECT * FROM department ORDER BY id`, (err, result) => {
        if (err) throw (err);
        const departmentChoices = result.map(( { id, department_name }) => ({ name: department_name, value: id }))
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Which department does the role belong to?',
                choices: departmentChoices
            }
        ])
            .then(data =>
                connection.promise.query(sql, [data.title, data.salary, data.department_id], (err, result) => {
                if (err) throw err
            }) .then (viewRoles))
            
    })    
}


const newEmployee = () => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`;
    connection.query(`SELECT * FROM employee ORDER BY id`, (err, result) => {
        if (err) throw (err);
        const roleChoices = result.map(( { id, title }) => ({ name: title, value: id }))
        inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the first name of the employee?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the last name of the employee?'
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'Which role does the employee have?',
                choices: roleChoices
            }
        ])
            .then(data =>
                connection.promise.query(sql, [data.first_name, data.last_name, data.role_id], (err, result) => {
                if (err) throw err
            }) .then (viewRoles))
            
    })    
}


options()