const connectToMongo = require("./db");

connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
// Routes go brrrrrrr

app.use('/',require('./routes/home'))

app.use('/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})