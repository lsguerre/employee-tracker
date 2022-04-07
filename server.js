const express = require('express')

const PORT = process.env.PORT || 3001
const app = express()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })


  app.use((req, res) => {
    res.status(404).end();
  });