const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
require("dotenv").config()
const mongoose = require('mongoose')
const tourRoutes = require('./routes/tourroutes')


//middlewares

app.use(express.json())
app.use(cors())


// database connection

mongoose.connect(process.env.LOCAL_DATABASE)
.then(() => {
  console.log(`database coonction is successfull`)
})
.catch((error) => console.log(error));


app.use('/api/v1/tours', tourRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})