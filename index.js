const express = require('express')
const app = express()

const cors = require('cors');
require("dotenv").config()
const mongoose = require('mongoose')
const tourRoutes = require('./routes/tourroutes')


//middlewares

app.use(express.json())
app.use(cors())
const port = process.env.PORT||5000

// database connection

mongoose.connect('mongodb://localhost:27017/tour-mangement')
.then(() => {
  console.log(`database coonction is successfull`)
})
.catch((error) => console.log(error));


app.use('/api/v1/tours', tourRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})