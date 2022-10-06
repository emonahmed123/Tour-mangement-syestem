const express = require('express')
const app = express()

const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose')
const tourRoutes = require('./routes/tourroutes')
const port = process.env.PORT||5000

//middlewares

app.use(express.json())
app.use(cors())



app.use('/api/v1/tours', tourRoutes)


// database connection

mongoose.connect(`mongodb+srv://${process.env.DB_EMON_AHMED}:${process.env.DB_PASS}@cluster0.1uacied.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log(`database coonction is successfull`)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})