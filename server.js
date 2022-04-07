const express = require('express')
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001
const app = express()


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'da3m0nNugg3t$',
      database: 'employeetracker'
    },
    console.log('Connected to the employeetracker database.')
  )


db.query(`SELECT * FROM employee`, (err, rows) => {
  console.log(rows);
})


  app.use((req, res) => {
    res.status(404).end()
  })
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

