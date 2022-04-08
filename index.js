const inquirer = require('inquirer')
const db = require('./db/connection')
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
                break
            case 'View roles':
                viewRoles()
                break
            case 'View employees':
                viewEmployees()
                break
            case 'Add department':
                newDepartment()
                break
            case 'Add role':
                newRole()
                break
            case 'Add an employee':
                newEmployee()
                break
            case 'Exit':
                process.exit()
            
        }
    })
const viewDepartments = () => {
    const sql = `SELECT * FROM department ORDER BY id`;
    db.promise().query(sql)
        .then(rows => {
            console.table(rows[0]);
        })
        .then(options);
}

function viewRoles() {
    const sql = `SELECT * FROM role ORDER BY id`;
    db.promise().query(sql)
        .then(rows => {
            console.table(rows[0]);
        })
        .then(options);
}

const viewEmployees = () => {
    const sql = `SELECT * FROM employee ORDER BY id`;
    db.promise().query(sql)
        .then(rows => {
            console.table(rows[0]);
        })
        .then(options);
}

const newDepartment = () => {
    const sql = `INSERT INTO deparment (deparment) VALUES (?)`;
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: "What is the name of the department?"
        }
    ])
    .then(data => 
        db.promise().query(sql, data.newDepartment, (err, result) =>
        {
            if (err) throw err

        })
            .then(viewDepartments)
        )
}

const newRole = () => {
    const sql = `INSERT INTO role (title, salary, department_id)`

    
    
}

db.promise().query(sql)
.then(rows => {
console.table(rows[0])
})
.then(options)
}
options()